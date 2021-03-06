import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArtistsListView from '../artistsListView/artistsListView';
import ArtistView from '../artistView/artistView';
import AlbumView from '../albumView/albumView';

export default class Utils {

    static getArtists (data) {
        var i='',j='', 
        res = document.getElementById("resultado-artista");
        while (res != null && res.firstChild) {
            res.removeChild(res.firstChild);
        }       
        let resultado_general = document.createElement("div");
        resultado_general.className = "artist-view__results";
        for(i in data.artists){
            if(i == 'items'){
                for(j in data.artists[i]){
                    let resultado_individual = document.createElement("div");
                    resultado_individual.className = "box-artist";
                    let resultado_individual_img = document.createElement("div");
                    resultado_individual_img.className = "box-artist-img";

                    let img = document.createElement("img");
                    img.className = "imgArtist";
                    img.alt = "No image";
                    let x = "";
                    for( x in data.artists[i][j].images){
                        img.src = data.artists[i][j].images[x].url;
                    }
                    resultado_individual_img.appendChild(img);
                    resultado_individual.appendChild(resultado_individual_img);

                    let resultado_individual_info = document.createElement("div");
                    resultado_individual_info.className = "box-artist-title";

                    let info = document.createElement("a");
                    var linkText = document.createTextNode(`${data.artists[i][j].name}`);
                    linkText.onClick = function(){
                        var nameArtist = document.getElementById("artist-box-nombre-title");
                        var t = document.createTextNode(data.artists[i][j].name);
                        nameArtist.appendChild(t);
                    };
                    info.appendChild(linkText);
                    info.title = "my title text";
                    info.href = "./artistView?value="+`${data.artists[i][j].id}`;

                    resultado_individual_info.appendChild(info);
                    resultado_individual.appendChild(resultado_individual_info);

                    resultado_general.appendChild(resultado_individual);
                }
            }
        }
        if(res != null)
          res.appendChild(resultado_general);
    }

    static getAlbums (data) {
        var i='',j='', 
        res = document.getElementById("resultado-album");
        while (res != null && res.firstChild) {
            res.removeChild(res.firstChild);
        }        
        let resultado_general = document.createElement("div");
        resultado_general.className = "artist-view__results";
        var princ = `false`;
        for(i in data.items){
            let resultado_individual = document.createElement("div");
            resultado_individual.className = "box-album";
            let resultado_individual_img = document.createElement("div");
            resultado_individual_img.className = "box-album-img";

            let img = document.createElement("img");
            img.className = "imgArtist";
            img.alt = "No image";
            let x = "";
            for( x in data.items[i].images){
                if(princ === `false`){
                    var imgPrinc = document.getElementById("img-artist-album");
                    if(data.items[i].images[x].url !== null){
                        imgPrinc.src = data.items[i].images[x].url;
                        princ = `true`;
                    }
                }
                img.src = data.items[i].images[x].url;
            }
            resultado_individual_img.appendChild(img);
            resultado_individual.appendChild(resultado_individual_img);

            let resultado_individual_info = document.createElement("div");
            resultado_individual_info.className = "box-album-title";

            let info = document.createElement("a");
            var linkText = document.createTextNode(`${data.items[i].name}`);
            info.appendChild(linkText);
            info.title = "my title text";
            info.href = "./albumView?value="+`${data.items[i].id}`;
            resultado_individual_info.appendChild(info);
            resultado_individual.appendChild(resultado_individual_info);

            resultado_general.appendChild(resultado_individual);
        }
        if(res != null)
          res.appendChild(resultado_general);
    }

    static getTracks (data) {
        var i='',j='', 
        res = document.getElementById("resultado-tracks");
        while (res != null && res.firstChild) {
            res.removeChild(res.firstChild);
        }      
        let resultado_general = document.createElement("div");
        resultado_general.className = "artist-view__results";
        var princ = `false`;
        for(i in data.items){
            let resultado_individual = document.createElement("div");
            resultado_individual.className = "box-track";
            
            let resultado_individual_info = document.createElement("div");
            resultado_individual_info.className = "box-track-title";

            let info = document.createElement("h2");
            info.className = "infoTrack";
            info.innerText = `${data.items[i].name}`;
            
            resultado_individual_info.appendChild(info);

            let resultado_individual_audio = document.createElement("div");
            resultado_individual_audio.className = "box-track-audio";
            
            let audio = document.createElement("audio");
            audio.className = "audioTrack";
            audio.controls = "controls";
            audio.src = `${data.items[i].preview_url}`;

            resultado_individual_audio.appendChild(audio);
            
            resultado_individual.appendChild(resultado_individual_info);
            resultado_individual.appendChild(resultado_individual_audio);
            resultado_general.appendChild(resultado_individual);
        }
        if(res != null)
          res.appendChild(resultado_general);
    }
}
