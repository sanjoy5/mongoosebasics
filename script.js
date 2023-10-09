const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb+srv://newuser:2usv2guhcwGnWFOb@cluster0.ur5kyvu.mongodb.net/testdb")

run()

async function run() {

    try {

        // const user = await User.create({
        //     name: "Sanjoy",
        //     age: 25,
        //     email: "sanjoy@email.com",
        //     hobbies: ["Traveling", "Playing"],
        //     address: {
        //         street: "Ambag Road",
        //         city: "Gazipur"
        //     }
        // })
        // console.log(user);

        // const user = await User.findById("6523b91849944c7173e34cba")

        // const user = await User.find({ name: "d" })

        // const user = await User.findOne({ name: "Sanjoy" })

        // const user = await User.exists({ name: "Sanjoy" })

        // const user = await User.deleteOne({ name: "Sanjoy" })

        // const user = await User.where("age")
        //     .gt("12")
        //     .where("name")
        //     .equals("Sanjoy")
        //     .limit(2)
        //     .populate("bestFriend")
        //     .select("age")
        // user[0].bestFriend = "6523b713cbc25945ec375669"
        // await user[0].save()


        const user = await User.findOne({ name: "Sanjoy" })
        await user.save()
        console.log("User is : ", user);
        // user.sayHi()
        // console.log(user.nameEmail)

    } catch (error) {
        console.log("Error creating user:", error.message);
    }

}