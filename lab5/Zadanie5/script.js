
const names = ['Grzegorz', 'Wiktoria', 'Mateusz', 'Ania', 'Sandra', 'Kasia', 'Izabela', 'Weronika'];

let  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];


const countries = [
    { name: 'Nigeria', continent: 'Africa'},
    { name: 'Nepal', continent: 'Asia'},
    { name: 'Angola', continent: 'Africa'},
    { name: 'Poland', continent: 'Europe'},
    { name: 'Kenya', continent: 'Africa'},
    { name: 'Greece', continent: 'Europe'},
	{ name: 'France', continent: 'Europe'},
	{ name: 'China', continent: 'Asia'}
]

let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"}, 
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

let duplicateName = ['John', 'Paul', 'George', 'Ringo', 'Paul', 'Paul', 'Ringo'];


// 1. Na stronach internetowych wyświetlają się nazwy zawierające znak "r".  ( tablica names)
function namesWithR(){
    var list = document.getElementById('app');
    let namesR = names.filter(x => x.includes('r'));

    namesR.forEach(name =>{
        el = document.createElement('li')
        el.innerHTML = name;
        list.appendChild(el);
    })
}
namesWithR();
// 2. sprawdź czy tablica zawiera tylko elementy mniejsze niż 9. wynik wyswietl na stronei w sekcji 2
    //   sprawdź, czy tablica zawiera jakieś elementy mniejsze niż 6 wyników. wynik wyświetl w przeglądarce w sekcji 2
    //   inkrementuj wszystkie elementy w tablicy numbers. Nastepnie stwórz nowa tablice zawierajaca tylko elementy nieparzyste. 
    //   Nesteopnie Oblicz sumę wszystkich elementów z tablicy. Wynik wyswietl w sekcji 2
function areAllNumbersLessThan9(){
    let allUnderNine = numbers.every(el => el < 9);
    par = document.getElementById('numbers1')
    par.innerHTML = allUnderNine;
}
areAllNumbersLessThan9()

function areAnyNumbersLessThan6(){
    let anyUnderSix = numbers.some(el => el < 6);
    par = document.getElementById('numbers2')
    par.innerHTML = anyUnderSix;
}
areAnyNumbersLessThan6()

function numberOperations(){
    numbers = numbers.map(el => el+1);
    let newNumbers = numbers.filter(el => el%2 === 1);

    sum = 0;
    newNumbers.forEach(el => sum += el);
    par = document.getElementById('numbers3')
    par.innerHTML = sum;
}
numberOperations()

// 3. Na stronach internetowych wyświetlają się kraje z Europy
function europeCountries(){
    var list = document.getElementById('europe');
   
    countries.filter(c=> c['continent'] === 'Europe').forEach(c=>{
        el = document.createElement('li')
        el.innerHTML = c['name'];
        list.appendChild(el);
    })
    
}
europeCountries()

// 4. Znajdź nazwiska wszystkich osób, które mają e-maile „replicant.io”. wyświetlanie wyników na stronach internetowych.
function chooseEmails(){
    var list = document.getElementById('emails');

    people.filter(p => p.email.endsWith('replicant.io')).forEach(p=>{
        el = document.createElement('li');
        lastName = p.name.split(' ')
        if (lastName.length > 1)
            lastName = lastName[1]
        else
            lastName = lastName[0]
        
        el.innerHTML = lastName
        list.appendChild(el);
    })
}
chooseEmails()

// 5. usuwanie zduplikowanych wartości z tablicy nazwaduplikatu

function removeDuplicates(){
    unique = duplicateName.filter((item, pos) => duplicateName.indexOf(item) == pos);
    var list = document.getElementById('unique');
    unique.forEach(u =>{
        el = document.createElement('li');
        el.innerHTML = u;
        list.appendChild(el);
    })
}
removeDuplicates()