import React from 'react';
import './reset.css' 
import loginImg from './assets/login.jpg'
import { Layout } from './components/Laytout';


function App() {
  return (
    <>
      <Layout image={loginImg}>
        <h1>oi</h1>
      </Layout>      
    </>
  );
}

export default App;
