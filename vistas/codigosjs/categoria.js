var tabla;

function init() {
    mostrarelformulario(false);
    listar();
}

function limpiar() {
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#idcategoria").val("");
}

function mostrarelformulario(x) {
    limpiar();
    if (x) {
        $("#listadoregistros").hide();
        $("#formularioregistros").show();
        $("#btnGuardar").prop("disabled", false);
        $("#btnagregar").hide();
    } else {
        $("#listadoregistros").show();
        $("#formularioregistros").hide();
        $("#btnagregar").show()
    }
}

function cancelarformulario() {
    limpiar();
    mostrarelformulario(false);
}

function listar() {
    tabla = $('#tablalistado').dataTable({
        "aProcessing": true, //activa el procesamiento del datatables
        "aServerSide": true, //activa paginacion y filtrado ralizados por el servidor
        dom: 'Bfrtip', //define los elementos del control de tabla
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'cvsHtml5',
            'pdf'
        ],
        "ajax": {
            uri: '../ajax/categoria.php?op=listar',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        "bDestroy": true,
        "iDisplayLength": 5, //paginacion
        "order": [[0, "desc"]] //ordena (columna, orden)
    }).DataTable();
}

init();