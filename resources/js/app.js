require('./bootstrap');
window.$ = window.jQuery = require('jquery');

require('selectize');
window.InscrybMDE = require('inscrybmde');
window.Dropzone = require('dropzone');
require('featherlight');

//require('jquery-ui/ui/widgets/autocomplete');
//require('jquery-resizable/resizable');
// require('jqtree');

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
//UIkit.notification('Welcome to Knowfox.');
