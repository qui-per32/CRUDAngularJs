import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {AppComponent} from "./app.component";
import common from "./common/common";
import components from "./components/components";

const root = angular
.module('App',[
    uiRouter,
    common,
    components

])
.component ('cApp', AppComponent)

//Punto de arranque.
document.addEventListener('DOMContentLoaded',
    ()=>angular.bootstrap(document,['App']));
