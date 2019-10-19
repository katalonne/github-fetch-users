import React, { useContext, Fragment } from 'react';
import styled from '@emotion/styled'
import GithubContext from '../../context/github/githubContext';
import { BasicCard } from '../../lib';
import { Pagination } from './Pagination';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 1rem;
  margin: 50px 0 30px 0;
`;

const LoadingUsers = () => {
  return (
    <CardsContainer>
      <BasicCard
        imageUrl={'Image'}
        title={'loadingPlaceholder'}
        loading={true}
      />
      <BasicCard
        imageUrl={'Image'}
        title={'loadingPlaceholder'}
        loading={true}
      />
      <BasicCard
        imageUrl={'Image'}
        title={'loadingPlaceholder'}
        loading={true}
      />
    </CardsContainer>
  )
}

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users, pagination } = githubContext;

  if (loading) {
    return <LoadingUsers />
  } else {
    return (
      users.length !== 0 && <Fragment>
          <CardsContainer>
          { users.map((user, idx) => (
            <BasicCard
              key={`card-${idx}`}
              imageUrl={user.avatar_url}
              title={user.login}
              moreUrl={`/user/${user.login}`}
              loading={false}
            />
          )) }
        </CardsContainer>
        { pagination.pages > 1 &&
          <Pagination
            pagination={pagination}
          />
        }
      </Fragment>
    );
  }
};


export default Users;
