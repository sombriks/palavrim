# [Palavrim](https://palavrim.web.app/)

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

## Passo a passo da execução

- [X] carregar lista de palavras
- [X] definir tamanho máximo das palavras
- [X] escolher palavra (aleatória ou por índice da lista)
- [X] preparar partida
  - [X] máscara da palavra (resumo das tentativas até o momento)
  - [X] registro de tentativas
    - [X] validações
      - [X] palpite existe na lista?
      - [X] palpite tem o tamanho certo?
      - [X] máximo de tentativas atingido? (game over)
      - [X] palavra encontrada? (game over)
    - [X] tentativa
      - [X] palpite da tentativa
      - [X] máscara de resultado
      - [X] letras não encontradas
      - [X] letras repetidas
      - [X] letras encontradas mas posição errada
      - [X] letras corretas
    - [X] verificação de resultado
      - [X] tentativas restantes
      - [X] palpite condiz com a palavra

## Roadmap

- [X] versões em linha de comando
  - [X] java
  - [X] node
  - [X] go
- [X] recriar interface web (vue 3)
- [X] estrutura para publicar em alguma nuvem (firebase hosting)
- [ ] ao menos uma api rest
