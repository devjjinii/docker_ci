import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    // db정보 
    axios.get('/api/values')  //cors  
      .then(response => {
        console.log('###### response', response)
        setLists(response.data)
      })
  }, [])

  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', {value : value})
      .then(response => {
        if(response.data.success) {
          console.log('submitHandler', response)
          setLists([...lists, response.data])
          setValue("");

        } else {
          alert('실패!!')
        }
      })
  } 

  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="container">

        {lists && lists.map((list, index) => (
          <li key={index}>{list.value}</li>
        ))}

          <form className="example" onSubmit={submitHandler}>
            <input 
              type="text"
              placeholder="입력해주세요..."
              onChange={changeHandler} 
              value={value}/>
              
              <button type="submit">확인</button>

          </form>
        </div>
      
      </header>
    </div>
  );
}

export default App;
