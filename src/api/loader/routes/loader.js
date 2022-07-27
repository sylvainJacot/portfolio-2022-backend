'use strict';

/**
 * loader router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::loader.loader');
