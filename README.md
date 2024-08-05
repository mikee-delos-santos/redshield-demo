
# RedBase Demo

To run the demo app in your local machine, all you need is an installation of Docker (preferrably [Docker Desktop](https://www.docker.com/products/docker-desktop/)). After cloning simply run `docker-compose up` in the root directory.



## Known Issue  

There maybe an off chance that the Backend (Rails) initializes before the DB on the first run(even though `depends_on` is explicitly set). Re-running `docker-compose up` should fix it ( or maybe a couple times...)
