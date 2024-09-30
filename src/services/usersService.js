const usersModel = require('../models/usersModel');

const getAll = async () =>{
    try {
        return await usersModel.find({});
    } catch (error) {
        throw error
    }
}

const create = async (body) =>{
    try {
        return await usersModel.create(body);
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await usersModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await usersModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,create ,update ,deleteId }