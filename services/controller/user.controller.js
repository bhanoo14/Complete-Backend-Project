import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';

const home = async (req, res) => {
    try {
        const data = await UserModel.find();
        // res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Something went wrong');
    }
};

const createUser = async (req, res) => {
    const { name, email, mobile, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send("Passwords do not match");
        return;
    }

    if (!name || !email || !mobile || !password || !confirmPassword) {
        res.status(400).send({ message: "All fields are required" });
        return;
    }

    try {
        const salt = await bcrypt.genSalt(10); // Correctly await bcrypt.genSalt
        const hashPassword = await bcrypt.hash(password, salt); // Correctly await bcrypt.hash

        const newUser = new UserModel({ name, email, password: hashPassword, mobile }); // Save the hashed password
        const userData = await newUser.save();

        res.status(201).send("User data successfully saved");
        console.log(userData);
    } catch (error) {
        console.error("User data could not be saved", error);
        res.status(500).send({ message: "User data could not be saved", error });
    }
};

export { home, createUser };
