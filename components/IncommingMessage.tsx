import React from "react";

const IncommingMessage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="profile-image"></div>
        <div style={{ margin: "auto 10px" }}>{Date.now().toPrecision()}</div>
      </div>
      <div className="message-container incoming">
        <div>
          <div>
            hello IncommingMessage This is an incomming message from .....
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncommingMessage;

// import useSWR from "swr";

// const fetcher = (key) => fetch(key).then((res) => res.json());

// export default function HostSelector() {
//   const { incomming } = useSWR("/api/incomming", fetcher);

//   return (
//     <div>
//       {incomming?.users?.map(({ key, value }) => (
//         <p key={key}>{value.name}</p>
//       ))}
//     </div>
//   );
// }
