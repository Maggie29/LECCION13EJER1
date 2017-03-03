var result = document.getElementById("result");
var formulario = document.getElementById("enviarFormulario");
formulario.onclick = function(){
  var nombre=document.getElementById("name").value;
  var apellido = document.getElementById("lastName").value;
  var numDni = document.getElementById("dni").value;
  var direccion = document.getElementById("address").value;
  var lista =" <ul>"+
                "<li>NOMBRE: "+nombre+"</li>"+
                "<li>APELLIDO: "+apellido+"</li>"+
                "<li>DNI: "+numDni+"</li>"+
                "<li>DIRECCION: "+direccion+"</li>"+
                "</ul>";
result.innerHTML = lista;
}
