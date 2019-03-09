/**
 * Report.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    date: {
      type: 'string',
      required: true
    },
    report: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      // unique: true,
      required: true
    }

  },

};

