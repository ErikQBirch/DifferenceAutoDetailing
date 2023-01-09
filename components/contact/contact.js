import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { reviews } from '../../assets/db/reviews_db.js';

import { establishHTML_header } from '../header/header.js';
import { establishHTML_footer } from '../footer/footer.js';


export const establishHTML_main = {
  Banner: function(
    Banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h1 = helperFunctions.generateElement('h1',"","", "Contact")
  ){
    Banner = helperFunctions.nestChildren(Banner, overlay, h1);
    Banner.style.backgroundImage = `url(../${ photos[9].path })`;
    return Banner;
  },
  constructPage: function(
    headerElement = establishHTML_header.header(),
    MainElement = this.MainElement(),
    footerElement = establishHTML_footer.footer(),
    bodyElement = document.querySelector('body')
  ){
    document.title = "Contact | Difference Auto-Detailing";
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, MainElement,footerElement);
  },
  MainContent: function(
    section = helperFunctions.generateElement('section',"mainContent"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    contentHolder = helperFunctions.generateElement('div',"contentHolder"),
  ){

    contentHolder = helperFunctions.appendChildren(contentHolder);
    section = helperFunctions.nestChildren(section, overlay, contentHolder);
    
    return section;
  },
  MainElement: function(
    Banner = this.Banner(),
    // MainContent = this.MainContent(),
    Main = helperFunctions.generateElement('main')
  ){
    Main = helperFunctions.appendChildren(Main, Banner);
    // MainContent.style.backgroundImage = (`url(../${photos[6].path})`);
    return Main;
  },
}

establishHTML_main.constructPage();