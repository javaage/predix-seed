define(['angular', './sample-module', 'datatable'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('BlankController', ['$scope', '$log', 'PredixAssetService', 'PredixViewService', function ($scope, $log, PredixAssetService, PredixViewService) {

        $('#example').DataTable( {
        "ajax": "/sample-data/datatable.json",
        "columns": [
            { "data": "UserName" },
            { "data": "FullName" },
            { "data": "Email" },
            { "data": "Role" }
        ]
        });
    }]);
});
