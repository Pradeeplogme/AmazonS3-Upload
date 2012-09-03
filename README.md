# AmazonS3 file upload using [knox](https://github.com/LearnBoost/knox)
And a framework to start using node.js

## What you'll need

* [Mocha](http://visionmedia.github.com/mocha/) for running unit and API testing  
* AmazonS3 credentials (key, secret, bucket)   

This framework also will show you testing with [Mocha](http://visionmedia.github.com/mocha/), [Chai](http://chaijs.com/), and [SuperTest](https://github.com/visionmedia/supertest)

## Installing Mocha (globally)
    npm install -g mocha  

## Setting AmazonS3 environment variables
You should change the word _EXAMPLE_ to something more appropriate to your
project. **Make sure to change them in lib/config/index.js too.** To make them permanent add them to the end of your _~/.bash\_profile_ file

    export EXAMPLE_AWSS3_KEY=23jklwerwkl3423lk  
    export EXAMPLE_AWSS3_SECRET=sdfkjsldfjsdfds  
    export EXAMPLE_AWSS3_BUCKET=example   

## Where are things at?

* Express App is located in the file _server.js_  
* Routes are declared in _lib/routes/index.js_
* The real upload action is happening in _lib/middleware/s3.js_
* You can see that routes can use middleware and even call on controllers

## Tests are located in the _test_ folder (of course)

In the root folder you can run this command to has mocha run the tests

    mocha 

_test/api.file.js_ is an api test using [SuperTest](https://github.com/visionmedia/supertest). This file will actually
start up another server running on a random port to test the api we've set up.

_test/utils.s3.js_ is a unit test using [ChaiJS](http://chaijs.com/) to test some basics about our
_lib/utils/s3.js_ helper file.

## A framework to start with... under *lib*

**lib/config** : These are options that need to be run e.g  AmazonS3 creds pulled
in from environmental vars, DB connection options. BTW, all keys, usernames,
etc should be in environmental variables **NOT** code.  

**lib/controllers** : Routes will pass requests to various functions in the
controllers. Controllers then get to decide what logic they want to employ with
that request and how to respond   

**lib/middleware** : This is where your shared functions exists, a good example
is checking user access and denying if criteria fails.  

**lib/models** : This is where I keep schema for models when using [MongooseJS](http://mongoosejs.com/)

**lib/routes** : Here I declare all the routes I'm going to be using in the app
and what middleware/controllers I'm going to be employing with each request  

**lib/utils** : Here I keep general utility functions that can be used by any
middleware, controller, model, etc.  


