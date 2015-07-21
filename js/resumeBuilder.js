var bio = {

     "name"              : "Antonio C. Hicks",
     "role"              : "Web Developer / Security Engineer",
     "contacts"          : 
     {
     "mobile"          : "678-237-3764",
     "email"           : "antonio.hicks78@gmail.com",
     "github"          : "escapingthematrix",
     "twitter"         : "@escpingthmatrix",
     "location"        :"Atlanta, GA" 
                 },
      "welcomeMsg"     : "Welcome to My Resume",
 
      "skills"         :["HTML", "CSS", "Javascript", "Penetration Testing", "Networking"],
                
      "bioPic"         : "images/profile.jpg"
       }

var education = {

"schools" : [
	{
             "name"				: "Capella University",
             "location"				: "Minneapolis, MN",
             "major"			: ["IT Security and Assurance"],
             "graduation year"	: "2015",
             "degree"           : "Bachelors",
             "url"             : "http://www.capella.edu"
        },
	

	{
		
             "name"           	: "Georgia Perimeter",
             "location"           	: "Decatur, GA",
             "major"          	: ["Computer Science"],
             "graduation year"	: "2000",
             "degree"           : "Bachelors",
             "url"            	: "http://www.gpc.edu/"
		
	}

	],

	"onlineClasses": [
		   {
		 "name": "Front-End Web Development Nano Degree",
		 "school": "Udacity",
		 "dates": "2014-2015",
		 "url"  : "https://www.udacity.com/"
		    },

		    {
		 "name": "Cyber Security",
		 "school": "Stanford",
		 "dates": "2013",
		 "url"  : "https://class.stanford.edu/courses"
		    }
   		]
}

var work = {
	"jobs": [{"employer" : "ATT",
			  "title" : "Lead Network Engineer",
			  "location" : "Atlanta, GA",
			  "dates" : "June 2012 - Present",
			  "description" : "Provide Tier 2 support to gain and retain customer satisfaction"},
			 
			 {"employer" : "AT&T",
			  "title" : "Network Engineer",
			  "location" : "Atlanta, GA",
			  "dates" : "September 2011 - June 2012",
			  "description" : "Provide Tier 1 support for internal customer in regards to Lucent, Nokia, Siemens, and LTE Technologies."},

			  {"employer" : "Goodwill of North GA",
			  "title" : "Information Technology Helpdesk Administrator",
			  "dates" : "April 2010 - September 2012",
			  "location" : "Duluth, GA",
			  "description" : "Assist with Cisco LAN/WAN configuration and troubleshooting ensuring proper data communication coming from Switch."}
			  ]
}



var projects =  {
  "project":[
  {
  	"title"      : "Udacity Mug",
  	"date"       : "2012",
  	"description": "Uses HTML, CSS and Bootstrap to create a website that showcases my work",
     "images"     : ["images/Udacity Mug.png"],
     "url"       : "http://www.espacebook.net/"
}

     ]
             }









//////////////////////////////////////Bio Display/////////////////////////////////////////
var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);

$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);



var formattedbioPic = HTMLbioPic .replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};



///////////////////////////////////////THIS IS FOR WORK EXPERIENCE //////////////////////////////////////////////////


var displayworkExperience = function () {

   for (exp in work.jobs) {
   $("#workExperience").append(HTMLworkStart);

  
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[exp].employer);
        var formattedworkTitle= HTMLworkTitle.replace("%data%", work.jobs[exp].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[exp].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[exp].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[exp].description);
        
                $(".work-entry:last").append(formattedworkEmployer);
                $(".work-entry:last").append(formattedworkTitle);
                $(".work-entry:last").append(formattedworkLocation);
                $(".work-entry:last").append(formattedworkDates);
                $(".work-entry:last").append(formattedworkDescription);


    }
};

displayworkExperience();

///////////////////////////////////////// MAKE IT A PROJECT///////////////////////////////////////////////////////////////////////////

var displayWork =function() {

for (pro in projects.project) {
 $("#projects").append(HTMLprojectStart);

 var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
 var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[pro].date);
 var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
 
 $(".project-entry:last").append(formattedprojectTitle);
 $(".project-entry:last").append(formattedprojectDates);
 $(".project-entry:last").append(formattedprojectDescription);


      if (projects.project[pro].images.length > 0)  {

         for (image in projects.project[pro].images)  {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[pro].images[image]);
            $(".project-entry:last").append(formattedImage);
            }
          }

 
 
  }
}

displayWork();

//////////////////////////////////////////////// THIS IS FOR EDUCATION ////////////////////////////////////////////////////////////////////////
 education.display = function ()  {
  $("#education").append(HTMLschoolStart);
  for (edu in education.schools)  {
  

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedschooldegree= HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu]["graduation year"]);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
        var formattedschoolURL    = HTMLschoolURL.replace("%data%", education.schools[edu].url);

        
                $(".education-entry:last").append(formattedschoolName);
                $(".education-entry:last").append(formattedschooldegree);
                $(".education-entry:last").append(formattedschoolDates);
                $(".education-entry:last").append(formattedschoolLocation);
                $(".education-entry:last").append(formattedschoolMajor);
                $(".education-entry:last").append(formattedschoolURL);

                

    }
}

displayEducation();


var displayonlineClasses = function () {
  $("#education").append(HTMLonlineClasses);
  for (olc in education.onlineClasses) {
   
  $("#education").append(HTMLschoolStart);
  


      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[olc].name);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%" ,education.onlineClasses[olc].school );

      var formattedonlineDates = HTMLonlineDates.replace("%data%" , education.onlineClasses[olc].dates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%" ,education.onlineClasses[olc].url );


                $(".education-entry:last").append(formattedonlineTitle);
                $(".education-entry:last").append(formattedonlineSchool);
                $(".education-entry:last").append(formattedonlineDates);
                $(".education-entry:last").append(formattedonlineURL);
                
    
        }
       };
  displayonlineClasses();

  //////////////////////////////////// Display CLick Location ////////////////////////////////////////////////////////////////////////



      $(document).click(function(loc) {
       // your code goes here
        var x = loc.pageX;
        var y = loc.pageY;
       // for log in console call this function 
        logClicks(x,y);
  
});

 /////////////////////////////////////// Internationalized  ////////////////////////////////////////////////////////////////////////
  
 ////////////   for google  map /////////////////////////////////////////////////////////////////////////////

$("#mapDiv").append(googleMap);
$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);


