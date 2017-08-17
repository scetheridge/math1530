//THIS IS THE DEMO JUMP PAGE, SEE index-full.js FOR ALL UNITS AND TOPICS
var app = angular.module("jumpPage", []);
app.controller("myCtrl", function ($scope) {
  let type = ['Prepare','Learn','Practice','Check','Resources']; //define resource type
  let icon = ['fa-play', 'fa-book', 'fa-gears', 'fa-pencil', 'fa-calculator']; //define icons
  let media =['video', 'reading', 'audio', 'calculator', 'notes']

  $scope.jumppage = {
  "pageTitle": "Math 1530 Jump Page",
  "units": [
    {
      "title": "Descriptive Statistics", //required unit title
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Discrete Probability Distributions", //required unit title
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
     {
      "title": "Normal Probability Distributions", //required unit title
      "topics": [
        {
          "title": "3.2 Probabilities for Normal Distributions", //required topic title
          "objectives": [
            {
              "title": "3.2a Use z-scores to Find Probabilities", //optional objective title
              "links": [
                 {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Standard Normal Distribution on Statdisk", //required 
                  "url": "http://help.statdisk.org/normaldistribution", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'statdisk', 'reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to find a z-score from a known area", //required 
                  "url": "https://youtu.be/ub08vYfa8zo", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'statdisk', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2a Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Standard Normal Distribution Calculator", //required 
                  "url": "https://bellecurve.github.io/math1530/apps/", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'calculator']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2b Find the Value of a Normal Random Variable From Probability", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the Normal Distribution", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:InewwncA@9/Using-the-Normal-Distribution", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'probability', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Calculate z-scores", //required 
                  "url": "https://youtu.be/HCrYy1vNtHI", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'probability', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2b Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Find Normal Distribution Areas", //required 
                  "url": "https://youtu.be/uik8kLOh2_M", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:57", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'statdisk', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the TI-84 to Find Normal Probability", //required 
                  "url": "https://youtu.be/HKzZwX7oeDM", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:15", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'calculator', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Distribution Practice Problems", //required 
                  "url": "https://youtu.be/-hyuDHGb9Ec", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "14:38", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Drawings to Solve Normal Distribution Problems", //required 
                  "url": "https://youtu.be/72ZZq30Dq2g", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:45", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Distributions Lecture from OpenStax Author", //required 
                  "url": "https://youtu.be/OqorvQXzemY", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "26:32", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2c Use the Central Limit Theorem to Calculate Probabilities", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction to the Central Limit Theorem", //required 
                  "url": "https://youtu.be/Pujol1yC1_A", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:13", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2c Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Statistics How To: Central Limit Theorem", //required 
                  "url": "http://www.statisticshowto.com/central-limit-theorem-examples/", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Central Limit Theorem for Sample Means", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:w5Utw7bZ@9/The-Central-Limit-Theorem-for-", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the Central Limit Theorem", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:RcP25R6r@9/Using-the-Central-Limit-Theorem", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Central Limit Theorem", //required 
                  "url": "https://youtu.be/JNm3M9cqWyc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:48", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video', 'khan academy']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sampling Distribution of the Sample Mean", //required 
                  "url": "https://youtu.be/FXZ2O1Lv-KE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:51", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video', 'khan academy']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Central Limit Theorem with OpenStax Author", //required 
                  "url": "https://youtu.be/qZFDvprWLN0", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "26:03", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Hypothesis Testing and Inference", //required unit title
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
