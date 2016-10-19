var bio = {
	name : "Erwin Rosales",
  	role : "Front-End Web Developer",
  	contacts : {
		mobile : "555-555-5555",
        email : "look4erwin@gmail.com",
        github : "eorosales",
        location : "San Jose, CA"
    },
  	welcomeMessage : "Hello and welcome to my world!", 
  	skills : ["HTML", "CSS", "JavaScript", "Web Design", "Responsive Images"],
  	biopic : "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12376479_10153098090212133_6793893543154233546_n.jpg?oh=f48c4f86ac2b99900751177d3016cdd1&oe=5868C730",
  	
  	display : function() {
  		
  		var name = HTMLheaderName.replace("%data%", bio.name);
  		var role = HTMLheaderRole.replace("%data%", bio.role);
  		var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  		var email = HTMLemail.replace("%data%", bio.contacts.email);
  		var github = HTMLgithub.replace("%data%", bio.contacts.email);
  		var location = HTMLlocation.replace("%data%", bio.contacts.location);
  		var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);

  		$('#header').prepend(role);
  		$('#header').prepend(name);
  		$('#topContacts').append(mobile);
  		$('#topContacts').append(email);
  		$('#topContacts').append(github);
  		$('#topContacts').append(location);
  		$('#header').append(welcomeMessage);
  		$('#header').append(bioPic);
  		
  		if(bio.skills.length !== 0) {
  			$('#header').append(HTMLskillsStart);
  			for(var i = 0; i < bio.skills.length; i++) {
  				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$('#skills').append(formattedSkill);
  			}
  		}
  	}
}

var work = {
	"jobs" : [
		{
			employer : "Ivory Sky Media",
			title : "Photographer, Videographer & Editor",	
			location : "San Jose, CA",	
			dates : "2016 - Present",
			description : "Photographed and capture and edited video in order to create high quality commercial cretive media products. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio esse quam non architecto fuga alias ipsum praesentium. Nisi aliquam debitis enim dicta excepturi iste dolorum voluptates repellendus, quidem adipisci!" 
		},
		{
			employer : "Self-Employed",
			title : "Freelance Photographer",
			location : "Bay Area, CA",
			dates : "2014 - Present",
			description : "Bay Area based photographer specializing in wedding, portrait and event photography with a photojournalistic approach. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In porro iste sint quisquam quos nobis delectus ab ut possimus quae modi nisi facere, voluptatibus aspernatur consequatur blanditiis eum commodi minima."
		},
		{
			employer : "Red Berry Coffee Bar",
			title : "Barista",
			location : "Los Altos, CA",
			dates : "2013 - 2016",
			description : "A cafe carrying multi-award winning artisanal roasters prepared in European methodology. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus veniam inventore minus perferendis, voluptatum minima quibusdam soluta non. Ex aliquid blanditiis minima praesentium ut repudiandae accusamus delectus officiis consectetur laboriosam."
		},
		{
			employer : "Ten Ren Tea",
			title : "Barista",
			location : "Cupertino, CA",
			dates : "2010 - 2013",
			description : "Create tea based drinks sourced from the family owned Ten Ren tea farms in China and Taiwan. Spicy jalapeno bacon ipsum dolor amet picanha turkey pork porchetta hamburger. Jerky pork chop sausage, corned beef drumstick fatback salami kielbasa bresaola. Ball tip pig t-bone ham hock porchetta sausage drumstick salami ground round frankfurter cow. Short loin ham hock kielbasa, pork belly venison sirloin swine."
		},
		{
			employer : "Lord of the Light Art Studio",
			title : "Teacher",
			location : "Blossom Hill, CA",
			dates : "2011-2012",
			description : "A studio to teach children 5 - 18 years of age the fundamentals necessary to hone their artistic skills and creativity. Ball tip kielbasa t-bone shankle boudin tri-tip ham hock beef ribs sirloin porchetta. Pork chop porchetta shank pork loin kielbasa landjaeger alcatra t-bone short ribs andouille leberkas ham picanha. Kevin filet mignon shoulder, leberkas alcatra burgdoggen kielbasa bresaola bacon. Tenderloin cupim tail pork belly, shankle pastrami jerky chicken. Spare ribs doner prosciutto, rump tongue porchetta jerky pork loin salami bresaola."
		},
		{
			employer : "In-N-Out Burger",
			title : "Associate",
			location : "Milpitas, CA",
			dates : "2007 - 2010",
			description : "A fast-paced family owned restaurant dedicated to serving high quality, delcious and fresh food based on their unchanged menu since 1949. Filet mignon andouille kielbasa corned beef ribeye meatball. Tongue meatloaf beef ribs frankfurter short ribs. Short ribs pork loin tail shoulder brisket filet mignon ball tip. Doner jowl short ribs tail pastrami ball tip alcatra, picanha salami biltong shoulder pancetta pork chop. Pork belly turkey rump brisket tongue chuck. Pork chop meatloaf flank turkey, alcatra cupim tail pork t-bone sirloin. Sirloin t-bone ham filet mignon pig tri-tip ground round cow hamburger boudin burgdoggen cupim."
		}	
	],
	display : function() {
		$('#workExperience').append(HTMLworkStart);
		if(work.jobs.length !== 0) {
			for(var i = 0; i < work.jobs.length; i++) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
				var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
				var job = formattedEmployer + formattedWorkTitle;
				$('.work-entry:last').append(job);
				$('.work-entry:last').append(formattedWorkDates);
				$('.work-entry:last').append(formattedWorkDescription);
			}
		}
	}
}

var projects = {
	"project" : [
		{
			"title" : "Red Berry Coffee Bar Website",
			"dates" : "2015",
			"description" : "A simple website designed for Red Berry Coffee Bar, a cafe in which I used to work at.",
			"images" : "http://redberrycoffeebar.com/img/logo.png"
		},
		{
			"title" : "Photography Website",
			"dates" : "2016",
			"description" : "My photography portfolio built on squarespace.",
			"images" : "https://static1.squarespace.com/static/56e270af27d4bd91a219f992/t/56ec84951bbee05366b6ad52/1476090596950/?format=1000w"
		}
	],
	display : function() {
		$("#projects").append(HTMLprojectStart);
			if(projects.project.length !== 0) {
				for(var i = 0; i < projects.project.length; i++) {
					var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
					var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
					var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
					var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[i].images);           
					$('.project-entry:last').append(formattedProjectTitle);
					$('.project-entry:last').append(formattedProjectDates);
					$('.project-entry:last').append(formattedProjectDescription);
					$('.project-entry:last').append(formattedProjectImages);
				}
		}
	}	
}

var education = {
	schools: [
        {	
        	name: "San Jose State University",
           	location: "San Jose, CA",
           	degree: "In Progress",
           	majors: "Digital Media Art",
           	dates: "2010 - 2014",
           	url: "https://www.sjsu.edu"
        },
        {	
        	name: "DeAnza Community College",
           	location: "Cupertino, CA",
           	degree: "Associates Degree - Liberal Arts",
           	majors: "Graphic Design",
           	dates: "2007 - 2010",
           	url: "https://www.deanza.edu"
        }
    ],
    onlineCourses: [
    	{
           title: "Udacity",
           school: "Udacity",
           dates: "2016",
           url: "http://www.udacity.edu"
        }
    ],
    display: function() {
    	if(education.schools.length !== 0 || education.onlineCourses.length !== 0) {
    		
    	}
    }
}


bio.display();
work.display();
projects.display();
education.display();