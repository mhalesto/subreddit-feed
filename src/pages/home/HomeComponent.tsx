import { useEffect, useState } from 'react';
import logo from '../../assets/imgs/reddit-logo.png';
import HeaderComponent from '../../components/header/HeaderComponent';
import RedditListContainer from '../../components/reddit-list-container/RedditListContainer';
import RedditListItem from '../../components/reddit-list-item/RedditListItem';
import SearchBarComponent from '../../components/search-bar/SearchBarComponent';
import SortByComponent from '../../components/sort-by/SortByComponent';
import useReddit from '../../hooks/useReddit';

function HomeComponent() {
  const [subreddit, setSubreddit] = useState('aww');
  const [postsLimit, setPostsLimit] = useState(25);
  const [sortBy, setSortBy] = useState('hot');
  const [loading, setLoading] = useState(false);
  const [posts, getPostsBySubReddit, errorMsg] = useReddit();

  useEffect(() => {
    getPostsBySubReddit(subreddit, sortBy, postsLimit);
  }, [subreddit, postsLimit, sortBy]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPostsLimit((prev: number) => prev + 25)
    }
  }

  const handleChange = (e: any) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="home-component">
      <HeaderComponent logo={logo} title={'Reddit'}>
        <SortByComponent
          sortBy={sortBy}
          handleSortBy={(e: React.ChangeEvent<HTMLSelectElement>) => { setSortBy(e.target.value) }}
        />
      </HeaderComponent>

      <SearchBarComponent
        searchTerm={subreddit}
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSubreddit(e.target.value) }}
      />

      <RedditListContainer >
        {
          (posts) ? posts.map((post: any, index: number) => {
            return (
              <RedditListItem key={index} count={index} post={post.data} />
            );
          }) : `${errorMsg}`
        }
      </RedditListContainer>
    </div>
  );
}

export default HomeComponent;
