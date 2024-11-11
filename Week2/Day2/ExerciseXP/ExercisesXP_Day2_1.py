#to attention TA: Exercise 3 in a separate file
# 4 & 5 too


# # Exercise1:Pets
# class Pets():
#     def __init__(self, owner, animals):
#         self.owner = owner
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())


# class Cat(Pets):
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#         # super().__init__(owner='Sara', animals='Cats')

#     def walk(self):
#         return f'{self.name} is just walking around'


# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# # all_cats = Cat[
# #     Bengal('Fluffy', 5, True),
# #     Chartreux('Parme', 1, False),
# #     Siamese('Sister', 3, False)]
# # all_cats.walk()
# cat1 = Bengal('Fluffy', 5)
# cat2 = Chartreux('Parme', 1)
# cat3 = Siamese('Sister', 3)

# # Adding these cats to the Pets instance
# # all_cats = Pets([cat1, cat2, cat3])
# all_cats = Pets('Sara', [cat1, cat2, cat3])

# # Now calling the walk method on all_cats
# all_cats.walk()

# # exercise2: Dogs
class Dog:
    def __init__(self, dog_name, age, weight):
        self.dog_name = dog_name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.dog_name} is barking'

    def run_speed(self):
        speed = (self.weight)/(self.age)*10
        return speed

    def fight(self, other_dog):

        my_dog_performance = self.run_speed() * self.weight
        other_dog_performance = other_dog.run_speed() * other_dog.weight
        if my_dog_performance > other_dog_performance:
            print(f'{self.dog_name} won!')
        elif my_dog_performance < other_dog_performance:
            print(f'{other_dog.dog_name} won!')
        else:
            print(f'No one won.')


dog1 = Dog('Fluffy', 5, 15)
dog2 = Dog('Rex', 4, 12)
dog3 = Dog('Carlin', 6, 11)

fight1 = dog1.fight(dog2)
fight2 = dog2.fight(dog3)
fight3 = dog3.fight(dog1)
