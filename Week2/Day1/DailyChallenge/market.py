# Challenge 1

# Create a class called Farm. How should it be implemented?
class Farm:
    # define a class with name for the farm. No need to declare count nor animals
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}

    # adding the animals with condition if already in then add to existing count, otherwise count
    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
        return self

    # print the Farm's name, add a new line, print {animal : count}
    def get_info(self):
        print(f"{self.farm_name}'s farm\n")
        for animal, count in self.animals.items():
            print(f"{animal} : {count}")
        print("\n    E-I-E-I-O!")
 # challenge 2

    def get_animal_types(self):
        sorted(self.animals.keys())

    # def get_short_info(self): #incorrect. TA to help. please
    #     animal_types = self.animals.get_animal_types()
    #     if self.count in self.animals > 1:
    #         return (f'{animal}s')
    #     else:
    #         return self


# Creating an instance of the Farm class and adding animals
macdonald = Farm('McDonald')
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Print farm information
macdonald.get_info()
# challenge2
macdonald.get_animal_types()
print(macdonald.animals)
# macdonald.get_short_info() #incorrect
# print(macdonald.animals) #incorrect
