import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="nav">
        <div className="nav__mobile">
          <img src="./" alt="logo" className="nav__mobile-icon" />
          <img src="./" alt="login" className="nav__mobile-icon" />
          <img src="./" alt="campus" className="nav__mobile-icon" />
          <img src="./" alt="online" className="nav__mobile-icon" />
        </div>
        <div className="nav__desktop">
          <a className="nav__item" href="#"><span>PATIENT</span></a>
          <a className="nav__item" href="#"><span>ALLERGY</span></a>
          <a className="nav__item" href="#"><span>MEDICATION</span></a>
          <a className="nav__item" href="#"><span>CONDITION</span></a>
          <a className="nav__item" href="#"><span>FAMILY HISTORY</span></a>
          <a className="nav__item" href="#"><span>OBSERVATION</span></a>
          <a className="nav__item" href="#"><span>REPORT</span></a>
          <a className="nav__item" href="#"><span>IMMUNIZATION</span></a>
          <a className="nav__item" href="#"><span>PROCEDURE</span></a>
          <a className="nav__item" href="#"><span>DEVICE</span></a>
          <a className="nav__item" href="#"><span>DOCUMENTS</span></a>
          <a className="nav__item" href="#"><span>CARE PLAN</span></a>
        </div>
      </nav>
    )
  }
}

export default Navigation;
