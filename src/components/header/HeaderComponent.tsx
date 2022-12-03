import './HeaderComponent.css';

interface IHeaderComponentProps {
  title?: string,
  logo: string
}

function HeaderComponent({ title, logo }: IHeaderComponentProps) {
  return (
    <div className="header-component-wrapper" id="header-component" >
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <span className='header-title'>
          { title }
        </span>
      </header>
    </div>
  );
}

export default HeaderComponent;
