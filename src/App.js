mport React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './components/SearchBar';
import PlantList from './components/PlantList';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Plant Search</h1>
        <SearchBar />
        <PlantList />
      </div>
    </Provider>
  );
};

export default App;