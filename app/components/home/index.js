import angular from 'angular';
import HomeService from './home.service';
import {HomeComponent} from "./home/home.component";
import {CreateUserComponent} from "../create/createUser.component";
import {ViewComponent} from "../view/view.component";
import {EditComponent} from "../edit/edit.component";
import {Profesionalescomponent} from "../medicos/medicos.component";
import {ErrorComponent} from "./error/404.component";

const home = angular
.module('home',[])
    .component ('home', HomeComponent)
    .component('createUser', CreateUserComponent)
    .component('profesionales', Profesionalescomponent)
    .component('view', ViewComponent)
    .component('edit', EditComponent)
    .component ('error', ErrorComponent)
    .service('homeService', HomeService)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('create', {
            url: '/create',
            component: 'createUser'
        })
        .state('edit',{
            url:'/edit',
            component:'edit'
        })
        .state('view', {
            url: '/view',
            component: 'view'
        })
        .state('profesionales', {
            url: '/profesionales',
            component: 'profesionales'
        })
         .state('home', {
             url: '/',
             component: 'home'
         })
         .state('error', {
             url: '/error',
             component: 'error'
         });
    $urlRouterProvider.otherwise('/error')
    })
    .name
export default home;
