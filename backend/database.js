let db = require("mongoose");
let url = "mongodb://root:root@localhost:27017/mevn-practice";

// db.Promise = global.Promise;
db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Database could't be connected to: " + error);
});

exports.db = db;