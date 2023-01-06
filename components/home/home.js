import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { features } from '../../assets/db/features_db.js';
import { copy } from '../../assets/db/copy_db.js';

export const establishHTML_main = {
  banner: function(
    banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h1 = helperFunctions.generateElement('h1',"","", copy.OneLiners.HomePageInfo)
  ){
    banner = helperFunctions.nestChildren(banner, overlay, h1);
    banner.style.backgroundImage = `url(${ photos[0].path })`;
    // banner.style.backgroundColor = "red";
    return banner;
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
      return article;
  },
  mainContent: function(
    section = helperFunctions.generateElement('section'," mainContent"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    contentHolder = helperFunctions.generateElement('div',"contentHolder")
  ){
    section = helperFunctions.nestChildren(section, overlay, contentHolder);
    console.log(features);
    features.forEach(f => {
      let article = this.featureCard(f.name);
      section.appendChild(article);
    });
    return section;
  },
  main: function(
    banner = this.banner(),
    mainContent = this.mainContent(),
    main = helperFunctions.generateElement('main')
  ){
    main = helperFunctions.appendChildren(main, banner, mainContent);
    console.log(main);
    document.querySelector('body').appendChild(main);
  }
}

establishHTML_main.main();