import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';


const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
);

export default App;
