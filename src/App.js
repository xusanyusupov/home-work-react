// import logo from './logo.svg';
import './App.css';
import Collection from './components/collection/Collection';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Card from './components/cards/Card';
import Footer from './components/footer/Footer';



function App() {
  return (
   <>
    <Header/>
   <Collection/>
    <Features/>
    <Card/>
    <Footer/>
   </>
  )
};

export default App;
