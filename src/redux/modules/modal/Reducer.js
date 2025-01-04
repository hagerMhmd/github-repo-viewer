import Types from "./Types";

const INIT_STATE = {
  isCommentModalOpen: false,
  selectedCommentRepoId: null,
};

export function modalReducer(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.TOGGLE_COMMENTS_MODAL: {
      return {
        ...state,
        isCommentModalOpen: !state.isCommentModalOpen,
        selectedCommentRepoId: payload,
      };
    }
    default: {
      return state;
    }
  }
}
