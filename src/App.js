import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
     <Form></Form>
      {/* <NameList></NameList> */}

      {/*  <UserGreeting></UserGreeting> */}

      {/* <ParentComponent></ParentComponent> */}

      {/*      <EventBind></EventBind>
     <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}

      {/*      <Counter></Counter>
       <Greet></Greet>
      <Welcome></Welcome>
      <Message></Message> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
