import { helperFunctions } from '../index/index.js';
import { contact } from '../../assets/db/contact_db.js';

export const establishHTML_footer = {
  footer: function(
    footerElement = helperFunctions.generateElement('footer'),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    article = helperFunctions.generateElement('article'),
    h3 = helperFunctions.generateElement('h3',"","","Contact"),
    infoHolder = helperFunctions.generateElement('div','infoHolder')
  ){
    for (let info in contact){
      if (info == "facebook"){
        let p = helperFunctions.generateElement('p');
        let a = helperFunctions.generateElement('a',"","","Facebook",`${contact[info]}`); 
        infoHolder = helperFunctions.nestChildren(infoHolder,p,a)
      }
      else {
        let p = helperFunctions.generateElement('p',"","",`${contact[info]}`)
        infoHolder.appendChild(p);
      }
    }
    footerElement = helperFunctions.nestChildren(footerElement, overlay, article, h3);
    article.appendChild(infoHolder);
    document.querySelector('body').appendChild(footerElement);
    return footerElement;
  }
}
