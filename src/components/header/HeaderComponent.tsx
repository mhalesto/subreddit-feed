import './HeaderComponent.css';

interface IHeaderComponentProps {
  title?: string,
  logo: string,
  children?: any
}

function HeaderComponent({ title, logo, children }: IHeaderComponentProps) {
  return (
    <div className="header-component-wrapper" data-testid="header-component-wrapper">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <span className='header-title'>
          { title }
        </span>
        <div className='children'>
          { children }
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
