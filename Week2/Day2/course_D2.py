# class GrandParent:
#     def sleep(self):
#         return ('GrandPa is sleeping')

# class Parent(GrandParent):
#     def speak(self):
#         return ('Parent is speaking')
# class Child(Parent):
#     pass
# obj1 = Parent()
# obj1.speak()

# obj2 = Child()
# obj2.speak() #ok

# obj2 = Child()
# obj2.sleep()  # ok

# class GrandParent:
#         def sleep(self):
#             return ('GrandPa is sleeping')

#     class Parent(GrandParent):
#         def speak(self):
#             return ('Parent is speaking')

#     class Parent2(GrandParent):
#         def speak(self):
#             return ('Parent2 is speaking')

#     class Child(Parent, Parent2):


#     obj1 = Parent()
#     obj1.speak()

#     obj2 = Child()
#     obj2.speak() #ok

#     obj2 = Child()
#     obj2.sleep()  # ok

# Exercise
# Analyse the code below before executing it. What will be the outputs ?


class Circle:
    color = "red"
# color is not defined as a parameter, nor a method, it is just an object.


class NewCircle(Circle):
    color = "blue"
# class NewCircle is a child from Circle. Color is just an object


# nc = NewCircle
# print(nc.color)
# # >> What will be the output ? Color Blue


# class Circle:
#     def __init__(self, diameter):
#       self.diameter = diameter

#     def grow(self, factor=2):
#         """grows the circle's diameter by factor"""
#         self.diameter = self.diameter * factor


# class NewCircle(Circle):
#     def grow(self, factor=2):
#         """grows the area by factor..."""
#         self.diameter = (self.diameter * factor * 2)


# nc = NewCircle(1)
# print(nc.diameter)

# nc.grow()

# print(nc.diameter)
# # >> What will be the output

class Animal():
    def __init__(self, number_legs, sound, type=None):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Canine(Animals)
pass

class Dog(Animal):
    def __init__(self, number_legs, sound, is_trained):
        super().__init__(number_legs, sound, 'dog')
        self.is_trained = is_trained

    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

    # def make_sound(self):
    #     print("I am an DOGGG !!! WOUAFFF!!")

    def barking(self): #same method tha make_sound
        super(Dog,self).make_sound()#


animal1 = Animal('dog', 4, 'woof')
dog1 = Dog(4, 'wafwaf', True)
dog2 = Dog(3,'wouwouf','False')
dog2.barking()
animal1.make_sound()

