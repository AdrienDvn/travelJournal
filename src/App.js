// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return <Card
            key={item.id}
            item={item}/>
  })


  return (
    <div className="App">
      <Navbar/>
      {cards}
      {/* static page
        little red navbar
        4 horizontal cards set in list
        CC img on the left,
        a location icon, a location name,
        google maps links
        title
        date
        description */}

    </div>
  );
}

export default App;
