
import { NavBar } from "./components/NavBar"
import  ItemListConteiner  from "./components/ItemListConteiner"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailConteiner from "./components/ItemDetailConteiner"
import "./app.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListConteiner/>} />
          <Route path="/category/:id" element={<ItemListConteiner/>} />
          <Route path="/item/:id" element={<ItemDetailConteiner/>} />
          <Route path="*" element={<h1> 404 No Found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
