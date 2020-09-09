import {citys} from "./countris"
import _ from 'lodash';
// import {countris} from 
function component() {
    const element = document.createElement('div');
  
    //    Lodash, now imported by this script

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
  document.body.appendChild(component());

console.log(citys);