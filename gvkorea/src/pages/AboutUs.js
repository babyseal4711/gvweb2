import React from 'react';
import Navigation from './Navigation'
import Banner from './Banner';
import '../aboutus.css';


function AboutUsHead(){
    const Txt = <>"We will create customer satisfaction through customer-oriented technology and grow into a valuable company that leads the industrial valve industry with passion.GV Korea Co., Ltd. is a company that communicates with customers through technology by applying advanced technology to each product based on passion, challenge, and trust, under the philosophy of “Customer Satisfaction Management.” Will be. Through this vision and philosophy, as a company specializing in industrial valves, we want to grow not only in the domestic market but also as a global company with ceaseless efforts.Also, beyond simply enjoying and creating technology, we want to share the fruits we have achieved for good purposes and values ​​in our society.thank you"<br/> <br/>"GV Korea Co., Ltd. CEO Lee Chun-gyu"</>
    return (
        <div className='AboutUsHead'>
            <div className='AboutUsHeadTitle'>
                <span>GV Korea</span>
                <h1>The Most<br/>Powrful<br/>Industrial Valves</h1>
            </div>

        <div className = "AboutUsHeadContent">
            <div className = "AboutUsHeadContentText">
                {Txt}
            </div>
            <div className='AboutUsHeadContentImg'>
                <img alt = "aboutusimg" src = "img/gvk_valve.jpg"/>
            </div>
            
        </div>
        </div>
    );
}

function History(){
    return (
        <div className='History'>
            <h1>History</h1>
            <div className='HistoryImg'>
                <img alt = "history" src = "img/history.png"/>
            </div>
            
        </div>
    )
}


function PhilosophyBlock(props){
    return (
        <div className="philosophy">
            <span><b>{props.title}</b></span><br/><br/>
            <span>{props.txt}</span>
        </div>
    )
}

function Philosophy(){
    const passion = ["Passion", <>passion for organization<br/>passion for technology<br/>passion for yourself</>]
    const challenge = ["Challenge", <>Challenge for change<br/>Challenge to improve your skills<br/>Challenge of improving quality and productivity</>]
    const trust = ["Trust", <>trust in customers<br/>trust in the organization<br/>trust in yourself</>]
    const goal = ["Customer Impression", <>increase sales<br/>Productivity overachievement<br/>Cost Reduction<br/>ZERO defect rate</>]
    return (
        <div className='Philosophy'>
            <h1>Management Philosophy</h1>
            <div className='PhilosophyElement'>
                <PhilosophyBlock title = {passion[0]} txt = {passion[1]}/>
                <PhilosophyBlock title = {challenge[0]} txt = {challenge[1]}/>
                <PhilosophyBlock title = {trust[0]} txt = {trust[1]}/>
            </div>
            <div className='innerLine'>
                <div className='innerLine_inner'>
                </div>
            </div>
            <div className='Goal'>
                <PhilosophyBlock title = {goal[0]} txt = {goal[1]}/>
            </div>
        </div>
    )
}

function Location(){
    return(
        <div  className='Location'>
            <h1>Location</h1>
            <div className='LocationImg'>
                <img alt = "location" src = "img/location.png"/>
            </div>
        </div>
    )
}

function AboutUs(){
    return (
        <div className = "AboutUs">
            <Navigation/>
            <AboutUsHead/>
            <History/>
            <Philosophy/>
            <Location/>
            <div className='banner_bottom'>
                <Banner/>
            </div>
        </div>
    )
}

export default AboutUs;
