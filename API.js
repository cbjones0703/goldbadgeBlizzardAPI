const baseURL = 'https://us.api.battle.net/';
const key = '&apikey=t8x2dkahh4s7tbka3jacgaq7cj7ddapr';
const locale = '?locale=en_us'; 
const templar = 'd3/data/follower/templar'
const enchant = 'd3/data/follower/enchantress'
const scoundrel = 'd3/data/follower/scoundrel'
let url; 

const title = document.querySelector('#title');
const personName = document.querySelector('#personName');
const skills = document.querySelector('#skills'); 

function templarBtn (){
    url = baseURL + templar + locale + key;
    console.log(url);

    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json){
        displayResults(json);
    }); 
} 

function enchantressBtn (){
    url = baseURL + enchant + locale + key;
    console.log(url);

    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json){
        displayResults(json);
    }); 
} 

function scoundrelBtn (){
    url = baseURL + scoundrel + locale + key;
    console.log(url);

    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json){
        displayResults(json);
    }); 
} 





function displayResults(results) {
    while (section.firstChild) {
        
    }
    
}

// function displayResults(json){
//     let article = document.createElement('article');
//     let heading = document.createElement('h2'); 

//     heading.innerText = json.name;

//     article.appendChild(heading);
//     section.appendChild(article);  
//