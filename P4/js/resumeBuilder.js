/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs": [
    {
       "employer": "Xiaoyu",
       "title": "programmer",
       "location": "Wuhan",
       "dates": "2015",
       "description": "As a programmer"
   },
   {
     "employer": "Dayu",
     "title": "front-end programmer",
     "location": "Shenzhen",
     "dates": "2016",
     "description": "As a front-end developer"
   }
 ],

 display : function(){
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);


      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title": "作品集",
      "dates": "2017",
      "description": "展示我的作品集",
      "images": ["images/197x148.gif"]
    },
    {
      "title": "简历",
      "dates": "2017",
      "description": "我的简历",
      "images": ["images/197x148.gif"]
    }
  ],

  display : function(){
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

var bio = {
  "name": "Qu Xiawei",
  "role": "Web Developer",
  "welcomeMessage": "How are you!",
  "biopic": "images/portrait.jpg",
  "contacts": {
    "mobile": "18771058009",
    "email": "qxwlyc@gmail.com",
    "github": "Quwater",
    "location": "Dongguang",
  },
  "skills": ["read", "English"],

  display: function(){
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelMessage);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var education = {
  "schools" : [
    {
      "name": "CCNU",
       "location": "Wuhan",
       "degree": "Undergraduate",
       "dates": "2010",
       "majors": ["CS"]
    }
  ],
  "onlineCourses": [
    {
      "title": "FEEN",
      "school": "Udacity",
      "dates": "2017",
      "url": "www.udacity.com"
    }
  ],

  display: function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedInformation = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedInformation);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      if (education.schools[school].majors.length > 0) {
        for (var major in education.schools[school].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajor);
        }
      }
    }

    for (var onlineCourse in education.onlineCourses) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var formattedExperience = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedExperience);
      var formattedDates_2 = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedDates_2);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedUrl);
    }
  }
};

// function locationizer(work_obj) {
//     var locations = [];
//     for (var job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].location;
//         locations.push(newLocation);
//     }
//     return locations;
// }
//
// function inName(name){
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice[1].toLowerCase;
//   return name[0] + " " + name[1];
// }


$("#main").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
