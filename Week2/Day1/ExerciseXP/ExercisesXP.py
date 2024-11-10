# Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         # print(f'My cat\'s name is {cat_name}, {cat_age} years old.')


# # Instantiate three Cat objects using the code provided above.
# pet_1 = Cat('Fluffy', 3)
# pet_2 = Cat('Vanilla', 5)
# pet_3 = Cat('Poussy', 7)
# cats = [pet_1, pet_2, pet_3]
# # Outside of the class, create a function that finds the oldest cat and returns the cat.


# def oldestpet(cats):
#     max_age = cats[0]  # Start with the first cat object
#     for cat in cats:
#         if cat.age > max_age.age:
#             max_age = cat
#     return max_age


# oldest_cat = oldestpet(cats)

# print(f'The oldest cat is {oldest_cat.name} , and is {oldest_cat.age} years old.oldestpet')

# # Exercise 2: Dogs
# # Instructions
# # Create a class called Dog.
# class Dog:
# # In this class, create an __init__ method that takes two parameters: name and height. This function instantiates two attributes, which values are the parameters.
#     def __init__(self,name,height):
#         name: str
#         height: int
#         self.name = name
#         self.height = height

# # Create a method called bark that prints the following string “ < dog_name > goes woof!”.
#     def bark(self):
#         print(f'{self.name} goes woof!')
#         return self
# # Create a method called jump that prints the following string “ < dog_name > jumps < x > cm high!”. x is the height*2.
#     def jump(self):
#         x = self.height * 2
#         print(f'{self.name} jumps {x}cm high!')
#         return self

# pet_4 = Dog('Choochoo', 50)
# pet_5 = Dog('Fluffy', 34)
# pet_4.jump()
# pet_5.bark().jump()
# # Outside of the class , create an object called sarahss_dog. His dog’s name is “Rex” and his height is 50cm.
# davids_dog = Dog('Rex', 50)
# # Print the details of his dog(ie. name and height) and call the methods bark and jump.
# davids_dog.bark().jump()
# print(f'the name of david\'s dog is {davids_dog.name}  and its height is {davids_dog.height}.')
# # Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# sarahs_dog = Dog('Teacup', 20)
# # Print the details of her dog(ie. name and height) and call the methods bark and jump.
# sarahs_dog.bark().jump()
# print(f'the name of sarahs\'s dog is {sarahs_dog.name}  and its height is {sarahs_dog.height}.')
# # Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
# pets =[pet_4,pet_5,davids_dog,sarahs_dog]
# max_height = pets[0]
# for dog in pets:
#      if dog.height > max_height.height:
#          max_height = dog

# print(f'the name of the heighest pet is {max_height.name}')

# Exercise 3: Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
# # Its __init__() method should have two arguments: self and lyrics(a list).
# # Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

#     def sing_me_a_song(self):
#         line = 0
#         for line in self.lyrics:
#             print(line)


#  # Create an object, for example:
# stairway = Song(['There\'s a lady who\'s sure', 'all that glitters is gold',
#                 'and she\'s buying a stairway to heaven'])
# # stairway = Song(["There’s a lady who's sure", "all that glitters is gold",
# #                 "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# Exercise 4: Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals(an empty list) and name(name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.

    def add_animal(self, animal):
        # for animal in self.animals:
        #     animal = input('add animal: ')
        #     if animal not in self.animals:
        #         self.animals.append()
        #     else:
        #         print('the animal is already listed.')
        self.animals.append(animal)
        return self
# Create a method called get_animals that prints all the animals of the zoo.

    def get_animals(self):
        for animal in self.animals:
            print(animal)

# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print('you cannot remove an animal that is not listed.')

# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    sorted_list = []

    def sort_animals(self):
        sorted_list = self.animals.sort()
        dict_animals = {}  # TA to get the building of a dynamic dictionary
        for word in sorted_list:
            first_letter = word[0]
            if first_letter in dict_animals(first_letter):
                dict_animals.update(word)
            else:
            dict_animals.update(first_letter)
            dict_animals.update(word)

        return self


# Example
# zoo_1 = Zoo(['Baboon','Cat','Ape','Eel','Bear','Cougar','Emu'])
# zoo_1.add_animal()
zoo1 = Zoo('Bruxelles Zoo')
zoo1.add_animal('Ape')
# print(zoo1.animals)
zoo1.add_animal('Cat')
zoo1.add_animal('Eel')
zoo1.add_animal('Baboon')
# print(zoo1.animals)
zoo1.get_animals()
zoo1.sell_animal('Ape')
# print(zoo1.animals)
zoo1.add_animal('Faon')
zoo1.add_animal('Giraffe')
zoo1.add_animal('Bear')
zoo1.add_animal('Cougar')
zoo1.add_animal('Lion')
zoo1.add_animal('Heron')
zoo1.add_animal('Leopard')
zoo1.add_animal('Elephant')
print(zoo1.animals)
zoo1.sort_animals()
print(zoo1.animals)
# zoo1.sort_animals()
# print(zoo1.animals)
#

# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class .
# Example
# Which animal should we add to the zoo - -> Giraffe
# x.add_animal(Giraffe)
