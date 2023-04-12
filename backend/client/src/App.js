import React,{useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';
import Signup from './Signup';
import SearchRes from './SearchRes';
import Myorders from './Myorders';
import Itemopen from './Itemopen';
import Reviews from './Reviews';
import Payment from './Payment';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';
import items from "./ItemsTot";
import Voice from './Voice';

function App() {

  const op = useSelector(state => state.openItemReducer.item);
  const userDet = useSelector(state => state.loginReducer.user); 
  const si = useSelector(state => state.loginReducer.notlogin);
  
  const dispatch = useDispatch();
  
  //useEffect(() => { 
  //  items.map( data => {
  //    axios.post("http://localhost:5000/item/sendReviewsToDB",data)
  //      .then(res =>  console.log("Sent to db"))
  //      .catch(err => console.log("Unable to process")); 
  //  });
  //},[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route path='/review'>
                <Reviews />
            </Route>
            <Route path='/pay'>
                <Payment />
            </Route>
            {/*<Route path='/contact'>
                <Contact />
              </Route>*/}
            <Route path='/myorders'>
                <Myorders /> 
            </Route>
         {op.cost ? 
            <Route path='/openitem'>
                <Itemopen /> 
            </Route>:''}
            <Route path='/checkout'>
                <Checkout />
            </Route>
            <Route path='/searchres'>
                <SearchRes />
            </Route>
          {si?"":
            <Route path='/signup' >
                 <Signup />
            </Route>}
            <Route path='/login' >
                 <Login />
            </Route>
            <Route path='/app'>
                <Banner />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;