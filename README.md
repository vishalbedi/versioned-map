# Versioned Map

This is a UI to test a map implementation in pure JavaScript which can store all the 
previous values assigned to a single key. The application is written is React that utilizes the 
new versioned Map data-structure to store previous versions of values for a specific key. 

The code for the data structure resides in __lib__ folder

To run this application
```text
$ npm install
$ npm run test:unit
$ npm run start
```

``npm run test:unit`` will run all the test-cases for the data-structure

``npm run start`` will run the application on port __9000__

To modify the port please modify ``webpack.config.js`` file.
