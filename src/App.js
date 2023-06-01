import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AnimeItem from "./Componentes/AnimeItem";
import Home from "./Componentes/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeItem />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
