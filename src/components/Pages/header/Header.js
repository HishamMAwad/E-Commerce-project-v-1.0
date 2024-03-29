import React from 'react';
import './Header.css';


const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Book Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                   
            </div>
        </nav>

    );
}




export default Header;



/*<div classNameNameName="header">
            <div classNameNameName='logoName'>Book Store</div>
            <input type='text' placeholder='Search your book ...' classNameNameName='search-bar'/>
            <button classNameNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>*/




