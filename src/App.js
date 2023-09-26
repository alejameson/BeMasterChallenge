import { Login } from "./components/Login/login";
import { Home } from "./components/Home/home";
import { Nav } from "./components/Nav/nav";
import { ContentCategory } from "./components/ContentCategory/contentCategory";
import { ContentDetail } from "./components/ContentDetail/contentDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<ContentCategory />} />
          <Route path="/detail/:id" element={<ContentDetail />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
