/* eslint-disable react/jsx-no-target-blank */
import { Constants } from '../../constants/constants';
import PostModel from '../../models/postModel';
import './RedditListItem.css';
import noImage from '../../assets/imgs/no-image-placeholder.jpg';

function RedditListItem({ posts, errorMsg }: any) {
  return (
    <div className="cards">
      {
        (posts) ? posts.map((post: any) => {
          const { title, thumbnail, subreddit, permalink, id }: PostModel = post && post.data;
          const thumbnailValidation = thumbnail?.slice(0, 8);

          return (
            <div className="card" key={id}>
              <div>
                <div className='subreddit-wrapper'>
                  <span className='subreddit'>{subreddit}</span>
                </div>
                {
                  (thumbnailValidation === 'https://') ? (
                    <img className='thumbnail' src={thumbnail} alt={`thumbail of ${title}`} />
                  ) : (
                    <img className='thumbnail' src={noImage} alt={`no thumbnail to display`} />
                  )
                }
              </div>
              <div className="title">
                <a href={Constants.BASE_URL + permalink} target="_blank">
                  <span className='title-value'>
                    {
                      (title && title.length > 60) ? `${title.slice(0, 60)}...` : title
                    }
                  </span>
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
