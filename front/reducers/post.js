export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "은광",
      },
      content: "첫번째 게시글 #은광 #지은 #상윤",
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

// 변수로 지정하면 오타가날경우 에러가 나므로, 오타를 줄일 수 있다.

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };

    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCOMMENTLoading: true,
        addCOMMENTDone: false,
        addCOMMENTError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCOMMENTLoading: false,
        addCOMMENTDone: true,
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCOMMENTLoading: false,
        addCOMMENTError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
