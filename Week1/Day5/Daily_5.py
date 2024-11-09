# challenge1 : sorting
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without, hello, bag, world
# Then, the output should be: bag, hello,without,world

# seq_1 = 'without, hello, bag, world'
# words_sorted = sorted([words.strip() for words in seq_1.split(',')])
# print(', '.join(words_sorted))

# Challenge 2: Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word(e.g. O’Connor is 8 characters long).
# Examples
# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

longest_word = "Forgetfulness is by all means powerless!"


def find_longest_word(sentence):
    words = sentence.split(' ')  # Split the sentence into words
    print(type(words))
    longest = max(words, key=len)  # Find the longest word by length
    print(type(longest))
    return longest


print(find_longest_word(longest_word))
