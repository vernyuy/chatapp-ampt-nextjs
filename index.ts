import "@ampt/nextjs/entrypoint";
import { ws, events, storage, SocketConnection } from "@ampt/sdk";
import { messageSentProps, messageData } from "types";
import { data } from "@ampt/data";
import KSUID from "ksuid";
import socket from "socket.io";

// const conn = data.get("connection:*");
// if (!conn) {
ws.on("connected", async (connection: SocketConnection) => {
  console.log(`new connection: ${connection.connectionId}`);
  const { connectionId, meta } = connection;
  const { connectedAt, queryStringParams } = meta;
  await data.set(`connection:${connectionId}`, {
    connectionId,
    connectedAt,
    username: queryStringParams?.name,
  });
});
// }

ws.on("disconnected", async (connection: SocketConnection) => {
  console.log(`connection closed: ${connection.connectionId}`);
  await data.remove(`connection:${connection.connectionId}`);
  // ws.on("connected", (connect) => {
  //   console.log(`new connection: ${connect.connectionId}`);
  // });
});

ws.on<messageSentProps>(
  "message",
  async (connection: SocketConnection, message) => {
    const { connectionId } = connection;
    const existingConnection = await data.get(`connection:${connectionId}`);
    if (existingConnection) {
      const key = KSUID.randomSync().string;
      await data.set(key, message, {
        meta: true,
        overwrite: true,
        exists: false,
        label1: "Message",
      });
      if (await connection.isConnected()) {
        await events
          .publish("new-message", {
            message: message,
            connectionId: connection.connectionId,
          })
          .then((data) => {
            console.log(data);
            console.log("Published");
            events.publish("new-message");
          });
        // console.log(test);
        console.log("Connected");
      } else {
        console.log(
          `Connection ${connection.connectionId} is no longer connected`
        );
      }
    }
  }
);

// events.on("new-message", async () => {
//   console.log("hello Event");
// });
events.on("new-message", { timeout: 10000 }, async ({ body }) => {
  console.log("hello Event");
  console.log("Event body", body);
  const { connectionId, message } = body;
  const sender = message.sender;
  const receiver = message.reciever;

  const messages = [];
  await data
    .getByLabel("label1", "Message", {
      meta: true,
      reverse: true,
      limit: 100,
    })
    .then((data: messageData) => {
      data.items.map((message) => {
        if (
          (message.value.sender === sender &&
            message.value.reciever === receiver) ||
          (message.value.sender === receiver &&
            message.value.reciever === sender)
        ) {
          messages.push(message);
        }
      });
      console.log(messages);

      messages.sort(function (a, b) {
        return a.created - b.created;
      });
    });

  const isConnected = await ws.isConnected(connectionId);
  if (isConnected) {
    await ws.send(connectionId, messages);
    //   await events.publish(
    //     "async-task-complete",
    //     {
    //       after: "1 seconds",
    //     },
    //     {
    //       connectionId,
    //       startTime,
    //     }
    //   );
    // } else {
    //   console.error(`Connection ${connectionId} is no longer connected`);
  }
});
