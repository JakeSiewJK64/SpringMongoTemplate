# Springboot Mongo Template
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
### Tools you will need:
1. VS Code
2. NPM Packages:
  - @angular/cli
  - @angular/material
  - @covalent/core
  - @angular/cdk
  - @auth0/angular-jwt
  - jwt-decode
  - rxjs

3. VS Code Extensions:
  - Java Code Generators
  - Debugger for Java
  - Java Extension Pack
  - Java Test Runner
  - Maven for Java
  - Project Manager for Java
  - Spring Boot Tools
  - Spring Boot Dashboard
  - Spring Initializer Java Support
4. Tools:
- Java SDK Ver. 16
- JRE 30.1.1

<div style="display: flex;flex-flow: row-reverse wrap;">
<a href="https://marketplace.visualstudio.com/items?itemName=sohibe.java-generate-setters-getters">
<img src="https://redhat.gallerycdn.vsassets.io/extensions/redhat/java/0.80.0/1625064021900/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug">  
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-java-debug/0.35.0/1627440419821/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-java-pack/0.18.2/1627897072759/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-maven/0.32.2/1628148242180/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-java-test/0.31.0/1628215913870/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-java-dependency/0.18.6/1627277271204/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-spring-boot">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-spring-boot-dashboard/0.2.0/1608001068887/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard">
<img src="https://pivotal.gallerycdn.vsassets.io/extensions/pivotal/vscode-spring-boot/1.26.0/1624118746619/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-spring-initializr/0.7.0/1615883353860/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="50"/>
</a>
</div>

## Video Help:
https://youtu.be/uq4GjRF_860

## IMPORTANT NOTE:
- Frontend: Make sure you update your Angular CLI to Angular 12 using:
```sh
ng update
```
- Update Node packages using:
```sh
npm i
```
- Frontend and Backend are run separately. 
- To run frontend, navigate to projectFolder/ClientApp/FrontEnd, then use command like this:
```sh
ng serve --aot --hmr
```
  this means ng serve ahead of time, hot module reload
- To run backend, use [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug), open any Java File > Go to Debug Tab (left of VS Code) > Run 

## Understanding the Structure (Backend):
1. DAO (Data Access Objects): Just a class that defines the CRUD functions against the database
2. Models: Defines the object/model structure i.e. What attributes to include + getters and setters
3. Util: contains JWT Util: creates and validates JWT tokens
4. Filters: Receives authentication parameters from POST request and validate against database.
5. Controllers: Is needed to receive API URL calls and execute whatever functions needed to get the job done, then returns needed response.
6. To access swagger (after u have run the backend), go to http://localhost:8095/swagger-ui-custom.html

## Understanding the Structure (FrontEnd):
1. Usually we define the API functions in api-resources.ts. This includes both normal and authentication APIs.
2. All API related models, functions, controllers, enums and interfaces all go into the api-resource.ts file.

## Some common rules and best practice:
1. Please make sure in Java naming conventions functions and variables have camel casing naming conventions.
2. Classes, Interfaces and Abstract Interfaces must start with Capital Letter.

## Developer notes:
1. Any issues or improvements are welcome to address in the issues section.
2. PRs are welcomed :)
