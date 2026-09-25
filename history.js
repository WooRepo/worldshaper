var ctx = document.getElementById("canvas").getContext("2d");
window.onload=startCanvas
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
    ctx.fillStyle = "black";
    ctx.fillText("")
    
    
    }

}