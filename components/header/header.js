import { helperFunctions } from '../index/index.js'
import { establishHTML_nav } from './nav.js';

export const establishHTML_header = {
  header: function(
    bothNavs = establishHTML_nav.constructNav(),
    logoElement = this.logo(),
    headerElement = helperFunctions.generateElement('header')
  ){
    headerElement = helperFunctions.appendChildren(headerElement, logoElement, bothNavs[0], bothNavs[1]);
    // document.querySelector('body').appendChild(headerElement);
    return headerElement;
  },
  logo: function(
    logoPath = "assets/imgs/other/Logo.png",
    figure = helperFunctions.generateElement('a', "logoHolder","","","index.html"),
    img = helperFunctions.generateElement('img',"logo","","",`${logoPath}`)
  ){
    let isIndex = establishHTML_nav.determineLocation()
    if(isIndex == false){
      figure = helperFunctions.generateElement('a', "logoHolder","","","../index.html");
      img = helperFunctions.generateElement('img',"logo","","",`../${logoPath}`);
    }
    console.log(img);
    console.log(logoPath);
    figure.appendChild(img);
    return figure;
  }
}
