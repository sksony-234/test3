const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
    const user = await User.create(req.body);

    if (!user) {
        res.status(501).json({
            success: false,
            message: "User Can't be created"
        });
        return;
    }
    res.status(200).json({
        success: true,
        user
    })
};


exports.getAllUser = async (req, res, next) => {
    const users = await User.find();

    if (!users) {
        res.status(501).json({
            success: false,
            message: "User not found"
        });
        return;
    }

    res.status(200).json({
        success: true,
        users
    });
};


exports.deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not found"
        });
        return;
    }

    user.delete();
    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
    return;
}

exports.updateUser = async (req, res, next) => {
    let user = await User.findById(req.params.id);

    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not found"
        });
        return;
    }

    user = await User.findByIdAndUpdate(user._id, {
        name: req.body.name,
        email: req.body.email,
        rollNo: req.body.rollNo
    }, { new: true });

    res.status(200).json({
        success: true,
        user
    })
};