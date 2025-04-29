exports.middlewareGlobal = (req, res, next) => {

  if (req.body) {
    req.body.cliente = req.body.cliente.replace('Joaquim', 'Não use Joaquim');

    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`);

    console.log();
  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
}