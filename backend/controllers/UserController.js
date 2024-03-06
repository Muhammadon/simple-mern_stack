import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const responnse = await User.findAll();
        res.status(200).json(responnse);
    } catch (err) {
        console.log(err.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        const responnse = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(responnse);
    } catch (err) {
        console.log(err.message);
    }
};

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User created successfully"});
    } catch (err) {
        console.log(err.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User updated successfully"});
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User deleted successfully"});
    } catch (err) {
        console.log(err.message);
    }
};