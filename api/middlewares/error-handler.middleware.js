module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    let { status = 400, message = '' } = err;

    res.status(status).send({ status, message });
  }
};
