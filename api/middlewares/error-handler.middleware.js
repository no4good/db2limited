module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    // eslint-disable-next-line
    let { status = 400, message = '' } = err;

    if (err.code) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = 'Unique field already exists';
          break;
        default:
          message = '';
      }
    }

    res.status(status).send({ status, message });
  }
};
