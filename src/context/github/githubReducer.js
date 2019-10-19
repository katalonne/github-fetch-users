import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        pagination: {
          currentPage: action.pageToGet,
          perPage: state.pagination.perPage,
          pages: action.pages,
        },
        pages: action.pages,
        loading: false,
        lastSearchText: action.text,
        message: action.message
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
