import { Routes, Route } from 'react-router-dom'
import Home from "./routes/Home"
import Navbar from './components/Navbar'

const Shop = () => {
  return <h1>Shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;