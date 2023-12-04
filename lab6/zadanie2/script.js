
function isNameValid(){
    return document.getElementById("name").checkValidity();
}
function isPhoneValid(){
    return document.getElementById("phone").checkValidity();
}

document.getElementById("add").onclick = () =>{
    var formData = new FormData(document.querySelector('form'))

    if(!isNameValid()){
        console.log("Invalid Name")
        return;
    }
    if(!isPhoneValid()){
        console.log("Invalid Phone")
        return;
    }
    var name = formData.get("name");
    var phone = formData.get("phone");

    var section = document.createElement("section")

    var section_l = document.createElement("div");
    section_l.classList.add('section-left');

    var section_l_header = document.createElement('h4');
    section_l_header.textContent = name;
    var section_l_p = document.createElement('p');
    section_l_p.textContent = phone;

    section_l.appendChild(section_l_header);
    section_l.appendChild(section_l_p);

    section.appendChild(section_l);

    var section_r = document.createElement("div");
    section_r.classList.add('section-right');
    var trash = document.createElement("i");
    trash.classList.add('fa');
    trash.classList.add('fa-trash-o');
    section_r.appendChild(trash);
     
    section_r.addEventListener('click', () => {
        section.remove();
    })
    section.appendChild(section_r)

    document.getElementById("entries").appendChild(section);
    console.log("Address added");
}

