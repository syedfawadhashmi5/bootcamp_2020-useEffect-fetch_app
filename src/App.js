import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setrepos] = useState([{}]);

  useEffect( () =>{
    // "https://api-github.com/user/syedfawadhashmi5/repos"
async function getRepos() {
  const reposponse = await fetch("https://api.github.com/users/syedfawadhashmi5/repos")
  const data = await reposponse.json()
  setrepos(data)
}
getRepos();


    }, [])
  return (
    <div className="App">
      <h1>This Is My All Repositories</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
