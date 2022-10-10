import React from 'react';
import { FaTwitter } from "react-icons/fa";



const quotes = [
  {
    text:'The journey of a thousand miles begins with one step.',
    author:'Lao Tzu'
  },
  {
    text:'When the going gets tough, the tough get going.',
    author:'Joe Kennedy'
  },
  {
    text:'You must be the change you wish to see in the world.',
    author:'Mahatma Gandhi'
  },
  {
    text:'You only live once, but if you do it right, once is enough.',
    author:'Mae West'
  },
  {
    text:'Whether you think you can or you think you can’t, you’re right.',
    author:'Henry Ford'
  }
];

class Quotes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: Math.floor(Math.random()*quotes.length)
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      index: Math.floor(Math.random()*quotes.length)
    })
  }
  render() {
    const text = `${quotes[this.state.index].text} ~${quotes[this.state.index].author}`;
    return(
      <div>
        <div>
          {quotes[this.state.index].text}
        </div>
        <div>
          <p>
          ~ {quotes[this.state.index].author}
          </p>
        </div>
        <a href={`https://twitter.com/intent/tweet?text=${text}`}><FaTwitter style={{color:'#1DA1F2'}}/></a>
        <button onClick={this.handleClick} style={{float: 'right'}}>New Quote</button><br/>
      </div>
    )
  }
}


function App() {
  const styles = {
    border: '1px solid green',
    padding: 10,
    borderRadius: 5,
    width: 300,
    margin: 'auto'
  }
  return (
    <div className="App" style={styles}>
      <Quotes />
    </div>
  );
}

export default App;
