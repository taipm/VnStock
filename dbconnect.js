const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://taipm:P@$$w0rdPMT@cluster0-iezj0.gcp.mongodb.net/VnStock?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
