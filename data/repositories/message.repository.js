const MessageModel = require('../models/message');

class MessageRepository {
  constructor(message) {
    this.message = message;
  }

  getlist(n) {
    return this.message
      .find()
      .limit(10)
      .skip(n * 10);
  }

  getById(id) {
    return this.message.findById(id);
  }

  create(data) {
    return this.message.create(data);
  }
}

module.exports = new MessageRepository(MessageModel);
