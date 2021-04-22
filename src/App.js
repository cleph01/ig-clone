
import Nav from './components/navigation_components/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
    
      <Nav 
          setOpenSignUp={setOpenSignUp}
          setOpenSignIn={setOpenSignIn}
          setUser={setUser}
      />

    </div>
  );
}

export default App;
