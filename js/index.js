
const texto = document.querySelector(".texto_enviado")
const resuelto = document.querySelector(".resultado")
const btnCifrar = document.querySelector(".cifrar")
const btnDescifrar = document.querySelector(".descifrar")
const copiar = document.querySelector(".copiar")
const info = document.querySelector(".informacion")

const encriptar = (texto)=>{
    let matrizCodigo=[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])){
            texto= texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto
}
btnCifrar.addEventListener("click", () => {
    resuelto.value = encriptar(texto.value)
    texto.value=""
}
)

const desencriptar =(texto)=>{
    let matrizCodigo=[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][1])){
            texto= texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return texto
}

btnDescifrar.addEventListener("click", () => {
    resuelto.value = desencriptar(texto.value)
    texto.value=""
});



copiar.addEventListener("click", () => {
    copiarContenido(resuelto.value)
})
const copiarContenido = async (texto) => {
    try {
        await navigator.clipboard.writeText(texto);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El texto se ha copiado correctamente",
            showConfirmButton: false,
            timer: 1000
        });
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}
texto.addEventListener("keyup", () => {
    var regex = /^[a-z\s]+$/;
    if (regex.test(texto.value) || texto.value=="") {
        btnCifrar.disabled = false;
        btnDescifrar.disabled = false;
        texto.classList.remove("error")
        info.classList.remove("color")
    } else {
        btnCifrar.disabled = true;
        btnDescifrar.disabled = true;
        texto.classList.add("error")
        info.classList.add("color")
    }
})