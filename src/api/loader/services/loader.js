'use strict';

/**
 * loader service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loader.loader');
