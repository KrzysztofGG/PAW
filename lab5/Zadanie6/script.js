

fetch('user.json')
    .then(res => res.json())
    .then(res =>{
        people = res;
        people.forEach(p =>{


            console.log(p)
            // p.forEach(x => console.log(x))


        })

    });

function createPersonBlock(person){
    main = document.findElementById('main');
    var block = document.createElement('div');

    var name = document.createElement('p')
    name.innerHTML = person.firstName + " " + person.lastName;
    block.appendChild(name);

    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    privateData = document.createElement('span');
    privateData.innerHTML = person.email + "\n" +
     person.phone + "\n" + person.Address;
}