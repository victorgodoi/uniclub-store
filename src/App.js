import Home from './pages/home';
import Products from './pages/products';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <Router>
      <Container>
        <ChakraProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/hoodies' element={<p>texto</p>} />
          </Routes>
          <Footer />
        </ChakraProvider>
      </Container>
    </Router>
  )
}

export default App;
