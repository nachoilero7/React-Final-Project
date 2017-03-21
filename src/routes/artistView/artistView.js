import './artistView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';
import logo from '../../assets/spotify-logo-.jpg';
import Search from '../components/Search';

var x, qstr;

class ArtistView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artistImage: '',
            artistId: '',
            value:'',
            genero:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.acept = this.acept.bind(this);
    };

    componentWillMount(){
        qstr = this.props.location.search.substring(7);
        this.state.value = qstr;
    }

    handleChange(event) { 
        x = this.state.value;
        window.location.href= '/artistsListView?value='+x;
        event.preventDefault();
    }
 
    acept(event){
        this.setState({value: event.target.value});
    }

    render() {
        const{
            artistName,
            artistImage,
            artistId,
            infoStatus,
            value,
            genero
        } = this.state;


        return (
            <article className="artist-view">
                <header className="artist-view__header">
                    <div className="artist-view__header-logo">
                        <img src={logo} className="artist-view__logo" alt="logo" />
                    </div>
                    <div className="artist-view__search">
                         <form name="myForm" action="/artistsListView" onSubmit={this.handleChange} method="get">
                           <input type="text" id="artista" className="artist-view__search-query" onChange={this.acept} placeholder="Type the name of your favorite artist..." /> 
                           <input type="submit" value="search"/>
                        </form>
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
                <hr/>
                <nav className="artist-view__nav">
                    <ul>
                        <li><Link className="links" to="./mainView">Main View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistsListView">Artists List View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artist">Artist</Link></li>
                    </ul>
                </nav>

                <footer className="home-view__footer">
                     <img src={logogif} className="home-view__logo" alt="logo" />
                </footer>
            </article>
        );
    }
}

export default ArtistView;
