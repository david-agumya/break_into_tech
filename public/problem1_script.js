/**
 * Created by dagumya on 7/17/17.
 */
$( document ).ready(function() {
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

    var randomNumberBetween0and99 = Math.floor(Math.random() * 100);

    $('#submit_guess').click(function(){
        // event.preventDefault();
        var user_guess = $('#guess').val();
        user_guess = parseInt(user_guess,10);
        if(user_guess > 99 || user_guess < 0 ){
            return alert("Please enter a number between 0 and 99")
        }else{
            // Now we need to be evaluate the values
            if(user_guess > randomNumberBetween0and99 ){
                $('#guess_feedback').text('Your guess is too high!!')
            }else if(user_guess < randomNumberBetween0and99) {
                $('#guess_feedback').text('Your guess is too low!!')
            }else if(user_guess === randomNumberBetween0and99){
                $('#guess_feedback').text('You got the right guess!!')
            }else{
                $('#guess_feedback').text('Please provide a valid number guess')
            }
        }
    });

    $('#reset_guess').click(function(){
        event.preventDefault();
        $('#guess').val('');
        randomNumberBetween0and99 = Math.floor(Math.random() * 100);
        $('#guess_feedback').text('');
        $('#random_number p').remove();
        $(".expanation_text").hide();
        $(".solution").hide();
        $(".explanation button").show();
        $(".code_solution button").show();

    });

    $('#reveal_guess').click(function(){
        event.preventDefault();
        $('#random_number p').remove();
        $('#random_number').append("<p class='lead'> The random number is " + randomNumberBetween0and99.toString() + " </p>")
    });
});
