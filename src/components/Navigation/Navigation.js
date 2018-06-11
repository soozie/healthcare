import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="nav">
        <div className="nav__desktop">
          {
            this.props.items.map((item) => {
              return <a className="nav__item" href="#" key={item.id}><span>{item.name}</span></a>
            })
          }
        </div>
      </nav>
    )
  }
}

export default Navigation;
