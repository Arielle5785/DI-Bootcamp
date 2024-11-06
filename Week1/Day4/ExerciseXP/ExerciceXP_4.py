#exercise 1
# def display_message():
#     print('I am studying the Full Stack programs.')

# display_message()

#exercise2
# def favorite_book():
#     '''
#         Info: this is a function that express what is your favorite book.
#     '''
# title = input('what is one of your favorite book? ')
# print(f'One of my favorite books is {title}.' )

# print(favorite_book())

#exercise3
# def describe_city(*args):
#     '''
#         Info: this function gives a city and a country, told by the user.
#     '''
#     city = input('in what city do you live? ')
#     country = input('this city is in what country? ')
#     print(f'{city} is in {country}')

# describe_city()    #no need to call the print function

#Random
# def game1(*args):
#     '''
#         Info: ask for a number between 1 and 100.
#         Then it generates another number randomly.
#         If the number generated and the number entered are the same: display a success message, otherwise, it is a fail message.
#     '''
#     user_number = int(input('enter a number between 1 and 100: '))
#     import random
#     gen_number = random.randint(1,100)
#     print(f' random number is {gen_number}')
#     if user_number == gen_number:
#         print('Succes: The odds are in your favor!')
        
#     else:
#         print('Fail: what are the statistics to get the same number?!')

# game1()

# #Exercise 5
# def make_shirt(size='s',message='I love you.'):
#     '''
#         Info: size and message printed on a shirt
#     '''
#     print(f'Your {size.upper()}\'s shirt will print the following message:\n"{message}"')
# make_shirt('m','love')

# Bonus
# def make_shirt(**kwargs):
#     '''
#         Info: size and message printed on a shirt
#     '''
#     size, message = kwargs.values()
#     print(f'Your {size.upper()}\'s shirt will print the following message:\n"{message}"')

# make_shirt(size ='L',  message= 'keywords arguents?')

# #Exercise 6
# def show_magician():
#     magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#     for i in magician_names:
#         print(i)
# show_magician()

