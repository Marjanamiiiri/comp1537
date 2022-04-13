received_data = null;

function process_res(data) {
    received_data = data
    console.log(data)

    result = ""


    for (i = 0; i < data.length; i++) {
        result += "<table>"
        result += "<tr>"

        for (field in data[i]) {
            result += "<th>"
            result += field
            result += "</th>"
        }
        result += "</tr>"
        result += "<tr>"
        for (field in data[i]) {
            result += "<td>"
            if (field == "loves") {
                result += "<ul>"
                for (j = 0; j < data[i]["loves"].length; j++) {
                    result += "<li>"
                    result += data[i][field][j]
                    result += "</li>"
                }
                result += "</ul>"
            } else {
                result += data[i][field]
            }
            result += "</td>"
        }

        result += "<tr>"
        result += "</table>"
    }

    $("#result").html(result);
}


function resetPage() {
    $('#unicornNameFilter').prop('checked', false);
    $('#unicornWieghtFilter').prop('checked', false);
}

function filter_f() {
    name_ = "unchecked"
    weight_ = "unchecked"

    if ($('#unicornNameFilter').is(":checked")) {
        name_ = "checked"
    }
    if ($('#unicornWieghtFilter').is(":checked")) {
        weight_ = "checked"
    }

    tmp = received_data.map(
        (ob) => {
            result = []
            if (name_ == "checked")
                result.push(ob["name"])

            if (weight_ == "checked")
                result.push(ob["weight"])

            return result
        }
    )
    $("#result").html("<pre>" + tmp + "</pre>");
}

function findByWeight() {
    $.ajax({
        url: 'http:/localhost:8000/findByWeight',
        type: 'POST',
        data: {
            "lowerWeight": $("#lowerWeight").val(),
            "higherWeight": $("#higherWeight").val()
        },
        success: process_res
    })
    resetPage();
    $("#filters").show()
}

function findUnicornByName() {
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val())
    var x = document.getElementById("box");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    // $.ajax({
    //     url: "http:/localhost:8000/findUnicornByName",
    //     // url: "http://localhost:8000/findUnicornByName",
    //     type: "POST",
    //     data: {
    //         "unicornName": $("#unicornName").val()
    //     },
    //     success: process_res
    // })
    resetPage();
    $("#filters").show()
}

function findUnicornByFood() {
    appleIsChecked = "unchecked"
    carrotIsChecked = "unchecked"

    if ($('#carrot').is(":checked"))
        carrotIsChecked = "checked"

    if ($('#apple').is(":checked"))
        appleIsChecked = "checked"


    $.ajax({
        url: "http://localhost:8000/findUnicornByFood",
        type: 'POST',
        data: {
            "appleIsChecked": appleIsChecked,
            "carrotIsChecked": carrotIsChecked
        },
        success: process_res
    })
    resetPage();
    $("#filters").show()
}

function x(){
    console.log("worked")
    $("#right").text("<br>625281623ac52a934bef478a </ul>Raleigh 2005-05-03T07:57:00Z apple sugar 421 m 2")
}

function setup() {
    $("#findUnicornByWeight").click(findByWeight)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#findUnicornByName").click(findUnicornByName)
    $("#filter").click(filter_f)
    $("#filters").hide()
    $("#Raleigh").click(x)
}

$(document).ready(setup)