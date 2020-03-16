const button = document.getElementById("lib-button");
button.addEventListener('click', makeMadLib => {
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let name = document.getElementById("person").value;
    const lib = `Once upon a time there was a ruler named ${name} who was in charge of all ${noun}. The people had mixed feelings about ${name} because ${name} was very ${adjective}.`
    document.getElementById("story").innerHTML = lib
});