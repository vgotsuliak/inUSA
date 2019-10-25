import _ from 'lodash';
import { GET_IP_INFO_SUCCESS } from './types';

export const getIpInfo = dispatch => () => {
  fetch('https://jsonip.com/')
    .then(res => res.json())
    .then(res => fetch(`http://api.ipapi.com/${res.ip}?access_key=0852af120dae463745a1efbabd185d69&format=1`))
    .then(res => res.json())
    .then(ipInfo => {
      if (isUS(ipInfo.country_code)) {
        return dispatch({
          type: GET_IP_INFO_SUCCESS,
          payload: { us: true, location: `${ipInfo.city}, ${ipInfo.country_name}` }
        })
      }
      return fetch(`/maps/api/directions/json?origin=${ipInfo.city}&destination=Washington+DC&key=AIzaSyBSk1lEl1YEgspCS2U6l9Dtyaf2gyHHi-U`)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: GET_IP_INFO_SUCCESS,
            payload: { us: false, location: `${ipInfo.city}, ${ipInfo.country_name}`, distance: Number(_.get(res, 'routes[0].legs[0].distance.value', 0) / 1609.344).toFixed(2) },
          })
        });
    });
}

const isUS = (countryCode) => {
  return countryCode === 'US';
} 
