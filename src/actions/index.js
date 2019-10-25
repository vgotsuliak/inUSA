import { GET_IP_INFO_SUCCESS } from './types';

export const getIpInfo = dispatch => () => {
  fetch('https://jsonip.com/')
  .then(res => res.json())
  .then(res =>fetch(`http://api.ipapi.com/${res.ip}?access_key=0852af120dae463745a1efbabd185d69&format=1`))
  .then(res => res.json())
  .then(res => {
    if (isUS(res.country_code)) {
      console.log(res);
    }
    return res;
  }).then(res => fetch(`/maps/api/directions/json?origin=${res.city}&destination=Washington+DC&key=AIzaSyBSk1lEl1YEgspCS2U6l9Dtyaf2gyHHi-U`))
  .then(res => res.json())
  .then(res => console.log(res));
}

const isUS = (countryCode) => {
  return countryCode === 'US';
} 
