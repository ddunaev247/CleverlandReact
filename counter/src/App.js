import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="counter">10</div>
        <div className="controls">
          <button>INC</button>
          <button>DEC</button>
          <button>RND</button>
          <button>RESET</button>
        </div>
      </div>
    );
  }
}
export default App;
