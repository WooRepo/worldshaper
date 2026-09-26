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
areaNames[0] = areaNames[0].charAt(0).toUpperCase() + areaNames[0].slice(1);

let speciesNameArray = [consonants[Math.floor(Math.random() * consonants.length)] +
                    vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)] 
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    ]
let species = speciesNameArray[Math.floor(Math.random() * speciesNameArray.length)];
speciesNameArray[0] = speciesNameArray[0].charAt(0).toUpperCase() + speciesNameArray[0].slice(1);

let leaderNameArray = [consonants[Math.floor(Math.random() * consonants.length)] +
                    vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)] 
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    + vowels[Math.floor(Math.random() * vowels.length)]
                    + consonants[Math.floor(Math.random() * consonants.length)]
                    ]

let leaderName = leaderNameArray[Math.floor(Math.random() * leaderNameArray.length)];
leaderNameArray[0] = leaderNameArray[0].charAt(0).toUpperCase() + leaderNameArray[0].slice(1);

let rulerDescriptionArray = ["new", "absolute", "last", "young", "sole", "powerful",
                                "real", "wise", "local", "independent", "single", "strong", "muslim", "present",
                                "chief", "sovereign", "rich", "legitimate", "foreign", "former", "ideal", "virtual", 
                                "native", "able", "civil", "temporal", "secular", "enlightened", "future", "actual", "true",
                                "religious", "military", "hereditary", "greatest", "weak", "rightful","divine", "traditional",
                                "mighty","autocratic","despotic","independent","absolute","autonomous","authoritarian"
                            ]

let rulerDescription = rulerDescriptionArray[Math.floor(Math.random() * rulerDescriptionArray.length)];

let LanguageNameArray = [speciesNameArray+ "i" + "s" + "h"]  

/* let ancientAdvancementArray = ["Advanced Flight","Alphabet","Amphibious Warfare","Astronomy","Atomic Theory",
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
                        "trade", "university", "warrior code", "wheel", "writing"] */

let ancientAdvancementArray = ["alphabet", "bridge building", "bronze working", "ceremonial burial",
                                "code of laws", "construction","currency", "construction", "engineering",
                                "feudalism", "horseback riding", "iron working", "literacy", "map making", 
                                "mathematics", "medicine", "metallurgy", "mining", "monetary system",
                                "monotheism", "navigation", "philosophy", "physics", "polytheism", "pottery", "republic", 
                                "sanitation", "seafaring", "theology", "trade", "university", "warrior code",
                                "wheel", "writing"];

let ancientAdvancement = ancientAdvancementArray[Math.floor(Math.random() * ancientAdvancementArray.length)];

let modernAdvancementArray = ["advanced flight", "amphibious warfare", "astronomy", "atomic theory",
                                "automobile", "banking", "chemistry", "chivalry", "combined arms", "combustion",
                                "communism", "computers", "conscription", "corporation", "democracy", "economics",
                                "electricity", "electronics", "environmentalism", "espionage", "explosives",
                                "fundamentalism", "fusion power", "future technology", "genetic engineering",
                                "guerrilla warfare", "gunpowder", "industrialization", "invention", "labor union",
                                "laser", "leadership", "machine tools", "magnetism", "mass production", "nuclear fission",
                                "nuclear power", "plastics", "radio", "railroad", "recycling", "refining",
                                "refrigeration", "robotics", "rocketry", "space flight", "stealth", "steam engine",
                                "steel", "superconductor", "tactics", "theory of gravity"];

let modernAdvancement = modernAdvancementArray[Math.floor(Math.random() * modernAdvancementArray.length)];

let futureAdvancementArray = ["artificial intelligence", "biotechnology", "cloning", "cybernetics",
                                "fusion power", "genetic engineering", "nanotechnology", "quantum computing",
                                "space colonization", "terraforming", "virtual reality", "warp drive", "wormholes"];

let futureAdvancement = futureAdvancementArray[Math.floor(Math.random() * futureAdvancementArray.length)];

