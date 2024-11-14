# This will contain all the UI(user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

from anagram_checker import AnagramChecker
class Menu(AnagramChecker):
        def __init__(self):
            self.anagram_checker = AnagramChecker('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day5\\glossary.txt')
        def menu_select(self):
            keep_asking =True
            while keep_asking:
                word = input('Enter an english word. Type exit, to check out : ').lower()
                if word == 'exit':
                    keep_asking = False
                else:
                    keep_asking = True
                    if ' ' in word:
                        print('We are dealing only with one word. Try again.')
                    elif not  word.isalpha():
                        print('We are only dealing with alphabetic characters, no digits, nor special characters. Try again.')
                    else:
                        # If the word is valid, the code fetches and displays anagrams using
                        if self.anagram_checker.is_valid_word(word):
                              anagrams = self.anagram_checker.get_anagrams(word)
                              print(f''' 
                                    Your word is {word}.\n
                                    This is a valid English word.\n
                                    Anagrams for your word: {anagrams if anagrams else 'No anagrams found'}''')
                        else:
                              print(f'{word} is not a valid English word.')  

if __name__ =='__main__': #block ensures that menu_select only runs when the script is executed directly.
     menu = Menu()
     menu.menu_select()
