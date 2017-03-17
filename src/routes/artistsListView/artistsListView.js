import './artistsListView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

class ArtistsListView extends Component {
    render() {
        return (
            <article className="artists-list-view">
                <header className="artists-list-view__header">
                    <img src={logo} className="artists-list-view__logo" alt="logo" />
                </header>
                <header className="artists-list-view__title">
                    <h1>Artists</h1>
                    <p>You are currently searching: $(".main-view__search-query").val();</p>
                </header>
                <div className="artists-list-view__search">
                    <input type="text" className="artists-list-view__search-query" placeholder="Search for your favorite artist here..." />
                </div>
                <nav className="artists-list-view__nav">
                    <ul>
                        <li><Link to="./mainView">Main View</Link></li>
                        <li>></li>
                        <li><Link to="./artistsListView">Artists List View</Link></li>
                        <li>></li>
                        <li><Link to="./artist">Artist</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="artists-list-view__results">
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Artist</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Artist</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Artist</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Artist</h4>
                        </div>
                    </div>
                </div>
                <footer className="artists-list-view__footer"></footer>
            </article>
        );
    }
}

export default ArtistsListView;