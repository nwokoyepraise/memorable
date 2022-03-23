# Memorable
<p align="center">
  <a href="https://www.memorableai.com/">
    <img src="https://user-images.githubusercontent.com/65955286/159771902-0c5f42ec-0610-4fb3-a706-63f4e15a4758.png" alt="Logo">
  </a>
 
 <h2>Memorable Backend Application  </h2>
 </P>

 <p align="center">
    <br />
    <a href="https://github.com/nwokoyepraise/memorable"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://heroku-memorableai-38ah2.herokuapp.com/graphql">View Demo</a>
    ·
    <a href="https://github.com/nwokoyepraise/memorable/issues">Report Bug</a>
    ·
    <a href="https://github.com/nwokoyepraise/memorable/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#uml-diagrams">UML Diagrams</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This project is a demo backend assessment for Memorable 
Memorable is linked at <a href="https://www.memorableai.com/">here</a>

<!-- END POINTS -->
## Services Available on the Backend
- Asset Creation
- Highly Customizable Asset Query
- Asset Update
- Retrieve Average Metric Data for Field

### Built With

The project was built natively with the following technologies
* [Node.js](https://nodejs.org)
* [NestJs](https://nestjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [TypeORM](https://typeorm.io/#/)
* [GraphQL](https://graphql.org/)



<!-- GETTING STARTED -->
## Getting Started

To build the project locally, simply clone the github repository. Navigate to root project folder and run the following to install packages:

```bash
# Install packages
$ npm install
```

After packages have been installed. Proceed to run:

`npm start`

## API Endpoint

***Base API: http://localhost:3000/graphql

### Create Asset
```curl 
'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"mutation {\n  createAsset(\n    asset: { filename: \"file0001\", asset_type: \"image\", extension: \"png\" }\n  ) {\n    id\n    filename\n    asset_type\n    extension\n    time_added\n    score_type1\n    score_type2\n    score_type3\n  }\n}\n"}' --compressed
```

![image](https://user-images.githubusercontent.com/65955286/159782126-18a82948-4462-4209-ad5d-a4d3416d9173.png)


### Get Asset
```curl 
'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"# Write your query or mutation here\nquery {\n  asset(id:\"f90ae0ee-7ca4-4668-b6da-3e48f6840720\"){\n    filename\n    score_type1\n    score_type2\n}\n}"}' --compressed
```

![image](https://user-images.githubusercontent.com/65955286/159782975-15398dc5-ad84-4bb9-a0a0-c3d4443d3750.png)

### Update Asset Scores
```curl
'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"mutation {\n  addScores(\n    id: \"ca9346f2-8a86-428f-8fac-a6dc17b08c0d\"\n    scores: { score_type1: 20, score_type2: 99, score_type3: 23 }\n  ) {\n    id\n    score_type1\n    score_type2\n    score_type3\n    filename\n    extension\n  }\n}\n"}' --compressed
```

![image](https://user-images.githubusercontent.com/65955286/159783472-9ad8739d-21c6-4d98-90b1-d2fef6fedd72.png)

### Retrieve Average Score By Asset and Score Type
```curl
'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query {\n  getAverage(asset_type: \"image\", score_type: \"Type1\") {\n    average_score\n  }\n}\n"}' --compressed
```

![image](https://user-images.githubusercontent.com/65955286/159783847-7eb5d128-4852-4240-951b-a14b95b26a67.png)

<!-- UML DIAGRAM -->
## UML Diagrams

### DB Diagram:


![memorable_asset](https://user-images.githubusercontent.com/65955286/159785931-8f52cd50-e079-4f18-af1b-624aa24f809a.svg)

## Description



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
