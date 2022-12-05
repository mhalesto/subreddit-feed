import './RedditListContainer.css';

interface IRedditListContainerProps {
  children: any
}

function RedditListContainer({ children }: IRedditListContainerProps) {
  return (
    <div className="reddit-list-container-wrapper">
      {
        children
      }
    </div>
  );
}

export default RedditListContainer;
