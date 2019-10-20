import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import GithubContext from '../../context/github/githubContext';

import { Button, Input, Alert } from '../../lib';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const history = useHistory();
  const inputRef = React.createRef();

  // former componentDidMount and componentDidUpdate
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const isParsed = Object.keys(parsed).length > 0 
    if (isParsed) {
      githubContext.searchUsers(parsed.username, parsed.page)
      inputRef.current.value = parsed.username
    } else {
      githubContext.clearUsers()
    }
  }, [window.location.search])

  let typingTimeout = null;
  const handleChange = e => {
    clearTimeout(typingTimeout);
    const text = e.target.value || ''
    typingTimeout = setTimeout(() => {
      text && githubContext.clearUsers()
      text ? history.push(`/?username=${text}&page=1`) : history.push(`/`);
    }, 475)
  }

  const handleClear = e => {
    inputRef.current.value = '';
    githubContext.clearUsers()
    history.push(`/`);
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <Input
          placeholder="Type github username..."
          ref={inputRef}
          id="search"
          label="Search"
          hideLabel
          onChange={handleChange}
          loading={false}
        />
        <br />
      </form>
      {githubContext.message && <Alert
        variant="warning"
      >
        {githubContext.message}
      </Alert>}
      {githubContext.users.length > 0 && (
        <Button 
          width="full" 
          variant="caution"
          onClick={handleClear}
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
