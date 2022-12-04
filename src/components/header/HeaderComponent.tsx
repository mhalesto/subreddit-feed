import './HeaderComponent.css';

interface IHeaderComponentProps {
  title?: string,
  logo: string,
  children?: any
}

function HeaderComponent({ title, logo, children }: IHeaderComponentProps) {
  return (
    <div className="header-component-wrapper">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <span className='header-title'>
          { title }
        </span>
        <div className='children'>
          { children }
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
