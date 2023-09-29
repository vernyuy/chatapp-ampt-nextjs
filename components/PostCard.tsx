import React, { useEffect, useState } from "react";
import Image from "next/image";

const PostCard = ({ title, image, owner, created, content }) => {
  const [ownerInfo, setownerInfo] = useState();

  useEffect(() => {
    getOwnerInfo();
  }, []);

  const getOwnerInfo = async () => {
    const res = await fetch(`/api/users/${owner}`);
    const info = await res.json();
    setownerInfo(info);
    console.log(info);
  };

  const [createPost, setcreatePost] = useState(false);
  return (
    <div>
      <style jsx>
        {`
          .truncateTitle {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        `}
      </style>
      <div
        onClick={() => setcreatePost(!createPost)}
        className="max-w-[245px] p-[10px] rounded-[22px] shadow-lg border border-green-900 bg-black text-white m-3 min-h-[150px] hover:cursor-pointer"
      >
        <div className="w-full h-full flex">
          <div className="my-auto">
            <Image
              src={image}
              alt="post"
              width={300}
              height={185}
              className=" rounded-[22px]"
            />
          </div>
        </div>
        <div className="w-full mt-[4px] mx-1 mb-1">
          <div>
            <h3 className="text-[14px] font-semibold text-white text-left truncateTitle">
              {title}
            </h3>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex">
              <div className="rounded-full h-[30px] w-[30px] bg-green-600 p-[2px] my-auto overflow-hidden">
                <Image
                  src={ownerInfo?.image}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full h-[30px] w-[30px]"
                />
              </div>
              <div className="mx-2 flex">
                <div className="my-auto">
                  <h5 className="font-semibold text-[12px]">
                    {ownerInfo?.name}
                  </h5>
                  <p className="text-[10px] text-gray-500 font-semibold">
                    {created.split("T")[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  text-right pr-3">
              <div className="my-auto">
                <p className="text-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    className=" ml-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M10.307 2.105A.5.5 0 0 0 9.5 2.5v1.993a5.372 5.372 0 0 0-1.679.344a4.693 4.693 0 0 0-2.095 1.574c-.623.826-1.081 1.972-1.224 3.544a.5.5 0 0 0 .852.399c1.188-1.19 2.369-1.776 3.242-2.067c.36-.12.668-.19.904-.23V10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0-.025-.769l-4.5-3.5Zm-.364 3.392h.003A.502.502 0 0 0 10.5 5V3.522l3.219 2.504l-3.219 2.86V7.5A.5.5 0 0 0 10 7h-.045a4.775 4.775 0 0 0-.456.043c-.3.044-.72.128-1.22.295a8.895 8.895 0 0 0-2.547 1.36c.194-.716.476-1.264.793-1.685a3.693 3.693 0 0 1 1.654-1.242A4.373 4.373 0 0 1 9.82 5.49c.045.001.079.003.1.005l.022.002ZM4.5 3A2.5 2.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14h6a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 11.5v-6A1.5 1.5 0 0 1 4.5 4h2a.5.5 0 0 0 0-1h-2Z"
                    ></path>
                  </svg>
                </p>
                <p className="text-gray-500 text-[10px] font-semibold">
                  2 mins read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setcreatePost(!createPost)}
        className={`${
          createPost
            ? "absolute top-0 left-0 w-full h-full bg-slate-900/70  flex"
            : "hidden"
        }`}
      >
        <div className="m-auto bg-slate-500 max-h-[80%] h-fit overflow-y-scroll max-w-[50%] rounded-[15px] p-4 z-40">
          <div>
            <div className="flex">
              <Image
                src={image}
                alt="post"
                width={100}
                height={185}
                className=" rounded-[15px] m-auto"
              />
            </div>
            <h3 className="font-bold mb-4">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
