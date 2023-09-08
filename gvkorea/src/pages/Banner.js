import React from 'react';
import '../App.css';

function Banner(){
    return (
      <div className = "Banner">
        <div className = "BannerContent_img">
            <img alt = "logo" src = "img/logo.png"></img>
          </div>
        <div className = "BannerContent">
          <div className = "BannerContent_Box">
            <span>Phone Call</span><br/>
            <span>
              +82-10-5181-2362<br/>
              +82-10-3850-4529
            </span>
          </div>
          <div className = "BannerContent_Box">
            <span>Mail</span><br/>
            <span>
              cgl0518@gvkorea.co.kr<br/>
              jhk0518@gvkorea.co.kr
            </span>
          </div>
          <div className = "BannerContent_Box">
            <span>Address</span><br/>
            <span>
              66, Namyeong-ro 527beon-gil,<br/>
              Jinhae-gu, Changwon-si, Gyeongsangnam-do,<br/>
              Republic of Korea
            </span>
          </div>
        </div>
      </div>
    )
  }

  export default Banner;