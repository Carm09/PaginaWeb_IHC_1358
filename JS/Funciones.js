function Saludar(){
    var nombre=document.getElementById('txtNombre').value;
    alert("Hola"+ nombre +", bienvenido!!");
}
function Resetear(){
    var nombre=document.getElementById('txtNombre');
    txtNombre.value="";
    txtNombre.focus ();

}