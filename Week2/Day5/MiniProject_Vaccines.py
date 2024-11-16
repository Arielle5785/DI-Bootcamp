# Your goal is to create a program to help a city with the vaccination of its citizens.
class Human:
    '''
    Represents a citizen of the city, it has the following attributes:
    id_number (str), name (str), age (int), priority (bool) and 
    blood_type (str). Its blood type can be “A”, “B”, “AB” or “O”.
    This class has no methods.
    '''
    blood_type = ['A', 'B', 'AB', 'O']
    rhesus = ['+', '-']

    def __init__(self, id_number, name, age, priority, blood_type, rhesus):
        id_number: str
        name: str
        age: int
        priority: bool

        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.rhesus = rhesus


class Queue:
    def __init__(self, humans):
        self.humans = []

    def add_person(self, person):
        pass

    def find_in_queue(self, person):
        pass

    def swap(self, person1, person2):
        pass

    def get_next(self):
        pass

    def get_next_blood_type(self, blood_type):
        pass

    def sort_by_age(self):
        pass
