const Game = require("./models/game");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
mongoose.set("strictQuery", false)


//database connection
// env variable may need quotes
const mongoDB = process.env.MONGODB_URI

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

async function gameCreate(picName, charName, maxX, minX, maxY, minY) {

    const gameDetail = new Game({

        pic_name: picName,
        char_name: charName,
        max_x: maxX,
        min_x: minX,
        max_y: maxY,
        min_y: minY
    })
    const game = new Game(gameDetail);
    await game.save()


    /*
      const userDetail = {
        userName: "c@yahoo.com",
        password: "123456",
        
      };
     
    
      const user = new User(userDetail);
      await user.save();
  
      */

    console.log('added char');
}
// node addUser.js 
// for username and password see api.database.odt wp file
gameCreate("board1", 'wizard', 523, 555, 685, 753)
gameCreate("board1", 'wenda', 1530, 1560, 795, 847)
gameCreate("board1", 'waldo', 1214, 1261, 721, 821)

