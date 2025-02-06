import reactLogo from '/src/assets/react.svg';
import chefLogo from '/src/assets/chef-claude-icon.png';
import './Header.css';

function Header() {
  return (
    <header className="box-shadow">
      <div>
        <a href="https://react.dev" target="_blank" className="logo-link flex-grow-1">
          <img src={reactLogo} className="shadow react-logo" alt="React logo" />
          <span className="fw-bolder">React</span>
        </a>
      </div>
      <div>
        <a href="/" className="icon-link shadow flex-grow-1">
          <img src={chefLogo} className="icon chef" alt="chef logo" />
          <span className="">Chef Claude</span>
        </a>
      </div>
      <span className="flex-basis-inherit"></span>
    </header>
  );
}

export default Header;