import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { features } from '../../assets/db/features_db.js';
import { deals } from '../../assets/db/deals_db.js';
import { copy } from '../../assets/db/copy_db.js';
import { contact } from '../../assets/db/contact_db.js';

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
    document.title = "Contact | Difference Auto-Detailing";
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, mainElement,footerElement);
  },
  display: function(
    feature,
    displayElement = helperFunctions.generateElement('div',"display"),
    h1 = helperFunctions.generateElement('h1',"","",feature),
    imgHolder = helperFunctions.generateElement('div',"","imgHolder"),
    facebook = helperFunctions.generateElement('a',"","","See more",contact.facebook)
  ){
    console.log(feature);
    photos.forEach(p => {
      if (p.category == feature && (p.type == "before" || p.type == "after") && p.alt !== "NoImg"){
        let figure = helperFunctions.generateElement('figure');
        let img = helperFunctions.generateElement('img',p.alt,"","",p.path);
        imgHolder = helperFunctions.nestChildren(imgHolder,figure,img);
        // figure.appendChild(img);
      }
    });

    if (imgHolder.children.length == 1){
      imgHolder.classList.add('onlyOne');
    }

    displayElement = helperFunctions.appendChildren(displayElement, h1, imgHolder, facebook);
    displayElement.addEventListener('click',()=>{
      displayElement.remove();
    })
    document.querySelector('main').appendChild(displayElement);
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

      sampleBtn.addEventListener('click', ()=>{
        this.display(feature);
      })
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