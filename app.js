//------CREATING THE NAME BANNER-----
const $h1 = $('<h1>');
$h1.text('Narissa Hajratalli');
$('header').append($h1);



//------CREATING THE NAV BAR AND COMPONENTS OF HAMBURGER MENU---------
const $ul = $('<ul>');
$('nav').append($ul);

//Creating the hamburger as a list element
const $hamburger = $('<li>');
($ul).append($hamburger);
const $a1 = $('<a>').attr('href', '/');
($hamburger).append($a1);
($hamburger).addClass('hamburger');

//Creating three lines within the hamburger menu
const $div = $('<div>')

//Using a for loop to add three divs to the hamburger menu, representing the three lines
for (let i = 0 ; i < 3; i++) {
    ($div).addClass('line');
    ($hamburger).append($div);
}

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
})

//-------ADDING THE HAMBURGER MENU------


//-------ADDING PORTFOLIO SECTION USING JSON-------------
//SOURCE: In-class presentation 7/13 (https://git.generalassemb.ly/narissa-hajratalli/JSON-and-jQuery)
console.log($)
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
    console.log('app is running');
    console.log(data);

    const createProjectElement = (project) => {
        const $div = $('<div>');
        $div.append($('<h2>').text(project.title));
        $div.append($('<p>').text(project.description)); 
        $div.append($('<img>').attr('src', project.image));
        $div.append($('<a>').attr('href', project.url).text('LINK TO PROJECT'));
        return $div; 
    }
    // $('body').append(createProjectElement(data[0])); 

    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('body').append($projectDiv);
    })
}
