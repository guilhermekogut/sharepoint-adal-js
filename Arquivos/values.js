function getValues() {
    $.ajax({
        url: adalConfig.endpoint + "values",
        type: "GET",
        success: function (data) {
            console.log(data);
        },
        error: function (erro) {
            console.log(erro);
        }

    })
}

function GetValueById(id) {
    $.ajax({
        url: adalConfig.endpoint + "values/"+id,
        type: "GET",
        success: function (data) {
            console.log(data);
            console.log("Primeiro parâmetro é: " + id);
        },
        error: function (erro) {
            console.log(erro);
        }

    })
}

function PostValue(id, formData) {
    $.ajax({
        url: adalConfig.endpoint + "values/"+id,
        type: "POST",
        data: formData,
        success: function (data) {
            console.log(data);
            console.log("Primeiro parametro é: " + id);
            console.log("Segundo parametro é: " + JSON.stringify(formData));
        },
        error: function (erro) {
            console.log(erro);
        }

    })
}

//Chamando a primeira function
executeFunction(getValues);
//Chamando a segunda function
executeFunction(GetValueById,1);
//Chamando a terceira function
executeFunction(PostValue, [1,{nome:"Teste", telefone:"12345-1234"}]);