let renaissanceAdvancementArray = ["art", "architecture", "astronomy", "cartography", "classical learning",
                                    "engineering", "exploration", "humanism", "literature", "mathematics",
                                    "medicine", "music", "philosophy", "political theory", "printing press",
                                    "science", "sculpture", "theology"];

let renaissanceAdvancement = renaissanceAdvancementArray[Math.floor(Math.random() * renaissanceAdvancementArray.length)];

let advancement = ancientAdvancementArray[Math.floor(Math.random() * ancientAdvancementArray.length)];

let advancementPoint = Math.floor(Math.random() * 5);

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
if (advancementPoint == 0) {
    advancement = ancientAdvancement;
} else if (advancementPoint == 1) {
    advancement = renaissanceAdvancement;
} else if (advancementPoint == 2) {
    advancement = modernAdvancement;
} else if (advancementPoint == 3) {
    advancement = futureAdvancement;
}


let laterYear = year + Math.floor(Math.random() * 1000) + 1;

let earlyHistoryEvent = Math.floor(Math.random() * 3) + 1;



let earlyHistoryArrayEvent1 = ["The first civilization; the "+politicalSystem+" of "+leaderName+",  was formed in the year "+year+" BD. This "+politicalSystem+" was headed by King "+leaderName+" the IIV, who was noted to be a Tyrannical and Just. The "+politicalSystem+" was known as a trade hub for the region. However, after a succession of "+rulerDescription+" rulers, the king "+leaderName+", a Incompetent ruler, and the rise of power in the advisor "+leaderName+" the XXVI, lead to a collapse in the power of the "+politicalSystem+", leaving it to be abandoned and ransacked. ", 
                        "The first civilization; the "+politicalSystem+" of "+leaderName+",  was formed in the year "+year+" BD. This "+politicalSystem+" was headed by King "+leaderName+" the IIV, who was noted to be a Tyrannical and Just. The "+politicalSystem+" was known as a trade hub for the region. However, after multiple attempts by revolutionary groups to remove the monarchy, the military was left weak, and was unable to beat back the invasion attempts of the republic of "+speciesNameArray+", leaving them with almost no power. ",
                        "The first civilization; the "+politicalSystem+" of "+leaderName+", was formed in the year "+year+" BD. This "+politicalSystem+" was headed by King "+leaderName+" the IIV, who was noted to be a Tyrannical and Just. The "+politicalSystem+" was known as a trade hub for the region. However, as the "+politicalSystem+" expanded, it had to fight an expensive war with the republic of "+speciesNameArray+", it was a very expensive war with no real victory on either side, leaving the "+politicalSystem+" very militarily  weakened. ",
                        "The first civilization; the "+politicalSystem+" of "+leaderName+", was formed in the year "+year+" BD. This "+politicalSystem+" was headed by King "+leaderName+" the IIV, who was noted to be a Tyrannical and Just. The "+politicalSystem+" was known as a trade hub for the region. As it expanded, and through invasion of rival powers, it became a more technologically advanced civilisation, becoming the most developed "+politicalSystem+" in the area, creating paved roads and distributing it throughout the "+politicalSystem+". ",
                        "The first civilization; the "+politicalSystem+" of "+leaderName+", was formed in the year "+year+" BD. This "+politicalSystem+" was headed by King "+leaderName+" the IIV, who was noted to be a Tyrannical and Just. The "+politicalSystem+" was known as a trade hub for the region. As the "+politicalSystem+" expanded it became the economically dominant civilisation in the area. As well as that, a large war was fought with the republic of "+speciesNameArray+",  which lead to the destruction of "+speciesNameArray+"",
]
let earlyHistoryEvent1 = earlyHistoryArrayEvent1[Math.floor(Math.random() * earlyHistoryArrayEvent1.length)];

