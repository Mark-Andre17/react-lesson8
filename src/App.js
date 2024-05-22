import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const count  = useSelector((state) => state);

  const handlePlus = () => {
    dispatch({
      type: 'plus'
    })
  }

  const handleMinus = () => {
    dispatch({
      type:'minus'
    })
  }

  const handleReset = () => {
    dispatch({
      type:'reset'
    })
  }



  return (
    <div className="App">
      <div className='counter'>
        <p>
          {count}
        </p>
        <div className='buttons'>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
          <button onClick={handleReset}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
