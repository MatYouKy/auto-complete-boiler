import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Input from './components/Input/Input';
import { FETCH_USERS } from './store/actions';

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsersHandler = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');      
            const users = response.data;

            dispatch({type: FETCH_USERS, users})
        } catch (error){
            alert(error.message);
        }
    }
    getUsersHandler();
},[dispatch])

  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
