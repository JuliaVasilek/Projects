import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import {screenSizeContext} from './contexts/screenSizeContext';

function App() {

  const ScreenSizeProvider = screenSizeContext.Provider;
  
  const [windowWidth, setWindowWidth]   = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <ScreenSizeProvider value={{
      windowWidth: windowWidth,
      windowHeight: windowHeight
    }}>
      <div className="App">
        <div className="container">
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
      </div>
    </ScreenSizeProvider>
  );
}

export default App;
