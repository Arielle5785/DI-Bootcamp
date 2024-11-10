class Dog():
    def __init__(self, name, color, age):
        self.name = name  # attribute definition
        self.color = color
        self.age = age

        # print('A new dog has been initialized !')
        # print("His name is", name)
    def bark(self):
        print(f'{self.name} is barking')

    def walk(self, num_meters):
        return f'{self.name} walked {num_meters} today.'

    def rename(self, new_name):
        self.name = new_name


shelter_dog = Dog('Rex', 'color', 7)

puddle = Dog('Fluffy', 'white', 3)
# print(puddle.name)
# puddle.bark()
# print(puddle.walk(200))
# print(shelter_dog.walk(500))

# puddle.age = 5  # change the value of the attribute
# puddle.rename = 'Carlin'
# print(puddle.rename)


#call the methord bark on the class:
# Computer.description(dell_computer, "Mark")
#2 different ways of calling a method

Dog.bark(puddle)
puddle.bark()
