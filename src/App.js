import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Navbar from './components/navbar/Navbar.jsx';
import PageContainer from './container/PageContainer.jsx';
import Detail from './pages/Detail.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/fakeApi-ecommerceApp" element={<Home />} />
            <Route path="fakeApi-ecommerceApp/products/:id" element={<Detail />} />
            <Route path="fakeApi-ecommerceApp/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>

    </div>
  );
}

export default App;
