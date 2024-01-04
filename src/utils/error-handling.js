class BadRequestError extends Error {
    constructor(message = 'Bad Request') {
      super(message);
      this.statusCode = 400;
    }
  }
  
  class NotFoundError extends Error {
    constructor(message = 'Not Found') {
      super(message);
      this.statusCode = 404;
    }
  }
  
  class InternalServerError extends Error {
    constructor(message = 'Internal Server Error') {
      super(message);
      this.statusCode = 500;
    }
  }
  
  const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Etwas ist schief gelaufen';
    res.status(statusCode).json({ error: message });
  };
  
  export default { BadRequestError, NotFoundError, InternalServerError, errorHandler };
  