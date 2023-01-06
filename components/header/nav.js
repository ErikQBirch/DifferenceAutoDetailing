import { helperFunctions } from '../index/index.js';
import { navData, navData_index } from "../../assets/db/nav_db.js" ;

export const establishHTML_nav = {
  chooseNavData: function(
    urlKey = this.getUrlKey()
  ){
    let navOptions;

    console.log(urlKey)
    switch(urlKey){
      case "deals":
      case "reviews":
      case "about":
      case "contact":
        navOptions = navData
        console.log("navData")
        break;
      default:
        navOptions = navData_index
        console.log("navData_index")
        break;
    }
  
    return navOptions;
  },
  clickNavBtn: function(
    mobileNav = document.getElementById('mobileNav')
  ){
    mobileNav.classList.toggle('open');
  },

  fillNav: function(navOption, ulElement){
    for (let i in navOption){
      let li = helperFunctions.generateElement('li');
      let a = helperFunctions.generateElement('a',"","",navOption[i].label,navOption[i].path);
      li.appendChild(a);
      ulElement.appendChild(li);
    }
    return ulElement;
  },
  getUrlKey: function(
    url = window.location.href
  ){
    let urlKey;
    for (let navOption in navData){
      if (url.includes(navOption)){
        urlKey=navOption;
      }
    }
    
    if (urlKey == undefined){
      urlKey = "Index";
    }
  
    return urlKey;
  },

  menuBtn: function(
    menuBtn = helperFunctions.generateElement('div',"menuBtn"),
    burger = helperFunctions.generateElement('span',"","burger")
  ){
    menuBtn.appendChild(burger);
    return menuBtn;
  },
  nav: function(
    navOption = this.chooseNavData(),
    nav = helperFunctions.generateElement("nav","mainNav"),
    nav_ul = helperFunctions.generateElement("ul"),
    mobileNav = helperFunctions.generateElement('section',"mobileNav"),
    navOption_holder = helperFunctions.generateElement('div',"navOption_holder"),
    mobileNav_ul = helperFunctions.generateElement('ul')
  ){

    let returnPackage = [];

    nav_ul = this.fillNav(navOption,nav_ul);
    mobileNav_ul = this.fillNav(navOption,mobileNav_ul);
   
    nav.appendChild(nav_ul);
    mobileNav.appendChild(this.menuBtn());
    navOption_holder.appendChild(mobileNav_ul)
    mobileNav.appendChild(navOption_holder);
  

    mobileNav.children[0].addEventListener('click',()=>{
      this.clickNavBtn();
    })
    mobileNav.children[1].addEventListener('click',()=>{
      this.clickNavBtn();
    })



    returnPackage = [nav, mobileNav];

    return returnPackage;
  }



}
