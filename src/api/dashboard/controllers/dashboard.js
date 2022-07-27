"use strict";

/**
 *  dashboard controller
 */

const schema = require("../content-types/dashboard/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::dashboard.dashboard", schema);
