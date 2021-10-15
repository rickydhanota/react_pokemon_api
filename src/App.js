import './App.css';
import PokemonNameList from './components/PokemonNameList';
import Pokemon_with_axios from './components/Pokemon_with_axios';

function App() {
  return (
    <div className="App">
      {/* <PokemonNameList /> */}
      <hr></hr>
      <Pokemon_with_axios />
    </div>
  );
}

export default App;
