import logo from '../../assets/imgs/reddit-logo.png';
import HeaderComponent from '../../components/header/HeaderComponent';

function HomeComponent() {
  return (
    <div className="home-component">
      <HeaderComponent logo={logo} title={'Reddit'} />
      <h1>Home Component</h1>
    </div>
  );
}

export default HomeComponent;
