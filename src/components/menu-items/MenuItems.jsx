import React from 'react';
import './MenuItemsStyle.scss';


const MenuItems = ({ title, imageUrl, size }) => {
    return(
        <div className={`${size} menu-item`}>
            <div className='backgroundImage' style={{backgroundImage: `url(${imageUrl})`}} />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
        </div>
    );
}



export default MenuItems;