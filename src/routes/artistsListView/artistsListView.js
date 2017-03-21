import './artistsListView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';
import Search from '../components/Search';

var qstr;

class ArtistsListView extends Component {

   constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artistImage: '',
            artistId: '',
            value:'',
        };
    };

    componentWillMount(){
        qstr = this.props.location.search.substring(7);

        this.state.value = qstr;
    }

    render() {
        const{
            artistName,
            artistImage,
            artistId,
            infoStatus,
            value
        } = this.state;

        let data = null;
        
        return (
            <article className="list-article-principal">
             <div className="list-inside">
                <header className="list-view__title">
                    <p className="list-title">Artists</p>
                </header>
                <Search value={this.state.value}/>


            </div> 

            <nav className="list-view__nav">
                <ul>
                    <li><Link className="links" to="./homeView">Home View</Link></li>
                    <li>></li>
                    <li><Link className="links" to="./artistsListView">Artist List View</Link></li>
                </ul>
            </nav>

            <footer className="list-view__footer">
                <img src={logogif} className="list-view__logo" alt="logo" />
            </footer>
             
           </article>
        );
    }
}

export default ArtistsListView;