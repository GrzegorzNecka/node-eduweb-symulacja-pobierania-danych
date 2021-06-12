const Puller = require("./puller");

const puller = new Puller("http://google.com");

function printData(data) {
    console.log(`otrzymane dane ${data.data} z adresu ${data.url}`);
}

puller.on("data", printData);
puller.pull();
