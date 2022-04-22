import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Intro from './components/intro/intro';
import Abaut from './components/abaut/abaut';
import Quote from './components/quote/quote';
import Skills from './components/skills/skills';
import Experiences from './components/experience/experiences';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Intro/>
      <Abaut/>
      <Quote/>
      <Skills/>
      <Experiences/>
    </>
  );
}

export default App;