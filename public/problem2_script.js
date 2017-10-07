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


$("#submit_prime").click(function(){
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
            console.log
            $("#prime_feedback").text(numberToCheck.toString() +": Not a Prime number");
        }else{
            $("#prime_feedback").text(numberToCheck.toString() +": Prime number");
        }
    }else{
        $("#prime_feedback").text("Enter a number greater than one");
    }
});

$("#reset_prime").click(function(){
    event.preventDefault();
    $('#prime_input').val('');
    $('#prime_feedback').text('');
    $(".expanation_text").hide();
    $(".solution").hide();
    $(".explanation button").show();
    $(".code_solution button").show();
})