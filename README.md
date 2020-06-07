# README
A web application for chatting about plant related content. Users can signup,
create groups and comment within groups.

## Running Locally
To run this app locally clone the repository and follow the instructions below.

### System dependencies
This app was built on Ruby 2.6.1 and node version 13.10.1. Ruby bundler and
yarn must be installed.

To install other dependencies run `bundle install` from root and then:
```
cd client
yarn install
cd ..
```

### Configuration
Environmental variables must be configured before running the app, to do so
copy the `.sample_env` file at the root, change the name to `.env` and fill in
the secrets.

### Database creation and initialization
To create and initialize the database run the following in the root directory:
```
rails db:create
rails db:migrate
rails db:seed
```

### Starting the server
Run `rake start` from the root, this will start the server for the api and
client side, all client side requests will be proxied through the
webpack-server.
