//authorization context
//Modificar os parâmetros no arquivo adalConfig.js
var authContext = new AuthenticationContext({
    instance: adalConfig.authInstance,
    tenant: adalConfig.tenant,
    clientId: adalConfig.authAppId,
    postLogoutRedirectUri: adalConfig.postLogoutRedirectUri,
    cacheLocation: adalConfig.cacheLocation
});

////sign in and out
//jQuery("#signInLink").click(function () {
//    authContext.login();
//});
//jQuery("#signOutLink").click(function () {
//    authContext.logOut();
//});

//guarda as informações de token no retorno (cache)
authContext.handleWindowCallback();
var user = authContext.getCachedUser(); //Recupera os dados do cache do usuário autenticado

//Método criado para executar as chamadas ao webservice
function executeFunction(funct, args) {
    //Verifica se existe usário autenticado no cache, se não existir, o mesmo é adicionado
    if (!user) {
        authContext.login(); //Realiza o Login para ter os contextos de token
        authContext.handleWindowCallback(); //guarda as informações de token no retorno (cache)
    }
    authContext.acquireToken(adalConfig.resource, function (error, token) {

        if (error || !token) {
            // console.log('ADAL Error Occurred: ' + error);
            setTimeout(function () {
                executeFunction(funct);
            }, 1000);;
        }
        else {
            $.ajaxSetup({
                beforeSend: function(xhr){
                    xhr.setRequestHeader("Authorization", "Bearer " + token);
                },
                crossDomain: true
            });
            if(args === undefined){
                funct();
            }
            else{
                if(Array.isArray(args)){
                    funct.apply(null,args);
                }
                else{
                    funct(args);
                }
                
            }
        }
    });

}