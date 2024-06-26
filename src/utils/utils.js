const requiredParams = (res, statusCode, msg) => {
    return res.status(statusCode).send({
        success: false,
        message: msg
    });
};

module.exports = { requiredParams };