import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";

function App() {
    return (
        <Router>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Kavan Online Shop</h1>
                <Routes>
                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
