/* eslint-disable react/jsx-no-target-blank */
import { Constants } from '../../constants/constants';
import PostModel from '../../models/postModel';
import './RedditListItem.css';
import noImage from '../../assets/imgs/no-image-placeholder.jpg';

function RedditListItem({ posts, errorMsg }: any) {
  console.log(posts);
  return (
    <div className="cards">
      {
        (posts) ? posts.map((post: any) => {
          const { title, thumbnail, subreddit, permalink, id }: PostModel = post && post.data;
          const thumbnailValidation = thumbnail?.slice(0, 8);

          console.log(thumbnailValidation);
          return (
            <div className="card" key={id}>
              <div>
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
