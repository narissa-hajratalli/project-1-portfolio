//Adding a portfolio section
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
