//------CREATING THE NAME BANNER-----
const $h1 = $('<h1>');
$h1.text('Narissa Hajratalli');
$('header').append($h1);
//-------END NAME BANNER-------------

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
//---------------------END HAMBURGER------------------


//-------ADDING PORTFOLIO SECTION USING JSON----------
//--------Section 6, Reference 1---------
//console.log($)
const url = 'https://spreadsheets.google.com/feeds/list/1wNEVqSjAcMgCe-YIrdt0gR2QRg5l0EVtQoovN8GGEhY/od6/public/values?alt=json'

//Fetch -- go and get that data
//Response -- takes the json string and converts it to a JS object
fetch(url)
    .then(response => response.json())
    //response is the information we are getting back
    //this is telling us to parse the json object into JS
    .then(data => {
        //gives us just the array of each row in our google sheet 
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

    const createProjectElement = (project) => {
        const $div = $('<div>').addClass('project-section');
        $div.append($('<h2>').text(project.title).addClass('project-title'));
        const $dxDiv = $('<div>').addClass('dx-div');
        $div.append($('<img>').attr('src', project.image).addClass('project-img'));
        $dxDiv.append($('<p>').text(project.description).addClass('project-dx')); 
        //Added codepen icons (See Section 13 References 1 and 2)
        $dxDiv.append($('<a>').attr('href', project.url).attr('target', '_blank').html('<i class="fab fa-codepen fa-2x"></i>').addClass('project-link'));
        $div.append($dxDiv);
        return $div; 
    }
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('#projects-container').append($projectDiv);
    })
}
//------------------END JSON-----------------------
