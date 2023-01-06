import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { features } from '../../assets/db/features_db.js';
import { deals } from '../../assets/db/deals_db.js';
import { copy } from '../../assets/db/copy_db.js';

import { establishHTML_header } from '../header/header.js';
import { establishHTML_footer } from '../footer/footer.js';


export const establishHTML_main = {
  banner: function(
    banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h1 = helperFunctions.generateElement('h1',"","", copy.OneLiners.HomePageInfo)
  ){
    banner = helperFunctions.nestChildren(banner, overlay, h1);
    banner.style.backgroundImage = `url(${ photos[0].path })`;
    return banner;
  },
  constructPage: function(
    headerElement = establishHTML_header.header(),
    mainElement = this.mainElement(),
    footerElement = establishHTML_footer.footer(),
    bodyElement = document.querySelector('body')
  ){
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, mainElement,footerElement);
    
  },
  featureCard: function(
    feature,
    article = helperFunctions.generateElement('article'),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h3 = helperFunctions.generateElement('h3',"","",feature),
    dealsBtn = helperFunctions.generateElement('button',"","","See Deals","/pages/deals.html"),
    sampleBtn = helperFunctions.generateElement('button',"","","View Sample")
    ){
      
      article = helperFunctions.nestChildren(article, overlay, h3);
      overlay = helperFunctions.appendChildren(overlay, dealsBtn, sampleBtn);

      let img; 
      photos.forEach(p => {
        if (p.category == feature && p.type == "thumbnail"){
          img = helperFunctions.generateElement('img',p.alt,"","",p.path)
        }
        
      });
      article.appendChild(img);
      return article;
  },
  mainContent: function(
    section = helperFunctions.generateElement('section',"mainContent"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    contentHolder = helperFunctions.generateElement('div',"contentHolder")
  ){
    section = helperFunctions.nestChildren(section, overlay, contentHolder);
    
    features.forEach(f => {
      let article = this.featureCard(f.name);
      contentHolder.appendChild(article);
    });

    deals.forEach(d => {
      if (d.type == "Bonus Option"){
        let article = this.featureCard(d.deal);
        contentHolder.appendChild(article);
      }
    });
    return section;
  },
  mainElement: function(
    banner = this.banner(),
    mainContent = this.mainContent(),
    main = helperFunctions.generateElement('main')
  ){
    main = helperFunctions.appendChildren(main, banner, mainContent);
    mainContent.style.backgroundImage = (`url(${photos[1].path})`);
    return main;
  }
}

establishHTML_main.constructPage();