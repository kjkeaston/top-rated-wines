import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllWines from '../components/AllWines.js';
// import NewWineForm from '../components/AddNewWineForm.js';

export default (
  <Switch>
    <Route exact path='/' component={ AllWines }/>
  </Switch>
  )

// <Route exact path='/addnewwine' component= { AddNewWineForm } />
