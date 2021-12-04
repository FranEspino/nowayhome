import PageNotFound from '../pages/PageNotFound'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route component={() => <PageNotFound />} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
