
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
        title: "",
        dates: "",
        description: "",
        images: [
            "url1",
            "url2"
        ]
    },
    {
        title: "",
        dates: "",
        description: "",
        images: [
            "url1",
            "url2"
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
    picture: "images/fry.jpg"
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


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[1].name); //assigning a variable that doesn't exist to these replace statements will cause the page to not load
//var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education[school1].degree);
//var formattedSchoolDates = HTMLschoolDates.replace("%data%", education[school1].degreeDate);
//var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education[school1.location]);
//var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education[school1].major);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedBioPic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName); 

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkills);

};

function displayWork() {
    for (job in work) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displayWork();

//Internationalize Names exercise
$("#main").append(internationalizeButton);
function inName() {
    var splitName = bio.name.trim().split(" ");
    splitName[0] = splitName[0].toLowerCase();
    console.log(splitName[0][0]);
    splitName[0] = splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase();
    splitName[1] = splitName[1].toUpperCase();
    var internationalName = splitName[0] + " " + splitName[1];
    return internationalName;
}


//$("#header").append(formattedEmail);
//$("#header").append(formattedGithub);
//$("#header").append(formattedLocation);
//$("#header").append(formattedBioPic);
//$("#header").append(formattedWelcomeMsg);
//$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);

//$("#education").append(HTMLschoolStart);
//$("#education").append(formattedSchoolName);
//$("#education").append(formattedSchoolDegree);
//$("#education").append(formattedSchoolDates);
//$("#education").append(formattedSchoolLocation);
//$("#education").append(formattedSchoolMajor);



