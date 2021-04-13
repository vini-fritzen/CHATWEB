var mensage = document.getElementById("chat");
var box = document.getElementById("msg");
var button = document.getElementById("enviar");

button.addEventListener("click", function(){
    var nova_mensagem = document.createElement("li");
    nova_mensagem.className = "cliente";
    nova_mensagem.innerHTML = box.value;
    mensage.appendChild(nova_mensagem);
    box.value = "";
})