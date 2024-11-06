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
    # import random
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

#Exercise 7
# 1.
# import random
# def get_random_temp():
#     degree = random.randint(-10,40)
#     print(f'The temperature right now is {degree}°C.')

# get_random_temp()

# 2.
# def main():
#     degree = get_random_temp()
#     print(f'The temperature right now is {degree}°C.')

# main()
#3.
# def main(temp=0,message='',limits=0):
#     temp = random.randint(-10,40)
#     limits = [-40,0,16,23,24,32,40]
#     message = ['Brrr, that\’s freezing! Wear some extra layers today',
#                'Quite chilly! Don\’t forget your coat',
#                'spring is in the air!',
#                'T-shirts, bikinis and cocktails time!',
#                'Hot. You are a fried egg if you stay too long on the sun!']
#     if temp <limits[0]:
#             print(message[0])
#     elif temp <limits[1]:
#         print(message[1])
#     elif temp <limits[2]:
#         print(message[2])
#     elif temp <limits[3]:
#         print(message[3])    
#     elif temp <limits[4]:
#         print(message[4]) 
#     elif temp <limits[5]:
#         print(message[5])        
#     else:
#             print('invalid temperatures, you are not in earth')
            
# main()
        
# #4.
# import random
# def get_random_temp(degree, season):
#     season = input('Enter the season: winter, autumn, spring, or summer: ')
#     degree = 0
#     if season == 'winter':
#         degree = random.randint(-10,5)
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'spring':
#         degree = random.randint(5,15)
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'summer':
#         degree = random.randint(16,35)
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'autumn':
#         degree = random.randint(20,25)
#         print(f'The temperature right now is {degree}°C; you are in {season}.')                    
#     else:
#         print('invalid')
    
# get_random_temp()

#5. Bonus
# import random
# def get_random_temp(*args):
#     season = input('Enter the season: winter, autumn, spring, or summer: ')
#     degree = 0
#     if season == 'winter':
#         degree = float(random.randint(-10,5))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'spring':
#         degree = float(random.randint(5,15))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'summer':
#         degree = float(random.randint(16,35))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif season == 'autumn':
#         degree = float(random.randint(20,25))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')                    
#     else:
#         print('invalid')
    
# get_random_temp()

#6. Bonus - cannot get it
# import random
# def get_random_temp(*args):
    
#     months = ['January','February','March', 'April','May','June', 'July', 'August', 'September', 'October', 'November', 'December']
#     degree = 0
#     if months.index[0:2]:
#         season = 'winter'
#         degree = float(random.randint(-10,5))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif months.index[3:5]:
#         season = 'spring'
#         degree = float(random.randint(5,15))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif months.index[6:8]:
#         season = 'summer'
#         degree = float(random.randint(16,35))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')
#     elif months.index[9:11]:
#         season = 'autumn'
#         degree = float(random.randint(20,25))
#         print(f'The temperature right now is {degree}°C; you are in {season}.')                    
#     else:
#         print('invalid')
    
# get_random_temp('January')





    
