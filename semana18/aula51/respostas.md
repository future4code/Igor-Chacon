-- 1 

-- a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?
-- salt é uma string aleatória que estará na cryotografia, round é o cost, o "quão cryptografada" estará a senha. Pode-se user 12, que é o padrão, para o round. Usei 12 porque é o padrão e, suficiente para ser seguro, mas não para quebrar o pc.

-- b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), 
-- que será responsável por **criptografar** uma string usando o bcryptjs

-- c. Agora, crie a função que verifique se uma string é correspondente 
-- a um hash, use a função `compare` do bcryptjs