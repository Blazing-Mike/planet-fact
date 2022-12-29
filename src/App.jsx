import { useState } from "react";
import NavBar from "./components/NavBar";
import TabsComponent from "./components/TabsComponent";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
          <div className="App">
          <NavBar />
    <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route exact path="/:planet" element={ <TabsComponent  />}>

        </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
