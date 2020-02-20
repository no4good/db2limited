const messagesRoutes = require('./messages.routes');

module.exports = (app) => {
  app.use('/api/messages', messagesRoutes);
};
