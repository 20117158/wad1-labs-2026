'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employees = {

  store: new JsonStore('./models/employees.json', { info: {}}),
  collection: 'employee',
  

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default employees;