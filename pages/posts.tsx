"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { PostCard, NewPost, Navbar } from "@components/index";
import { useSession } from "next-auth/react";
const posts = () => {
  const [createPost, setcreatePost] = useState(false);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [image, setimage] = useState(null);
  const { data: session } = useSession();
  const owner = session?.user?.email;
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const newPost = async ({ title, image, content, owner }) => {
    const res = await fetch("/api/posts/post", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        image: image,
        content: content,
        owner: owner,
      }),
    });
    getPosts();
  };

  const getPosts = async () => {
    const res = await fetch("/api/posts/post");
    const data = await res.json();
    setposts(data);
  };

  const uploadToServer = async (e) => {
    const body = new FormData();
    const res = await fetch("/api/file");
    const urls = await res.json();
    body.append("file", image);
    const file = image;
    const response = await fetch(urls.uploadUrl, {
      method: "PUT",
      body: file,
    });
    newPost({
      title: title,
      image: urls.downloadUrl,
      content: content,
      owner: owner,
    });
  };
  return (
    <div>
      <Navbar b_color="#43a047" c_color="#fff" />
      <div className="flex bg-black/95 h-screen mb-24 overflow-y-scroll">
        <div className="max-w-[70%] mx-auto ">
          <div className="flex flex-wrap justify-evenly">
            {posts.map((post, index) => {
              return index === 0 ? (
                <NewPost
                  key={post.key}
                  title={post.value.title}
                  content={post.value.content}
                  image={post.value.image}
                  owner={post.value.owner}
                />
              ) : (
                <PostCard
                  key={index}
                  title={post.value.title}
                  owner={post.value.owner}
                  image={post.value.image}
                  created={post.created}
                  content={post.value.content}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-24 left-36 h-[50px] w-[50px] hover:cursor-pointer  bg-green-600 rounded-full flex shadow-md shadow-black"
        onClick={() => setcreatePost(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          className="m-auto"
        >
          <path
            fill="white"
            d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95l1.42-1.43M3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53L3.5 19.78Z"
          ></path>
        </svg>
      </div>

      {/* Create Post Modal */}

      <div
        className={`${
          createPost
            ? "absolute top-0 left-0 w-full h-full bg-slate-900/70  flex"
            : "hidden"
        }`}
      >
        <div className="m-auto bg-slate-500 h-fit rounded-[15px] p-4">
          <form>
            <div className="my-2 flex flex-col">
              <label htmlFor="post-title" className="text-[14px] font-semibold">
                Title *
              </label>
              <input
                type="text"
                id="post-title"
                name="post-title"
                className="rounded-[8px] px-2 h-9"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="post-title" className="text-[14px] font-semibold">
                Add image
              </label>
              <input
                type="file"
                id="post-title"
                name="post-title"
                className="rounded-sm"
                onChange={(e) => setimage(e.target.files[0])}
              />
            </div>
            <div className="my-2 flex flex-col rounded-sm">
              <label
                htmlFor="post-title"
                className="text-[14px] font-semibold "
              >
                Body *
              </label>
              <textarea
                id="post-title"
                name="post-title"
                value={content}
                className="rounded-md"
                onChange={(e) => setcontent(e.target.value)}
                rows={6}
              ></textarea>
            </div>
            <div
              className="hover:cursor-pointer bg-white w-fit px-2 py-1 rounded-md float-right"
              onClick={(e) => {
                uploadToServer(e);
                setcontent("");
                settitle("");
              }}
            >
              Post
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default posts;
