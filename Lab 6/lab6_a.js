function add_operation() {
    console.log("setup () got called")
        num1 = parseInt(jQuery("#num1").val());
        num2 = parseInt(jQuery("#num2").val());
        jQuery('#p1').html(
            "<div class='box3'>" +
            "Result: " + 
            num1+
            " + "+
            num2+
            " = "+
            (num1+num2))
            hello_ = 
            num1+
            " + "+
            num2+
            " = "+
            (num1+num2);
            "</div>"
            old = jQuery('#history').html()
            jQuery('#history').html(old +
                "<div class='a'>" +
                hello_ +
                "</div>"
            );
    
}
function sub_operation(){
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "<div class='box3'>" +
        "Result: " + 
        num1+
        " - "+
        num2+
        " = "+
        (num1-num2))
        hello_ = 
        num1+
        " - "+
        num2+
        " = "+
        (num1-num2);
        "</div>"
        old = jQuery('#history').html()
        jQuery('#history').html(old +
            "<div class='y'>" +
            hello_ +
            "</div>"
        );
    
}
function multiply_operation(){
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "<div class='box3'>" +
        "Result: " + 
        num1+
        " * "+
        num2+
        " = "+
        (num1*num2))
    hello_ = 
    num1+
    " * "+
    num2+
    " = "+
    (num1*num2);
    "</div>"
    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='x'>" +
        hello_ +
        "</div>"
    );
    
}
function dev_operation(){
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "<div class='box3'>" +
        "Result: " + 
        num1+
        " * "+
        num2+
        " = "+
        (num1*num2))
    hello_ = 
    num1+
    " / "+
    num2+
    " = "+
    (num1/num2);
    "</div>"
    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='blue'>" +
        hello_ +
        "</div>"
    );
    
}

function time_operation(){
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "<div class='box3'>" +
        "Result: " + 
        num1+
        " / "+
        num2+
        " = "+
        (num1/num2))
        "</div>"
    hello_ = 
    num1+
    " ^ "+
    num2+
    " = "+
    (num1**num2);

    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='d'>" +
        hello_ +
        "</div>"
    );

}
function per_operation(){
    console.log("setup () got called")
    num1 = parseInt(jQuery("#num1").val());
    num2 = parseInt(jQuery("#num2").val());
    jQuery('#p1').html(
        "<div class='box3'>" +
        "Result: " + 
        num1+
        " % "+
        num2+
        " = "+
        (num1/num2))
        "</div>"
    hello_ = 
    num1+
    " / "+
    num2+
    " = "+
    (num1%num2);

    old = jQuery('#history').html()
    jQuery('#history').html(old +
        "<div class='c'>" +
        hello_ +
        "</div>"
    );

}


function setup() {
    console.log("setup () got called")
    jQuery("#add").click(add_operation) 
    jQuery("#sub").click(sub_operation) 
    jQuery("#mul").click(multiply_operation) 
    jQuery("#dev").click(dev_operation) 
    $("#per").click(per_operation)
    $("#time").click(time_operation)
}
jQuery(document).ready(setup);