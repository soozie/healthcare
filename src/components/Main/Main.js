import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <main class="main">
        <div class="main__section1">
          {this.props.children}
        </div>
        <div class="main__section2">

        </div>
        <div class="main__section3">

        </div>
        <div class="main__section4">

        </div>
      </main>
    )
  }
}

export default Main;
