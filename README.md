# Uob-tv RPC Services Monorepo

Central Repository for All of UOB-TV's gRPC services


We use Twitter's Pants build system helps us organize build process for all of python microservices services 

https://www.pantsbuild.org/install.html

It supports languages Python, Java, Scala, Go, C++, etc.


## Repository Structure

All service code lives in `src/python` directory. Each subfolder named by service name.
All gRPC `proto` files live in `src/proto` directory. We have 
All tests code for services lives in `test/python` directory. One subfolder for each service.

External `pip install`ed packages are shared across all services. They are located in `3rdparty` folder.

New 3rd party dependencies are declared in `3rdparty/python/requirements.txt`. We must keep this file up to date when new packages are installed with `pip`. Run `pip freeze > 3rdparty/python/requirements.txt`.

Each service folder contains Python source code and `BUILD` file. A build file defines a build target, we use either `python_library` or `python_binary` target.

## Dev-Test-Deploy Pipeline


## Get Started with build RPC Services

1. Checkout the code from github.
2. run `./pants goals` from root directory. This will bootstrap pants build tool. Only needed for the first time.

### Running a service locally

    $ ./pants run src/python/hello-world:server

### Testing a service locally

    $ ./pants test tests/python/hello-world:server