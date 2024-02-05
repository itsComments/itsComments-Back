const createError = require("http-errors");

async function errorHandlerLoader(app) {
  app.use(function (req, res, next) {
    next(createError(404));
  });

  app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
  });
}

module.exports = errorHandlerLoader;
