
export const jsonErrorHandler = (err, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  console.log(err);
  res.status(err.status);
  res.send({
    status: err.status,
    message: err.message
  });
};
