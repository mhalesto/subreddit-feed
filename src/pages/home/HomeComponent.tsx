/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import logo from '../../assets/imgs/reddit-logo.png';
import HeaderComponent from '../../components/header/HeaderComponent';
import LoaderComponent from '../../components/loader/LoaderComponent';
import RedditListContainer from '../../components/reddit-list-container/RedditListContainer';
import RedditListItem from '../../components/reddit-list-item/RedditListItem';
import SearchBarComponent from '../../components/search-bar/SearchBarComponent';
import SortByComponent from '../../components/sort-by/SortByComponent';
import useReddit from '../../hooks/useReddit';

function HomeComponent() {
  const [subreddit, setSubreddit] = useState('aww');
  const [postsLimit, setPostsLimit] = useState(25);
  const [sortBy, setSortBy] = useState('hot');
  const [lazyLoading, setLazyLading] = useState(false);
  const [contetLoading, setContentLading] = useState(true);
  const [posts, getPostsBySubReddit, errorMsg] = useReddit();

  useEffect(() => {
    getPostsBySubReddit(subreddit, sortBy, postsLimit);
    if (posts && posts.length > 0) {
      setContentLading(false);
    }
  }, [subreddit, postsLimit, sortBy, posts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLazyLading(true);
      setPostsLimit((prev: number) => prev + 25)
    }
  }

  return (
    <div className="home-component" data-testid="home-component">
      <div className="home-header-wrapper">
        <HeaderComponent logo={logo} title={'Reddit'}>
          <SortByComponent
            sortBy={sortBy}
            handleSortBy={(e: React.ChangeEvent<HTMLSelectElement>) => { setSortBy(e.target.value) }}
          />
        </HeaderComponent>
      </div>

      <div className="content-wrapper">
        <div className="home-searchbar-wrapper">
          <div className='subreddit-base-wrapper'>
            <span className='subreddit-base'>/r/</span>
          </div>
          <SearchBarComponent
            searchTerm={subreddit}
            onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSubreddit(e.target.value) }}
          />
        </div>

        {
          (contetLoading) ? (
            <div>
              <LoaderComponent />
            </div>
          ) : (
            <RedditListContainer>
              {
                <RedditListItem posts={posts} errorMsg={errorMsg} />
              }
            </RedditListContainer>
          )
        }

        <div className='home-loader-wrapper'>
          {
            (lazyLoading && postsLimit <= 100) && (
              <LoaderComponent />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
