# Camping web interface microservice

<p align="center">
  <img src="https://github.com/camping-rso/camping-web-interface/blob/master/code/Avtokampi-Web/src/assets/images/logo/ikona.png?raw=true"/>
  <img src="https://angular.io/assets/images/logos/angular/angular.png"/>
</p>

This is a web camping app written in Angular for a school term paper/seminar assignment. The application can be used
individually or as a microservice.

Table of contents
=================
- [Prerequisites](#prerequisites)
- [Installation and running](#installation-and-running)
- [Purpose of the app](#purpose-of-the-app)

## Prerequisites
To properly run the application from Visual Studio Code you have to install the
following:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js 12.x](https://nodejs.org/)

## Installation and running
When you have installed dev tools, run following commands:
- `cd code/Avtokampi-Web/`
- `npm install`
- `npm start`

### Environment variables
The Web app requires camping API microservices endpoint. For that you can set `API_URL` environment variable when
running with Angular or with Docker. 

## Purpose of the app
The purpose of this application and repository is to create a DEMO web app for camping that would
provide the following pages:

- user login and registration
- list view of several camping venues with some information
- viewing of camps on Google Maps
- reservation of camps and camping spaces
- adding your personal opinion based on your stay in camps
- adding a new camp for camping owners
- modifying and erasing camps for camping owners
- adding, modifying and deleting camping spaces
