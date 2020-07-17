//------CREATING THE NAME BANNER-----
const $h1 = $('<h1>');
$h1.text('Narissa Hajratalli');
$('header').append($h1);
//-------END NAME BANNER------------

//-------CREATING HAMBURGER MENU FUNCTIONALITY------
//This creates the functionality to show my menu items
//---------Section 2, Reference 3---------
jQuery(function($){
    $( '.hamburger' ).click(function(){
        $('.responsive-menu').toggleClass('expand')
    })
 })

 //This creates the functionality to make the hamburger lines turn into an X
 //---------Section 2, Reference 2-----------
let menuOpen = false;
$('.hamburger').click( () => {
    if (!menuOpen) {
        $('.hamburger').addClass('open');
        menuOpen = true;
        console.log('true')
    } else {
        $('.hamburger').removeClass('open');
        menuOpen = false;
        console.log('false')
    }
})
//---------------------END HAMBURGER--------------------


//-------ADDING PORTFOLIO SECTION USING JSON-------------
//--------Section 6, Reference 1---------
//console.log($)
const url = 'https://spreadsheets.google.com/feeds/list/1wNEVqSjAcMgCe-YIrdt0gR2QRg5l0EVtQoovN8GGEhY/od6/public/values?alt=json'
fetch(url)
    .then(response => response.json())
    //response is the information we are getting back
    //this is telling us to parse the json object into JS
    .then(data => {
        //console.log(data)
        //console.log(data.feed.entry);
        //gives us just the array of each row in our google sheet 

        //Fetch -- go and get that data
        //Response -- takes the json string and converts it to a JS object

        const projects = data.feed.entry.map((entry) => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
        }
    })
    app(projects)
})

const app = (data) => {
    //console.log('app is running');
    //console.log(data);

    const createProjectElement = (project) => {
        const $div = $('<div>').addClass('project-section');
        // const $div = $('<div>');
        $div.append($('<h2>').text(project.title).addClass('project-title'));
        $div.append($('<p>').text(project.description).addClass('project-dx')); 
        $div.append($('<img>').attr('src', project.image).addClass('project-img'));
        $div.append($('<a>').attr('href', project.url).text('LINK TO PROJECT').addClass('project-link'));
        // $('a').attr('target', '_blank'); to open links in new tab, need to find a way to taget just the a attribute here
        return $div; 
    }
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('#projects-container').append($projectDiv);
    })
}
//------------------END JSON-----------------------
