import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

import 'bootstrap';

//控制器
import indexCtrl from './components/index/indexCtrl.js';
import homeCtrl from './components/home/homeCtrl.js';

var app = angular.module("app", [uirouter,require('angular-resource')])
    .controller('indexCtrl', indexCtrl)
    .controller('homeCtrl', homeCtrl);

//定义路由
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        template: require('./components/home/home.html'),
        controller: 'homeCtrl'
    })
    
    $urlRouterProvider.otherwise('home');
}])

export default app;