// queryCtrl.js

Curiosity.controller('queryCtrl', ['$scope', 'query', 'mapping',
    function($scope, query, mapping) {
	    
	    /* INITIALISATIONS */
    	$scope.data = query.info;
    	$scope.mappingData = mapping.info;
    	$scope.keywordLimit = 9;
    	$scope.fieldLimit = 9;
    	// TODO : Clean initialisation

    	var limitOnField = true;
    	var limitOnKeywords = true;
 
	    /* EVENTS */
		$scope.$on('IndexChange',function (){
			query.updateIndex();
		});

		$scope.$on('ServerChange', function() {
	    	query.updateClient();
		});

		$scope.search = function(noReset) {
			query.search(noReset); 
		}

		$scope.addKeyWord = function (keyword) {
			query.addValueInQuery(keyword);
		}

		$scope.updateQuery = function () {
			query.updateQuery();
		}
		
		$scope.updateLimiteValueKeyword = function() {
			if (limitOnKeywords){
				$scope.keywordLimit = $scope.data.keywordToShow.length;
				limitOnKeywords = false;
			}
			else {
				$scope.keywordLimit = 9;
				limitOnKeywords = true
			}
		}

		$scope.updateLimiteValueField = function() {
			if (limitOnField){
				$scope.fieldLimit = $scope.mappingData.fields.length;
				limitOnField = false;
			}
			else {
				$scope.fieldLimit = 9;
				limitOnField = true
			}
		}

		$scope.addKeywordFromQuery = function (name, desc) {
			query.addKeywordFromQuery(name, $scope.data.complexRequest, desc);
		}
	}
]);

