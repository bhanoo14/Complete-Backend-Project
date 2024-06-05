import UserModel from "../models/user.model.js";

const home = async (req, res) => {
    try {
        const data = await UserModel.find();
        if (!data) {
            res.status(404).send("Did not get the Data");
            return;
        }
        res.status(200).send(data);
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
        const newUser = new UserModel({ name, email, password, mobile });
        const userData = await newUser.save();

        res.status(201).send("User data successfully saved");
        console.log(userData);
    } catch (error) {
        console.error("User data could not be saved", error);
        res.status(500).send({ message: "User data could not be saved", error });
    }
};

export { home, createUser };