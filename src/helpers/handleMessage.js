
let httpResponse = {
    status:0,
    message:'',
    response:''
}

const messagePersonalized = (res,status,message,response) => {
    httpResponse.status = status;
    httpResponse.message = message;
    httpResponse.response = response;
    res.send({ response:httpResponse })
    return httpResponse;
}
    
const httpError = (res, error) => {
    httpResponse.status = 500;
    httpResponse.message = 'Error del servidor';
    httpResponse.response = error;
    console.log(httpResponse);
    res.send({ error:httpResponse });
}

module.exports = { messagePersonalized , httpError}