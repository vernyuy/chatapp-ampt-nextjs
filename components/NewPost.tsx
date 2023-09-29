import Image from "next/image";
import React, { useEffect, useState } from "react";

const NewPost = ({ title, content, image, owner }) => {
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
  return (
    <div>
      <style jsx>
        {`
          .truncteDescription {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        `}
      </style>
      <div className="flex justify-between my-5 mx-10 flex-wrap">
        <div className="bg-black max-h-[200px]  h-[200px] rounded-[20px] max-w-[78%] py-[8px] px-[8px]  grid grid-cols-9 gap-3 shadow-md">
          <div className="rounded-[20px] overflow-hidden col-span-3 h-full">
            <Image
              src={image}
              width={315}
              height={300}
              alt="blog"
              className="rounded-[20px] h-full"
            />
          </div>

          <div className="col-span-6">
            <h5 className="font-semibold text-[16px] text-white">{title}</h5>
            <p className="text-[14px] pt-2 hover:text-clip truncteDescription text-gray-400">
              {content}
            </p>
            <div>
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
                      <h5 className="font-semibold text-[12px] text-gray-300">
                        {ownerInfo?.name.split(" ")[0]}{" "}
                        {ownerInfo?.name.split(" ")[2]}
                      </h5>
                      <p className="text-[10px] text-gray-500 font-semibold"></p>
                    </div>
                  </div>
                </div>

                <div className="flex  text-right pr-3">
                  <div className="my-auto ">
                    <p className="text-green-600">
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
        </div>
        <div className="bg-black h-[200px] max-w-[17%] w-[17%] rounded-[20px] shadow-md"></div>
      </div>
    </div>
  );
};

export default NewPost;
