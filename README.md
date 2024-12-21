# Express.js Route Missing Error Handling

This repository demonstrates a common error in Express.js applications: missing error handling in routes.  The `/users/:id` route fetches a user based on the ID passed in the URL parameters. However, it lacks proper error handling for the case where a user with the given ID doesn't exist. This results in a hanging request on the client-side.

## Bug

The `bug.js` file contains the buggy code.  The route does not send a response to the client if a user is not found, causing the client to wait indefinitely.

## Solution

The `bugSolution.js` file provides a corrected version with error handling. It includes checks to ensure the `userId` is a number and sends an appropriate error response (e.g., 404 Not Found) if a user is not found. This ensures that the client receives a clear response in all cases.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express` to install the required dependency.
4. Run `node bug.js` to start the buggy server.
5. Try accessing `/users/3` which is expected to return a 404 not found response.
6. Run `node bugSolution.js` to start the fixed server.
7. Repeat step 5, which should return a 404 not found response.