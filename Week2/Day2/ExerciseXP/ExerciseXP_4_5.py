# exercise 4:
class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        kwargs['is_child'] = True
        self.members.append(kwargs)
        print('mazal tov to the new soul!')

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f'Family {self.last_name}:')
        for member in self.members:
            print(f'''Name: {member['name']}, Age: {member['age']}, Gender: {
                  member['gender']}, Is Child: {member['is_child']}''')


family_1 = Family([
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
], 'Smith')

# print(family_1.born(name='John', age=0, gender='Male'))
# print(family_1.is_18('Michael'))
# print(family_1.family_presentation())


# the Incredibles
class TheIncredibles(Family):
    def __init__(self, members, power, incredible_name, last_name):
        super().__init__(members, last_name)
        self.power = power
        self.incredible_name = incredible_name

    def user_power(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                if member['age'] >= 18:
                    print(f"{member['name']}\'s power is {member['power']}")
                else:
                    raise Exception(
                        f"{member['name']} is not over 18 years old.")

    def incredible_presentation(self):
        print('\*Here is our powerful family\**')
        super().family_presentation()


family_2 = TheIncredibles([
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
], 'Incredibles')

family_2.incredible_presentation()
# family_2.born(name='Jack', age=0, gender='Male',power='Unknown Power', incredible_name='BabyJack')
# family_2.incredible_presentation()
