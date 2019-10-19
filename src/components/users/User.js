import React, { Fragment, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Pill } from '../../lib';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const history = useHistory();
  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className="react-transition swipe-right">
      <Button style={{marginRight: '0.5rem'}} onClick={() => history.action === 'POP' ? history.push('/') : history.goBack()}>
        Back To Search
      </Button>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <Button style={{margin: '1rem 0'}} onClick={() => window.open(html_url, '_blank')}>
            Visit Github Profile
          </Button>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <Pill style={{margin: '0.3rem'}} variant="warning">Followers: {followers}</Pill>
        <Pill style={{margin: '0.3rem'}} variant="success">Following: {following}</Pill>
        <Pill style={{margin: '0.3rem'}} variant="secondary">Public Repos: {public_repos}</Pill>
        <Pill style={{margin: '0.3rem'}} variant="primary">Public Gists: {public_gists}</Pill>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
