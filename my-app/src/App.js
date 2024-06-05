import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeDetails from "./Pages/RecipeDetails";

function Layout(){
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <div className="App bg-black">
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>} />
        <Route path="recipes/:id" element={<RecipeDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
