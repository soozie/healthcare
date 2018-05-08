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
          'resourceType: "Patient"'
        </div>
        <div className="patient__item">
          '"birthDate": "1985-08-01"'
        </div>
        <div className="patient__item">
          '"active": true'
        </div>
        <div className="patient__item">
          '"gender": "male"'
        </div>
        <div className="patient__item">
          '"deceasedBoolean": false'
        </div>
        <div className="patient__item">
          '"id": "Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB"'
        </div>
        <div className="patient__item">
          'display": "Physician Family Medicine"'
        </div>
        <div className="patient__item">
          'name: Moe'
          'family-name: Karzai'
        </div>
        <div className="patient__item">
          'address: Link Road Mahon Point'
          'VoxPro'
        </div>
      </div>
    )
  }
}

export default Patient;
