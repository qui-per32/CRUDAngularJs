import angular from 'angular';
import DataService from './data.service';
import {HomeComponent} from "./home/home.component";
import {CreateUserComponent} from "../createUser/createUser.component";
import {PacientesComponent} from "../pacientes/pacientes.component";
import {ProfesionalComponent} from "../profesional/profesional.component";
import {EditPacienteComponent} from "../editPaciente/editPaciente.component";
import {EditProfesionalComponent} from "../editProfesional/editProfesional.component";
import {newProfesionalescomponent} from "../newProfesional/newProfesionales.component";
import {ErrorComponent} from "./error/404.component";

const home = angular
.module('home',[])
    .component ('home', HomeComponent)
    .component('createUser', CreateUserComponent)
    .component('profesional', ProfesionalComponent)
    .component('newProfesional', newProfesionalescomponent)
    .component('pacientes', PacientesComponent)  
    .component('editPaciente', EditPacienteComponent)
    .component('editProfesional', EditProfesionalComponent)
    .component ('error', ErrorComponent)
    .service('dataService', DataService)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('create', {
            url: '/create',
            component: 'createUser'
        })
        .state('editPaciente',{
            url:'/editPaciente/:userID',
            component:'editPaciente'
        })
        .state('editProfesional', {
            url: '/editProfesional/:userID',
            component: 'editProfesional'
        })
        .state('pacientes', {
            url: '/pacientes/:userID',
            component: 'pacientes'
        })
        .state("profesional",{
            url: '/profesional/:userID',
            component: 'profesional'
        })
        .state('newProfesional', {
            url: '/newProfesional',
            component: 'newProfesional'
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
