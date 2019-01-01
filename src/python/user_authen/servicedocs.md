# User Authentication Service

## Functionality

Part of user authentication flow. 
* Receives Google Sign-In token verifies its origin. 
* returns a JWT web token used by client for graphql api calls.

## Service Definitions
 
|Request| Description| Model|
|-------|------------|------|
|`GET /`| Returns service version and name|`{ "serviceName": <string>, "version": "string"}`|
|`POST /verify_signin`|Verifies Google sign in token, request a JWT token if successful or 400 Forbidden if failed| Request: {"id_token": string}, response { "success": bool, "token": string } |

## Service Dependencies

* `users-service` to check if users are already registered.

## Networking
* HTTP 
* port 8080

## Configuration
`GOOGLE_SIGN_IN_CLIENT_ID` Requires Google Sign-In application environment variable.

`ALLOWED_GSUITE_DOMAIN` Optional environment variable to restrict users to only certain G-Suite domain, e.g. `@my.bristol.ac.uk`

## Secret
`API_AUTH_JWT_SECRET` environment need to be set for the service to generate JWT web tokens.

## External Docs
https://developers.google.com/identity/sign-in/web/backend-auth

