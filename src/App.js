import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import { useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';
import { css } from "@emotion/react";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [setLoading])
  const override = css`
  display: flex;
  margin: 45vh auto;
  align-items:center;
  justify-content:center;
`;
  return (
    <div className="App">
      {
        loading ?
          <RotateLoader size={15} margin={2} css={override} color={"#66ffdb"} loading={loading} />
          :
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Router>
      }
    </div>
  );
}

export default App;
