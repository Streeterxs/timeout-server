## Timeout Server

This is a server project with a timeout to define how long a request will last.

### Motivation
In production we deal with a lot of third parties apis, some of then are very very slow. In order to test some of our code in a slow environment, Timeout Server simulate a long request

### Usage
- clone this project
- yarn install
- yarn start

### Routes
- "/" => base route, returns this tutorial
- "timeout/:ms" => timeout route, ms is a params that will define how long a request will last in milisseconds

### Examples
- get /timeout/3000 => a get request that will last 3 seconds
