# Web Crawler ARR para node.js

O Web Crawler ARR (Alencar, Rocali, Ramires) para node.js é projetado para buscar metadados de conteúdo sobre de filmes, séries e programas de TV a fim de prover a maior quantidade de informações relevantes possíveis.  

Dessa forma, provém para o grupo de pessoas com potencial interesse (*stakeholders*) resultado das etapas de persistência dos dados de busca, pré-processamento, processamento, filtragem e validação visual em diversas fontes de pesquisa confiáveis.

## Etapas de Processamento
* Persistência dos Dados de Busca
* Pré-Processamento
* Processamento
* Filtragem
* Validação Visual

## Documentação

- [Instalação](#instalação)
- [Utilização](#utilização)
    - [Persistência dos Dados de Busca](#persistênciadosdadosdebusca)
    - [Pré-Processamento](#pré-processamento)
    - [Processamento e Filtragem](#processamentoefiltragem)
- [Contribuidores](#contribuidores)

## Instalação

```sh
npm install
```

## Utilização

A sequência lógica do processo de utilização do Web Crawler ARR é composta pelas etapas abaixo em sua exata ordem de apresentação.

### Persistência dos Dados de Busca

```sh
http localhost:3001/loadBase
```

### Pré-Processamento

```sh
http localhost:3001/processUrl
```

### Processamento e Filtragem

```sh
http localhost:3001/processFilms
```

## Contribuidores

* Lucas de Alencar Barbosa
* Lucas Rocali Assunção Assis
* Rodrigo de Farias Ramires