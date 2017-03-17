import './artist.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

class Artist extends Component {
    render() {
        return (
            <article className="artist-view">
                <header className="artist-view__header">
                    <div className="artist-view__header-logo">
                        <img src={logo} className="artist-view__logo" alt="logo" />
                    </div>
                    <div className="artist-view__search">
                        <input type="text" className="artist-view__search-query" placeholder="Search for your favorite artist here..." />
                    </div>
                </header>
                <div className="artist-view__info">
                    <div className="artist-view__info-logo">
                        <img src="aca va el path de la imagen" className="logoArtist" />
                    </div>
                    <div className="artist-view__info-title">
                        <h2 className="box-nombre-title">Nombre Artista</h2>
                        <h4 className="box-nombre-title">Genero</h4>
                    </div>
                </div>
                <nav className="artist-view__nav">
                    <ul>
                        <li><Link to="./mainView">Main View</Link></li>
                        <li>></li>
                        <li><Link to="./artistsListView">Artists List View</Link></li>
                        <li>></li>
                        <li><Link to="./artist">Artist</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="artist-view__results">
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                </div>
                <footer className="artist-view__footer"></footer>
            </article>
        );
    }
}

export default Artist;