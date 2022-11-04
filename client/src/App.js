import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Update from "./views/Update"
import Create from "./views/Create"
import Display from "./views/Display"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Create />} path="/pirates/new" />
        <Route element={<Display />} path="/pirates/:id" />
        <Route element={<Update />} path="/pirates/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

