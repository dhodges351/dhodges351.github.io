const IncomingForm = 
require('formidable').IncomingForm;

module.exports = function upload(req, res) {
    var form = new IncomingForm();

    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        // The uploaded files are stored in a temporary directory 
        // somewhere on your machine. To do something with them, 
        // you can copy them from there using the node.js file-system API.
    });

    // The second callback is called when the form is completely parsed. 
    // In this case, we want to send back a success status code.
    form.on('end', () => {
        res.json()
      });

    form.parse(req);

}