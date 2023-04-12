import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Star } from '@material-ui/icons';
import { useDispatch,useSelector } from 'react-redux';
import "./Myorders.css";
import { useHistory } from "react-router-dom";
import { cartOrd } from './actions/cartAction';

function Myorders() {

    const ord = useSelector(state => state.cartReducer.orders);
    const userDet = useSelector(state => state.loginReducer.user); 
    const si = useSelector(state => state.loginReducer.notlogin); 

    const history = useHistory();
    const dispatch = useDispatch();

    const [orders,setOrders] = useState([]);

    useEffect(() => { 
        if(si){
        axios.post("http://localhost:5000/ecom/fetch",userDet)
            .then(res => { 
                dispatch(cartOrd(res.data));
            })
            .catch(error => console.log("Error getting")); 
        }
    },[]); 

    return(             
        <div className='myord'>
            <span className='yr-ord-ordpg'>{ ord.length !== 0 ? 'Your Orders':'No Orders'}</span>  
                { ord.length !== 0 ?<div className='cbox-ordbox-ord'>
                         {ord.map(item => (
                            <div className='Checkoutitem-box ' key={item.id}>
                            <div> 
                                 <img src={item.img} />
                            </div>
                            <div className='cout-bdy'>
                                 <p className='cout-bdy-p'>{item.title}</p>
                                 <div className='cout-bdy-rating'>
                                     { Array(item.rating) 
                                        .fill()
                                        .map((_) =>(
                                                  <p><Star className='stars-ck' /></p>))
                                     }
                                 </div>
                                 <div className='fnal-ck'>
                                     <p className='f-ck-p'>₹{item.cost}</p>
                                     <p className='ord-p-last-des'>Ordered</p>
                                 </div>
                             </div>
                         </div>
                         )) }
            </div> : ''} 
        </div>
    )
} 

export default Myorders;

{/*import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';
import Myorders from './Myorders';
import Itemopen from './Itemopen';
import { useSelector } from 'react-redux';

function App() {

 
  const op = useSelector(state => state.openItemReducer.item);

  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/contact'>
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path='/myorders'>
                <Header />
                <Myorders /> 
                <Footer />    
            </Route>
      { op.cost ? <Route path='/openitem'>
                <Header />
                <Itemopen /> 
                <Footer />
            </Route>:''}
            <Route path='/checkout'>
                <Header />
                <Checkout />
                <Footer />
            </Route>
            <Route path='/login' >
                 <Header />
                 <Login />
                <Footer />
            </Route>
            <Route path='/'>
                <Header />
                <Home />
                <Footer />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';
import Myorders from './Myorders';
import Itemopen from './Itemopen';
import { useSelector } from 'react-redux';

function App() {

 
  const op = useSelector(state => state.openItemReducer.item);

  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/contact'>
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path='/myorders'>
                <Header />
                <Myorders /> 
                <Footer />    
            </Route>
      { op.cost ? <Route path='/openitem'>
                <Header />
                <Itemopen /> 
                <Footer />
            </Route>:''}
            <Route path='/checkout'>
                <Header />
                <Checkout />
                <Footer />
            </Route>
            <Route path='/login' >
                 <Header />
                 <Login />
                <Footer />
            </Route>
            <Route path='/'>
                <Header />
                <Home />
                <Footer />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';
import Myorders from './Myorders';
import Itemopen from './Itemopen';
import { useSelector } from 'react-redux';

function App() {

 
  const op = useSelector(state => state.openItemReducer.item);

  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/contact'>
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path='/myorders'>
                <Header />
                <Myorders /> 
                <Footer />    
            </Route>
      { op.cost ? <Route path='/openitem'>
                <Header />
                <Itemopen /> 
                <Footer />
            </Route>:''}
            <Route path='/checkout'>
                <Header />
                <Checkout />
                <Footer />
            </Route>
            <Route path='/login' >
                 <Header />
                 <Login />
                <Footer />
            </Route>
            <Route path='/'>
                <Header />
                <Home />
                <Footer />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; */}
