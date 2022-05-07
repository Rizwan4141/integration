import React from 'react';
import TwitterLogin from 'react-twitter-login';
import './App.css';
import FacebookLogin from './Components/FacebookLogin';
import GoogleLoginA from './Components/GoogleLogin';

function App() {
  return (
    <div className="App" >
      <div style={{ marginBottom: "1rem" }}>
      <GoogleLoginA />
      </div>
      <div style={{ marginBottom: "1rem" }}>
      <FacebookLogin/>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <TwitterLogin/>
      </div>
    </div>
  );
}

export default App;
