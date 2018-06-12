import React from 'react';
import './Admin.css';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return(
      <div className="admin">
        <header className="admin__header">
          <div className="admin__headerEntity">Entities</div>
          <div className="admin__headerLocation">Locations</div>
          <div className="admin__headerContacts">Contacts</div>
          <div className="admin__headerRooms">Rooms</div>
          <div className="admin__headerUsers">Users</div>
        </header>
        <main className="admin__main">
          <div className="admin__leftContainer">
            <div className="admin__searchContainer">
              <input className="admin__searchInput"
                onChange={this.handleInputChange}
                placeholder="Search an Entity/Company"
                value={this.state.input}
              />
              <button className="admin__searchButton">SEARCH</button>
            </div>
            <div className="admin__results">
              <div className="admin__entitiesList">
                Entities results
              </div>
            </div>
          </div>
          <div className="admin__rightContainer">
            <div className="admin__locations">Locations</div>
            <div className="admin__contacts">Contacts</div>
            <div className="admin__rooms">Rooms</div>
            <div className="admin__users">Users</div>
          </div>
        </main>
        <footer className="admin__footer"></footer>
      </div>
    )
  }
}

export default Admin;
