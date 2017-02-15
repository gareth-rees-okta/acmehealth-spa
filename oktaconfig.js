angular
.module("OktaConfig", [])
.constant('OKTACONFIG', {
	baseUrl : "https://grdemo.okta.com/",
	id: "8tK4sFKAfIJk6tZULlQP",
	redirect: "http://acmehealth-spa-oktaapi.44fs.preview.openshiftapps.com/",
	authUrl : '/oauth2/aus9osgrgyEZ65aFs0x7/v1/authorize',
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


