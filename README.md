# palavrim

jogo de palavras

## requisitos

- node 14
- @vscode/sqlite3
- mysql8 || mariadb10

## construindo e desenvolvendo

pra produção:

```bash
npm run build
```

pra desenvolvimento:

```bash
npm run dev
```

pra testar no mysql:

```bash
npm run dev:staging
```

pra criar um migrate:

```bash
npx knex --knexfile knexfile.cjs migrate:make nome_do_novo_migrate
```

## curiosidades

isto começou como um experimento pra testar duas coisas:

- o vue 3 do zero, sem uso de ferramentas cli
- se era possível um só projeto/package.json comportar frontend e backend

decorreu que sim, ainda é possível configurar um projeto vue 3 escalando pra
cima ou pra baixo, graduando como bem entender. em resumo se você quer controlar
cada pequeno aspecto do seu projeto vue 3 (cdn? browser modules? webpack?
vue-cli? vite? tudo valendo!) ainda é possível.

e sim, um projeto npm não é obrigado a ser apenas frontend ou apenas backend!
considero projetos node/npm como "gênero fluído", pois nada impede o que foi
feito aqui de ser feito novamente ou até mesmo transcender o que tem aqui.

é uma solução melhor do que o que se vê normalmente? calma, não é bem assim.
aqui eu tenho um problema que desejo muito resolver, e esta é uma solução que eu
estou experimentando.

### PAAS

na maioria dos serviços de **Platform As A Service**, apenas um _entrypoint_ é
oferecido por razões óbvias. heroku, por exemplo, pra publicar direitinho tem
que garantir um `npm start` que funcione.

se o seu projeto tem a divisão forte entre _front_ e _back_, é provável que
sejam dois projetos npm distintos.

e aí boa sorte em fazer o heroku disparar um processo decente de build.

mas o problema atinge outras plataformas de serviço e, bem da verdade, projetos
pequenos podem se dar ao luxo a ter certo acoplamento entre suas partes.

era assim antigamente, quando toda a renderização de interface era feita no
servidor, quando muito se configurava o mod_jk pro apache fazer proxy pro tomcat
compilando servlet e jsp.

Mas plataformas costumam ser dedicadas, diferente de quem vende
**infraestrutura**, mas aí é um outro debate.

### return to innocence

o _experimento_ aqui é mesclar as dependências de frontend e de backend e tentar
mimetizar uma [DX](https://medium.com/linkapi-solutions/o-que-%C3%A9-dx-developer-experience-375f53eadede)
similar à de 10 anos atrás mas sem abrir mão das ferramentas modernas.

um só comando pra levantar serviço e interface sem perder comodidades como
**hot-reload** ou **hot-module-replacement** no _backend_ e no _frontend_,
respectivamente.

### alternativas

- por que não simplesmente dockerizar tudo?

docker para não salva o desenvolvedor de sanar esses problemas
da fase de desenvolvimento. com um docker-compose/[podman pods](https://www.redhat.com/sysadmin/compose-podman-pods)
é possível abstrair boa parte da **infraestrutura** do projeto, mas isso não se
relaciona diretamente com a experiência em tempo de desenvolvimento.

adicionalmente, usando o [dotenv-flow](https://www.npmjs.com/package/dotenv-flow),
boa parte dos problemas relacionados a ambiente de execução ficam resolvidos. basta
acertar as variáveis de ambiente e tudo deve rodar como deveria rodar.

### comentários

caso você veja algo bacana a acrescentar ao experimento, abra uma issue, um PR,
eu irei olhar com carinho.

ao final isto deveria ser divertido, mas se for útil também, melhor ainda.

2022-02-04
