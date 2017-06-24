/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs": ["employer", "title", "location", "dates", "description"]
};

var projects = {
  "projects" : [
    {
      "title":"title",
      "dates": "dates",
      "description": "description",
      "images": ["../images/银之匙.jpg"]
    }
  ]
};

var bio = {
  "name": "xiawei Qu",
  "role": "student",
  "welcomeMessage": "How are you!",
  "bioPic": "../images/银之匙.jpg",
  "contacts": {
    "mobile": "18771058009",
    "email": "qxwlyc@gmail.com",
    "github": "Quwater",
    "location": "Dongguang"
  },
  "skills": ["read", "English"]
};

var education = {
  "schools" : [
    {
      "name": "liening",
       "location": "qujiawang",
       "degree": "primary school",
       "dates": "1997",
       "url": "www.lieningxiaoxue.com",
       "major": ["www.lieningxiaoxue.com"]
    }
  ],
  "onlineCourses": [
    {
      "title": "FEEN",
      "school": "Udacity",
      "dates": "2017",
      "url": "www.udacity.com"
    }
  ]
};

// var formattedSkill = HTMLheaderName.replace("%data%", bio.name);
// $("#header").append(newHTML);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLheaderName.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLheaderName.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
}

for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function locationizer(work_obj) {
    var locations = [];
    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locations.push(newLocation);
    }
    return locations;
}

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice[1].toLowerCase;
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#main"),append(googleMap);

projects.display = function(){
  for (var project in projects.projects) {
    $("#project").append(HTMLprojectStart);

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
};
