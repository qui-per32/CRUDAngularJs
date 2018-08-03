import angular from 'angular';

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

const common = angular
.module('App.common',[])
.component('cHeader', HeaderComponent)
.component('cFooter',FooterComponent)
.name;

export default common;