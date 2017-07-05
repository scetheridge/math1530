var app = angular.module("jumpPage", []);
app.controller("myCtrl", function ($scope) {
  let type = ['Prepare','Learn','Practice','Check','Resources']; //define resource type
  let icon = ['fa-play', 'fa-book', 'fa-gears']; //define icons
  let media =['video', 'reading', 'audio', 'webpage']

  $scope.jumppage = {
  "pageTitle": "Math 1530 Jump Page",
  "units": [
    {
      "title": "Descriptive Statistics", //required unit title
      "topics": [
        {
          "title": "1.1 Statistical Literacy", //required topic title
          "objectives": [
            {
              "title": "1.1a Basic Terminology", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Some Statisical Vocabulary", //required button text 
                  "url": "http://bobhall.tamu.edu/FiniteMath/Module8/Introduction.html", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  //"time": "10:30", // optional - completion time
                  "tags": ['vocabulary', 'reading']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add another objective
            {
              "title": "1.1b Sampling Methods", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Types of Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=be9e-Q-jC-0", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:53", // optional - completion time
                  "tags": ['sampling', 'simple random sample', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Cluster Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=QOxXy-I6ogs", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:17", // optional - completion time
                  "tags": ['sampling', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Stratified Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=sYRUYJYOpG0", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:29", // optional - completion time
                  "tags": ['sampling', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Stratified Demonstration", //required button text 
                  "url": "http://onlinestatbook.com/2/introduction/sampling_demo.html", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  //"time": "5:29", // optional - completion time
                  "tags": ['sampling', 'activity']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            },// end of an objective - add a comma here to add another objective
            {
              "title": "1.1c Levels of Measurement", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Levels of Measurement", //required button text 
                  "url": "https://www.youtube.com/watch?v=ax2s_AEMu7o", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "11:40", // optional - completion time
                  "tags": ['sampling', 'simple random sample', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }// end of an objective - add a comma here to add another objective
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
