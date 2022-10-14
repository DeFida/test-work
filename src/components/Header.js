import '../styles/Header.css';

import logo from '../images/logo.png';


function Header() {
  return (
    <div className="header">
      <div className='header__logo-wrapper'>
        <img src={logo} alt="logo" className='header__logo' />
      </div>

      <section className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href="#" className='nav__link' target="_blank" rel="noopener noreferrer">Результаты анализов</a>
          </li>
          <li className='nav__item'>
            <a href="#" className='nav__link nav__link_active' target="_blank" rel="noopener noreferrer">Кабинет пациента</a>
            </li>
          <li className='nav__item'>
            <a href="#" className='nav__link' target="_blank" rel="noopener noreferrer">Кабинет врача</a>
          </li>
          <li className='nav__item'>
            <a href="#" className='nav__link' target="_blank" rel="noopener noreferrer">Кабинет партнёра</a>
          </li>
          <li className='nav__item'>
            <a href="#" className='nav__link' target="_blank" rel="noopener noreferrer">Кабинет сотрудника</a>
          </li>
        </ul>
        
      </section>
        
    </div>
  );
}

export default Header;
