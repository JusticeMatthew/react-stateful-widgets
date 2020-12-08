import React, { useState } from 'react';

export default function Todos() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const changeInput = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const click = () => {
    event.stopPropagation();
    inputValue !== '' ? setTodoList(todoList.concat(inputValue)) : null;
    setInputValue('');
  }

  return (
    <div className="container">
      <h2>Todos</h2>
      <div>
        <input 
          id='input' 
          type='text' 
          onChange={changeInput} 
          value={inputValue}
          placeholder="Add task..."
        /> 
        <button onClick={click}>add</button>
      <div>
        {
          todoList.map((item, index) => 
            <form 
              key={index} 
              id={index}
            >
              <input 
                id='chex'
                type='checkbox'
              ></input>
              {item}
            </form>  
          )
        }
      </div>
      </div>
    </div>
  );
}