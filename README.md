# Book Search Engine Homework

## Description

Week 21 of Columbia Engineering Coding Bootcamp challenges us to rewrite a book search and storage application from a REST API to use GraphQL.

For me the main challenge was the client, the server was straightforward. We used the MongoDB schema without change. Really it was just adding Apollo and switching the REST API to GraphQL.

I had many errors with the client, React threw a bunch of errors and it wasn't clear to me what caused it, so on some pages I almost completely threw away the original code and substituted my own.

![screenshot]

## Installation

Download the project, install dependencies (note there are two parts, the server and client, and the main Develop folder has one dependency to run both client and server at the same time):

```bash
git clone https://github.com/chrispobrien/21-MERN.git
cd 21-MERN/Develop
npm run install
```

## Configuration

No need for configuration if you are running it on the local machine.  In the Develop folder:

```bash
npm run develop
```

Starts the client and server, a browser window will automatically open with the client.

## Credits

Although this was a lot of work, 90% of it is cloned from the homework challenge starter, so please credit the bootcamp.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[screenshot]: /Develop/client/public/screenshot.png