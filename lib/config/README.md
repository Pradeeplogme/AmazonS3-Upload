#Setting up environmental variables

##OS X

You will want to add these and other environmental variables to your
*~/.bash_profile* file

    export EXAMPLE_AWSS3_KEY=23jklwerwkl3423lk  
    export EXAMPLE_AWSS3_SECRET=sdfkjsldfjsdfds  
    export EXAMPLE_AWSS3_BUCKET=example    

**This will only take effect after you logout/login**


##Heroku (heroku toolkit must be installed)

Run these commands on the command line, they will set env variables in the
remote Heroku server

    heroku config:add EXAMPLE_AWSS3_KEY=23jklwerwkl3423lk
    heroku config:add EXAMPLE_AWSS3_KEY=23jklwerwkl3423lk

You get the picture....
