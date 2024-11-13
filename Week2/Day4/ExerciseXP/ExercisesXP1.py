# exercise 1
import random


def create_list():  # when the file is read, return a list
    with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day4\\ExerciseXP\\list_words.txt', 'r+') as f:
        content = f.read()
        words = content.split()
    return words
# print(create_list())


def get_randon_sentence(length):
    words2 = create_list()
    random_words = random.sample(words2, length)
    sentence = ' '.join(random_words)
    return sentence


def main():
    print('''
          this code is meant to open an external file, stored in the same folder, called list_words.txt.
          from that file, the code creates a list of words, that we split. The goal is to ask the user to enter a number. 
          This number is the number of words picked randomly in the list. then the code join all those words and make a sentence.
          As it is random, it is  gibberish or jibber-jabber talk.''')
    try:
        length2 = int(
            input('Enter the number of words words in the sentence. from 2 to 20: '))
        if 2 <= length2 <= 20:
            return (get_randon_sentence(length2))
        else:
            print('We required to enter only numbers between 2 & 20.')
    except ValueError:
        print('We required a code that uses only digits, and only between 2 and 20')


print(main())
