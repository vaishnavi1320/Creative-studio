import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>about</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">services</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href=" " id="navbarDropdownpro"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        portfolio
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownpro">
                                        <a className="dropdown-item" href="portfolio">portfolio</a>
                                        <a className="dropdown-item" href="portfolio_detail">portfolio details</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/blog"> blog</a>
                                        <a className="dropdown-item" href="/single_blog">Single blog</a>
                                    </div>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown cart">
                            <a className="dropdown-toggle" href="#!" id="navbarDropdown3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="flaticon-bag"></i>
                            </a>
                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="single_product">
    
                                    </div>
                                </div> 
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  
  )
}

export default Navbar
