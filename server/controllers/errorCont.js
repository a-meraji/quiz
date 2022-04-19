export default function errorController (code, err, res) {
    console.log(err);
    var error = err.message?err.message:err
      return res.status(code).json({
        status: 'error',
        message: error,
      })
    };