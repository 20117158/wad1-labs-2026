'use strict';

import employees from "../models/employees.js";
import logger from "../utils/logger.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "Playlist App About",
      employees: employees.getAppInfo()
    };
    
    response.render('about', viewData);
  },
};

export default about;
