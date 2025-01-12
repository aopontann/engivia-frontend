import { atom } from "recoil";
import type { BroadcastLiveType } from "src/types";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    id: "user2",
    name: "テストユーザー2",
    isAdmin: false,
    image:
      "https://secure.gravatar.com/avatar/e57b3678017c2e646e065d9803735508.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0013-512.png",
    token: "token2",
  },
});

export const broadcastLiveState = atom<BroadcastLiveType | null>({
  key: "broadcastLiveState",
  default: null,
});
