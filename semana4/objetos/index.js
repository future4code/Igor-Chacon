
let arrayPostagens = []
document.getElementById("botaoPostar").onclick = function postar() {

    let h = new Date()
    let numeroID = ("IDPost" + h.getTime())

    let objetoPostagem = {
        idPostagem: numeroID,
        tituloPostagem:  document.getElementById("titulo-post").value,
        autorPostagem: document.getElementById("autor-post").value,
        textoPostagem: document.getElementById("conteudo-post").value,
    }
    arrayPostagens.push(objetoPostagem)
    areaPost = document.getElementById("container-de-posts")
    areaPost.innerHTML += `<div class="postagemBlog"><id=\"${objetoPostagem.idPostagem}\"> <div id="tituloTexto"> <h1>${objetoPostagem.tituloPostagem}</h1> </div> <div id="autorTexto"> Por   ${objetoPostagem.autorPostagem} <br> </div> <div id="textoTexto"> <br> ${objetoPostagem.textoPostagem} </div></div>`
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
}
