import { helperFunctions } from '../index/index.js';
import { photos } from '../../assets/db/photos_db.js';
import { reviews } from '../../assets/db/reviews_db.js';

import { establishHTML_header } from '../header/header.js';
import { establishHTML_footer } from '../footer/footer.js';


export const establishHTML_main = {
  Banner: function(
    Banner = helperFunctions.generateElement('section',"topBanner"),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    h1 = helperFunctions.generateElement('h1',"","", "Reviews")
  ){
    Banner = helperFunctions.nestChildren(Banner, overlay, h1);
    Banner.style.backgroundImage = `url(../${ photos[4].path })`;
    return Banner;
  },
  constructPage: function(
    headerElement = establishHTML_header.header(),
    MainElement = this.MainElement(),
    footerElement = establishHTML_footer.footer(),
    bodyElement = document.querySelector('body')
  ){
    document.title = "Reviews | Difference Auto-Detailing";
    bodyElement = helperFunctions.appendChildren(document.querySelector('body'), headerElement, MainElement,footerElement);
  },
  MainContent: function(
    section = helperFunctions.generateElement('section',"mainContent"),
    contentHolder = helperFunctions.generateElement('div',"contentHolder"),
  ){
    reviews.forEach(r => {
      
      contentHolder.appendChild(this.SingleReview(r))
    });

    contentHolder = helperFunctions.appendChildren(contentHolder);
    section = helperFunctions.nestChildren(section, contentHolder);
    
    return section;
  },
  MainElement: function(
    Banner = this.Banner(),
    MainContent = this.MainContent(),
    Main = helperFunctions.generateElement('main')
  ){
    Main = helperFunctions.appendChildren(Main, Banner, MainContent);
    return Main;
  },
  SingleReview: function(
    review,
    article = helperFunctions.generateElement('article',"","review"),
    name = helperFunctions.generateElement('h3',"","",review.reviewer),
    reviewDate = helperFunctions.generateElement('span',"","",review.reviewDate),
    starCount = helperFunctions.generateElement('span',"","",review.starCount),
    div = helperFunctions.generateElement('div',"","row"),
    p = helperFunctions.generateElement('p',"","",review.reviewText)
  ){
    div = helperFunctions.appendChildren(div, starCount, reviewDate);
    article = helperFunctions.appendChildren(article, name, div, p);
    return article;
  }
}

establishHTML_main.constructPage();