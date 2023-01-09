import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { features } from '../../assets/db/features_db.js';
import { deals } from '../../assets/db/deals_db.js';
import { copy } from '../../assets/db/copy_db.js';

import { establishHTML_header } from '../header/header.js';
import { establishHTML_footer } from '../footer/footer.js';


export const establishHTML_main = {
  Banner: function(
    Banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h1 = helperFunctions.generateElement('h1',"","", "Deals")
  ){
    Banner = helperFunctions.nestChildren(Banner, overlay, h1);
    Banner.style.backgroundImage = `url(../${ photos[2].path })`;
    return Banner;
  },
  DealsHolder: function(
    dealsHolder = helperFunctions.generateElement("div","dealsHolder"),
    h2 = helperFunctions.generateElement('h2',"","","Options"),
    h3_deals = helperFunctions.generateElement('h3',"","","Deal Options"),
    h3_features = helperFunctions.generateElement('h3',"","","Bonus Options"),
    note = helperFunctions.generateElement('span',"","note",copy.OneLiners.DealsNote)
  ){
    dealsHolder = helperFunctions.appendChildren(dealsHolder, h2, h3_deals);

    this.Deals_Options("Deal Option", dealsHolder);
    dealsHolder.appendChild(h3_features);
    this.Deals_Options('Bonus Option', dealsHolder);
    dealsHolder.appendChild(note);
    

    return dealsHolder;
  },
  Deals_Options: function(type, holder){
    deals.forEach(d => {
      if (d.type == type){
        let row = helperFunctions.generateElement('div',"","row");
        let deal_span = helperFunctions.generateElement('span',"","", d.deal);
        let price_span = helperFunctions.generateElement('span',"","",`$${d.price}`);
        row = helperFunctions.appendChildren(row, deal_span, price_span);
        holder.appendChild(row);
      };  
    });
  },
  FeaturesHolder: function(
    featuresHolder = helperFunctions.generateElement("div","featuresHolder"),
    h2 = helperFunctions.generateElement('h2',"","","Features"),
    ul = helperFunctions.generateElement('ul'),
    note = helperFunctions.generateElement('span',"","note",copy.OneLiners.FeaturesNote)
  ){
    features.forEach(f => {
      let li = helperFunctions.generateElement('li',"","",f.name);
      ul.appendChild(li);
    });
    featuresHolder = helperFunctions.appendChildren(featuresHolder, h2, ul, note);

    return featuresHolder;
    },
  constructPage: function(
    headerElement = establishHTML_header.header(),
    MainElement = this.MainElement(),
    footerElement = establishHTML_footer.footer(),
    bodyElement = document.querySelector('body')
  ){
    this.DealsHolder();
    document.title = "Deals | Difference Auto-Detailing";
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, MainElement,footerElement);
  },
  MainContent: function(
    section = helperFunctions.generateElement('section',"mainContent"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    contentHolder = helperFunctions.generateElement('div',"contentHolder"),
    dealsHolder = this.DealsHolder(),
    featuresHolder = this.FeaturesHolder(),
  ){
    contentHolder = helperFunctions.appendChildren(contentHolder, dealsHolder, featuresHolder);
    section = helperFunctions.nestChildren(section, overlay, contentHolder);
    
    return section;
  },
  MainElement: function(
    Banner = this.Banner(),
    MainContent = this.MainContent(),
    Main = helperFunctions.generateElement('main')
  ){
    Main = helperFunctions.appendChildren(Main, Banner, MainContent);
    MainContent.style.backgroundImage = (`url(../${photos[3].path})`);
    return Main;
  }
}

establishHTML_main.constructPage();