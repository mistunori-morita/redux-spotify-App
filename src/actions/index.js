import axios from 'axios'
import { TrackHandler, Client } from 'spotify-sdk'

let client = Client.instance;
client.settings = {
  clientId: '3078b085694a484ebe721321ab6243d6',
  secretId: '96bca18302604997a628842f39e9e851',
  scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
  redirect_uri: 'http://localhost:5050/'
}


export const checkSignIn = () => {
  return(dispatch, getState) => {
    if(sessionStorage.token){
      client.token = sessionStorage.token;
    }else if(window.location.hash.split('&')[0].split('=')[1]){
      sessionStorage.token = window.location.hash.split('&')[0].split('=')[1];
      client.token = sessionStorage.token;
    }else{
      client.login()
      .then( url => {
        window.location.href = url;
      })
    }
  }
}

const startFetch = () => {return {type: 'IS_FETCHING', isFetching: true }};
const errorFetch = (err) => { return {type: 'ERROR_FETCH', isFetching: false, err}}
const completeFetch = (data) => { return {type: 'COMPLETE_FETCH', isFetching: false, payload: data}}

export const search = (trackName) => {
  return (dispatch, getState) => {
    dispatch(startFetch());
    
    let track = new TrackHandler();

    track.search(trackName, { limit: 5 })
    .then( trackCollection => {
      console.log(trackCollection)
      dispatch(completeFetch(trackCollection))
    })
    .catch(err => {
      dispatch(errorFetch(err))
    })
  }
}