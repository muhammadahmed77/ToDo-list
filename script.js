var task = [];

function doit(){


if (input == "") {
    return ""
    
}

var input = document.getElementById("inp").value

task.push(input)

localStorage.setItem("mainArray" , JSON.stringify(task))

    var output = "";

    for (var i = 0; i < task.length; i++) {

        output = output + (i + 1) + ". " + task[i] + "<br>";

document.getElementById("list").innerHTML = output
    }

}

var saved = localStorage.getItem("mainArray");

if (saved !== null) {

    task = JSON.parse(saved);

    // var output = "";

        for (var i = 0; i < task.length; i++) {

        output = output + (i + 1) + ". " + task[i] + "<br>";

}
}


function clearbtn() {
     document.getElementById("list").innerHTML = "";
     task =[]
     localStorage.clear()
    }