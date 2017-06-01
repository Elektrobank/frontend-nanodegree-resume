/*****************************
Json Objects
*****************************/

var bio = {
    name: "Wade Ammons",
    role: "Data Analyst / Web Developer",    
    contacts: {
        mobile: "555 555-5555",
        email: "wade.a@email.com",
        github: "Elektrobank",
        location: "South Florida"
    },
    welcomeMessage: "Welcome to my resume",
    skills: ["SQL", "HTML", "CSS", "Javascript", "Bootstrap", "C#", "ASP.NET"],
    biopic: "img/sand-people.jpg",
};

var education = {
    schools: [
    {
        name: "Broward College",
        degree: "AA",
        location: "Ft. Lauderdale, FL",
        dates: "1998",
        url: "http://www.broward.org",
        majors: ["Biology"]
    },
    {
        name: "Florida Atlantic University",
        degree: "BA",
        location: "Boca Raton, FL",
        dates: "2006",
        url: "http://www.fau.edu",
        majors: ["Criminal Justice"]
    },
    {
        name: "Broward College",
        degree: "AS",
        location: "Ft. Lauderdale, FL",
        dates: "2016",
        url: "http://www.broward.org",
        majors: ["Computer Programming and Analysis"]
    }
    ],
    onlineCourses: [
    {
        title: "Front-End Web Developer Nano Degree",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com"
    },
    {
        title: "How to Use Git and GitHub",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com"
    }
    ],
};

var work = {
    jobs: [
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
    ]
};

var projects = {
    projects: [
    {
        title: "Classic Arcade Game",
        dates: "05-25-2017",
        description: "Frogger-style game",
        images: [
            "img/invader.jpg", "img/invader2.jpg"
        ]
    },
    {
        title: "Neighborhood Map",
        dates: "05-25-2017",
        description: "Map of my neighborhood",
        images: [
            "img/map2.jpg",
            "img/map.jpg"
        ]
    }
    ]
};

/*****************************
Functions
*****************************/

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContacts = [];
    formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

    for (i = 0; i < formattedContacts.length; i++) {
        $("#topContacts").append(formattedContacts[i]);
        $("#footerContacts").append(formattedContacts[i]);
    }
};

work.display = function () {
    for (i = 0; i < work.jobs.length; i++) {        
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

projects.display = function () {
    for (i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);       
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for (j = 0; j < projects.projects[i].images.length; j++) {
            var formattedPicture = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedPicture);
        }
    }
};

education.display = function () {
    for (i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
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

/*****************************
Function Calls
*****************************/
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);





