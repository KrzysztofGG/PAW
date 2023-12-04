
function lesserPolandCities(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        lesserPoland = res.filter((city) => city.province === "małopolskie");
        addSection(lesserPoland, "LesserPolandCities");
    });

}
lesserPolandCities();

function citiesWithA(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        citiesA = res.filter((city) => city.name.indexOf('a') !== city.name.lastIndexOf('a'));
        console.log(Object.keys(citiesA).length);
        addSection(citiesA, "citiesWith a twice");
    });
}
citiesWithA();

function fifthDensestCity(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        density = res.sort((a, b) => (b.density - a.density))[4];
        console.log(density);
        addOneElementSection(density, "5th densest city");
    });
}
fifthDensestCity();

function bigCities(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        citiesBig = res.filter((city) => city.people > 100000);
        console.log(citiesBig);
        var main = document.getElementById("main")
        var section = document.createElement("section");
        var header = document.createElement("h1");
        header.textContent = "BigCities";
        section.appendChild(header);
        var list = document.createElement("ul");
    
        citiesBig.forEach((c) =>{
            var el = document.createElement("li");
            var elText = "";
            for (const [key, value] of Object.entries(c)){
                if (key === "township")
                    elText += "city ";
                else
                    elText += value + " ";
             
            }
            el.textContent = elText
            list.appendChild(el);
        });
        section.appendChild(list);
        main.appendChild(section);
    });
}
bigCities();

function countCities(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        smallCities = res.filter((city) => city.people < 80000).length;
        biggerCities = res.filter((city) => city.people > 80000).length;

        var main = document.getElementById("main")
        var section = document.createElement("section");
        var header = document.createElement("h1");
        header.textContent = "Small vs Big Cities";
        section.appendChild(header);

        var pSmall = document.createElement('p');
        var pBig = document.createElement('p');
        var pDecistion = document.createElement('p');

        var decisionText = "There are more ";
        decisionText +=  smallCities > biggerCities ? "small (<80k)" : "big(>80k)";
        decisionText += " cities";

        pDecistion.textContent = decisionText;
        pSmall.textContent = `Small cities: ${smallCities}`;
        pBig.textContent = `Big cities: ${biggerCities}`;

        section.appendChild(pDecistion);
        section.appendChild(pSmall);
        section.appendChild(pBig);

        main.appendChild(section);
    });
}
countCities();

function averageAreaWhenTownshipOnP(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        var areas = res.filter((city) => city.township.startsWith("p")).map((city) => city.area);
        var sumArea = areas.reduce((a, b) => a + b)
        var avgArea = sumArea/areas.length;

        var main = document.getElementById("main")
        var section = document.createElement("section");
        var header = document.createElement("h1");
        header.textContent = "Average area when township on P";
        section.appendChild(header);

        var p = document.createElement('p')
        p.textContent = `Average area: ${avgArea}`;
        section.appendChild(p);
        main.appendChild(section);
    });
}
averageAreaWhenTownshipOnP();

function citiesFromPomorskie(){
    fetch('city.json')
    .then(res => res.json())
    .then(res =>{
        var pomorskieCities = res.filter((city) => city.province == "pomorskie");
        var areAll = pomorskieCities.length == res.length;
        var main = document.getElementById("main")
        var section = document.createElement("section");
        var header = document.createElement("h1");
        header.textContent = "Pomorskie Cities";
        section.appendChild(header);

        var pQuestion = document.createElement('p');
        pQuestion.textContent = `Are all cities from pomorskie bigger than 5000? ${areAll}`
        var pNumber = document.createElement('p');
        pNumber.textContent = `Cities in pomorskie bigger than 5000: ${pomorskieCities.length}`

        section.appendChild(pQuestion);
        section.appendChild(pNumber);
        main.appendChild(section);

    });
}
citiesFromPomorskie();

function addSection(cities, headerText){
    var main = document.getElementById("main")
    var section = document.createElement("section");
    var header = document.createElement("h1");
    header.textContent = headerText;
    section.appendChild(header);
    var list = document.createElement("ul");

    cities.forEach((c) =>{
        var el = document.createElement("li");
        var elText = ""
        
        Object.values(c).forEach(value =>{
            elText += value + " ";
        });
        el.textContent = elText
        list.appendChild(el);
    });
    section.appendChild(list);
    main.appendChild(section);
}

function addOneElementSection(city, headerText){
    var main = document.getElementById("main")
    var section = document.createElement("section");
    var header = document.createElement("h1");
    header.textContent = headerText;
    section.appendChild(header);
    var p = document.createElement('p')
    pText = ""
    Object.values(city).forEach(value =>{
        pText += value + " ";
    });
    p.textContent = pText;
    section.appendChild(p);
    main.appendChild(section);
}