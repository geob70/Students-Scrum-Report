/**
 * User.js
 * @author :: George Sylvester (geoslyman57@gmail.com)
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcryptjs') 

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    department: {
      type: 'string',
      required: true
    },
    phoneNo: {
      type: 'number',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    }    
  },
  beforeUpdate: function (user, cb) {
    if (user.password) {
      bcrypt.genSalt(10, (err, salt) => {
        if(err) {
          return cb(err)
        } else {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
              return cd(err)
            } else {
              user.password = hash
              return cb(null, user)
            }
          })
        }
      })
    } else {
      return cb();
    }
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return cb(err)
      } else {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            return cd(err)
          } else {
            user.password = hash
            return cb(null, user)
          }
        })
      }
    })
  }

};

