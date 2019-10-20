import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled'
import GithubContext from '../../context/github/githubContext';

const PaginationContainer = styled.div`
  text-align:center;
  margin-bottom: 30px;
  user-select: none;
  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    li {
      display: inline-block;
      margin: 0 4px;
      &.active a {
        background: var(--primary-color);
        color:#fff;
      }
      &:not(.active) a {
        cursor: pointer;
      }
      a {
        position: relative;
        padding: 6px 12px;
        border: 2px solid var(--primary-color);
        border-radius: 0.5rem;
        will-change: color, background;
        transition: 100ms linear;
        &:hover {
          background: var(--primary-color);
          color:#fff;
        }
        &:focus {
          outline: 0;
          box-shadow: none;
        }
        &:focus::after {
          content: '';
          position: absolute;
          left: -1px;
          top: -1px;
          right: -1px;
          bottom: -1px;
          background-color: transparent;
          border-radius: 2px;
          pointer-events: none;
          box-shadow: 0 0 0 0.15rem rgba(242,103,34 ,0.24);
        }
      }
    }
  }
`;

export const Pagination = ({pagination}) => {
  const { lastSearchText } = useContext(GithubContext);
  let history = useHistory();

  const handlePageClick = ({selected}) => {
    const scrollDuration = 250;
    scrollToTop(scrollDuration);
    setTimeout(() => {
      history.push(`/?username=${lastSearchText}&page=${++selected}`)
    }, scrollDuration)
  }

  return (
    <PaginationContainer>

    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pagination.pages}
      initialPage={pagination.currentPage - 1}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      disableInitialCallback={true}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      />
    </PaginationContainer>
  )
}

function scrollToTop(scrollDuration) {
  const scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
  let   scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY !== 0 ) {
            scrollCount = scrollCount + 1;  
            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
          } else clearInterval(scrollInterval); 
        }, 15 );
}