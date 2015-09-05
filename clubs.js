var app = angular.module('clubsApp', []);

app.controller('clubsController', function($scope){

	$scope.listAllClubs = true;
	$scope.clubs = [
	{
		name : "National Honor Society",
		description : "The National Honor Society (NHS) is the nation's premier\
		 organization established to recognize outstanding high school students.",
		day : "Tuesday",
		location : "MPR",
		advisor : "none",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Me",
		contact_email : "me@gmail.com",
		contact_website : "nhs.com"
	},
	{
		name : "National Honor Society",
		description : "The National Honor Society (NHS) is the nation's premier\
		 organization established to recognize outstanding high school students.",
		day : "Tuesday",
		location : "MPR",
		advisor : "none",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Me",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	{
		name : "National Honor Society",
		description : "The National Honor Society (NHS) is the nation's premier\
		 organization established to recognize outstanding high school students.",
		day : "Tuesday",
		location : "MPR",
		advisor : "none",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Me",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	{
		name : "National Honor Society",
		description : "The National Honor Society (NHS) is the nation's premier\
		 organization established to recognize outstanding high school students.",
		day : "Tuesday",
		location : "MPR",
		advisor : "none",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Me",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	];
	$scope.goToClub= function(club){
		$scope.listAllClubs= false;
		$scope.focusClub= club;
	}
}
);