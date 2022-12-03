import { useEffect, useState } from 'react';
import logo from '../../assets/imgs/reddit-logo.png';
import HeaderComponent from '../../components/header/HeaderComponent';
import RedditListContainer from '../../components/reddit-list-container/RedditListContainer';
import RedditListItem from '../../components/reddit-list-item/RedditListItem';
import SearchBarComponent from '../../components/search-bar/SearchBarComponent';
import useReddit from '../../hooks/useReddit';

function HomeComponent() {
  const [subreddit, setSubreddit] = useState('aww');
  const [ posts, getPostsBySubReddit, errorMsg ] = useReddit();

  useEffect(() => {
    getPostsBySubReddit(subreddit);
  }, [subreddit]);

  return (
    <div className="home-component">
      <HeaderComponent logo={logo} title={'Reddit'} />

      <SearchBarComponent
        searchTerm={subreddit}
        onSearchChange={(e: any) => { setSubreddit(e.target.value); getPostsBySubReddit(subreddit) }}
      />

      <RedditListContainer >
        {
          (posts) ? posts.map((post: any, index: number) => {
            return (
              <RedditListItem key={index} post={post.data} />
            );
          }) : `${errorMsg}`
        }
      </RedditListContainer>
    </div>
  );
}

export default HomeComponent;
