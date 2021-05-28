# robot Challenge


## Part 1

Melbourne Vigor has a quadroped robot equipped with a 360 degree camera which it uses for factory inspections. Instructions are sent to the robot in a simple language that tells the robot which direction to move and when to take a photo. Moves are always exactly 1 m to the front (w), back (s), right (d) or left (a) or take a photograph (x).

Unfortunately the instruction processor is not perfect yet so the robot may photograph the same location multiple times.

_How many locations are photographed at least once?_

For example:
- `xwxs` takes photos of 2 locations and ends up back at the starting location
- `xwwxddxssxaax` takes photos of 4 locations, including 2 photos of the same location at the starting location

## Part 2
Using the same input as Part 1 - Melbourne Vigor acquires a second robot to help speed up the process of photographing locations. The robots both take off from the same location and then take turns moving based on the same instructions.

_How many locations are photographed at least once?_

For example:
- `xwxs` takes 2 photos of the same location, because the 1st robot stays in place and takes 2 photos and the 2nd robot moves 1 km north and then 1 km south to end up in the starting location
- `xwwxddxssxaax` takes photos of 4 different locations and both robots still end up back at the starting location


## Requirements
Fork and extend this project to answer the questions in part 1 & 2.
The project consists of an express route in `api.js` and a react client in `client.js`.

1. Clone code to your own github account.
2. Use `src/api.js` to build an api that can process robot instructions and return an answer.
3. Use `src/client.js` to build a front end that can send instructions to the api and render the response.
4. Let us know when you are done and send a link to your repository.
## Getting Started

```sh
# install dependencies
yarn install

# Run the api and client
yarn watch

# open the app
open http://localhost:4000
```
