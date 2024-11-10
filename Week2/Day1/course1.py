create a class called Person
use __init__() to create the following attributes : name, age, height
create an object for yourself

class Person ():
    name: str
    age: int
    height: float

    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height

    def presentation(self):
        print(f'Hello, my name is {self.name}, I am {self.age} years old')


my_self = Person('Arielle', 56, 1.58)
my_self.presentation()

print(f'Your name is {my_self.name}, your age is {my_self.age} and height is {my_self.height}')
print(my_self.__dict__)


# create a method calling presentation() to print the following:
"Hello, my name is {}, I am {} years old"
