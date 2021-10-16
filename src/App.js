import './App.css';
import Header from './Header';
import Home from './Home';

function App()
{
  return (
    // BEM
    <div className="App">
      {/* Header */}
      <Header></Header>
      {/* Home */}
      <Home></Home>
    </div>
  );
}

export default App;
