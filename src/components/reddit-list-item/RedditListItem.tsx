/* eslint-disable react/jsx-no-target-blank */
import { Constants } from '../../constants/constants';
import PostModel from '../../models/postModel';
import './RedditListItem.css';

function RedditListItem({ post }: any) {
  const { title, thumbnail, subredditName, permalink }: PostModel = post;
  console.log(title);
  return (
    <div className="reddit-list-item-wrapper">
      <div>
        <a href={ Constants.BASE_URL + permalink } target="_blank">
          <h3>{ title }</h3>
        </a>
      </div>
    </div>
  );
}

export default RedditListItem;
