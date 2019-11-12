'use strict';

function DomElement(selector, height, width, background, frontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = background;
    this.frontSize = frontSize;
}

let newElem = prompt("ВВедите селектор с значением '.' либо '#'");

DomElement.prototype.createElem = function(){
    if(this.selector[0] === '.'){
        newElem = document.createElement('div');
        newElem.classList.add(this.selector.substr(1));
    } else if(this.selector[0] === '#'){
        newElem = document.createElement('p');
    }
    newElem.textContent = "Чо там.";
    newElem.style.cssText = 'height: ${this.height}px; width: ${this.width}px; background: ${this.background}; font-size: ${this.frontSize}px';
};

let someElem = new DomElement(newElem, 400, 400, 'silver', 24);
someElem.createElem();
document.body.appendChild(newElem);