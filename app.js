//------CREATING THE NAME BANNER-----
const $h1 = $('<h1>');
$h1.text('Narissa Hajratalli');
$('header').append($h1);

//-------CREATING HAMBURGER MENU FUNCTIONALITY------
//This creates the functionality to show my menu items
jQuery(function($){
    $( '.hamburger' ).click(function(){
        $('.responsive-menu').toggleClass('expand')
    })
 })

 //This creates the functionality to make the hamburger lines turn into an X
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


//------CREATING THE NAV BAR--------
const $ul = $('<ul>');
$('nav').append($ul);


const targets = ['#startabout', '#startproject', '#startcontact'];
const addTargets = targets.forEach((element) => {
    return element
})
console.log(addTargets);


//Function to loop through each element in navBar and add it to the nav 
const navBar = ['About Me', 'Projects', 'Contact Me'];
const addToNavBar = navBar.forEach((element) => {
    //Creating list elements and adding class
    const $li = $('<li>');
    ($li).addClass('nav-element');

    //Adding a class of 'hidden' which will be later used for the hamburger menu
    ($li).addClass('hidden');

    //Removing bullets from unordered list
    ($li).css('list-style-type', 'none');

    //Adding anchor tags and href elements to each list element to be later used for the hamburger menu
    const $a = $('<a>').attr('href', '/');
    ($li).append($a);

    //Adding the names of each nav element 
    ($a).text(element);

    //Appending the divs to the unordered list
    ($ul).append($li); 

    return $li
    console.log($li)
})

//-------ADDING PORTFOLIO SECTION USING JSON-------------
//SOURCE: In-class presentation 7/13 (https://git.generalassemb.ly/narissa-hajratalli/JSON-and-jQuery)
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
        const $div = $('<div>');
        $div.append($('<h2>').text(project.title));
        $div.append($('<p>').text(project.description)); 
        $div.append($('<img>').attr('src', project.image));
        $div.append($('<a>').attr('href', project.url).text('LINK TO PROJECT'));
        // $('a').attr('target', '_blank'); to open links in new tab, need to find a way to taget just the a attribute here
        return $div; 
    }
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('#projects-container').append($projectDiv);
    })
}