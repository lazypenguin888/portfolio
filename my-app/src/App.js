// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          {/* <Skills /> */}
          <Contact />
        </main>

        {/* <ScrollToTop />
        <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
