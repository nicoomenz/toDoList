# ProyectoToDo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## comandos de configuracion linux:

Ingresa el comando de instalación donde se encuentre el xampp. sudo ./xampp-linux-x64-7.2.9-0-installer.run

mysqk -u root -p -h 127.0.0.1 | CREATE DATABASE todoitems | cd ../spring | chmod +x /spring | sudo service spring start

cd "ruta de aplicacion" | ng serve

## instalar node_modules

npm install --save-dev @angular-devkit/build-angular

## tiempos de ejecucion
forma de calcular:
long startTime = System.nanoTime();
//codigo
long endTime = System.nanoTime();
System.out.println("Took "+(endTime - startTime) + " ns");

Folders:
listFolder:   1091348938 ns
addFolder:    98699358 ns
modifyFolder: 43659660 ns
deleteFolder: 91681081 ns

Items:
listItems:    37550289 ns
addItem:      194750549 ns
modifyItem:   64444511 ns
deleteItem:   150808846 ns

## herramientas:

eclipse IDE 2019-12, apache-tomcat-8.5.51, spring-core 5.2.0, hibernate 5.4.6, jackson-core 2.10.1, mysql 8.0.12, javax.servlet 3.0.1, Angular 7.3.9, bootstrap 4.4.1
