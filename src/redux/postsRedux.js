import shortid from "shortid";

//selectors
export const getAllPosts = state => state.posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = payload => ({ type: DELETE_POST, payload })
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({type: EDIT_POST, payload})

//reducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, {id: shortid(), ...action.payload }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post ));
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;