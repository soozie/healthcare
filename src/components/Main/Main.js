import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <main className="main">
        <div className="main__section1">
          {this.props.children}
        </div>
        <div className="main__section2">

        </div>
        <div className="main__section3">

        </div>
        <div className="main__section4">

        </div>
      </main>
    )
  }
}

export default Main;
