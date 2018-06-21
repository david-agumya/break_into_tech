/**
 * Created by dagumya on 7/17/17.
 */
$(".expanation_text").hide();
$(".solution").hide();
$(".explanation").append("<button class='btn btn-primary explanation-btn'><i class='fas fa-angle-down'></i> Explanation! </button>");
$(".code_solution").append("<button class='btn btn-primary code-btn'><i class='fas fa-angle-down'></i> Python Code! </button>");
$(".explanation-btn").click(function(event){
    //event.preventDefault();
    $(this).prev().show();
    $(".explanation-btn").hide();
});

$(".code-btn").click(function(event){
    $(this).prev().show();
    $(this).hide();
});

$('.close-explanation').click(function (event) {
    // event.preventDefault();
    $(".expanation_text").hide();
    $(".explanation-btn").show();
});

$('.close-code').click(function(event){
    $(".solution").hide();
    $(".code-btn").show();
});


$("#submit_prime").click(function(event){
    event.preventDefault();
    var numberToCheck = $('#prime_input').val();
    numberToCheck = parseInt(numberToCheck,10);
    // console.log(numberToCheck);
    var found = false;
    if (numberToCheck > 1) {
        for(var i = 2; i < numberToCheck; i++){
            if (numberToCheck % i === 0){
                console.log("Not a prime number ");
                found = true;
                break
            }
        }
        if (found){
            $("#prime_feedback").text("Not a Prime number");
        }else{
            $("#prime_feedback").text("Prime number");
        }
    }else{
        $("#prime_feedback").text("Enter a number greater than one");
    }
});

$("#reset_prime").click(function(event){
    event.preventDefault();
    $('#prime_input').val('');
    $('#prime_feedback').text('');
    $(".expanation_text").hide();
    $(".solution").hide();
    $(".explanation button").show();
    $(".code_solution button").show();
})