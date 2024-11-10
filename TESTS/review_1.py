# num = int(input ('Enter a number between 0 and 100: '))
# if num%3 == 0 and num%5 == 0:
#     print ('FizzBuzz')
# elif num%3 == 0:
#     print('Fizz')
# elif num%5 == 0:
#     print('Buzz')

# print((5 + 4) * 10 / 2)
# #45
# print(((5 + 4) * 10) / 2)
# #45
# print((5 + 4) * (10 / 2))
# #45
# print(5 + (4 * 10) / 2)
# #25
# print(5 + 4 * 10 // 2)
# #25

# counter = 0

# counter += 1
# counter += 1
# counter += 1
# counter += 1
# counter -= 1
# counter *=2

# #Before you click RUN, guess what the counter variable holds in memory!
# print(counter)

# python = 'I am PYHTON'

# print(python[1:4])
# # ' am'
# print(python[1:])
# # ' am PYTHON'
# print(python[:])
# # 'I am PYTHON'
# print(python[1:100])
# # ' am PYTHON'
# print(python[-1])
# # 'N'
# print(python[-4])
# # 'H'
# print(python[:-3])
# # 'THYP ma I'
# print(python[-3:])
# # 'error
# print(python[::-1])
# # 'NOTHYP ma I'

# birth_year = int(input('what year were you born? '))
# age = 2024 - birth_year
# print(f'you are {age} years old')

# user_name = input ('PLease enter you user name: ')
# password = input ('Enter your password: ')
# l= len(password)
# # print(type(l))
# secret= l * '*'
# print(secret)

# print(f' Hello {user_name}, your paswword {secret} is {l} characters long.')

# for i, char in enumerate(list(range(0,100))):
#     if char == 50:
#         print(f'index of char 50 is {i}')

# names = ["Alice", "Bob", "Charlie"]
# ages = [25, 30, 35]

# zipped = zip(names, ages)
# print(list(zipped))

# some_list = ['a','b','c','b','d','m','n','n']

# duplicates =[]
# for value in some_list:
#     if some_list.count(value) > 1:
#         if value not in duplicates:
#             duplicates.append(value)

# print(duplicates)

# duplicates = [x for x in some_list if some_list.count(x) > 1]
# print(duplicates)

# user_profile = {
#     'user_name': 'ArielleB',
#     'age': 56,
#     'email': 'arielle.benadi@gmail.com',
#     'color': 'indigo'
# }
# print(user_profile.keys())

# def multiply_by_two(num):
#     return num*2


# def sum(num1, num2):
#     return num1+num2


# print(sum(20, 3))

# def outer():
#     x = 'local'
#     def inner():
#         nonlocal x
#         x = 'nonlocal'
#         print('inner:',x)
#     inner()
#     print('outer:', x)

# outer()

# def fibonacci(number): ##define a function that results as integers
#     x =0
#     y = 1
#     for i in range(number):
#         yield x
#         temp = x
#         x = y
#         y = temp + y

# for a in fibonacci(21):
#     print(a)

# print(type(fibonacci))
# print(type(a))


# def fib2(number): #define a function that results as a list
#     x = 0
#     y = 1
#     result = []
#     for i in range(number):
#         result.append(x)
#         temp = x
#         x = y
#         y = temp + y
#     return result

# print(fib2(21))


# Exercise!
# Display the image below to the right hand side where the 0 is going to be ' ', and the 1 is going to be '*'. This will reveal an image!
picture = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0]
]


# def tree():
#     for row in picture:
#         line = ''.join(['*' if pixel == 1 else ' ' for pixel in row])
#         print(line)


# tree()

# for row in picture:
#     for pixel in row:
#         if (pixel==1):
#             print('*', end = '')
#         else:
#             print(' ', end = '')
#         print('')
