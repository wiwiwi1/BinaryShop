function loguear()
{

let user= document.getElementById("Usuario").value;

let pass= document.getElementById("Contraseña").value;

if(user=="seller456" && pass=="Intro123")
{

window.location="Comprador.html";

}
else if (user=="dancabello" && pass=="J5*asdRD.s") {

    window.location="vendedor.html";

} 
else if(user=="root" && pass=="dochouse") {

    window.location="admin.html";

} 
else{
    alert("Datos incorrectos");
}


}