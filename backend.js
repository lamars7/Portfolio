var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu")

opentab = (tabname) => {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

function closemenu(){
    sidemenu.style.left = "-200px";
}

function openmenu(){
    sidemenu.style.left = "0";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwqL2lpAl8A6tcrQnpveXT8XzyMUZovA4n2yO7oSJweKmPv0Pd4PXbhaot-SHmWPzL2/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})