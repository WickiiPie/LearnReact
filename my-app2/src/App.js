// import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'
function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path="/users" element={<Users/>}>
        </Route>
        <Route path="/:userId/places" exact element={<UserPlaces/>}>
        </Route>
        <Route path="/places/new" element={<NewPlace/>}>
        </Route>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
