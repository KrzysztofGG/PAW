

fetch('user.json')
    .then(res => res.json())
    .then(res =>{
        people = res;
        people.forEach(p =>{


            console.log(p)
            createPersonBlock(p);


        })

    });

function createPersonBlock(person){
    main = document.getElementById('main');
    var block = document.createElement('div');

    var name = document.createElement('p')
    name.innerHTML = person.firstName + " " + person.lastName;
    block.appendChild(name);

    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', 'private')
    
    var privateData = document.createElement('label');
    privateData.setAttribute('for', 'private')

    var address = `${person.Address.Street} ${person.Address.City} ${person.Address.State}`
    privateData.innerHTML = person.email + "<br>" +
     person.phone + "</br>" + address;
    block.appendChild(check);
    block.appendChild(privateData);

    main.appendChild(block);
}