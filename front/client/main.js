import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import { DocHead } from 'meteor/kadira:dochead';
// DocHead.addLink({
//   rel: 'stylesheet',
//   href: '/print.css',
//   media: 'print'
// });
DocHead.addMeta({
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0',
});

const typeKitScript = 'https://use.typekit.net/lib8gaj.js';
DocHead.loadScript(typeKitScript, function() {
  try{Typekit.load({ async: true });}catch(e){console.error(e)}
});


https://use.typekit.net/lib8gaj.js
//// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
