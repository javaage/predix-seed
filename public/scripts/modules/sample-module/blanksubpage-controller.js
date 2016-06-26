define(['angular', './sample-module', 'datatable'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('BlanksubpageController', ['$scope', '$log', 'PredixAssetService', 'PredixViewService', function ($scope, $log, PredixAssetService, PredixViewService) {

        $('#example').DataTable( {
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
        });
    }]);
});
