const  usersService  = require("../services/usersService");
const { httpError,messagePersonalized } = require('../helpers/handleMessage');

const getAll = async (req, res) => {
    try {
        const response = await usersService.getAll();
        if(response.length > 0){
           return messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            return messagePersonalized(res,404,'No hay informacion',response);
        }
    } catch (e) {
        httpError(res, e)
    }
}

const create = async (req, res) => {
    try {
        const body = req.body;
        const response = await usersService.create(body);

        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await usersService.update(_id,req.body);
        if(response === null){
           return messagePersonalized(res,404,'No encontrado',_id);
        }
        messagePersonalized(res,200,'Actualizado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

const deleteId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await usersService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getAll , create  , update , deleteId }