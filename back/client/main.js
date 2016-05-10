import {createApp} from 'mantra-core';
import initContext from './configs/context';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { DocHead } from 'meteor/kadira:dochead';
// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';
import accountsModule from './modules/accounts';

// init context
const context = initContext();
DocHead.addLink({
  rel: 'stylesheet',
  href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
});
DocHead.addMeta({
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0',
});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(accountsModule);
app.init();
