/* eslint-disable react/jsx-no-target-blank */
import { Constants } from '../../constants/constants';
import PostModel from '../../models/postModel';
import './RedditListItem.css';

function RedditListItem({ posts, errorMsg }: any) {
  console.log(posts);
  return (
    <div className="cards">
      {
        (posts) ? posts.map((post: any) => {
          const { title, thumbnail, subreddit, permalink, id }: PostModel = post && post.data
          return (
            <div className="card" key={id}>
              <div>
                <img className='thumbnail' src={thumbnail} alt={`thumbail of ${title}`} />
              </div>
              <div className="title">
                <a href={Constants.BASE_URL + permalink} target="_blank">
                  <span> {title}</span>
                </a>
              </div>
            </div>
          )
        }) : (
          <span>{errorMsg}</span>
        )
      }
    </div>
  );
}

export default RedditListItem;
