import React from 'react';

class Patient extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div className="patient">
        <div className="patient__item">
          <div className="patient__key">resourceType:</div>
          <div className="patient__value">Patient</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">birthDate:</div>
          <div className="patient__value">'1985-08-01'</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">gender:</div>
          <div className="patient__value">male</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">deceasedBoolean:</div>
          <div className="patient__value">'false'</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">id:</div>
          <div className="patient__value">'Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB'</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">given:</div>
          <div className="patient__value">Moe</div>
          <div className="patient__key">family:</div>
          <div className="patient__value">Karzai</div>
        </div>
        <div className="patient__item">
          <div className="patient__key">address:</div>
          <div className="patient__value">'Link Road Mahon Point'</div>
        </div>
      </div>
    )
  }
}

export default Patient;
