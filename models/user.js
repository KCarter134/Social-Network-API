const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;