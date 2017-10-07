/**
 * Created by dagumya on 7/17/17.
 */
$(".expanation_text").hide();
$(".solution").hide();
$(".explanation").append("<button class='btn btn-primary'> Explanation! </button>");
$(".code_solution").append("<button class='btn btn-primary'> Python Code! </button>");
$(".explanation button").click(function(){
    $(this).prev().show();
    $(this).hide();
});
$(".code_solution button").click(function(){
    $(this).prev().show();
    $(this).hide();
});



$('#calc_addition').click(function () {
    var val1 = parseInt($('#calc_val_1').val());
    var val2 = parseInt($('#calc_val_2').val());
    returnDiv = ".answer_text";
    processInput(val1, val2, 'add', returnDiv)


});
$('#calc_subtract').click(function () {
    var val1 = parseInt($('#calc_val_1').val());
    var val2 = parseInt($('#calc_val_2').val());
    returnDiv = ".answer_text";
    processInput(val1, val2, 'subtract', returnDiv)

});
$('#calc_divide').click(function () {
    var val1 = parseInt($('#calc_val_1').val());
    var val2 = parseInt($('#calc_val_2').val());
    returnDiv = ".answer_text";
    processInput(val1, val2, 'divide', returnDiv)

});
$('#calc_multiply').click(function () {
    var val1 = parseInt($('#calc_val_1').val());
    var val2 = parseInt($('#calc_val_2').val());
    returnDiv = ".answer_text";
    processInput(val1, val2, 'multiply', returnDiv)

});

$('#calc_reset').click(function () {
    $('#calc_val_1').val('');
    $('#calc_val_2').val('');
    $('.answer_text').text('');
    $(".expanation_text").hide();
    $(".solution").hide();
    $(".explanation button").show();
    $(".code_solution button").show();

});

var processInput = function(value1, value2, choice, returnDiv){

    switch (choice) {
        case 'add':
            var result = value1 + value2;
            $(returnDiv).text(result.toString());
            break;
        case 'subtract':
            var result = value1 - value2;
            $(returnDiv).text(result.toString());
            break;
        case 'divide':
            if (value2 === 0){
                return alert("You cannot divide by 0")
            }
            var result = value1 / value2;
            $(returnDiv).text(result.toString());
            break;
        case 'multiply':
            var result = value1 * value2;
            $(returnDiv).text(result.toString());
            break;
        default:
           alert('Sorry, i can only add, subtract, divide, and multiply');
    }

};

var validateInput = function (value1, value2) {

    if(typeof(value1) !==  'number' || typeof(value2) !== 'number' ){
        return alert("Please enter a number in the value fields")
    }

};