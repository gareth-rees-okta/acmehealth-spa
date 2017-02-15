# acmehealth-spa
Single Page Application for API Access Management to be demonstrated at Oktane 2016.
## Build Instructions

1. Clone or Fork this repo.
2. Create a new application in OpenShift from your copy of the GitHub Repo.
3. ####Update the `oktaconfig.js` file:

```javascript
angular
.module("OktaConfig", [])
.constant('OKTACONFIG', {
	baseUrl : "https://example.oktapreview.com/",
	id: "Jw1nyzbsNihSuOETY3R1",
	redirect: "http://localhost:8080",
	authUrl : '/oauth2/aus7xbiefo72YS2QW0h7/v1/authorize',
	id_scopes: [
		'openid',
		'email',
		'profile',
		'groups'
		],
	access_scopes: [
		'appointments:read',
		'appointments:cancel',
		'appointments:edit',
		'appointments:confirm'
		]
});

```
4. Deploy OpenShift Applciation and ensure that you have setup an API Auth Server and Native OIDC App.
5. Define the Scopes above and a rule to allow access to the users you are logging in with.
6. TODO... 
