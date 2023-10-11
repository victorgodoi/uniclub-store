import Home from './pages/home';
import Products from './pages/products';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';


function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
