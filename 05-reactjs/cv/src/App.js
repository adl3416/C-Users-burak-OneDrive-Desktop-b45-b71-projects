import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Intro from './components/intro/intro';
import Abaut from './components/abaut/abaut';
import Quote from './components/quote/quote';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Intro/>
      <Abaut/>
      <Quote/>
    </>
  );
}

export default App;