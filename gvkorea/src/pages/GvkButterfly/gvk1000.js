import React from 'react';
import Navigation from './Navigation'
import Banner from './Banner';
import '../../Gvk1000.css';




function Gvk1000(){
    return (
        <div className = "Gvk1000">
            <Navigation/>
            <div className='banner_bottom' id = "banner_product">
                <Banner/>
            </div>
        </div>
    )
}

export default Gvk1000;