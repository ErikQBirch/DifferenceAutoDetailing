import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { copy } from '../../assets/db/copy_db.js';

import { establishHTML_header } from '../header/header.js';
import { establishHTML_footer } from '../footer/footer.js';


export const establishHTML_main = {
  Banner: function(
    Banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    bio = helperFunctions.generateElement('div',"bio"),
    h1 = helperFunctions.generateElement('h1',"","","Get to know your Detailer"),
    p = helperFunctions.generateElement('p',"","",copy.AboutInfo.Bio), 
    figure = helperFunctions.generateElement('figure'),
    img = helperFunctions.generateElement('img',photos[8].alt,"","",`../${photos[8].path}`)
  ){
    bio = helperFunctions.appendChildren(bio, h1, p);
    Banner = helperFunctions.nestChildren(Banner, overlay, bio);
    figure.appendChild(img);
    overlay.appendChild(figure);
    Banner.style.backgroundImage = `url(../${ photos[7].path })`;
    return Banner;
  },
  constructPage: function(
    headerElement = establishHTML_header.header(),
    MainElement = this.MainElement(),
    footerElement = establishHTML_footer.footer(),
    bodyElement = document.querySelector('body')
  ){
    document.title = "About | Difference Auto-Detailing";
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, MainElement,footerElement);
  },
  MainContent: function(
    section = helperFunctions.generateElement('section',"mainContent"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    why = helperFunctions.generateElement('div',"why"),
    h1 = helperFunctions.generateElement('h1',"","","Why Choose Difference Detailing"),
    p = helperFunctions.generateElement('p',"","",copy.AboutInfo.Why),
    contentHolder = helperFunctions.generateElement('div',"contentHolder"),
  ){

    why = helperFunctions.appendChildren(why, h1,p);
    contentHolder.appendChild(why);
    section = helperFunctions.nestChildren(section, overlay, contentHolder);
    
    return section;
  },
  MainElement: function(
    Banner = this.Banner(),
    MainContent = this.MainContent(),
    Main = helperFunctions.generateElement('main')
  ){
    Main = helperFunctions.appendChildren(Main, Banner, MainContent);
    MainContent.style.backgroundImage = (`url(../${photos[6].path})`);
    return Main;
  },
}

establishHTML_main.constructPage();