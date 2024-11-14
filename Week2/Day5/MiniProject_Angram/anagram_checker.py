# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.

import random
import itertools

class AnagramChecker:
    def __init__(self):
        with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day5\\MiniProject_Angram\\glossary.txt', 'r+', encoding='utf-8') as file:
            self.glossary = file.read().split()
        
#function or method that verifies wether the word is valid or not.
    def is_valid_word(self, word):
        if word.upper() in self.glossary:
            # print(f'{word} is a valid word.')
            return True
        else:
            # print(f'{word} is not a valid word.')
            return False
        
#method that provides the anagrams based on the given word
#check first wether the word is valid or not. Even thou any words can do a a valid word.
    def get_anagrams(self, word):
        if not self.is_valid_word(word):
            print('Invalid word provided')
        else:
            list_a = []
            list_b = []
            for p in itertools.permutations(word):
               list_a.append(''.join(p))
            for perm in list_a:
               if self.is_valid_word(perm):
                   list_b.append(perm)
            list_b.remove(word)
        return list_b
anagram_checker = AnagramChecker()
# word = input('Enter an english word, we\'ll check wether it is valid or not: ')
word = 'silent'
word2 = 'tree'
word3 = 'GINGER'
# anagram_checker.is_valid_word(word1)
# anagram_checker.is_valid_word(word2)
# anagram_checker.is_valid_word(word3)
print(anagram_checker.get_anagrams(word))

