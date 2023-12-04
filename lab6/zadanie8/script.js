let countries = [];
let subregions = [];

let visibleCountries = [];

let list = document.getElementById('list');
const minPopulationInput = document.getElementById("min-population");
const maxPopulationInput = document.getElementById("max-population");

const minAreaInput = document.getElementById("min-area");
const maxAreaInput = document.getElementById("max-area");

const subregionCheckbox = document.getElementById('subregions');
const reverseCheckbox = document.getElementById('reverse');

const selectSort = document.getElementById('sort-by');
let pagination = document.getElementById('pagination');

let groupBySubregions = subregionCheckbox.checked;
let dataPerPage = 40;
let numberOfPages = 0;
let currentPage = 0;


preparePage();


function preparePage(){
    
    selectSort.addEventListener('change', function(){sortContent(selectSort.value)});
    selectSort.addEventListener('change', showData);

    reverseCheckbox.addEventListener('change', function(){sortContent(selectSort.value); showData()});

    subregionCheckbox.addEventListener('click', () => {
        groupBySubregions = subregionCheckbox.checked;
        sortContent(selectSort.value); 
        createPagination();
        showData();
    });

    setupFilters();

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(readJson);
}


function setupFilters(){

    for (const el of document.getElementsByClassName('filter')){
        el.addEventListener('change', checkFilters);
        el.addEventListener('change', countSubregionValues);
        el.addEventListener('change', function(){sortContent(selectSort.value)});
        el.addEventListener('change', showData);
    }
}


function readJson(json){
    const subs = {}
    for (const country of json){
        let name_ = country.name.common;
        let capital_ = (typeof country.capital != 'undefined') ? country.capital[0] : '-';
        let population_ = country.population;
        let area_ = country.area;

        let newCountry = {
            name: name_,
            capital: capital_,
            population: population_,
            area: area_,
            visible: true
        }
        countries.push(newCountry);

        if (Object.hasOwn(subs, country.subregion)){
            subs[country.subregion].list.push(newCountry);
        }
        else{
            subs[country.subregion] = {list: [newCountry]};
        }
    }

    for (const s in subs){
        subregions.push({name: s, list: subs[s].list, visible: true, relatedCountries: false});
    }

    checkFilters();
    countSubregionValues();
    sortContent('name');
    showData();
}

function countSubregionValues(){
    for (const subId in subregions){
        for (const property of ['area', 'population']){
            let sum = 0;

            for(const country of subregions[subId].list){
                if(country.visible){
                    sum += country[property];
                    
                }
            }
            subregions[subId][property] = sum;
        }
    }
}

function showData(){
   
    list.innerHTML = "";
    if(groupBySubregions)
        showSubregions();
    else
        showCountries();
}

function showCountries(){
    for(let i = (currentPage * dataPerPage); i < Math.min(visibleCountries.length, (currentPage+1) * dataPerPage); ++i){
        country = visibleCountries[i];
        showOneCountry(country, i);
    }

}

function showOneCountry(country){
    let countryData = document.createElement('div');
    countryData.classList.add('data', 'row');

    for( const property of ['name', 'capital', 'area', 'population']){
        let el = document.createElement('p');
        el.classList.add('col', 'data-p');
        el.innerHTML = country[property];

        countryData.appendChild(el);
    }
    list.appendChild(countryData);
}

function showSubregions(){

    for (const subregion of subregions){

        if (subregion.visible == false)
            continue;

        let subregionData = document.createElement('div');
        subregionData.classList.add('data', 'row', 'text-white', 'bg-primary', 'my-4');
        
        for (const property of ['name', 'e', 'area', 'population']){
            let el = document.createElement('p');
            el.classList.add('col', );
            if (property !== 'e')
                el.innerHTML = subregion[property];
            else
                el.innerHTML = '';
            subregionData.appendChild(el);
        }

        subregionData.addEventListener('click', function(){
            subregion.relatedCountries = !subregion.relatedCountries; 
            showData();
        });
        list.appendChild(subregionData);

        if(subregion.relatedCountries){
            subregionData.classList.add('bg-info');
            for (const country of subregion.list)
                if (country.visible)
                    showOneCountry(country)
        }
    }
}

function sortContent(property){
    let reverse = reverseCheckbox.checked;
    if(groupBySubregions)
        sortSubregions(property, reverse);
    else
        sortCountries(property, reverse);

}
function sortCountries(property, reverse){
    if (['name', 'capital'].includes(property))
        visibleCountries.sort(function(a, b){
            return reverse ? b[property].localeCompare(a[property]) : a[property].localeCompare(b[property])
        })
    else if (['population', 'area'].includes(property))
    visibleCountries.sort(function(a, b){
            return reverse ? a[property] - b[property] : b[property] - a[property]
        })
}

function sortSubregions(property, reverse){

    if (['name', 'capital'].includes(property)){
        subregions.sort(function(a, b){
            return reverse ? b['name'].localeCompare(a['name']) : a['name'].localeCompare(b['name']);
        })
        for (const subregion of subregions){
            subregion.list.sort(function(a, b){
                return reverse ? b[property].localeCompare(a[property]) : a[property].localeCompare(b[property]);
            })
        }
    }
    else if (['area', 'population'].includes(property)){
        subregions.sort( (a, b) => 
            reverse ? a[property] - b[property] : b[property] - a[property]);
        
        for (const subregion of subregions){
            subregion.list.sort( (a, b) =>
                reverse ? a[property] - b[property] : b[property] - a[property]);
        }
    }
}

function createPagination(){
    pagination.innerHTML = '';
    if(!groupBySubregions){

        for(let i=0; i<numberOfPages; ++i){
            var p = document.createElement('p');
            p.classList.add('border', 'border-info', 'bg-primary', 'text-white')
            p.textContent = (i+1);
            
            p.addEventListener('click', function(){
                currentPage = i;
                createPagination();
                showData();
            })
            if (i == currentPage)
                p.classList.add("selected");
            pagination.appendChild(p);
        }
    }
}


function checkFilters(){

    visibleCountries.length = 0
    const minArea = minAreaInput.value * 1000;
    const maxArea = (maxAreaInput.value == 0) ? Infinity : maxAreaInput.value * 1000;

    const minPopulation = minPopulationInput.value * 1000;
    const maxPopulation = (maxPopulationInput.value == 0) ? Infinity : maxPopulationInput.value * 1000;


    for (sub of subregions){
        sub.visible = false;
        for (const country of sub.list){
            if (country.area >= minArea && country.area <= maxArea &&
                    country.population >= minPopulation && country.population <= maxPopulation){
                sub.visible = true;
                country.visible = true;
            }
            else{
                country.visible = false;
            }
        }
    }

    for (country of countries){
        if (country.area >= minArea && country.area <= maxArea &&
            country.population >= minPopulation && country.population <= maxPopulation)
            visibleCountries.push(country);
    }

    numberOfPages = Math.ceil(visibleCountries.length / dataPerPage);

    createPagination();
}