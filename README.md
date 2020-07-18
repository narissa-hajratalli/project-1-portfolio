# Project Proposal

## Live Website
https://narissa-hajratalli.netlify.app/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete

## Project Description
The purpose of this project is to create my own website to showcase my projects on my journey to becoming a Software Engineer. My website will include my photo, my bio, my projects thus far, and a "Contact Me" portion. 

## Google Sheet
- [Projects](https://docs.google.com/spreadsheets/d/1wNEVqSjAcMgCe-YIrdt0gR2QRg5l0EVtQoovN8GGEhY/edit#gid=0)

## Wireframes
- [Desktop](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594515015/Project%201%20-%20Portfolio/Desktop_v6x5r0.png)
- [iPad](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594515015/Project%201%20-%20Portfolio/iPad_g0aigm.png)
- [Mobile](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594515015/Project%201%20-%20Portfolio/Mobile_pdfbi0.png)

## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594527180/Project%201%20-%20Portfolio/IMG_0878_tzriig.jpg)

|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Sat, July 11 | Project Proposal	| Complete | 8 hrs |
| Sun, July 12 | Research ideas	| Complete	| 3 hrs |
| Mon, July 13 | Compile List of Projects and connect using API | Complete | 2 hrs |
| Tues, July 14 | HTML & CSS built | Complete | 5 hrs |
| Wed, July 15 | Responsiveness & hamburger menu | Complete | 6.5 hrs |
| Thurs, July 16 | Finishing touches and Post MVP | Complete | 3 hrs |	
| Fri, July 17 | Depoly website | Complete | 45 min |		
 
## MVP/Post MVP

#### MVP
- Use HTML and CSS to add an "About Me", "Projects, and "Contact Me" section
- Create a navigation bar indicating each section of the webpage
- Use CSS GRID and flexbox to organize content in an aesthetically pleasing way 
- Make the webpage responseive--mobile first, then tablet and desktop responsiveness
- Create a hamburger menu that is displayed in mobile only
- Use an API to call my projects from URLs on a Google Sheet
- Successfully deploy my website via GitHub pages


#### Post MVP
- Make "Projects" section scrollable using arrows in a gallery-type view
- Mouse hover over each project and show the description
- Jump to a certain part of the webpage when a heading on the navigation bar is clicked (desktop only)
- Create a "Skills" section
- Add level bars in the "Skills" section to indicate my experience in each language
- Create a "Work Experience" section
- Social media buttons in the footer


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| "About Me" section (including photo and bio)  | H | 2 hrs | 3.5 hrs | 3.5 hrs|
| Naviagation bar | M | 1.5 hrs | 1.5 hrs | 1.5 hrs|
| Styling navigation bar with grid and flexbox | H | 3 hrs | 3 hrs | 3 hrs|
| Styling "About Me" with grid and flexbox | H | 3hrs | 3.5 hrs | 3.5 hrs|
| Creating the "Projects" section with descriptions displayed on top of the pictures | H | 2 hrs| 3 hrs | 3 hrs |
| Styling "Project" section with grid and flexbox | M | 2 hrs | 3.5 hr | 3.5 hrs|
| "Contact Me" section and input fields| H | 4 hrs | 2 hrs | 2 hrs
| Working with API for projects | H | 3 hrs | 4.5 hrs | 4.5 hrs |
| Ensuring responsive for desktop | H | 2 hrs | 3.5 hrs | 3.5 hrs|
| Ensuring responsive for iPad | H | 2 hrs | 3.5 hrs | 3.5 hrs|
| Ensuring responsive for mobile | H | 2 hrs | 3.5 hr | 4 hrs |
| Hamburger menu | H | 2 hrs | 6.5 hrs | 6.5 hrs|
| Deploying website | H | 2hr | 45 min | 45 min |
| Total | - | 27.5 hrs | 42.25 hrs | 42.25 hrs |


#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make the "Projects" section into a gallery view | L | 5 hrs | -hr | -hr|
| Mouse hover over each project picture to show the description | L | 1.5 hrs | 1 hr | 1 hr|
| Click on navigation bar to jump to that specific part of the webpage | M | 2 hrs | 45 min | 45 min|
| Create a "Skills" section to display the languages I am learning | M | 2 hrs| -hr | -hr |
| Once "Skills" section is created, add proficiency bars | L | 2 hrs | -hr | -hr|
| Create a "Work Experience" section with my resume| L | 2 hrs | -hr | -hr|
| Social media icons at the bottom of the page| M | 1.5 hrs | 40 min | 40 min |
| Make a cool graphic for the banner | L | 1.5 hrs | -hr | -hr |
| Smooth scroll with links | L | 1.5 hrs | -hr | -hr |
| Make links open in new tab | L | 1 hr | 30 min | 30 min |
| Hamburger menu soft transition | L | 30 min | -hr | -hr |
| Make bio less long on mobile| L | 30 min | -hr | -hr |
| Change contact form appearance| L | 30 min | -hr | -hr |
| Total | - | 17.5 hrs | 2 hrs |  2 hrs |

## Additional Libraries
 - jQuery: jQuery was originally used to create the navigation bar before refactoring. It was also used to create the website heading containing my name, the hamburger menu, and the majority of the projects section. 
 
 - JSON: JSON was used to pull in my projects via API call from Google Sheet.
 
 - Google Sheets: Google Sheets was used as a database to hold all of my projects.

 - Google Analytics: Google Analytics was used to see how many visitors I have on my webpage.
 
 - Google Fonts: Google Fonts was used to add different font families to the webpage to make it more aesthetically pleasing. 
 
 - Font Awesome: Font Awesome was used to add logos for CodePen, LinkedIn, GitHub and WordPress. 

## Code Snippet


#### Successfully appending CodePen icons and making CodePen links open in a new tab using target = "_blank"
```
const app = (data) => {

    const createProjectElement = (project) => {
        ...
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
```

#### Creating functionality to turn hamburger menu into an 'x' and function that opens the hambuger menu on mobile.
```
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
```

## Issues and Resolutions
 
#### Having text wrap around a circular picture
Issue: I was having trouble formatting the text to wrap circularly around the photo. After some research, I was able to make the text wrap by storing my photo in another circular div and using shape-around.
```
/*Section 3, References 1 and 2*/
/*Contains my photo and my bio*/
section {
    position: relative;
    width: 100%;
    padding: 50px;
}

/*This is the div containing my circular picture. Shape-outside formats the text to curve around the photo*/
.circle {
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 500px;
    float: left;
    border-radius: 50%;
    margin: 20px;
    shape-outside: circle();
}

/*This is my photo inside of the circle class*/
.me {
    display: block; 
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-top: 80px;
    box-shadow: 1px 12px 12px 2px rgba(0, 0, 255, .2);
    border: 4px solid white;
}
```

#### Creating the navigation bar purely with jQuery
Issue: Originally, I attempted to make my navigation bar using jQuery. I ran into an issue when I tried to add individual hrefs to each navigation element because I was creating a 'jump to' type of navigation. The issue was that I had to store the forEach function inside of another function. While this partially fixed the problem, I still received an additional error that my list items containing each navigation element were not returning properly. In the essence of time, I decided to hardcode the navigation elements in HTML. 
 ``` 
 //-----MY ATTEMPT 1-----

const targets = ['#startabout', '#startproject', '#startcontact'];
const addTargets = targets.forEach((navtargets) => {
     return element.toString();
})
console.log(addTargets);

const $ul = $('<ul>');
$('nav').append("");

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

    return 'Hello World';
})

console.log(addToNavBar());

let scrollItems = targets.map((element) => {
    let item = ($li).attr("href", element);
    console.log(element);
})

scrollItems();

```
Error 
```
addToNavBar is not a function
```

Partial resolution
```
const addToNavBar = () =>{
      navBar.forEach((element) => {
      ...
```
Error 
```
$li is not defined
```

#### Round photo distorting the webpage's format on mobile 
Issue: The round photo started distorting all other elements on smaller screen sizes. My photo and the circular container that it was in was too large for the body so it was shifted to the right side of the screen, spilling outside of the body, while all other elements shifted to the right of the screen. I decided to change the display to none for the image and circular container on smaller screens and added just my image with no direct parent using HTML. I then added properties so the image became more flexible on smaller screens. 

Resolution:
```
HTML
   <!--Circle div for larger screens-->
        <div class='circle'>
            <img class='me' src='https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594739794/Project%201%20-%20Portfolio/IMG_1685_copy_z5smwt.jpg' alt='me'>
        </div>
        
    <!--Placeholder div for my picture on smaller screens-->
        <a name="startaboutphoto" class="target1"><img id='me-small' src='https://res.cloudinary.com/ds7vqqwb8/image/upload/v1594739794/Project%201%20-%20Portfolio/IMG_1685_copy_z5smwt.jpg' alt='me'></a>

```
```
CSS
/*This is the div containing my circular picture. Shape-outside formats the text to curve around the photo*/
.circle {
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 500px;
    float: left;
    border-radius: 50%;
    margin: 20px;
    shape-outside: circle();
}

/*This is my photo inside of the circle class*/
.me {
    display: block; 
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-top: 80px;
    box-shadow: 1px 12px 12px 2px rgba(0, 0, 255, .2);
    border: 4px solid white;
}

/*This displays my picture only on screens below 800px.*/
#me-small {
    display: none;
}

@media only screen and (max-width: 800px) {
    /*Hides the circle display so that my bio can be formatted under th picture*/
    
    .circle {
        display: none;
    } 
    
    #me-small {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        box-shadow: 1px 12px 12px 2px rgba(0, 0, 255, .2);
        border: 4px solid white;
        margin-bottom: 20px;
    }
}
```
