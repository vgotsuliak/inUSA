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
      return fetch(`/maps/api/directions/json?origin=New+York&destination=Washington+DC&key=AIzaSyBSk1lEl1YEgspCS2U6l9Dtyaf2gyHHi-U`)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: GET_IP_INFO_SUCCESS,
            payload: { us: false, location: `${ipInfo.city}, ${ipInfo.country_name}`, distance: _.get(res, 'routes[0].legs[0].distance.value', 0) }
          })
        });
    });
}

const isUS = (countryCode) => {
  return countryCode === 'US';
} 
