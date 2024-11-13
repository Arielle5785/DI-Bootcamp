# The goal of the exercise is to create a class that will help you analyze a specific text.
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.
# text_instance = Text('A good book would sometimes cost as much as a good house.')

from collections import Counter


class Text():

    def __init__(self, content):
        self. content = content.lower()
        self.content_list = self.content.split(' ')

    @classmethod
    def from_file(cls):
        with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day4\\DailyChallenge\\the_stranger.txt', 'r', encoding='utf-8') as f:
            book = f.read()
            return cls(book)

    def word_freq(self, word):
        '''
        Returns the frequency of a word in the text.
        If the word is not found, returns None or a meaningful message.
        '''
        frequency = self.content_list.count(word)
        if frequency == 0:
            return f'the word {word} is not present in the text.'
        else:
            return f' The word {word} appears {frequency} times.'

    def most_common_word(self):
        '''
        Returns the most common word in a text.
        '''
        word_counts = Counter(self.content_list)
        max_frequency = max(word_counts.values())
        most_common_words = [
            word for word, count in word_counts.items() if count == max_frequency]
        return f'The most common words are {', '.join(most_common_words)} with {max_frequency} occurrences.'

    def unique_words(self):
        '''
        Returns a list of all the unique words in the text.
        '''
        unique_words_set = set(self.content_list)
        return list(unique_words_set)


Text1 = Text('A good book would sometimes cost as much as a good house.')
book1 = Text.from_file()


print(Text1.word_freq('good'))
print(Text1.most_common_word())
print(Text1.unique_words())
print(book1.word_freq('name'))
