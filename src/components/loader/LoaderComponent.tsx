import loaderImg from '../../assets/imgs/loader.gif';
import './LoaderComponent.css';

const LoaderComponent = () => {
  return(
    <div className="loader-wrapper">
      <img src={loaderImg} className="loader-img" alt='loader'/>
    </div>
  );
}

export default LoaderComponent;