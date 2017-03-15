import './mainView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
//import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

class MainView extends Component {
    render() {
        return (
            <article className="main-view">
                <header className="main-view__header">
                    <img src={logo} className="main-view__logo" alt="logo" />
                </header>
                <header className="main-view__title">
                    <h4>Welcome to</h4>
                    <h1>Spotisearch</h1>
                    <p>Search your favourite song over Spotify, just enter an artist's name in the<br />
                    following search box and enjoy!</p>
                </header>
                <div className="main-view__search">
                    <input type="text" className="main-view__search-query" placeholder="Type the name of your favorite artist..." />
                </div>
                <div className="main-view__favourites">
                    <h3>Favorite Songs</h3>
                    <div className="main-view__favourites-stored">

                    </div>
                </div>
            </article>
        );
    }
}

export default MainView;
