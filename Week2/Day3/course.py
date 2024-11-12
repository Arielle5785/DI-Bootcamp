# # # import random
# # # # help(random)
# # # from random import shuffle
# # # # print(random.shuffle([1,2,3,4,5]))
# # # my_list = [1,2,3,4,5]
# # # random.shuffle(my_list)
# # # print(my_list)

# # # import sys
# # # help(sys)

# # # import pandas
# # # pip install pygame
# # # pip uninstall pygame: to unistall - run it in the terminal

# # class Circle:
# #     color = "red"
# #     list_of_circles = []
# #     def __init__(self, diameter):
# #         self.diameter = diameter
# #         Circle.list_of_circles = []


# #     def grow(self, factor=2):
# #         self.diameter = self.diameter * factor

# #     def get_color(self):

# #        return Circle.color


# # circle1 = Circle(2)
# # print(circle1.color)
# # # # red
# # circle1.color = 'blue'
# # # print(Circle.color)
# # # # red
# # # print(circle1.get_color())
# # # circle1.grow(3)
# # # print(circle1.diameter)
# # for circle in Circle.list_of_circles:
# #     print()

# from datetime import date


# class Person:
#     def __init__(self, name, birthday):
#         # self.name = name
#         self.birthday = birthday

#     @property  # getter
#     def birthday(self):
#         return self._birthday

#     @property  # getter
#     def name(self):
#         self._name.title()

#     @birthday.setter  # setter
#     def birthday(self, value):
#         if not isinstance(value, date):
#             raise ValueError(
#                 'birthday argument has to be a datetime object date(year, month, day)')
#         self._birthday = value

#     @name.setter #setter
#     def name(self, value):
#         self._name = value


#     def lived_days(self):
#         return (date.today() - self.birthday).days


# p1 = Person('john doe', date(1999, 5, 5))
# print(p1.name)  # title()

# p2 = Person('maria gonzales', date(1999,10,1))
# print(p2.name)

# # create a getter and a setter for the attribute name:
# # using @property define that the name will always be printed with capital letter, even if when creating the object it was passed with lower case
# # create the setter that will allow this property to be changed


class Person:
    def __init__(self, name, birthday):
        self.name = name
        self.birthday = birthday

    # def __str__(self):
    #     return self.name

    def __repr__(self):
        return f' The person is {self.name} and the birthday is {self.birthday}'


p3 = Person('Arielle', '31/05/1968')
print(p3)  # returns the place location
print(p3)
