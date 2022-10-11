import React from 'react';
import './App.css';
import Success from './components/Success';
import Users from './components/Users/Users';



// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err)
      alert('Error download users')
    })
  },[])

  return (
    <>
      <div className="App">
        <Users items={users} />
        {/* <Success /> */}
      </div>
    </>
  );
}

export default App;
