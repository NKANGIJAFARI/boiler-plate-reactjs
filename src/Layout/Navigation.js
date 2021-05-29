import React from 'react';

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <nav id='nav-wrap' onClick={handleActive}>
      <div
        className={`${active ? 'cross' : ''} toggler`}
        onClick={handleActive}></div>
      {active && <div className='closeBtn' onClick={handleActive}></div>}

      <div className='navbar'>
        <a href='#home' className='logo'>
          <img src='/images/logo.png' alt='nkangi logo' />
        </a>

        <ul id='nav' className={`${active ? 'active' : 'inactive'} nav`}>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className='aboutNav'>
            <a className='smoothscroll' href='#about'>
              <FontAwesomeIcon icon={faUserTie} /> About
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#services'>
              <FontAwesomeIcon icon={faNetworkWired} /> Services
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#skills'>
              <FontAwesomeIcon icon={faCode} /> Skills
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>
              <FontAwesomeIcon icon={faBriefcase} /> Works
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#testimonials'>
              <FontAwesomeIcon icon={faUsers} /> Testimonials
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              <FontAwesomeIcon icon={faIdCard} /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
