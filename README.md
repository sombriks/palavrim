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

## Passo a passo da execução

- carregar lista de palavras
- definir tamanho máximo das palavras
- escolher palavra (aleatória ou por índice da lista)
- preparar partida
  - máscara da palavra (resumo das tentativas até o momento)
  - registro de tentativas
    - validações
      - palpite existe na lista?
      - palpite tem o tamanho certo?
      - máximo de tentativas atingido?
    - tentativa
      - palpite da tentativa
      - máscara de resultado
      - letras não encontradas // TODO implementar
    - verificação de resultado
      - tentativas restantes
      - palpite condiz com a palavra

## Roadmap

- [X] ao menos uma versão em linha de comando
- [ ] recriar interface web
- [ ] ao menos uma api rest
- [ ] estrutura pra publicar em alguma nuvem
