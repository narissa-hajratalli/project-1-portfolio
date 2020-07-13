
//------CREATING THE NAME BANNER-----
const $h1 = $('<h1>');
$h1.text('Narissa Hajratalli');
$('header').append($h1);

//------CREATING THE NAV BAR-----
const navBar = ['About Me', 'Projects', 'Contact Me'];
const $ul = $('<ul>');
$('nav').append($ul);
const addToNavBar = navBar.forEach((element) => {
    const $li = $('<li>');
    //Creating divs that will be formatted via flexbox
    // const $div = $('<div>');
    
    ($li).addClass('nav-element');
    ($li).css('list-style-type', 'none');
    ($li).text(element);

    //Appending list elements to separate divs
    // ($div).append($li);

    //Appending the divs to the unordered list
    ($ul).append($li); 
})




//-------ADDING PORTFOLIO SECTION USING JSON-------------
//SOURCE: In-class presentation 7/13 (https://git.generalassemb.ly/narissa-hajratalli/JSON-and-jQuery)
// console.log($)
// const url = 'https://spreadsheets.google.com/feeds/list/1wNEVqSjAcMgCe-YIrdt0gR2QRg5l0EVtQoovN8GGEhY/od6/public/values?alt=json'
// fetch(url)
//     .then(response => response.json())
//     //response is the information we are getting back
//     //this is telling us to parse the json object into JS
//     .then(data => {
//         //console.log(data)
//         //console.log(data.feed.entry);
//         //gives us just the array of each row in our google sheet 

//         //Fetch -- go and get that data
//         //Response -- takes the json string and converts it to a JS object

//         const projects = data.feed.entry.map((entry) => {
//             return {
//                 title: entry.gsx$title.$t,
//                 image: entry.gsx$image.$t,
//                 description: entry.gsx$description.$t,
//                 url: entry.gsx$url.$t
//         }
//     })
//     app(projects)
// })

// const app = (data) => {
//     console.log('app is running');
//     console.log(data);

//     const createProjectElement = (project) => {
//         const $div = $('<div>');
//         $div.append($('<h2>').text(project.title));
//         $div.append($('<p>').text(project.description)); 
//         $div.append($('<img>').attr('src', project.image));
//         $div.append($('<a>').attr('href', project.url).text('LINK TO PROJECT'));
//         return $div; 
//     }
//     // $('body').append(createProjectElement(data[0])); 

//     data.forEach(project => {
//         const $projectDiv = createProjectElement(project);
//         $('body').append($projectDiv);
//     })
// }
