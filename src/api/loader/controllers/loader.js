"use strict";

/**
 *  loader controller
 */

const schema = require("../content-types/loader/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::loader.loader", schema);

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::loader.loader');
