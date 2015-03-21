'use strict';

var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.controllers',
    //'app.services',
    //'app.directives',
    
  ])

.config(
  [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        //app.directive  = $compileProvider.directive;
        //app.filter     = $filterProvider.register;
        //app.factory    = $provide.factory;
        //app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;

        // url_base
        var op = 'OmegaProfile'

        $urlRouterProvider.otherwise('/OmegaProfile/dashboard');
        $stateProvider            
            .state('omsd', {
                abstract: true,
                url: '/',
                templateUrl: 'templates/base.html'
            })

            .state('omsd.login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })




            /* OmegaProfile */

            .state('omsd.op_dashboard', {
                url: op+'/dashboard',
                templateUrl: 'templates/OmegaProfile/dashboard.html'
            })

            
            .state('omsd.op_user_list', {
                url: op+'/users/list',
                templateUrl: 'templates/OmegaProfile/op_users/list.html'
            })

            .state('omsd.op_user_create', {
                url: op+'/users/create',
                templateUrl: 'templates/OmegaProfile/op_users/create.html'
            })

            .state('omsd.op_user_update', {
                url: op+'/users/update',
                templateUrl: 'templates/OmegaProfile/op_users/update.html'
            })





    }
  ]
)



.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;      



    }
  ]
)

;