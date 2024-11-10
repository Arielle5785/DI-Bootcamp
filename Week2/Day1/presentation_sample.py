# # Analyse the code below. What will be the ouput ?
# '''
# it will print >>>p.x is: 3, then on a new line >>>p.y is: 4
# the __init__() method initiate/define the objects 'to themselves'
# '''
# # Explain the goal of the __init__() method


# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y


# # create an instance of the class
# p = Point(3, 4)

# # access the attibutes
# print('p.x is: ', p.x)
# print('p.y is: ', p.y)

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")


# shelter_dog = Dog("Rex")
# shelter_dog.walk(10)

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")

#     def rename(self, new_name):
#         self.name = new_name
#         print(f'The new name of the dog is {self.name}')


# shelter_dog = Dog("Rex")
# shelter_dog.rename("Paul")

# Exercise 2
# Analyse the code below. What will be the output ?
'''
Hello my name is John
'''
# Explain the goal of the methods
'''
self.name is initializing the name, same for the age
'''
# Create a method that modifies the name of the person


class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show_details(self):
        print("Hello my name is " + self.name)

    def rename(self, new_name):
        self.name = new_name
        new_name = input('enter your new name: ')
        print(new_name())
        print(f'The new name of the person is : {self.name}')


first_person = Person("John", 36)
first_person.show_details()
first_person.rename()
