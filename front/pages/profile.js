import AppLayout from "../components/AppLayout";
import Head from "next/head";
import UserProfile from "../components/UserProfile";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {
  const followerList = [
    {
      nickname: "은광",
    },
    {
      nickname: "지은",
    },
    {
      nickname: "상윤",
    },
  ];
  const followingList = [
    {
      nickname: "화수",
    },
    {
      nickname: "규현",
    },
    {
      nickname: "혜미",
    },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodewBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;
