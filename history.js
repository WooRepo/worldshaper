//let ctx = document.getElementById("canvas").getContext("2d");
//const canvas = document.getElementById("canvas");
let vowels = ["a", "e", "i", "o", "u"];
let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let areaNames = [consonants[Math.floor(Math.random() * consonants.length)] +
                    vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)] 
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    ]                  


let speciesNameArray = [consonants[Math.floor(Math.random() * consonants.length)] +
                    vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)] 
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    ]

let LanguageNameArray = [speciesNameArray+ "i" + "s" + "h"]  

let advancementArray = ["Advanced Flight","Alphabet","Amphibious Warfare","Astronomy","Atomic Theory",
                        "Automobile","Banking","Bridge Building","Bronze Working","Ceremonial Burial",
                        "Chemistry","Chivalry","Code of Laws","Combined Arms","Combustion","Communism",
                        "Computers", "conscription", "construction", "corporation", "currency", "democracy", "economics",
                        "electricity", "electronics", "engineering", "environmentalism", "espionage", "explosives",
                        "feudalism", "flight", "fundamentalism", "fusion power", "future technology","genetic engineering",
                        "guerrilla warfare", "gunpowder", "horseback riding", "industrialization", "invention", "iron working",
                        "labor union", "laser", "leadership", "literacy", "machine tools", "magnetism", "map making", "masonry",
                         "mass production", "mathematics", "medicine", "metallurgy","mining", "monetary system", "monotheism", "navigation", "nuclear fission", "nuclear power", "philosophy",
                        "physics", "plastics", "polytheism", "pottery", "radio", "railroad", "recycling", "refining",
                        "refrigeration", "republic", "robotics", "rocketry", "sanitation", "seafaring", "space flight",
                        "stealth", "steam engine", "steel", "superconductor", "tactics", "theology", "theory of gravity",
                        "trade", "university", "warrior code", "wheel", "writing"]
let advancement = advancementArray[Math.floor(Math.random() * advancementArray.length)];

let aggressionArray = ["low", "medium", "high"];
let aggression = aggressionArray[Math.floor(Math.random() * aggressionArray.length)];

let politicalSystemArray = ["democracy", "monarchy", "dictatorship", "republic"];
let politicalSystem = politicalSystemArray[Math.floor(Math.random() * politicalSystemArray.length)];

let dietArray = ["herbivore", "carnivore", "omnivore"];
let diet = dietArray[Math.floor(Math.random() * dietArray.length)];

let habitatArray = ["forest", "desert", "ocean", "mountains", "plains", "underground", "cities", "swamps", "tundra", "grasslands", "fields", "jungle", "savannah", "wetlands", "rivers", "lakes", "caves", "volcanoes", "glaciers", "islands"];
let habitat = habitatArray[Math.floor(Math.random() * habitatArray.length)];

let year = Math.floor(Math.random() * 10000);

let lifespan = Math.floor(Math.random() * 200);

let size = Math.floor(Math.random() * 100);

let weight = Math.floor(Math.random() * 1000);

let speed = Math.floor(Math.random() * 100);

let intelligence = Math.floor(Math.random() * 250);

let population = Math.floor(Math.random() * 1000000);

/* let speciesName = speciesNameArray;
const capitalisedSpeciesNames = speciesNameArray[0].toUpperCase(); */

//window.onload=startCanvas
class history {
    constructor(name, year, aggression, diet, habitat, lifespan, size, weight, speed,
                intelligence, population, areaNames, language, politicalSystem, advancement){
        this.name = name;
        this.year = year;
        this.aggression = aggression;
        this.diet = diet;
        this.habitat = habitat;
        this.lifespan = lifespan;
        this.size = size;
        this.weight = weight;
        this.speed = speed;
        this.intelligence = intelligence;
        this.population = population;
        this.areaNames = areaNames;
        this.language = language;
        this.politicalSystem = politicalSystem;
        this.advancement = advancement;
    }
    tellHistory(name, year, aggression, diet, habitat, lifespan, size, weight, speed, intelligence, population, areaNames, language, politicalSystem, advancement){
        console.log("Name: " + name + ", Year: " + year + ", Aggression: " + aggression + ", Diet: " + diet + ", Habitat: "
                     + habitat + ", Lifespan: " + lifespan + ", Size: " + size + ", Weight: " + weight + ", Speed: " + speed
                     + ", Intelligence: " + intelligence + ", Population: " + population + ", Area Names: " + areaNames +
                     ", Language: " + language + ", Political System: " + politicalSystem + ", Advancement: " + advancement);
        
        
    }
/*     capitalizeFirstLetter(str) {
        if (!str) return ""; // Handle empty strings safely
            str.charAt(0).toUpperCase() + str.slice(1);
    } */

}
const newStory = new history(speciesNameArray, year, aggression, diet, habitat, lifespan, size, weight, 
      speed, intelligence, population, areaNames, LanguageNameArray, politicalSystem, advancement);
newStory.tellHistory(newStory.name, Math.round(newStory.year), newStory.aggression, 
      newStory.diet, newStory.habitat, Math.round(newStory.lifespan), Math.round(newStory.size), 
      Math.round(newStory.weight), newStory.speed, newStory.intelligence, Math.round(newStory.population)
      ,newStory.areaNames, newStory.language, newStory.politicalSystem, newStory.advancement);