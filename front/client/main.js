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
// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
