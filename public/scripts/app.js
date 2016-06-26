/**
 * Load controllers, directives, filters, services before bootstrapping the application.
 * NOTE: These are named references that are defined inside of the config.js RequireJS configuration file.
 */
define([
    'jquery',
    'angular',
    'main',
    'routes',
    'interceptors',
    'px-datasource',
    'ng-bind-polymer'
], function ($, angular) {
    'use strict';

    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var predixApp = angular.module('predixApp', [
        'app.routes',
        'app.interceptors',
        'sample.module',
        'predix.datasource',
        'px.ngBindPolymer'
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    predixApp.controller('MainCtrl', ['$scope', '$rootScope', 'PredixUserService', function ($scope, $rootScope, predixUserService) {

        //Global application object
        window.App = $rootScope.App = {
            version: '1.0',
            name: 'Predictive Maintenance and Management System II(PMMS-II)',
            session: {},
            tabs: [
                {icon: 'fa-tachometer', state: 'dashboards6', label: 'Historical WO Mgmt.'},
                {icon: 'fa-tachometer', state: 'blankpage', label: 'PM Mgmt.'},
                {icon: 'fa-tachometer', state: 'blankpage1', label: 'Spare-Part warehouse Mgmt.'},
                {icon: 'fa-tachometer', state: 'blankpage2', label: 'Indirect Material Mgmt.'},
                {icon: 'fa-tachometer', state: 'blankpage3', label: 'Analytics and Report'},
                {icon: 'fa-tachometer', state: 'blankpage4', label: 'System Mgmt.', subitems: [
                    {state: 'blanksubpage', label: 'User Mgmt'},
                    {state: 'blanksubpage1', label: 'Role Mgmt'},
                    {state: 'blanksubpage2', label: 'System Configuration'}
                ]}
            ]
            // tabs: [
            //     {icon: 'fa-tachometer', state: 'dashboards', label: 'WO generation & disposal'},
            //     {icon: 'fa-file-o', state: 'blankpage', label: 'FM WO generation'},
            //     {icon: 'fa-file-o', state: 'blankpage1', label: 'FM WO disposal'},
            //     {icon: 'fa-file-o', state: 'blankpage2', label: '1st level PM WO disposal'},
            //     {icon: 'fa-file-o', state: 'blankpage3', label: '2nd level PM WO disposal'},
            //     {icon: 'fa-file-o', state: 'blankpage4', label: 'Facility WO generation & disposal'}
            // ]
        };

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (angular.isObject(error) && angular.isString(error.code)) {
                switch (error.code) {
                    case 'UNAUTHORIZED':
                        //redirect
                        predixUserService.login(toState);
                        break;
                    default:
                        //go to other error state
                }
            }
            else {
                // unexpected error
            }
        });
    }]);


    //Set on window for debugging
    window.predixApp = predixApp;

    //Return the application  object
    return predixApp;
});
