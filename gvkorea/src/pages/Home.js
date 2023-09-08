import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import ContentBox from './ContentBox';
import { Link } from 'react-router-dom';
import '../App.css';

function Cover(){
  return (
    <div className = "cover">
      <video className="cover_video" alt="Cover" muted autoPlay={true} preload="metadata" loop={true}>
        <source src="video/background.mp4" type="video/mp4" />
      </video>
      <h1 className = "cover_text">The Most Powerful<br/> Industrial Vavles</h1>
    </div>
  )
}

function Article(){
  return (
    <div className = "article">
      <h1>New, Unique, and World First<br/>Butterfly Vavles</h1>
      <div className = "article_contents">
        <div className = "article_contents_img">
          <img alt = "gvk_valve" src = "img/gvk_valve.jpg"></img>
        </div>
        <div className = "article_contents_text">
          Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.
          <br/><br/>
          Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.
        </div>
        
      </div>
    </div>
  )
}

function Information(){
  return (
    <div className = "Information">
      <div className = "Information_content">
        <h1>Information</h1>
        <div className = "Information_content_boxes">
          <Link to="/aboutus" style={{width : "25%", textDecoration: "none", margin: "20px"}}>
            <ContentBox title = "About Us" src = "img/gvkorea_company_color.png" txt = "We manufacture the best  Butterfly valves."/>
          </Link>
          <Link to="/products" style={{width : "25%", textDecoration: "none", margin: "20px"}}>
            <ContentBox title = "Products" src = "img/gvk_valve_color.png" txt = "Most Powrful and efficient Butterfly valve series"/>
          </Link>
          <Link to="/aboutus" style={{width : "25%", textDecoration: "none", margin: "20px"}}>
            <ContentBox title = "Industries" src = "img/ship_color.png" txt = "Check out the wide range of industries where our valves are used"/>
          </Link>
        </div>
      </div>
      <img alt = "plant" src = "img/plant.png"></img>
    </div>
  )
}


function FounderGreeting(){
  return (
    <div className = "FounderGreeting">
      <div className = "FounderGreetingText">
        <h1>Founder's Greeting</h1>
        <span>
          We will create customer satisfaction through customer-oriented technology and grow into a valuable company that leads the industrial valve industry with passion.GV Korea Co., Ltd. is a company that communicates with customers through technology by applying advanced technology to each product based on passion, challenge, and trust, under the philosophy of “Customer Satisfaction Management.” Will be. Through this vision and philosophy, as a company specializing in industrial valves, we want to grow not only in the domestic market but also as a global company with ceaseless efforts.Also, beyond simply enjoying and creating technology, we want to share the fruits we have achieved for good purposes and values ​​in our society.thank you<br/><br/>GV Korea Co., Ltd. CEO Lee Chun-gyu
        </span>
      </div>
      <img alt = "company" src = "img/company.jpg"></img>
    </div>
  )
}

function MainPage(){
  return(
    <div className = "MainPage">
      <Cover/>
      <Navigation page = "Main"/>
      <Article/>
      <Information/>
      <FounderGreeting/>
      <Banner/>
    </div>
  )
}

function Home(){
    return (
        <MainPage/>
    );
};

export default Home;