import React from 'react';
import '../styles/MainMenu.css';




const MainMenu = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar2">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" id='menu-brand' href="#">Menu</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="menu-items-container">
                    <li className="nav-item active">
                        <a className="nav-link" id='menu-items' href="#">Arabic Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id='menu-items' href="#">English Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id='menu-items' href="#">German Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id='menu-items' href="#">Translation Books</a>
                    </li>
                    </ul>
                </div>  
        </nav>
    );
};




export default MainMenu;