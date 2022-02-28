export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "은광",
      },
      content: "첫번쨰 게시글",
      Images: [
        {
          src: "https://i.imgur.com/KbN1f6o.png",
        },
        {
          src: "https://i.imgur.com/0hqdhpd.jpeg",
        },
        {
          src: "https://i.imgur.com/KbN1f6o.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요 ~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고싶어라",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

// 변수로 지정하면 오타가날경우 에러가 나므로, 오타를 줄일 수 있다.
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "은광",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
