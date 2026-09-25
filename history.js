//var ctx = document.getElementById("canvas").getContext("2d");
//const canvas = document.getElementById("canvas");

//window.onload=startCanvas
class history {
    constructor(name, year, species, aggression, diet, habitat, lifespan, size, weight, speed, intelligence, population){
        this.name = name;
        this.year = year;
        this.species = species;
        this.aggression = aggression;
        this.diet = diet;
        this.habitat = habitat;
        this.lifespan = lifespan;
        this.size = size;
        this.weight = weight;
        this.speed = speed;
        this.intelligence = intelligence;
        this.population = population;
    }
    tellHistory(name, year, species, aggression, diet, habitat, lifespan, size, weight, speed, intelligence, population){
        console.log(name, year, species, aggression, diet, habitat, lifespan, size, weight, speed, intelligence, population);
        
        
    }

}
const newStory = new history("", Math.random()*500000, "", "", "", "", Math.random()*200, Math.random()*300, 
     Math.random()*200, "", "", Math.random()*1000000);
newStory.tellHistory(newStory.name, Math.round(newStory.year), newStory.species, newStory.aggression, 
      newStory.diet, newStory.habitat, Math.round(newStory.lifespan), Math.round(newStory.size), Math.round(newStory.weight),
      newStory.speed, newStory.intelligence, Math.round(newStory.population))