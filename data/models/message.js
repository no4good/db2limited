const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      maxlength: 32,
      validate: {
        validator(value) {
          // eslint-disable-next-line
          const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          return reg.test(value);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      required: [true, 'email required'],
    },
    text: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('message', messageSchema);
