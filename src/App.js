import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'

import './styles/index.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames()); 
  }, [])

  return (
    <div className="App">
      ggs
    </div>
  );
}

export default App;