let earlyHistoryArrayEvent2 = ["The first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. However, conflict around the voting systems and results in polarized opinions lead to a bloody civil war in the year 12 AD , which lead to the near fffThe first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. destruction of "+leaderName+", leaving it a weakened state back under a monarchy. ",
                                "The first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. However, in the year 35AD, the leader "+leaderName+" Mc EvilFaceBad was elected, who removed the concept of a free election and established a dictatorship with themselves at the center. It was a bloody and ruthless dictatorship, and when "+leaderName+" Mc EvilFaceBad  died in 75AD, "+areaNames+" was thrown into chaos. ",
                                "The first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. However, due to bureaucratic and under-representitive elections, combined with weak politicians, lead to the general weakening of "+leaderName+", and the reduction of power economically  in the region. ",
                                "The first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. This benefitted the region when "+leaderName+" the Just was elected in 18AD, who has gone down as a capable leader who advanced "+areaNames+" Economically and technologically. When he was finally unelected in 30AD, he left office gracefully. ",
                                "The first democratic system was implemented in "+areaNames+" in the year "+year+"AD  . Although not as representative as more modern democracy, it still gave the general public an opportunity to vote. This lead to the formation of the Very Cool Not Dictator party, which has been constantly re-elected by the general population, not because it seized control illegally, but because a succession of great leaders such as "+leaderName+"dead and "+leaderName+"fraud, which brought the region into prosperity, making it the most Economically dominant state in the area."
]
let earlyHistoryEvent2 = earlyHistoryArrayEvent2[Math.floor(Math.random() * earlyHistoryArrayEvent2.length)];

let earlyHistoryArrayEvent3 = ["In the year "+year+"BD, the destruction of the town "+speciesNameArray+"ville by the "+politicalSystem+" of "+speciesNameArray+"land, which worsened an already fractured relationship between "+speciesNameArray+"land and the "+politicalSystem+" of "+areaNames+"berg, who had sovereignty over "+speciesNameArray+"ville. This led to the first major war, the war of "+leaderName+". The conflict led to devastating losses on both sides, and the "+politicalSystem+" of "+leaderName+" McEvil, an area used to move troops and a major setting for many skirmishes, was completely destroyed.",
    "In the year "+year+"BD, the destruction of the town "+speciesNameArray+"ville by the "+politicalSystem+" of "+speciesNameArray+"land, which worsened an already fractured relationship between "+speciesNameArray+"land and the "+politicalSystem+" of "+areaNames+"berg, who had sovereignty over "+speciesNameArray+"ville. This led to the first major war, the war of "+leaderName+". The conflict led to the reduction on both sides militarily and economically. While a treaty was eventually signed in 32VL, both sides had been diminished significantly",
    "In the year "+year+"BD, the destruction of the town "+speciesNameArray+"ville by the "+politicalSystem+" of "+speciesNameArray+"land, which worsened an already fractured relationship between "+speciesNameArray+"land and the "+politicalSystem+" of "+areaNames+"berg, who had sovereignty over "+speciesNameArray+"ville. This led to the first major war, the war of "+leaderName+". While a treaty was eventually signed in 32VL, tensions have arisen and occasional breaches of treaty rules due to skirmishes have occurred. ",
    "In the year "+year+"BD, the destruction of the town "+speciesNameArray+"ville by the "+politicalSystem+" of "+speciesNameArray+"land, which worsened an already fractured relationship between "+speciesNameArray+"land and the "+politicalSystem+" of "+areaNames+"berg, who had sovereignty over "+speciesNameArray+"ville. This led to the first major war, the war of "+leaderName+". However, after moderate losses on both sides, the leaders of "+speciesNameArray+"land and "+areaNames+"berg came to a mutual agreement. This led both states to prosper Economically and technologically. ",
    "In the year "+year+"BD, the destruction of the town "+speciesNameArray+"ville by the "+politicalSystem+" of "+speciesNameArray+"land, which worsened an already fractured relationship between "+speciesNameArray+"land and the "+politicalSystem+" of "+areaNames+"berg, who had sovereignty over "+speciesNameArray+"ville. This led to the first major war, the war of "+leaderName+". However, the republic of "+leaderName+" McEvil organised a treaty between the both sides, leading to the two sides having an alliance which led to much prosperity for the two sides. "
    ]
