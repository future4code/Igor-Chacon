// a) Como você faria, já com a extensão 
// instalada, para gerar um 
// arquivo javascript a partir do  arquivo
//  typescript com o código abaixo?

// R.: digitaria o comando tsc [nome do arquivo]


// b) E se este arquivo estivesse dentro de uma pasta chamada src. 
// O processo seria diferente? Se sim, descreva as diferenças

// R.: deveria fazer o comando src com o caminho relativo do arquivo

// c) Existe alguma maneira de transpilar
//  múltilplos arquivos de uma vez só? 
// Caso conheça, explique como fazer.

// R.: para isso precisamos do arquivo tsconfig.json
// com ele usamos o comando tsc para vários arquivos de uma vez.

// d) Compare esse arquivo com o que criamos durante a aula 
// (ele está disponível na área de configuração do projeto ali em cima). 
// Leia as descrições sobre cada uma das propriedades.
//  Alguma configuração que chamou sua atenção? 
// O que mudou em comparação com o arquivo criado pelos slides?

// R.: o arquivo usa a versão 5 do ecmascript (es5),
// também não tem nada em outDir e rootDir (estão comentados)
// também está comentada a linha com noImplicitAny (dá erro nos any type)