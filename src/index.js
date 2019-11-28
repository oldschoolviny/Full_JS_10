'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import getSailAnchor from './modules/anchorScroll';

import {form, formQuest, formPopup} from './modules/sendForm';

// Timer
countTimer('31 november 2019');
// Меню
toggleMenu();
// popup
togglePopup();
// табы
tabs();
// слайдер
slider();
// фотографии
changePhoto();
// калькулятор расчёта стоимости
calc(100);
// send-ajax-form
sendForm(form);
sendForm(formQuest);
sendForm(formPopup);

getSailAnchor();