let earlyHistoryEvent3 = earlyHistoryArrayEvent3[Math.floor(Math.random() * earlyHistoryArrayEvent3.length)];

let recentHistoryEvent = Math.floor(Math.random() * 3) + 1;

let recentHistoryArrayEvent1 = ["From the relatively unknown "+politicalSystem+" of "+areaNames+"  on this planet came "+leaderName+". At the age of 15 they seized control of the local militia and used it to invade the nearby planet of "+areaNames+"berg, establishing themselves as the supreme ruler. They then went on a huge conquest, invading planets left, right and center, establishing "+leaderName+" as a Strategic but "+rulerDescription+" conqueror. However, all their strategic might was unable to best the republic of "+areaNames+"ton, as although they had weak commanders, they had the military might of the largest army in this sector of the galaxy. "+leaderName+" was quickly defeated, and lost everything he had fought for, and the "+politicalSystem+" he established was fully invaded by "+areaNames+"ton. ",
    "From the relatively unknown "+politicalSystem+" of "+areaNames+"  on this planet came "+leaderName+". At the age of 15 they seized control of the local militia and used it to invade the nearby planet of "+areaNames+"berg, establishing themselves as the supreme ruler. They then went on a huge conquest, invading planets left, right and center, establishing "+leaderName+" as a Strategic but "+rulerDescription+" conqueror. However, all their strategic might was unable to best the republic of "+areaNames+"ton, as although they had weak commanders, they had the military might of the largest army in this sector of the galaxy.  His attempts to invade were repelled, and he slowly lost control of the outer regions of his "+politicalSystem+" from revolution. ",
    "From the relatively unknown "+politicalSystem+" of "+areaNames+"  on this planet came "+leaderName+". At the age of 15 they seized control of the local militia and used it to invade the nearby planet of "+areaNames+"berg, establishing themselves as the supreme ruler. They then went on a huge conquest, invading planets left, right and center, establishing "+leaderName+" as a Strategic but "+rulerDescription+" conqueror. However, all their strategic might was unable to best the republic of "+areaNames+"ton, as although they had weak commanders, they had the military might of the largest army in this sector of the galaxy.  "+leaderName+"'s attempts to invade were repelled, and while he managed to conquer most of the planet, "+areaNames+"ton was constantly inciting territories to revolution. ",
    "From the relatively unknown "+politicalSystem+" of "+areaNames+"  on this planet came "+leaderName+". At the age of 15 they seized control of the local militia and used it to invade the nearby planet of "+areaNames+"berg, establishing themselves as the supreme ruler. They then went on a huge conquest, invading planets left, right and center, establishing "+leaderName+" as a Strategic but "+rulerDescription+" conqueror. However, all their strategic might was unable to best the republic of "+areaNames+"ton, as although they had weak commanders, they had the military might of the largest army in this sector of the galaxy.  "+leaderName+" , of course, had a response. They sent spies into "+areaNames+"ton, and used the info gathered to lure the army into a trap, decimating the forces and cementing them as the greatest conqueror of all time.",
    "From the relatively unknown "+politicalSystem+" of "+areaNames+"  on this planet came "+leaderName+". At the age of 15 they seized control of the local militia and used it to invade the nearby planet of "+areaNames+"berg, establishing themselves as the supreme ruler. They then went on a huge conquest, invading planets left, right and center, establishing "+leaderName+" as a Strategic but "+rulerDescription+" conqueror. However, all their strategic might was unable to best the republic of "+areaNames+"ton, as although they had weak commanders, they had the military might of the largest army in this sector of the galaxy. However, "+leaderName+" had a plan. They introduced "+advancement+" into "+areaNames+"berg, and soon many from "+areaNames+"ton defected due to the quality of life improvement, thus winning the war through trade, cementing "+leaderName+" as not only the best conqueror of all time, but also as one of the best leaders"
]
let recentHistoryEvent1 = recentHistoryArrayEvent1[Math.floor(Math.random() * recentHistoryArrayEvent1.length)];

