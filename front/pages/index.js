import React, { useRef } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const imageInput = useRef();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <button onClick={onCickImageUpload}>이미지업로드</button>
    </AppLayout>
  );
};

export default Home;
