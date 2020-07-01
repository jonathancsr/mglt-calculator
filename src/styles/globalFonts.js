import { createGlobalStyle } from 'styled-components';

import StarJedi from '../assets/fonts/StarJedi.ttf'
import StarJediHollow from '../assets/fonts/StarJediHollow.ttf'


export default createGlobalStyle`
    @font-face {
        font-family: 'StarJedi';
        src: local('StarJedi'), local('StarJediHollow'),
        url(${StarJedi}) format('truetype'),
        url(${StarJediHollow}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;