let recentHistoryArrayEvent2 = ["In the year "+year+", "+areaNames+" was ruled by "+leaderName+" McEvil . They treated the peasantry in their feudal society awfully, denying them of many rights. As thus there was revolution.  The peasants started with a peaceful protest outside "+areaNames+" square. However, "+leaderName+" McEvil  responded with violence, massacring the peasantry for even suggesting the idea. Thus the peasantry were forevermore quashed by society.",
    "In the year "+laterYear+", "+areaNames+" was ruled by "+leaderName+" McEvil . They treated the peasantry in their feudal society awfully, denying them of many rights. As thus there was revolution.  The peasants started with a peaceful protest outside "+areaNames+" square. However, "+leaderName+" McEvil  responded with violence. But the peasantry responded likewise, leading to a bloody civil war, nearly destroying "+areaNames+". In the end, both sides lost major leaders, and control of the city was up in the air for a long time. ",
    "In the year "+laterYear+", "+areaNames+" was ruled by "+leaderName+" McEvil . They treated the peasantry in their feudal society awfully, denying them of many rights. As thus there was revolution.  The peasants started with a peaceful protest outside "+areaNames+" square. However, "+leaderName+" McEvil  responded with violence. And the peasantry responded likewise, overwhelming the military and breaking into "+areaNames+" town castle, killing "+leaderName+" McEvil . They instituted a new government to better represent them. But as time went on, this government wanted more and more control, eventually creating another feudal system like the one the peasants had been so desperate to change",
    "In the year "+laterYear+", "+areaNames+" was ruled by "+leaderName+" McEvil . They treated the peasantry in their feudal society awfully, denying them of many rights. As thus there was revolution.  The peasants started with a peaceful protest outside "+areaNames+" square. However, "+leaderName+" McEvil  responded with violence. And the peasantry responded likewise, overwhelming the military and breaking into "+areaNames+" town castle, killing "+leaderName+" McEvil . They instituted a new government to better represent them. This government did a good job of getting rights for the lower classes, increasing economic benefits as well as societal benefits within "+areaNames+". ",
    "In the year "+laterYear+", "+areaNames+" was ruled by "+leaderName+" McEvil . They treated the peasantry in their feudal society awfully, denying them of many rights. As thus there was revolution.  The peasants started with a peaceful protest outside "+areaNames+" square. However, "+leaderName+" McEvil  responded with violence. And the peasantry responded likewise, overwhelming the military and breaking into "+areaNames+" town castle, killing "+leaderName+" McEvil . They instituted a new government to better represent them. This government not only improved the peasants rights within "+areaNames+", but also spread it to other planets, having a huge societal benefit. "
]
let recentHistoryEvent2 = recentHistoryArrayEvent2[Math.floor(Math.random() * recentHistoryArrayEvent2.length)];

