angular
.module("OktaConfig", [])
.constant('OKTACONFIG', {
	baseUrl : "https://grdemo.okta.com/",
	id: "DoeUFihrYt9yIfiswxQS",
	redirect: "http://acmehealth-spa-okta.1d35.starter-us-east-1.openshiftapps.com/",
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


