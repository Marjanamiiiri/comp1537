deleteButton = "<button class = 'delButton'> Delete </button>"

function hide_(){
    console.log("hide() calleds")
    $(this).parent().remove();
}

function add_operation() {
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(

        "Result of " +
        num1 +
        " + " +
        num2 +
        " = " +
        (num1 + num2))
    hello_ =
        num1 +
        " + " +
        num2 +
        " = " +
        (num1 + num2 );

    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='add'>" +
        hello_ +
        deleteButton +
        "</div>"
    );

}

function sub_operation() {
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "Result of " +
        num1 +
        " - " +
        num2 +
        " = " +
        (num1 - num2))
    hello_ =
        num1 +
        " - " +
        num2 +
        " = " +
        (num1 - num2);
    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='sub'>" +
        hello_ +
        deleteButton +
        "</div>"
    );

}

function multiply_operation() {
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "Result of " +
        num1 +
        " * " +
        num2 +
        " = " +
        (num1 * num2))
    hello_ =
        num1 +
        " * " +
        num2 +
        " = " +
        (num1 * num2);

    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='times'>" +
        hello_ +
        deleteButton +
        "</div>"
    );

}

function dev_operation() {
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(

        "Result of " +
        num1 +
        " * " +
        num2 +
        " = " +
        (num1 / num2))
    hello_ =
        num1 +
        " / " +
        num2 +
        " = " +
        (num1 / num2);

    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='dev'>" +
        hello_ +
        deleteButton +
        "</div>"
    );

}




function dis() {
    console.log("setup () got called")
    let font_size = parseInt($("#history").css("font-size"));
    $('#history').css("font-size", font_size - 1);
}

function increace() {
    console.log("setup () got called")
    let font_size = parseInt($("#history").css("font-size"));
    $('#history').css("font-size", font_size + 1);
}


function setup() {
    console.log("setup () got called")
    $("#add").click(add_operation)
    $("#sub").click(sub_operation)
    $("#mul").click(multiply_operation)
    $("#dev").click(dev_operation)
    $("#in").click(increace)
    $("#de").click(dis)
    $("body").on("click", ".delButton", hide_)
}

jQuery(document).ready(setup);