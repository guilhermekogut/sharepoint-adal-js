var adalConfig = {
    resource: '<url>', //API ID URI do WebService (WebAPI)
    endpoint: '<url>/api/', //URL onde será chamado os métodos do webApi
    authAppId: '00000000-0000-0000-0000-000000000000', //Id da aplicação que realiza autenticação no Azure AD, onde chamará o contexto de autenticação
    authInstance: 'https://login.microsoftonline.com/', //Instancia default para autenticação no AzureAD (não mudar)
    tenant: '<endereço da sua tenant do azure>', //Tenant da conta no azure
    cacheLocation: 'localStorage', //Local do Cache, usar o localStorage por causa do IE
    postLogoutRedirectUri: window.location.origin //Url da origem onde será realizado a chamada
}