/* global module */

import '@babel/polyfill';
import * as T from 'terrific';
import $ from 'jquery';
import { hot } from '@gondel/plugin-hot';

import './shared/base/security/js/security';
import './shared/base/reset/css/reset.scss';
import './shared/utils/grid/css/grid.scss';
import './shared/base/document/css/document.scss';
import './shared/base/webfonts/css/webfont-gaegu.scss';
import './shared/base/webfonts/css/webfont-playfair-display.scss';

// This because we need styles on views
import './views/css/aboutme.scss';
import './views/css/projects.scss';
import './views/css/index.scss';

import './patterns/molecules/navigation';
import './patterns/molecules/hamburger';
import './patterns/atoms/heading';
import './patterns/atoms/image';
import './patterns/atoms/button';


hot(module);

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line

// terrificjs
$(() => {
	const application = new T.Application();
	application.registerModules();
	application.start();
});