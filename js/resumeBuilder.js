
var work = [
    {
        employer: "AT&T",
        title: "Data Analysis and Mechanization",
        location: "South Florida",
        dates: "2007-present",
        description: "Data Analysis, Report Automation, Web Design, Technical Process & Quality"
    },
    {
        employer: "Macy's",
        title: "Store Detective",
        location: "South Florida",
        dates: "2005-2007",
        description: "Loss Prevention"
    },
    {
        employer: "BellSouth",
        title: "Sales Associate",
        location: "South Florida",
        dates: "2000-2005",
        description: "Residential Sales"
    }
];

var projects = [
    {
        title: "Classic Arcade Game",
        dates: "05-25-2017",
        description: "Frogger-style game",
        images: [
            "img/invader.jpg"
        ]
    },
    {
        title: "Neighborhood Map",
        dates: "05-25-2017",
        description: "Map of my neighborhood",
        images: [
            "img/map.jpg"
        ]
    }
];

var bio = {
    name: "Wade Ammons",
    role: "Data Analyst / Web Developer",
    welcomeMessage: "Welcome to my resume",
    biopic: "",
    contacts: {
        mobile: "555 555-5555",
        email: "wade.ammons@gmail.com",
        github: "Elektrobank",
        location: "South Florida"
    },
    skills: ["SQL", "HTML", "CSS", "Javascript", "Bootstrap", "C#", "ASP.NET"],
    picture: "img/fry.jpg"
};

var education = {
    schools: [
    {
        name: "Broward College",
        degree: "AA",
        location: "Ft. Lauderdale, FL",
        degreeDate: "1998",
        url: "http://www.broward.org",
        major: "Biology"
    },
    {
        name: "Florida Atlantic University",
        degree: "BA",
        location: "Boca Raton, FL",
        degreeDate: "2006",
        url: "http://www.fau.edu",
        major: "Criminal Justice"
    },
    {
        name: "Broward College",
        degree: "AS",
        location: "Ft. Lauderdale, FL",
        degreeDate: "2016",
        url: "http://www.broward.org",
        major: "Computer Programming and Analysis"
    }
    ],
    onlineCourses: {
        title: "Front-End Web Developer Nano Degree",
        school: "Udacity",
        date: "2017",
        url: "https://www.udacity.com"
    }
};



var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[1].name); //assigning a variable that doesn't exist to these replace statements will cause the page to not load
//var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education[school1].degree);
//var formattedSchoolDates = HTMLschoolDates.replace("%data%", education[school1].degreeDate);
//var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education[school1.location]);
//var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education[school1].major);

//$("#education").append(HTMLschoolStart);
//$("#education").append(formattedSchoolName);
//$("#education").append(formattedSchoolDegree);
//$("#education").append(formattedSchoolDates);
//$("#education").append(formattedSchoolLocation);
//$("#education").append(formattedSchoolMajor);

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};

work.display = function () {
    for (i = 0; i < work.length; i++) {        
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[i].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[i].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[i].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

//Internationalize Names exercise
//$("#main").append(internationalizeButton);
//function inName() {
//    var splitName = bio.name.trim().split(" ");
//    splitName[0] = splitName[0].toLowerCase();
//    console.log(splitName[0][0]);
//    splitName[0] = splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase();
//    splitName[1] = splitName[1].toUpperCase();
//    var internationalName = splitName[0] + " " + splitName[1];
//    return internationalName;
//}

projects.display = function () {
    for (i = 0; i < projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        var formattedPicture = HTMLprojectImage.replace("%data%", projects[i].images);
        $("#projects").append(HTMLprojectStart);
        $("#projects").append(formattedTitle);
        $("#projects").append(formattedDates);
        $("#projects").append(formattedDescription);
        $("#projects").append(formattedPicture);
    }
};

bio.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);





