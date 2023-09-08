import '../App.css';
import '../Nav.css'
import { Link } from 'react-router-dom';
import './Products';
import './AboutUs'

function NavigationComp(){
  return(
    <>
        <Link to="/" className='Navigation_logo_link'>
          <img className = "navigation_logo" alt = "logo" src = "img/logo.png"></img>
        </Link>
        <nav className="menu">
          <ul className="list">
            <li>
              <Link to="/aboutus" style={{textDecoration: "none"}}><span style={{color: "white"}}>About Us</span></Link>
            </li>
            <li>
              <Link to="/products" style={{textDecoration: "none"}}><span style={{color: "white"}}>Products</span></Link>
            </li>
            <li>
              <Link to="/" style={{textDecoration: "none"}}><span style={{color: "white"}}>Industries</span></Link>
            </li>
            <li>
              <Link to="/" style={{textDecoration: "none"}}><span style={{color: "white"}}>Connact Us</span></Link>
            </li>
          </ul>
        </nav>
    </>
  );
}

function Navigation(props){
  if(props.page === "Main"){
    return (
      <div className="navigation">
        <NavigationComp/>
      </div>
    );
  }
  else{
    return (
      <div className="navigation" id = "navigation">
        <NavigationComp/>
      </div>
    );
  }
}

export default Navigation;