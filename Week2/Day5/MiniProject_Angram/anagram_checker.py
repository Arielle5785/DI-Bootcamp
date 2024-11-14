# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.

import random
import itertools

class AnagramChecker:
    def __init__(self, glossary):
        with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day5\\glossary.txt', 'r+', encoding='utf-8') as file:
            self.glossary = list(map(str.strip,file.readlines()))
        
#function or method that verifies wether the word is valid or not.
    def is_valid_word(self, word):
        if word.lower() in map(str.lower, self.glossary):
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
            return[]
        word = word.lower()
        anagrams = set(''.join(p) for p in itertools.permutations(word) if ''.join(p).lower() != word)
        valid_anagrams = [anagram for anagram in anagrams if self.is_valid_word(anagram)]

        print(f'Valid anagrams of {word} are  {valid_anagrams}')
        return valid_anagrams



    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())


anagram_checker = AnagramChecker('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day5\\glossary.txt')
# word = input('Enter an english word, we\'ll check wether it is valid or not: ')
word = 'la'
word2 = 'tree'
word3 = 'GINGER'
# anagram_checker.is_valid_word(word1)
# anagram_checker.is_valid_word(word2)
# anagram_checker.is_valid_word(word3)
anagram_checker.get_anagrams(word)
