# Palavrim

Algumas implementações do jogo da forca, que ficou popular por um tempo com uma
variante chamada [wordle](https://www.nytimes.com/games/wordle/index.html).

## Versão 'original'

A primeira versão era hospedada num plano free do heroku. Não tem mais versão
grátis do heroku, mas o código pode ser encontrado [aqui](https://github.com/sombriks/palavrim/tree/version-1.0.0).

## Como funciona

Dada uma palavra dentre as palavras conhecidas, o jogador faz algumas tentativas
de descobrir as letras certas da palavra da vez.

A diferença para o jogo da forca tradicional é a estética. Seguimos tentando
advinhar a palavra certa, mas temos uma listagem das tentativas, temos destaque
visual das letras que já foram testadas e uma única diferença: sabemos se uma
letra que existe na palavra se encontra na posição correta.

## Lista de palavras

Uma coisa que a primeira versão não respeitava era a lista de palavras. Qualquer
um podia inventar uma palavra.

Nesta versão vou usar [essa lista aqui](https://www.ime.usp.br/~pf/dicios/).
