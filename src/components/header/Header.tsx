import reactLogo from '/src/assets/react.svg';
import chefLogo from '/src/assets/globe.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <a href="https://react.dev" target="_blank" className="logo-link flex-grow-1">
          <img src={reactLogo} className="shadow react-logo" alt="React logo" />
          <span className="fw-bolder">React</span>
        </a>
      </div>
      <div>
        <a href="" target="_blank" className="icon-link shadow flex-grow-1">
          <img src={chefLogo} className="icon chef" alt="chef logo" />
          <span className='fw-bolder'>my travel journal.</span>
        </a>
      </div>
      <span className="flex-basis-inherit"></span>
    </header>
  );
}

export default Header;