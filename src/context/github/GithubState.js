import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    pagination: {
      currentPage: 1,
      perPage: 12,
      pages: 0
    },
    user: {},
    repos: [],
    loading: false,
    lastSearchText: '',
    message: undefined
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text, page = 1) => {
    setLoading();
    
    const { pagination: { perPage } } = state;
    const pageToGet = page

    const uri = `https://api.github.com/search/users?q=${text}&page=${pageToGet}&per_page=${perPage}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    let res;
    try { 
      res = await axios.get(uri);
    } catch ({response}) {
      res = response
    }
    const pages = res.status < 300 ? Math.ceil(res.data.total_count / perPage) : 0

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items || [],
      pages,
      text,
      pageToGet,
      message: res.data.message
    });
  };

  // Get User
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        pagination: state.pagination,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        lastSearchText: state.lastSearchText,
        message: state.message
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
