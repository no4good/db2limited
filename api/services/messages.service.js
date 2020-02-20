const messageRepository = require('../../data/repositories/message.repository');

const getMessageById = async messageId => {
  const message = await messageRepository.getById(messageId);
  if (!message || undefined) {
    const error = new Error('Message  not found');
    error.status = 404;
    return Promise.reject(error);
  }
  return message;
};

const getMessageList = async n => {
  const reg = /^[0-9]*$/;
  if (!reg.test(n)) {
    const error = new Error('Parameter must be number');
    error.status = 400;
    return Promise.reject(error);
  }
  const resonse = await messageRepository.getlist(n);
  if (resonse.length === 0) {
    const error = new Error(`Page ${n}  not found`);
    error.status = 404;
    return Promise.reject(error);
  }
  return resonse;
};

const createMessage = async ({ email, text }) => {
  if (!email || !text) {
    const error = new Error('All fields are required');
    error.status = 400;
    return Promise.reject(error);
  }
  const result = await messageRepository.create({ email, text });
  return result;
};

module.exports = {
  getMessageById,
  getMessageList,
  createMessage
};
