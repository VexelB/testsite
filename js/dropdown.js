function clear(e) {
    e.style.color = "rgba(31, 32, 65, 0.25)"
    e.style.borderColor = "rgba(31, 32, 65, 0.25)"
};

function guestcount(e) {
    let temps = e.parentNode.parentNode.childNodes;
    let count = 0;
    for (let i = 0; i < temps.length-1; i++) {
        count += parseInt(temps[i].lastChild.childNodes[1].innerText);
    }
    if (count > 0) {
        if ((count != 11)&&(count % 10 === 1)) {
            e.parentNode.parentNode.previousSibling.firstChild.innerText = count + " гость"
        }
        else if ((count % 10 < 5)&&(count % 10 > 1)&&((count > 20)||(count < 10))) {
            e.parentNode.parentNode.previousSibling.firstChild.innerText = count + " гостя"
        }
        else {
            e.parentNode.parentNode.previousSibling.firstChild.innerText = count + " гостей"
        }
    }
    else {
        e.parentNode.parentNode.previousSibling.firstChild.innerText= "Сколько гостей";
        let q = e.parentNode.parentNode.childNodes;
        q[q.length-1].style["justify-content"] = "flex-end";
        q[q.length-1].firstChild.style.display = "none";
    }
};
function count(e) {
    let temps = e.parentNode.parentNode.childNodes;
    let count = [];
    let tstr = [];
    let str=""
    for (let i = 0; i < temps.length-1; i++) {
        count.push();
        tstr.push(temps[i].lastChild.childNodes[0]);
        str += temps[i].lastChild.childNodes[1].innerText + ' '+temps[i].childNodes[0].innerText.toLowerCase()
        if (i != temps.length-2) {
            str += ', '
        }
    }
    e.parentNode.parentNode.previousSibling.firstChild.innerText= str;
};


let mins = document.querySelectorAll(".dropdowncont .min");
let maxs = document.querySelectorAll(".dropdowncont .max");

for (let i = 0; i< mins.length; i++) {
    mins[i].addEventListener('click', e => {
        let temp = parseInt(e.target.nextSibling.innerText);
        if (temp > 0){
            e.target.nextSibling.innerText = --temp
        }
        if (temp === 0) {
            
            clear(mins[i]);
        }
    });
    maxs[i].addEventListener('click', e => {
        let temp = parseInt(e.target.previousSibling.innerText);
        e.target.previousSibling.innerText = ++temp
        mins[i].style.color = "rgba(31, 32, 65, 0.5)"
        mins[i].style.borderColor = "rgba(31, 32, 65, 0.5)"
        let q = e.target.parentNode.parentNode.parentNode.childNodes;
        q[q.length-1].style["justify-content"] = "space-between";
        q[q.length-1].firstChild.style.display = "flex";
    });
}

document.querySelectorAll(".dropdown-content .err").forEach(e => e.addEventListener("click", e => {
    let temp = e.target.parentNode.parentNode.childNodes;
    for (let i = 0; i<temp.length-1; i++) {
        temp[i].lastChild.childNodes[1].innerText = "0";
        clear(temp[i].lastChild.firstChild);
    }
    guestcount(e.target);
}));
document.querySelectorAll(".dropguests .suc").forEach(e => e.addEventListener("click", e => guestcount(e.target)));
document.querySelectorAll(".drop .suc").forEach(e => e.addEventListener("click", e => count(e.target)));