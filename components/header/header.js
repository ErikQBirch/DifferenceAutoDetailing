import { helperFunctions } from '../index/index.js'
import { establishHTML_nav } from './nav.js';

export const establishHTML_header = {
  header: function(
    bothNavs = establishHTML_nav.nav(),
    logoElement = this.logo(),
  ){
    let headerElement = helperFunctions.generateElement('header');
    headerElement = helperFunctions.appendChildren(headerElement, logoElement, bothNavs[0], bothNavs[1]);
    console.log(headerElement);
    document.querySelector('body').appendChild(headerElement);
  },
  logo: function(
    logoPath = "/assets/imgs/other/logo.png",
    figure = helperFunctions.generateElement('a', "logoHolder","","","/index.html"),
    img = helperFunctions.generateElement('img',"logo","","",`${logoPath}`)
  ){
    figure.appendChild(img);
    return figure;
  }
}

establishHTML_header.header();