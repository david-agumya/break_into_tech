# Python program to shuffle a deck of card using the module random and draw 5 cards

#Instructions: This program deals one hand of 5 cards. How can you add to it to deal 4 hands of cards?

# import modules
import itertools, random, os
from sys import platform

# make a deck of cards
deck = list(itertools.product(range(1,14),['Spade', 'Heart', 'Diamond', 'Club']))

def clear_screen():
    if platform == 'linux' or platform == 'linux2' or platform == 'darwin':
        os.system('clear')
    else:
        os.system('cls')

while True:
    response = input("Would you like to draw a set of 5 cards ? [Y/N] ")
    response = response.lower()
    if response == 'y':
        # shuffle the cards
        random.shuffle(deck)
        # draw five cards
        clear_screen()
        print("You got:")
        print("-" * 50 )
        for i in range(5):
            print(deck[i][0], "of", deck[i][1])
        print("-" * 50 )
    elif response == 'n':
        break
    else:
        print("Please enter [Y] for yes or [N] to quit the program")

print("-" * 100 )
print("Thank you for using our random draw program.")
print("Take a look at the source files, How would you change the code to get more than five cards")
print("-" * 100 )
