import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';
import { RecipeContext } from './context/RecipeContext';
import RecipeSearch from './components/RecipeSearch';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Cook from './components/Cook';

function App() {

const {currentRecipe} = useContext(RecipeContext)

  return (
    <div className="App">
   <Header/>

      <Routes>

      <Route path = "/" element = {<RecipeSearch />}/>
      <Route path = "cook" element = {<Cook />}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
