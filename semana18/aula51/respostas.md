-- 1 

-- a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?
-- salt é uma string aleatória que estará na cryotografia, round é o cost, o "quão cryptografada" estará a senha. Pode-se user 12, que é o padrão, para o round. Usei 12 porque é o padrão e, suficiente para ser seguro, mas não para quebrar o pc.

-- b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), 
-- que será responsável por **criptografar** uma string usando o bcryptjs

-- c. Agora, crie a função que verifique se uma string é correspondente 
-- a um hash, use a função `compare` do bcryptjs

-- 2
-- a. Para realizar os testes corretamente, 
-- qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

-- modificamos primeiro o cadastro

-- b. Faça a alteração do primeiro endpoint

-- c. Faça a alteração do segundo endpoint

-- d. No exercício de ontem, nós criamos o endpoint `user/profile`. 
-- Também temos que modificar esse endpoint devido à adição da criptografia? 
-- Justifique.
-- não, pois ele não manipula senhas nem dados criptografados, apenas o token