let recentHistoryArrayEvent3 = ["The empire of "+areaNames+"berg, which has its capital on this planet, led by  "+leaderName+", who is known today as one of the worst leaders in "+species+" history, took over their neighbouring system, "+areaNames+"ton. The inhabitants of "+areaNames+"ton were forced into slave labour, mining for the very valuable mineral RAM. This caused outroar from the inhabitants of "+areaNames+"berg, leading to the overthrowing of "+leaderName+", and the freedom of the "+areaNames+"ton people",
    "The empire of "+areaNames+"berg, which has its capital on this planet, led by  "+leaderName+", who is known today as one of the worst leaders in "+species+" history, took over their neighbouring system, "+areaNames+"ton. The inhabitants of "+areaNames+"ton were forced into slave labour, mining for the very valuable mineral RAM. Eventually, "+areaNames+"ton managed to rise up against their cruel oppressors, and managed to regain freedom for their system.",
    "The empire of "+areaNames+"berg, which has its capital on this planet, led by  "+leaderName+", who is known today as one of the worst leaders in "+species+" history, took over their neighbouring system, "+areaNames+"ton. The inhabitants of "+areaNames+"ton were forced into slave labour, mining for the very valuable mineral RAM.  Eventually, "+areaNames+"ton managed to rise up against their cruel oppressors, but, due to "+areaNames+"berg's superior military might, were quickly beaten back down. ",
    "The empire of "+areaNames+"berg, which has its capital on this planet, led by  "+leaderName+", who is known today as one of the worst leaders in "+species+" history, took over their neighbouring system, "+areaNames+"ton. The inhabitants of "+areaNames+"ton were forced into slave labour, mining for the very valuable mineral RAM.  Eventually, "+areaNames+"ton managed to rise up against their cruel oppressors, but, due to "+areaNames+"berg's superior military might, quickly lost and were nearly destroyed. Almost 80% of the population died in one night, with the rest back to mining soon after",
    "The empire of "+areaNames+"berg, which has its capital on this planet, led by  "+leaderName+", who is known today as one of the worst leaders in "+species+" history, took over their neighbouring system, "+areaNames+"ton. The inhabitants of "+areaNames+"ton were forced into slave labour, mining for the very valuable mineral RAM. Eventually, "+areaNames+"ton managed to rise up against their cruel oppressors, but, due to "+areaNames+"berg's superior military might,, the people of "+areaNames+"ton were all massacred in one night"
]
let recentHistoryEvent3 = recentHistoryArrayEvent3[Math.floor(Math.random() * recentHistoryArrayEvent3.length)];
//window.onload=startCanvas
class history {
    constructor(name, year, aggression, diet, habitat, lifespan, size, weight, speed,
                intelligence, population, areaNames, language, politicalSystem, advancement, rulerDescription) {
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
        this.rulerDescription = rulerDescription;
    }
    tellHistory(name, year, aggression, diet, habitat, lifespan, size, weight, speed, intelligence, population, areaNames, language, politicalSystem, advancement, rulerDescription){
        console.log("Name: " + name + "\n Year: " + year + "\n Aggression: " + aggression + "\n Diet: " + diet + "\n Habitat: "
                     + habitat + "\n Lifespan: " + lifespan + "\n Size: " + size + "\n Weight: " + weight + "\n Speed: " + speed
                     + "\n Intelligence: " + intelligence + "\n Population: " + population + "\n Area Names: " + areaNames +
                     "\n Language: " + language + "\n Political System: " + politicalSystem + "\n Most Recent Advancement: " + advancement + "\n Ruler Description: " + rulerDescription);
        if (earlyHistoryEvent == 1) {
            console.log(earlyHistoryEvent1);
        } else if (earlyHistoryEvent == 2) {
            console.log(earlyHistoryEvent2);
        } else {
            console.log(earlyHistoryEvent3);
        }
        if (recentHistoryEvent == 1) {
            console.log(recentHistoryEvent1);
        }   else if (recentHistoryEvent == 2) {
            console.log(recentHistoryEvent2);
        } else {
            console.log(recentHistoryEvent3);
        }
    }
/*     capitalizeFirstLetter(str) {
        if (!str) return ""; // Handle empty strings safely
            str.charAt(0).toUpperCase() + str.slice(1);
    } */

}
const newStory = new history(speciesNameArray, year, aggression, diet, habitat, lifespan, size, weight, 
      speed, intelligence, population, areaNames, LanguageNameArray, politicalSystem, advancement, rulerDescription);
newStory.tellHistory(newStory.name, Math.round(newStory.year), newStory.aggression, 
      newStory.diet, newStory.habitat, Math.round(newStory.lifespan), Math.round(newStory.size), 
      Math.round(newStory.weight), newStory.speed, newStory.intelligence, Math.round(newStory.population)
      ,newStory.areaNames, newStory.language, newStory.politicalSystem, newStory.advancement, newStory.rulerDescription);
console.log("advancement point: " + advancementPoint);
//export{newStory}    
window.myGlobalVariable = newStory;