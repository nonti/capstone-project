const errorHandler = (statusCode, message) => {
  return (req, res, next) => {
    res.status(statusCode).json({ success: false, message });
  };
};

export default errorHandler;