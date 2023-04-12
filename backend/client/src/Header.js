import React,{useState} from 'react'
import './Header.css'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useSelector } from 'react-redux';
import { cartAdd } from './actions/cartAction';
import { useDispatch } from 'react-redux';
import { search } from './actions/searchAction';
import Voice from './Voice';

function Header() {

  const history = useHistory();
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cartReducer.items);
  const [open, setOpen] = useState(false);
  const [str,setStr] = useState("");

  const openMenu = () =>{
    setOpen(!open); 
  }
  const butPushup = () => {
    window.scrollTo(0,-1000); 
  } 
  const ssettstr = (e) => {
    setStr(e.target.value); 
  } 
  const searchPush = () => {
    dispatch(search(str)); 
    history.push("/searchres");
    window.scrollTo(0,-1000); 
  } 

  return (
  <div>
    <Voice className='header-voice' />
    <div className='header'>
    <div className='lcheader'>  
      <Link onClick={()=>butPushup()} className='header-logo-link' to='/'>
         <span className='mgr'>ShopE</span>
         <span className='mgr-icon'> <HeadsetMicIcon /></span>
      </Link>
      <div className='header-searchbar-sb'>
        <input value={str} onChange={(e)=>ssettstr(e)} type="text" className='h-sb-inp' placeholder='search' />
        <SearchIcon onClick={()=>searchPush()} className='h-sb-icon' />
      </div>
      <div className='header-navs'>
          <Link onClick={()=>butPushup()} className='header-navs-link contact two disphide' to='/'>
              <span className='h-n-l-twospan'>Home</span>
              <span className='notif notif-home closeSym'><HomeRoundedIcon/></span>
          </Link>    
          <Link onClick={()=>butPushup()} className='header-navs-link contact two disphide' to='/myorders'>
              <span className='h-n-l-twospan'>Your Orders</span>
              <span className='notif notif-ord closeSym'><PlaylistAddCheckIcon/></span>
          </Link> 
          <Link onClick={()=>butPushup()} className='header-navs-link-last cart ' to='checkout'>
              <span className='h-n-l-cartspan disphide'>Cart</span> 
              <ShoppingCartIcon className='h-n-l-l-icon' /> 
              <span className='h-n-l-last-span '>{cart.length}</span>                  
          </Link>
          <Link onClick={()=>butPushup()} className='header-navs-link contact two disphide' to='/login'>
              <span className='h-n-l-twospan'>Account</span>
              <span className='notif notif-down closeSym' ><LabelImportantRoundedIcon/></span>
          </Link>   
          <Link onClick={()=>butPushup()} className='header-navs-link contact two disphide' to='/contact'>
              <span className='h-n-l-twospan'>Contact</span>
              <span className='notif notif-cont closeSym'><SupervisorAccountIcon/></span>
          </Link>   
          <div onClick={()=>openMenu()} className={open?'menuicn menuicnc':'menuicn'}>
             <MenuRoundedIcon  className='menuicn-icn' />
          </div> 
      </div>
      </div>
      <div className={open? 'openedmenu rcheader': 'closedmenu rcheader'}>
          <Link onClick={()=>butPushup()} className='rch-link' to='/'>
              <span className='h-n-l-twospan h-n-l-twospan-last-px'>Home</span>
              <span className='notif notif-home closeRes'><HomeRoundedIcon/></span>
          </Link> 
          <Link onClick={()=>butPushup()} className='rch-link' to='/myorders'>
              <span className='h-n-l-twospan h-n-l-twospan-last-px'>Orders</span>
              <span className='notif notif-ord closeRes'><PlaylistAddCheckIcon/></span>
          </Link> 
          <Link onClick={()=>butPushup()} className='rch-link' to='login'>
              <span className='h-n-l-twospan h-n-l-twospan-last-px'>Account</span>
              <span className='notif-down notif closeRes' ><LabelImportantRoundedIcon/></span>
          </Link> 
          <Link onClick={()=>butPushup()} className='rch-link' to='contact'>
              <span className='h-n-l-twospan h-n-l-twospan-last-px'>Contact</span>
              <span className='notif notif-cont closeRes'><SupervisorAccountIcon/></span>
          </Link>
      </div>
    </div> 
  </div>
  )
}

export default Header;