
let arrayPostagens = []
document.getElementById("botaoPostar").onclick = function postar() {

    if (document.getElementById("titulo-post").value == "") {
        alert("Nada escrito em Título!!!")
        return 0
    } else if (document.getElementById("autor-post").value == "") {
        alert("Nada escrito em Autor!!!")
        return 0
    } else if (document.getElementById("conteudo-post").value == "")  {
        alert("Nada escrito em Conteúdo!!!")
        return 0
    }

    let h = new Date()
    let numeroID = ("IDPost" + h.getTime())

    let objetoPostagem = {
        idPostagem: numeroID,
        tituloPostagem:  document.getElementById("titulo-post").value,
        autorPostagem: document.getElementById("autor-post").value,
        textoPostagem: document.getElementById("conteudo-post").value,
        imgPostagem: document.getElementById("imagem-post").value,
    }

    arrayPostagens.push(objetoPostagem)

    areaPost = document.getElementById("container-de-posts")

    if (objetoPostagem.imgPostagem != "") {
        let opened = window.open();
        opened.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="index.js" defer></script>
            <link rel="stylesheet" href="styles.css">
            <title>${objetoPostagem.tituloPostagem}</title>
        </head>
        <body>
        <div class="postagemBlog"><id=\"${objetoPostagem.idPostagem}\"> 
        <div id="tituloTexto"> <h1>${objetoPostagem.tituloPostagem}</h1> 
        <img src="${objetoPostagem.imgPostagem}" alt="imagemPost${objetoPostagem.idPostagem}"> 
        </div> <div id="autorTexto"> Por   ${objetoPostagem.autorPostagem} <br> </div> 
        <div id="textoTexto"> <br> ${objetoPostagem.textoPostagem} </div></div>
        <body>`)

        // areaPost.innerHTML += `<div class="postagemBlog"><id=\"${objetoPostagem.idPostagem}\"> 
        //                         <div id="tituloTexto"> <h1>${objetoPostagem.tituloPostagem}</h1> 
        //                         <img src="${objetoPostagem.imgPostagem}" alt="imagemPost${objetoPostagem.idPostagem}"> 
        //                         </div> <div id="autorTexto"> Por   ${objetoPostagem.autorPostagem} <br> </div> 
        //                         <div id="textoTexto"> <br> ${objetoPostagem.textoPostagem} </div></div>`
    } else if (objetoPostagem.imgPostagem == "") {
        let opened = window.open();
        opened.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="index.js" defer></script>
            <link rel="stylesheet" href="styles.css">
            <title>${objetoPostagem.tituloPostagem}</title>
        </head>
        <body>
        <div class="postagemBlog"><id=\"${objetoPostagem.idPostagem}\"> 
        <div id="tituloTexto"> <h1>${objetoPostagem.tituloPostagem}</h1>
        </div> <div id="autorTexto"> Por   ${objetoPostagem.autorPostagem} <br> </div> 
        <div id="textoTexto"> <br> ${objetoPostagem.textoPostagem} </div></div> 
        <body>`)

        // areaPost.innerHTML += `<div class="postagemBlog"><id=\"${objetoPostagem.idPostagem}\"> 
        //                         <div id="tituloTexto"> <h1>${objetoPostagem.tituloPostagem}</h1>
        //                         </div> <div id="autorTexto"> Por   ${objetoPostagem.autorPostagem} <br> </div> 
        //                         <div id="textoTexto"> <br> ${objetoPostagem.textoPostagem} </div></div>`
    }
    
    
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
    document.getElementById("imagem-post").value = ""
}
