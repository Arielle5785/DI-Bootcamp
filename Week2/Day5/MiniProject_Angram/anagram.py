# This will contain all the UI(user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

from anagram_checker import AnagramChecker
class Menu:
        def __init__(self):
            pass

        def menu_select(self):
            keep_asking =True
            while keep_asking:
                word = input('Enter an english word. Type exit, to check out : ').upper()
                if word == 'EXIT':
                    keep_asking = False
                else:
                    if len(word.split(' ')) > 1:
                         print('We are dealing only with one word. Try again.')
                    elif not  word.isalpha():
                        print('We are only dealing with alphabetic characters, no digits, nor special characters. Try again.')    
                    else:
                        # If the word is valid, the code fetches and displays anagrams using
                        strip_word = word.strip() 
                        anagram_checker = AnagramChecker()
                        if anagram_checker.is_valid_word(strip_word):
                            anagrams = anagram_checker.get_anagrams(strip_word)
                            print(f''' 
                                    Your word is {strip_word}.
                                    This is a valid English word.
                                    Anagrams for your word: {anagrams if anagrams else 'No anagrams found'}''')
                        else:
                              print(f'{word} is not a valid English word.')  

if __name__ =='__main__': #block ensures that menu_select only runs when the script is executed directly.
     menu = Menu()
     menu.menu_select()
