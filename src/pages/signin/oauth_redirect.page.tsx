import type { NextPage } from "next";
import { PageRoot } from "src/components/styled";
import { useRouter } from "next/router";
import { styled } from "src/utils";
import useSWR from "swr";
import { API_URL } from "src/constants/API_URL";
import fetch from "unfetch";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "src/components/atoms";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
  image: string;
  token: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("slack oauth error");
  }
  return res.json();
};

const signinRedirectPage: NextPage = () => {
  const router = useRouter();
  const setUserInfoState = useSetRecoilState(userInfoState);
  // Slack認証をしてユーザー情報を取得する
  const { data, error } = useSWR<User>(`${API_URL}/slack/token?code=${router.query.code}`, fetcher);
  if (data) {
    setUserInfoState(data);
    router.push("/broadcast");
  }
  return <PageRoot>{error ? <H1>認証エラー</H1> : data ? null : <H1>認証中</H1>}</PageRoot>;
};

// eslint-disable-next-line import/no-default-export
export default signinRedirectPage;

const H1 = styled("h1", {
  paddingTop: "5rem",
  fontSize: "2rem",
  fontWeight: "bold",
});
