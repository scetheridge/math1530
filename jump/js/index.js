var app = angular.module("jumpPage", []);
app.controller("myCtrl", function ($scope) {
  let type = ['Prepare','Learn','Practice','Check','Resources']; //define resource type
  let icon = ['fa-play', 'fa-book']; //define icons
  let media =['video', 'reading', 'audio']

  $scope.jumppage = {
  "pageTitle": "Math 1530 Jump Page",
  "units": [
    {
      "title": "Declarative Statistics", //required unit title
      "topics": [
        {
          "title": "1.1 Topic something", //required topic title
          "objectives": [
            {
              "title": "1.1a Objective of Something", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
     {
      "title": "Another Stats Unit", //required unit title
      "topics": [
        {
          "title": "2.1 Topic something", //required topic title
          "objectives": [
            {
              "title": "2.1a Objective of Something", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sample Button", //required 
                  "url": "https://yahoo.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:12", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                }, // end of link object - add a comma to add another link
                 {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sample Button 2", //required 
                  "url": "https://yahoo.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:12", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    } // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
  ] // end of units array
} // end of JSON object

 
});

// Converts tag array into comma separated list
app.filter('join', function () {
    return function join(array, separator, prop) {
        if (!Array.isArray(array)) {
            return array; 
        }

        return (!!prop ? array.map(function (item) {
            return item[prop];
        }) : array).join(separator);
    };
});
