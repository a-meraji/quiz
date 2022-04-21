export default function errorController (code, err, res) {
    console.log("handeled ERROR: ",err);console.log("code: ",code);
    var error = err.message?err.message:err
      return res.status(code).json({
        status: 'error',
        message: error,
      })
    };