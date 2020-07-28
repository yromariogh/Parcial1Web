let editando = false;

function editar(SPAN) {

    if (editando == false) 
    {
        TD = SPAN.parentNode;
        TR = TD.parentNode;
        TRs = TR.getElementsByTagName('td');

        alimento      = TRs[0].textContent;
        calorias      = TRs[1].textContent;
        grasas        = TRs[2].textContent;
        proteina      = TRs[3].textContent;
        carbohidratos = TRs[4].textContent;
        ok            = TRs[5].textContent;
        opciones      = TRs[6].textContent;

        nodoDivFormulario = document.getElementById('divFormulario');

        let formEdit =
            '<td><input type="text" name="alimento" id="alimento" value="' + alimento + '" size="5"></td>' +
            '<td><input type="text" name="calorias" id="calorias" value="' + calorias + '" size="2"></td>' +
            '<td><input type="text" name="grasas" id="grasas" value="' + grasas + '" size="2"></td>' +
            '<td><input type="text" name="proteina" id="proteina" value="' + proteina + '" size="2"></td>' +
            '<td><input type="text" name="carbohidratos" id="carbohidratos" value="' + carbohidratos + '" size="2"></td>';

        if (ok === "😊") {
            formEdit = formEdit +
                '<td><select name="image" id="image"><option value="ok" selected>Bien</option><option value="bad">Mal</option></select></td>' +
                '<td>En edición</td>';
        }
        if (ok === "😵") {
            formEdit = formEdit +
                '<td><select name="image" id="image"><option value="ok">Bien</option><option value="bad" selected>Mal</option></select></td>' +
                '<td>En edición</td>';
        }

        TR.innerHTML = formEdit;

        nodoDivFormulario.innerHTML = '<br> <br> Pulse Aceptar para guardar los cambios o cancelar para anularlos ' +
            '<form name = "formLink" action="recibido.html" method="get" onsubmit="enviando()" onreset="cancelar()">' +
            '<br> <input class="btn btn-outline-primary" type = "submit" value="Aceptar"> <input class="btn btn-outline-secondary" type="reset" value="Cancelar">';

        editando = "true";
    } 
    else 
    {
        alert('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }

}

function cancelar() {

    window.location.reload();

}

function enviando() {

    let nodoDivFormulario = document.getElementById('divFormulario');
    nodoDivFormulario.innerHTML =
        'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
        '<form name = "formLink" action="recibido.html" method="get" onsubmit="enviando()" onreset="cancelar()">' +
        '<input type="hidden" name="alimento" value="' + document.querySelector('#alimento').value + '">' +
        '<input type="hidden" name="calorias" value="' + document.querySelector('#calorias').value + '">' +
        '<input type="hidden" name="grasas" value="' + document.querySelector('#grasas').value + '">' +
        '<input type="hidden" name="proteina" value="' + document.querySelector('#proteina').value + '">' +
        '<input type="hidden" name="carbohidratos" value="' + document.querySelector('#carbohidratos').value + '">' +
        '<input type="hidden" name="image" value="' + document.querySelector('#image').value + '">' +
        '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

    

    document.formLink.submit();

    TRs[0].innerText = document.querySelector('#alimento').value;
}

window.onload = function()  {
    let URL = window.location.search;
    let usp = new URLSearchParams(URL)
    let newAlimento = usp.get("alimento");
    let newCalorias = usp.get("calorias");
    let newGrasas = usp.get("grasas");
    let newProteinas = usp.get("proteina");
    let newCarbohidratos = usp.get("carbohidratos");
    let newImage = usp.get("image");
    if(newAlimento)
    {
        if(newImage=="ok")
        {
            document.getElementById("newImg").innerHTML = "&#128522;"
        }
        if(newImage=="bad")
        {
            document.getElementById("newImg").innerHTML = "&#128565;";
        }
        document.getElementById("newAli").innerText = newAlimento;
        document.getElementById("newCal").innerText = newCalorias;
        document.getElementById("newGra").innerText = newGrasas;
        document.getElementById("newPro").innerText = newProteinas;
        document.getElementById("newCar").innerText = newCarbohidratos;
    }
}



