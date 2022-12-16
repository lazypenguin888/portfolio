// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // import { useContext } from 'react'
// // import { ThemeContext } from './contexts/theme'
// import { BrowserRouter } from 'react-router-dom'
// import Layout from './components/Layout/Layout'
// // import Header from './components/Header/Header'
// // import About from './components/About/About'
// // import Projects from './components/Projects/Projects'
// // // import Skills from './components/Skills/Skills'
// // // import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// // import Contact from './components/Contact/Contact'
// // // import Footer from './components/Footer/Footer'
// import './App.css'

// const App = () => {
//   // const [{ themeName }] = useContext(ThemeContext)

//   return (
//     <BrowserRouter>
//       {/* <div id='top' className={`${themeName} app`}>
//         <Header />

//         <main>
//           <About />
//           <Projects />
//           <Skills />
//           <Contact />
//         </main>

//         <ScrollToTop />
//         <Footer />
//       </div> */}
//       <Layout/>
//     </BrowserRouter>
//   )
// }

// export default App




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
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Header from './components/Header/Header'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
import './App.css'
import Main from './components/Main/Main'
import BakeryV1 from './components/BakeryV1/BakeryV1'
import BakeryV2 from './components/BakeryV2/BakeryV2'
import Flutter from './components/Flutter/Flutter'
import Webdev from './components/Webdev/Webdev'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const router = createBrowserRouter([
    { path: "/", element:<Main />,},
    { path: "/bakeryv1", element:<BakeryV1/>,},
    { path: "/bakeryv2", element:<BakeryV2/>,},
    { path: "/flutter", element:<Flutter/>,},
    { path: "/webdev", element:<Webdev/>,},
  ]);

  return (
    <div id='top' className={`${themeName} app`}>
      <RouterProvider router={router} />

      {/* <ScrollToTop />
      <Footer /> */}
    </div>
  )
}

export default App