angular.module('test', ['schemaForm','ui.bootstrap'])

.config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'custom_input',
      'custom_input.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'custom_input',
      'custom_input.html'
    );
  }
])

.controller('TestCtrl', function($scope) {
  $scope.schema = {
      "type": "object",
      "title": "SlurmConfig",
      "properties": {
        "array":  {
          "title": "array",
          "type": "string"
        },
        "account":{
          'title': "account",
          "type":"string",
          "pattern": "^\\S+@\\S+$",
        },
        "begin":  {
          "title": "begin",
          "type": "string",
          "pattern": "^(2[0-3]|[01][0-9]):[0-5][0-9]$",
        },
        "checkpoint":  {
          "title": "checkpoint",
          "type": "string",
          "pattern": "^(2[0-3]|[01][0-9]):[0-5][0-9]$",
        },
        "checkpoint-dir":  {
          "title": "checkpoint-dir",
          "type": "string",
          "pattern": "^([.a-zA-Z0-9_-]*)\\/(([a-zA-Z0-9_-]+\\//?)*)$",
        },
        "cpu-per-task":  {
          "title": "cpu-per-task",
          "type": "integer",
          "minimum":1,
          "maximum":100
        },
        "workdir":  {
          "title": "workdir",
          "type": "string",
          "pattern": "^([.a-zA-Z0-9_-]*)\\/(([a-zA-Z0-9_-]+\\//?)*)$",
        },
        "error":  {
          "title": "error",
          "type": "string",
          "pattern": "^([a-zA-Z0-9_-]|%[AajNu])+\\.[a-zA-Z]+$",
        },
        "export":  {
          "title": "export",
          "type": "string",
          "pattern": "^(ALL|NONE)$",
        },
        "export-file":  {
          "title": "export-file",
          "type": "string",
          "pattern": "^[.a-zA-Z0-9_-]+$",
        },
        "nodefile":  {
          "title": "nodefile",
          "type": "string",
          "pattern": "^([.a-zA-Z0-9_-]*)\\/(([a-zA-Z0-9_-]+\\/?)*)[.a-zA-Z0-9_-]+$",
        },
        "get-user-env":  {
          "title": "get-user-env",
          "type": "string",
          "pattern": "^(\\d*[SL]?)$|^([nN]o[\\s\\-][oO]ptions?)$",
        },
        "immediate":  {
          "title": "immediate",
          "type": "boolean",
        },
        "input":  {
          "title": "input",
          "type": "string",
          "pattern": "^([a-zA-Z0-9_-]|%[AajNu])+\\.[a-zA-Z]+$",
        },
        "job-name":  {
          "title": "job-name",
          "type": "string",
          "pattern": "^[.a-zA-Z0-9_-]+$",
        },
        "jobid":  {
          "title": "jobid",
          "type": "string",
          "pattern": "^[0-9]+$",
        },
        "no-kill":  {
          "title": "no-kill",
          "type": "boolean",
        },
        "licenses":  {
          "title": "licenses",
          "type": "string",
          "pattern": "^[0-9a-zA-Z]+(@[.a-zA-Z0-9]+)?(:[0-9]+)?(,[0-9a-zA-Z]+(@[.a-zA-Z0-9]+)?(:[0-9]+)?)*$",
        },
        "mail-type":  {
          "title": "mail-type",
          "type": "string",
          "pattern": "^(BEGIN|END|FAIL|REQUEUE|TIME_LIMIT(_[589]0)*)$",
        },
        "mail-user":  {
          "title": "mail-user",
          "type": "string",
        },
        "mem":  {
          "title": "mem",
          "type": "number",
          "minimum":1,
          "maximum":1000
        },
        "mem-per-cpu":  {
          "title": "mem-per-cpu",
          "type": "number",
          "minimum":1,
          "maximum":1000
        },
        "nodes":  {
          "title": "nodes",
          "type": "number",
          "minimum":1,
          "maximum":1000
        },
        "no-requeue":  {
          "title": "no-requeue",
          "type": "boolean",
        },
        "output":  {
          "title": "output",
          "type": "string",
          "pattern": "^([a-zA-Z0-9_-]|%[AajNu])+\\.[a-zA-Z]+$",
        },
        "qos":  {
          "title": "qos",
          "type": "string",
          "pattern": "^(janus(-long|-debug)?|himem|crestone|gpu)$",
        },
        "requeue":  {
          "title": "requeue",
          "type": "boolean",
        },
        "time":  {
          "title": "time",
          "type": "string",
          "pattern": "^([1-9]|[1-9]+[0-9])-(2[0-3]|[01][0-9])$",
        },
      }
    };
    $scope.form = [
      {
        "key": "array",
        "type":"custom_input",
        "condition": "model.check.array",
        "popover":"Anta Bakaa?",
        "delete": function (key){$scope.model.check[key] = false;},
        "required": true
      },
      "account",
      "begin"
  /*   "checkpoint",
      "checkpoint-dir",
      "cpu-per-task",
      "workdir",
      "error",
      "export",
      "export-file",
      "nodefile",
      "get-user-env",
      "immediate",
      "input",
      "job-name",
      "jobid",
      "no-kill",
      "licenses",
      "mail-type",
      "mail-user",
      "mem",
      "mem-per-cpu",
      "nodes",
      "no-requeue",
      "output",
      "qos",
      "requeue",
      "time"
*/
    ];
    var check = {
    'array':false,
    'account':false,
    'begin':false,
    'checkpoint':false,
    'checkpoint-dir':false,
    'cpu-per-task':false,
    'workdir':false,
    'error':false,
    'export':false,
    'export-file':false,
    'nodefile':false,
    'get-user-env':false,
    'immediate':false,
    'input':false,
    'job-name':false,
    'jobid':false,
    'no-kill':false,
    'licenses':false,
    'mail-type':false,
    'mail-user':false,
    'mem':false,
    'mem-per-cpu':false,
    'nodes':false,
    'no-requeue':false,
    'output':false,
    'qos':false,
    'requeue':false,
    'time':false
  };
    $scope.model = {check:check};
    $scope.options = Object.keys($scope.model.check);
    console.log($scope.options);
    $scope.$watch('model', function(value){
      if (value) {
        $scope.prettyModel = JSON.stringify(value, undefined, 2);
      }
    }, true);

    $scope.onEnter = function($event) {
    if ($event.which===13){
        $scope.model.check[$scope.selected] = true;
        $scope.selected = "";
    }
  };


})
.directive('typeaheadFocus', function (){
  return {
    require: 'ngModel',
    link: function (scope,element,attr,ngModel){
      element.bind('click', function () {
        var viewValue = ngModel.$viewValue;

        if (ngModel.$viewValue == ' '){
          ngModel.$setViewValue(null);
        }
        ngModel.$setViewValue(' ');
        ngModel.$setViewValue(viewValue || ' ');
      });

      element.bind('keyup', function(event){
        if (event.which === 8){ // when backspace is released
          if (ngModel.$viewValue.length < 1 && ngModel.$viewValue === ''){
            ngModel.$setViewValue(' ');
          }
        }
      });

      scope.emptyOrMatch = function (actual,expected){
        if (expected == ' ') return true;
        return actual.indexOf(expected) > -1;
      };
    }

  };
});
