const { hashpwd, users, db } = require("./data.js")
const {generateSaltHash }= require("../controllers/usersController.js")
const transactionExercise = async () => {
    let trx;
    try {
        const trx = await db.transaction()
            
        const user1 = await db("users")
            .insert(
                { email: "bbb@gmail.com", username: "BabaBoom", first_name: "Brigitte", last_name: "Bardot" }, ["id"])
            .transacting(trx);
        console.log('user1 =>', user1);
        
        const user2 = await db("users")
            .insert(
                { email: "ccc@gmail.com", username: "Gainsbarre", first_name: "Serge", last_name: "Gainsbourg" }, ["id"])
            .transacting(trx);
        console.log('user2 =>',user2);
        
        const { salt, hash } = generateSaltHash("defaultPassword123");
        await db("hashpwd").insert(
            { name: "BabaBoom", salt: salt, hash: hash },
            { name: "Gainsbarre", salt: salt, hash: hash }
        );
        console.log("Users and passwords inserted successfully.");
        await trx.commit()
    } catch (err) {
        console.error("Error inserting users:", err);
        if (trx) await trx.rollback()
    } 
  }
transactionExercise()