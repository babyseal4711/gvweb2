import React from 'react';
import Navigation from './Navigation'
import Banner from './Banner';
import '../products.css';

function ButterflyValveContentBox(props){
    return (
        <div className='ButterflyValveContentBox'>
            <h1>{props.title}</h1>
        </div>
    );
}

function ButterflyValvesList(){
    return (
        <div className='ButterflyValve'>
            <div className='ButterflyVavleTitle'>
                <span>Products</span>
                <h1>Butterfly Valves</h1>
            </div>
            
            <div className='ButterflyValveList'>
                <ButterflyValveContentBox title = "GVK-1000"/>
                <ButterflyValveContentBox title = "GVK-2000"/>
                <ButterflyValveContentBox title = "GVK-3000"/>
            </div>
        </div>
    );
}

function Products(){
    return (
        <div className = "Products">
            <Navigation/>
            <ButterflyValvesList/>
            <div className='banner_bottom' id = "banner_product">
                <Banner/>
            </div>
        </div>
    );
}

export default Products;