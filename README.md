
# CIDR

## A NodeJS Tribute to the Great Paddy Losty


This simple CRUD enabled NodeJS application uses a [MySQL](https://www.npmjs.com/package/mysql) backend, the [jade templating engine](http://jade-lang.com/) templating system to build the views, and [bootstrap](https://getbootstrap.com/) to style them.

To run the application run the command npm start or use the [Dockerfile](https://docs.docker.com/engine/reference/builder/) to build and run the application in a docker container. If using docker compose to deploy this image alongside a mysql container there is no other work to do, if you are running this docker image as a standalone application you will need to have mysql installed locally and point your docker image to your local network using the --network="host" argument

Once the application has started it should be available on port 3000. 
Upon the addition or removal of ciders from the cidr database, the image of Paddy Losty gets more opaque or transparent respectively.

![The Pintman](src/public/images/pintman.jpg?raw=true "Pintman Paddy Losty")

> I wouldn't be fond of drinking but when I go at it, I do go at it awful and very hard. I'd have 45 pints in about 2 hours, I'd have a packet of crips then and maybe an auld packet of peanuts. And I'd go for probably, I'd have 10 more anyway, And then I'd get up the following morning and Maureen would have the fry on, And I'd go at it again, and there'd be no stopping me. I'd take the shirt off any man's back.

>--Paddy Losty