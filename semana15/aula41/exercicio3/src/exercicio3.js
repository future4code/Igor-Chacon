var posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];
// b) Observe abaixo a função buscarPostsPorAutor(), 
// escrita em JavasScript:
// Quais são as entradas e saídas dessa função? 
// Copie a função para o mesmo arquivo .ts 
// do array de posts e faça a tipagem necessária.
// R.: as entradas são os posts e um autor que vai ser buscado
// a saída são os posts do autor informado
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor(posts, 'Dobby'));
