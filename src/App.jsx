import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MouseLens from "./components/MouseLens";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import CategoryLayout from "./components/CategoryLayout";
// import Game from "./pages/Game";
// import Design from "./pages/Design";
// import FineArt from "./pages/FineArt"; 
// import ProjectLayout from "./components/ProjectLayout";
// import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <MouseLens/>
        <Header />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* <Route element={<CategoryLayout />}> */}
              <Route path="/game" element={<div>game</div>} />
              <Route path="/design" element={<div>design</div>} />
              <Route path="/fine-art" element={<div>fine-art</div>} />
          {/* </Route> */}

          {/* <Route path="/project/:id" element={<ProjectLayout />}>
              <Route index element={<ProjectDetail />} />
          </Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;