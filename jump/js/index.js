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
      "topics": [
        {
          "title": "1.1 Statistical Literacy", //required topic title
          "objectives": [
            {
              "title": "1.1a Basic Concepts of Statistics and Statistical Thinking", //optional objective title
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
              "title": "1.1b Types of Data", //optional objective title
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
            },// end of an objective - add a comma here to add another objective
            {
              "title": "1.1c Sampling Methods", //optional objective title
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
                  "text": "Sampling Demonstration", //required button text 
                  "url": "http://onlinestatbook.com/2/introduction/sampling_demo.html", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  //"time": "5:29", // optional - completion time
                  "tags": ['sampling', 'activity']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            },// end of an objective - add a comma here to add another objective
            {
              "title": "1.1d Types of Studies", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Observational Studies and Experiments", //required button text 
                  "url": "https://www.youtube.com/watch?v=qwfd8cf3_UY", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:48", // optional - completion time
                  "tags": ['types of studies', 'observational study', 'experimental study', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.1e Bias and Distortion in Statistics", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sources of Bias: How Data Goes Bad", //required button text 
                  "url": "https://www.youtube.com/watch?v=uDcb-RkbrK8", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "6:59", // optional - completion time
                  "tags": ['bias', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Selection Bias: A Real World Example", //required button text 
                  "url": "https://www.youtube.com/watch?v=p52Nep7CBdQ", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:08", // optional - completion time
                  "tags": ['bias', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sampling Methods and Bias", //required button text 
                  "url": "https://www.youtube.com/watch?v=irz_jsv4eVw", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "13:07", // optional - completion time
                  "tags": ['bias', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.2 Summarizing and Graphing Data", //required topic title
          "objectives": [
            {
              "title": "1.2a Frequency Distributions", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Creating a Frequency Distribution", //required button text 
                  "url": "https://youtu.be/4hCZTkWUeZ8", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "8:18", // optional - completion time
                  "tags": ['frequency distributions', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Relative Frequency Distribution", //required button text 
                  "url": "https://youtu.be/fZBVmACSEfs", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "8:18", // optional - completion time
                  "tags": ['frequency distribution', 'relative frequency distribution', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Frequency Distribution Examples", //required button text 
                  "url": "https://www.mathway.com/examples/statistics/frequency-distribution", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['frequency distribution', 'practice', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2b Frequency Distribution as a Histogram", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct a Frequency Distribution and Histogram", //required button text 
                  "url": "https://youtu.be/l8KtKhZsQzE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "8:18", // optional - completion time
                  "tags": ['frequency distribution', 'histogram', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Histogram Simulation (Requires JAVA)", //required button text 
                  "url": "http://onlinestatbook.com/stat_sim/histogram/index.html", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['frequency distribution', 'histogram', 'practice']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Histogram Simulation Demonstration", //required button text 
                  "url": "https://www.youtube.com/watch?v=63TJLZr52q4E", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:12", // optional - completion time
                  "tags": ['frequency distribution', 'histogram', 'practice', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2c Dotplots", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Make a Dot Plot", //required button text 
                  "url": "https://www.youtube.com/watch?v=QUxoW9S3kKs", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:00", // optional - completion time
                  "tags": ['dot plot', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Make a Dot Plot Using Excel", //required button text 
                  "url": "https://www.youtube.com/watch?v=KK_CEG-vqNU", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:08", // optional - completion time
                  "tags": ['dot plot', 'excel', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2d Stem-and-leaf Plots", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Make a Stem and Leaf Plot", //required button text 
                  "url": "https://www.youtube.com/watch?v=_7m0Q_m2ppg", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:14", // optional - completion time
                  "tags": ['stem and leaf plot', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.3 Measures of Center", //required topic title
          "objectives": [
            {
              "title": "1.3a Mean", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using StatDisk to Find Descriptive Statistics", //required button text 
                  "url": "https://youtu.be/Jza3XBwuHN4", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:36", // optional - completion time
                  "tags": ['statdisk', 'measures of center', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Measures of Center and Spread on Excel", //required button text 
                  "url": "https://www.youtube.com/watch?v=LE0_eHsO5xE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:25", // optional - completion time
                  "tags": ['excel', 'measures of center', 'measures of variation', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3b Median", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using StatDisk to Find Descriptive Statistics", //required button text 
                  "url": "https://youtu.be/Jza3XBwuHN4", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:36", // optional - completion time
                  "tags": ['statdisk', 'measures of center', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Measures of Center and Spread on Excel", //required button text 
                  "url": "https://www.youtube.com/watch?v=LE0_eHsO5xE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:25", // optional - completion time
                  "tags": ['excel', 'measures of center', 'measures of variation', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3c Mode", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using StatDisk to Find Descriptive Statistics", //required button text 
                  "url": "https://youtu.be/Jza3XBwuHN4", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:36", // optional - completion time
                  "tags": ['statdisk', 'measures of center', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Measures of Center and Spread on Excel", //required button text 
                  "url": "https://www.youtube.com/watch?v=LE0_eHsO5xE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:25", // optional - completion time
                  "tags": ['excel', 'measures of center', 'measures of variation', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3d Midrange", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Find the Midrange", //required button text 
                  "url": "https://www.youtube.com/watch?v=tYYaXebF_JU", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:18", // optional - completion time
                  "tags": ['measures of center', 'midrange', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3e Mean of a Frequency Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Mean, Median, and Mode from a Frequency Distribution", //required button text 
                  "url": "https://youtu.be/gMaIREesP7Y", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:12", // optional - completion time
                  "tags": ['mean', 'median', 'mode', 'measures of center', 'video', 'frequency distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Mean and Standard Deviation of a Grouped Frequency Distribution", //required button text 
                  "url": "https://youtu.be/LkgEHm7KpNA", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:35", // optional - completion time
                  "tags": ['mean', 'standard deviation', 'video', 'frequency distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.4 Measures of Variation", //required topic title
          "objectives": [
            {
              "title": "1.4a Range", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Range, Variance, and Standard Deviation", //required button text 
                  "url": "https://www.youtube.com/watch?v=E4HAYd0QnRc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "12:33", // optional - completion time
                  "tags": ['khan academy', 'range', 'variance', 'standard deviation', 'measures of variation']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.4b Variance and Standard Deviation", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Range, Variance, and Standard Deviation", //required button text 
                  "url": "https://www.youtube.com/watch?v=E4HAYd0QnRc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "12:33", // optional - completion time
                  "tags": ['khan academy', 'range', 'variance', 'standard deviation', 'measures of variation']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Calculate Standard Deviation and Variance", //required button text 
                  "url": "https://youtu.be/qqOyy_NjflU", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:05", // optional - completion time
                  "tags": ['variance', 'standard deviation', 'measures of variation', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Calculating Standard Deviation Step by Step", //required button text 
                  "url": "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/measuring-spread-quantitative-data/a/calculating-standard-deviation-step-by-step", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "12:33", // optional - completion time
                  "tags": ['khan academy', 'standard deviation', 'measures of variation', 'practice']//optional tags
                }, // end of link object - add a comma to add another link
                 {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Measures of Center and Spread on Excel", //required button text 
                  "url": "https://www.youtube.com/watch?v=LE0_eHsO5xE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:25", // optional - completion time
                  "tags": ['excel', 'measures of center', 'measures of variation', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.4c Standard Deviation of a Frequency Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Mean and Standard Deviation of a Grouped Frequency Distribution", //required button text 
                  "url": "https://youtu.be/LkgEHm7KpNA", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:35", // optional - completion time
                  "tags": ['mean', 'standard deviation', 'video', 'frequency distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.5 Measures of Relative Standing", //required topic title
          "objectives": [
            {
              "title": "1.5a Percentiles", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Percentiles", //required button text 
                  "url": "https://www.varsitytutors.com/hotmath/hotmath_help/topics/percentile", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['percentiles', 'measures of relative standing', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Calculate Percentiles", //required button text 
                  "url": "https://youtu.be/IChd2tzDPhw", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:58", // optional - completion time
                  "tags": ['percentiles', 'measures of relative standing', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.5b The Five Number Summary", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Find a Five-Number Summary", //required button text 
                  "url": "http://www.statisticshowto.com/how-to-find-a-five-number-summary-in-statistics/", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['five number summary', 'measures of relative standing', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.5c Boxplots", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Box Plots the Five Number Summary", //required button text 
                  "url": "https://youtu.be/7IRGuVCn4fg", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "12:47", // optional - completion time
                  "tags": ['boxplot', 'five number summary', 'measures of relative standing', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Identifying Outliers", //required button text 
                  "url": "https://youtu.be/o8Q0i9VzQZA", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:13", // optional - completion time
                  "tags": ['boxplot', 'outliers', 'interquartile range', 'measures of relative standing', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct Boxplots", //required button text 
                  "url": "https://youtu.be/8qBDzPsicsE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:23", // optional - completion time
                  "tags": ['boxplot', 'statdisk', 'measures of relative standing', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Interactivate: Box Plot", //required button text 
                  "url": "http://www.shodor.org/interactivate/activities/BoxPlot/", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['boxplot', 'measures of relative standing', 'practice']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Discrete Probability Distributions", //required unit title
      "topics": [
        {
          "title": "2.1 Fundamentals of Probability", //required topic title
          "objectives": [
            {
              "title": "2.1a Properties of Probabilities", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Probability (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/mwjClAV_@3.88:Dfuyh6VB@4/Probability", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Terminology (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:Gi99cJhF@6/Terminology", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'openstax']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.1b-c Basic Probability", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Calculate Probability, Addition and Complements", //required button text 
                  "url": "https://youtu.be/dqNvtYWmSrY", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "6:49", // optional - completion time
                  "tags": ['probability', 'complements']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.2 The Addition Rule", //required topic title
          "objectives": [
            {
              "title": "2.2a Disjoint Events", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Addition Rule for Probability (Khan Academy)", //required button text 
                  "url": "https://youtu.be/QE2uR6Z-NcU", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:42", // optional - completion time
                  "tags": ['probability', 'addition rule', 'khan academy']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.2b Addition Rule", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Addition Rule for Probability (Khan Academy)", //required button text 
                  "url": "https://youtu.be/QE2uR6Z-NcU", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:42", // optional - completion time
                  "tags": ['probability', 'addition rule', 'khan academy']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.2c Contingency Tables", //optional objective title
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
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.3 Conditional Probability and the Multiplication Rule", //required topic title
          "objectives": [
            {
              "title": "2.3a-b Independent and Dependent Events", //optional objective title
              "links": [
               {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Boy-Girl Conditional Probability", //required button text 
                  "url": "https://youtu.be/MDzbD2Ay5b4", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:25", // optional - completion time
                  "tags": ['probability', 'conditional probability']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Calculate Conditional Probability", //required button text 
                  "url": "https://youtu.be/H02B3aMNKzE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "7:43", // optional - completion time
                  "tags": ['probability', 'conditional probability']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Conditional Probability", //required button text 
                  "url": "http://www.mathgoodies.com/lessons/vol6/conditional.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'conditional probability']//optional tags
                }, // end of link object - add a comma to add another link
               {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Independent and Mutually Exclusive Events (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:qLYH79kX@9/Independent-and-Mutually-Exclu", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'independent events', 'openstax']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.3c Applying the Multiplication Rule to a Contingency Table", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Two Basic Rules of Probability (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:0_rgGM3Y@4/Two-Basic-Rules-of-Probability", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Contingency Tables (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:NCj5CIRF@9/Contingency-Tables", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'openstax', 'contingency tables']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.4 Random Variables and Discrete Probability Distributions", //required topic title
          "objectives": [
            {
              "title": "2.4a-b Discrete Probability Distributions and Random Variables", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Probability Distribution Function for a Discrete Random Variable (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:X8iM07Af@4/Probability-Distribution-Funct", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'discrete random variable', 'probability distribution', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Discrete Probability Distributions", //required button text 
                  "url": "https://youtu.be/P7GdyQuFQYg", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "16:17", // optional - completion time
                  "tags": ['probability', 'probability distribution', 'discrete random variable']//optional tags
               } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.4c Descriptive Statistics of a Discrete Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Mean or Expected Value and Standard Deviation (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:J3nUH8pG@9/Mean-or-Expected-Value-and-Sta", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'discrete random variable', 'probability distribution', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
               {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Expected Value on the TI-84", //required button text 
                  "url": "https://youtu.be/3_a3o5OQkQc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "6:29", // optional - completion time
                  "tags": ['probability', 'probability distribution', 'discrete random variable']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Random Variables: Mean, Variance and Standard Deviation", //required button text 
                  "url": "https://www.mathsisfun.com/data/random-variables-mean-variance.html", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability', 'discrete random variable', 'probability distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.5 Binomial Probability Distributions", //required topic title
          "objectives": [
            {
              "title": "2.5a Binomial Probability Distributions", //optional objective title
              "links": [
                 {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Binomial Distribution", //required button text 
                  "url": "https://youtu.be/E9GpfHQcdBg", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:27", // optional - completion time
                  "tags": ['binomial probability distribution', 'probability distribution', 'discrete random variable']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Binomial Distribution Formula", //required button text 
                  "url": "http://www.statisticshowto.com/binomial-distribution-formula/", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability distribution', 'discrete random variable', 'binomial probability distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Binomial Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:vGiLOvP5@6/Binomial-Distribution", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability distribution', 'discrete random variable', 'binomial probability distribution', 'openstax']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.5b Finding Probabilities Using a Binomial Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Compute Binomial Probabilities", //required button text 
                  "url": "https://youtu.be/SIpp-ywpRzk", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:59", // optional - completion time
                  "tags": ['binomial probability distribution', 'probability distribution', 'discrete random variable']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Computing Binomial Probabilities (with TI-84)", //required button text 
                  "url": "https://youtu.be/jkVlNZ21Ims", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "7:49", // optional - completion time
                  "tags": ['binomial probability distribution', 'probability distribution', 'discrete random variable']//optional tags
               }, // end of link object - add a comma to add another link
               {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Binomial Probability Distribution Calculator", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/binomialcalc.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['binomial probability distribution', 'probability distribution', 'discrete random variable', 'calculator']//optional tags
               } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.5c Descriptive Statistics of a Binomial Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Binomial Probability Distribution (includes formulas)", //required button text 
                  "url": "http://stattrek.com/probability-distributions/binomial.aspx?tutorial=stat", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['probability distribution', 'discrete random variable', 'binomial probability distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
     {
      "title": "Normal Probability Distributions", //required unit title
      "topics": [
        {
          "title": "3.1 Introduction to Continuous Distributions", //required topic title
          "objectives": [
            {
              "title": "3.1a Continuous Distributions", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "An Introduction toContinuous Probability Distributions", //required button text 
                  "url": "https://www.youtube.com/watch?v=OWSOhpS00_s", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:51", // optional - completion time
                  "tags": ['continuous probability distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Probability Density Functions (Khan Academy)", //required button text 
                  "url": "https://www.youtube.com/watch?v=Fvi9A_tEmXQ", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:01", // optional - completion time
                  "tags": ['khan academy', 'continuous probability distribution', 'uniform distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.1b Uniform Distributions", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Continuous Probability Distribution Intro (Khan Academy)", //required button text 
                  "url": "https://www.youtube.com/watch?v=j8XLYFzTJzE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'continuous probability distribution', 'uniform distribution']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.2 Introduction to Normal Distributions", //required topic title
          "objectives": [
            {
              "title": "3.2a Normal Distributions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Standard Normal Distribution", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:KgL8DwG_@5/The-Standard-Normal-Distributi", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link

              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2b z-scores", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to calculate a z-score", //required 
                  "url": "https://youtu.be/QgCXKzyqtMQ", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Probability Distribution Calculator", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/normalcalc.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal probability distribution', 'probability distribution', 'calculator']//optional tags
               } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2c The Range Rule of Thumb", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Rule of Thumb to Create a 'Usual' Range of Values", //required button text 
                  "url": "https://youtu.be/5iJg8lfnPEI", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:53", // optional - completion time
                  "tags": ['measures of variation', 'rule of thumb', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.3 Probabilities for Normal Distributions", //required topic title
          "objectives": [
            {
              "title": "3.3a Using z-scores to Find Probabilities", //optional objective title
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
                  "text": "Normal Probability Distribution Calculator", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/normalcalc.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal probability distribution', 'probability distribution', 'calculator']//optional tags
               } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.3b Using Probability to find Population Values", //optional objective title
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
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.4 The Central Limit Theorem", //required topic title
          "objectives": [        
            {
              "title": "3.4a Using the Central Limit Theorem", //optional objective title
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
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.5 Confidence Intervals: Proportions", //required topic title
          "objectives": [
            {
              "title": "3.5a Confidence Intervals for Population Proportions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:lWGQ0U41@6/Introduction", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Population Proportion", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:QNwpYJrT@9/A-Population-Proportion", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct a Confidence Interval Estimate of p", //required button text 
                  "url": "https://youtu.be/A-WooCS22oE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'video', 'statdisk']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.5b Point-estimates and the Margin of Error", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Population Proportion", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:QNwpYJrT@9/A-Population-Proportion", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Place of Birth)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:lKLWkGMZ@2/Confidence-Interval-Place-of-B", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.5c Minimum Sample Size for Estimating Population Proportions", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Find Minimum Sample Size to Estimate Population Proportion (on TI-84)", //required button text 
                  "url": "https://youtu.be/TWVNdiPv54k", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:07", // optional - completion time
                  "tags": ['confidence intervals', 'minimum sample size', 'population proportion']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.6 Confidence Intervals: Means", //required topic title
          "objectives": [
            {
              "title": "3.6a Confidence Intervals for Population Means", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Single Population Mean using the Normal Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:H9wp31Fq@9/A-Single-Population-Mean-using", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Distribution Calculator", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/normalcalc.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal probability distribution', 'probability distribution', 'calculator']//optional tags
               }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Single Population Mean using the Student t-Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:_aFwJFdw@11/A-Single-Population-Mean-using", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                 {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Student-t Distribution Calculator", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/tdistribution.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['student t distribution', 'probability distribution', 'calculator']//optional tags
               }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct a Confidence Interval Estimate of Mean", //required button text 
                  "url": "https://youtu.be/WxBw7qznMvog", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval: Estimating a Population Parameter", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/confidenceint.html", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['student t distribution', 'probability distribution', 'calculator']//optional tags
               }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Home Costs)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:4TpOoBvT@2/Confidence-Interval-Home-Costs", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Women's Heights)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:Gp27KShG@1/Confidence-Interval-Womens-Hei", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.6b Minimum Sample Size for Estimating Population Mean", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Calculating Required Sample Size to Estimate Population Mean", //required button text 
                  "url": "https://www.youtube.com/watch?v=4-5pFrqJz9w", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'sample size', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Hypothesis Testing and Inference", //required unit title
      "topics": [
        {
          "title": "4.1 Hypothesis Tests: Introduction", //required topic title
          "objectives": [
            {
              "title": "4.1a Conducting a Hypothesis Test", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:nC-lwYiC@6/Introduction", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['openstax', 'hypothesis testing']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Intro to Hypothesis Testing", //required button text 
                  "url": "https://youtu.be/VK-rnA3-41c", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['hypothesis testing']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Distributions Needed for Hypothesis Testing", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:CNwYFOjX@3/Distribution-Needed-for-Hypoth", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['hypothesis testing']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.1b The Null and Alternative Hypotheses", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Null and Alternative Hypotheses (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:W0j59DyL@3/Null-and-Alternative-Hypothese", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['openstax', 'hypothesis testing', 'null hypothesis', 'alternative hypothesis']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Easy Rule for Setting Up the Null and Alternative Hypotheses", //required button text 
                  "url": "https://youtu.be/R2hxisYFKxM", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "7:49", // optional - completion time
                  "tags": ['openstax', 'hypothesis testing', 'null hypothesis', 'alternative hypothesis']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Testing a Claim About a Population Parameter", //required button text 
                  "url": "https://psccmath.github.io/math1530/apps/hyptests.html", //required
                  "type": type[3], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal probability distribution', 'probability distribution', 'calculator']//optional tags
               } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.2 Hypothesis Tests: Proportions", //required topic title
          "objectives": [
            {
              "title": "4.2a-b Calculating the Test Statistic and P-value", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Proportion Hypothesis Testing Tutorial", //required button text 
                  "url": "https://youtu.be/KUmvv0o93RA", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "11:17", // optional - completion time
                  "tags": ['hypothesis testing', 'proportions', 'p-value', 'test statistic']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Hypothesis Testing of the Population Proportion", //required button text 
                  "url": "https://youtu.be/R3Z0TpHHQ9w", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "16:19", // optional - completion time
                  "tags": ['hypothesis testing', 'proportions', 'p-value', 'test statistic']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Test a Claim About a Proportion", //required button text 
                  "url": "https://youtu.be/ZCtHxqLgeBU", //required
                  "type": type[3], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:56", // optional - completion time
                  "tags": ['hypothesis testing', 'proportions', 'p-value', 'test statistic']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "What is a p-value?", //required button text 
                  "url": "http://www.mathbootcamps.com/what-is-a-p-value/", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['p-values', 'hypothesis testing']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.2c Finding the Conclusion", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "To Reject or Fail to Reject?", //required button text 
                  "url": "https://www.youtube.com/watch?v=K0Jw8T7tGCc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:02", // optional - completion time
                  "tags": ['hypothesis testing', 'conclusion']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Writing the Conclusion to a Hypothesis Test", //required button text 
                  "url": "https://www.youtube.com/watch?v=EJf17R9ExpM", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:44", // optional - completion time
                  "tags": ['hypothesis testing', 'conclusion']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Outcomes and the Type I and Type II Errors (OpenStax)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:U0nfVP8B@3/Outcomes-and-the-Type-I-and-Ty", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['hypothesis testing', 'conclusion', 'type i error', 'type ii error', 'openstax']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.2d Testing a Claim Using Confidence Intervals", //optional objective title
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
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.3 Hypothesis Tests: Means", //required topic title
          "objectives": [
            {
              "title": "4.3a-c Test Statistics, P-values, and Conclusions", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction to the t Distribution", //required button text 
                  "url": "https://www.youtube.com/watch?v=Uv6nGIgZMVw", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "8:54", // optional - completion time
                  "tags": ['hypothesis testing', 'mean', 't distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Student t Distribution in Statistics", //required button text 
                  "url": "http://www.statisticshowto.com/what-is-a-t-distribution/", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['hypothesis testing', 'mean', 't distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "t Tests for One Mean: An Example", //required button text 
                  "url": "https://youtu.be/kQ4xcx6N0o4", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:42", // optional - completion time
                  "tags": ['hypothesis testing', 'mean']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Test a Claim About the Mean", //required button text 
                  "url": "https://youtu.be/TDEvl9IloCY", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:38", // optional - completion time
                  "tags": ['hypothesis testing', 'mean']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.4 Hypothesis Tests: Standard Deviations", //required topic title
          "objectives": [
            {
              "title": "4.4a-c Test Statistics, P-values, and Conclusions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Facts About the Chi-Square Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:jyBhGTuv@5/Facts-About-the-Chi-Square-Dis", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['hypothesis testing', 'standard deviation', 'chi-square distribution']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk for Testing Claims About Standard Deviation", //required button text 
                  "url": "https://youtu.be/BuyE1zhd4Ig", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:19", // optional - completion time
                  "tags": ['hypothesis testing', 'standard deviation', 'statdisk']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk for Testing Claims About Standard Deviation", //required button text 
                  "url": "https://youtu.be/1UbV99cetF4", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "16:32", // optional - completion time
                  "tags": ['hypothesis testing', 'standard deviation']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.5 Linear Correlation and Regression", //required topic title
          "objectives": [
            {
              "title": "4.5a Scatterplots of Ordered Pairs", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Constructing a Scatterplot", //required button text 
                  "url": "https://youtu.be/sHbX58y5D4U", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:32", // optional - completion time
                  "tags": ['khan academy', 'scatterplots']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Scatterplots: Shoe Size and Test Scores", //required button text 
                  "url": "https://youtu.be/Jpbm5YgciqI", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:25", // optional - completion time
                  "tags": ['khan academy', 'scatterplots']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.5b-c Linear Correlation and Regression", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Testing the Significance of the Correlation Coefficient", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:DVUc4Pk0@3/Testing-the-Significance-of-th", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['correlation', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Regression Equation", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:_WBoD9u3@3/The-Regression-Equation", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['regression', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Determine Correlation and Regression", //required button text 
                  "url": "https://youtu.be/GnoqFFOKwRQ", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "2:56", // optional - completion time
                  "tags": ['correlation', 'regression', 'statdisk']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.5d Making Predictions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Prediction", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:tXQ74SKP@3/Prediction", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['correlation', 'regression', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.6 Goodness of Fit", //required topic title
          "objectives": [
            {
              "title": "4.6a-b Goodness of Fit", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Goodness of Fit Test", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:0kBuhjul@5/Goodness-of-Fit-Test", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['goodness of fit', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk for Testing Goodness of Fit", //required button text 
                  "url": "https://youtu.be/wS-YGwewkC8", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['goodness of fit', 'statdisk']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array            
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.7 Test for Independence", //required topic title
            "objectives": [
            {
              "title": "4.7a Independences and Contingency Tables", //optional objective title
              "links": [
                 {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Test of Independence", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:OPnvi2o4@6/Test-of-Independence", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['independence', 'openstax']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk for Contingency Tables", //required button text 
                  "url": "https://youtu.be/-Y03KhvHsQw", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['independence', 'statdisk']//optional tags
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
