import '../App.css';
import '../Nav.css'


function ContentBox(props){
    return (
      <div className = "contentbox">
        <h1>{props.title}</h1>
        <img alt = "content img" src = {props.src}/>
        <div className = "activebox"></div>
        <span>{props.txt}</span>
      </div>
    );
}

export default ContentBox;
