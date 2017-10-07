function get_random_card(){
    var cards = [ "Spade", "Heart", "Diamond", "Club"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    card_selection = Math.ceil(Math.random() * 3);
    number_selection = getRandomInt(0, 13);
    return [ number_selection, cards[card_selection]]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generate_cards(number_of_cards){
    var card_list = [];
     for(var i = 0; i < number_of_cards; i++){
         card_list.push(get_random_card())
     }
     return card_list;
}
console.log(generate_cards(5));