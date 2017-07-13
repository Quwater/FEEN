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
    for (var job = 0; job < work.jobs.length; job++) {
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
      "description": "利用bootstrap制作响应式页面，展示我的作品",
      "images": ["images/my_project1.jpg"],
    },
    {
      "title": "简历",
      "dates": "2017",
      "description": "利用jQuery进行交互，制作我的简历",
      "images": ["images/my_project2.jpg", "images/my_project3.jpg"],
    }
  ],

  display : function(){
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedDescription);

      if (project.images.length > 0) {
        project.images.forEach(function(image){
          var formattedImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
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
    "location": "Dongguan",
  },
  "skills": ["read", "write story"],

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
      bio.skills.forEach(function(skill){
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });
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
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedInformation = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedInformation);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      $(".education-entry:last").append(formattedLocation);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry:last").append(formattedDates);
      if (school.majors.length > 0) {
        school.majors.forEach(function(major){
          var formattedMajor = HTMLschoolMajor.replace("%data%", major);
          $(".education-entry:last").append(formattedMajor);
        });
      }
    });

    education.onlineCourses.forEach(function(onlineCourse){
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
      var formattedExperience = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedExperience);
      var formattedDates_2 = HTMLonlineDates.replace("%data%", onlineCourse.dates);
      $(".education-entry:last").append(formattedDates_2);
      var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
      $(".education-entry:last").append(formattedUrl);
    });
  }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
