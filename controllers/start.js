'use strict';

import logger from "../utils/logger.js";


const start = {
  createView(request, response) {
    response.send('Welcome to the Playlist app!');   
  },
};

export default start;
