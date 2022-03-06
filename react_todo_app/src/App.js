import React from 'react';
import { Route, Switch } from 'react-router-dom'


import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import InputForm from './components/InputForm';
import CheckedToDo from './components/CheckedToDo';
import unCheckedToDo from './components/UncheckedToDo';


import './App.css';

function App() {

  return (
    < div className="App" >
      <Header />
      <MainContent>
        <InputForm />
        <Switch>
          <Route exact path="/unChecked" component={unCheckedToDo} />
          <Route exact path="/checked" component={CheckedToDo} />
          <Route exact path="/" component={ToDoList} />
        </Switch>
      </MainContent>
      <Footer />
    </div >
  );
}

export default App;
