import { helperFunctions } from '../index/index.js'
import { establishHTML_nav } from './nav.js';
import { photos } from '../../assets/db/photos_db.js';

export const establishHTML_header = {
  header: function(
    bothNavs = establishHTML_nav.nav(),
    logoElement = this.logo(),
    headerElement = helperFunctions.generateElement('header')
  ){
    headerElement = helperFunctions.appendChildren(headerElement, logoElement, bothNavs[0], bothNavs[1]);
    // document.querySelector('body').appendChild(headerElement);
    return headerElement;
  },
  logo: function(
    logoPath = "/assets/imgs/other/Logo.png",
    figure = helperFunctions.generateElement('a', "logoHolder","","",establishHTML_nav.chooseNavData().home.path),
    img = helperFunctions.generateElement('img',"logo","","",`${logoPath}`)
  ){
    figure.appendChild(img);
    return figure;
  }
}

establishHTML_header.header();