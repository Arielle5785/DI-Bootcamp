# Ex1
# print('Hello, world!')
# a ='Arielle'
# b= 'Benadi'
# print (f'my first name is {a} and my last name {b}')
# EX2
# user_fn = input('Enter your first name: ')
# print(f'Your first name is {user_fn}.')
# Ex3: Write a program to check if a number is even or odd.
# keep_asking = True
# while keep_asking:
#     x = (input('Enter a number or type exit to quit: '))
#     if x.lower() == 'exit':
#         keep_asking = False
#         print('Goodbye, Fairwell, Auf wiederzein, Good night!')
#     elif x.isdigit():
#         if int(x)%2 == 0:
#             print(f'the number {x} is even.')

#         else:
#             print(f'the number {x} is odd.')

#     else:
#         print('You have not entered a number, I can not determine wether it is even or odd. try again')
#         keep_asking = True

# Exercise 4: Ask the user for their age and print if they are eligible to vote(18 or older).

# keep_asking = True
# while keep_asking:
#     user_age = input('How old are you? ')
#     if user_age.isdigit():
#         if int(user_age) >= 18:
#             print('You are eligible for vote in this country.')
#             keep_asking = False
#         else:
#             print(' You need to drink more ageing potion, you won\'t be able to pass the aging line for vote in this country.')
#             keep_asking = False
#     else:
#         print('You haven\'t typed a number. Age must be digital. Try again.')
#         keep_asking = True

# exercise 5: Write a program that compares two numbers and prints which one is larger, or if they are equal.
# x = 36
# y = 35
# if x == y:
#     print(f'Those numbers {x} & {y} are equals.')
# elif x < y:
#     print(f'{x} is less than {y}.')
# else:
#     print(f'{x} is greater than {y}.')

# exercise 6: For loops Print all numbers from 1 to 10
# x=0
# for x in range(10):
#     x+=1
#     print(x)
# The following code is simplier
# for x in range (1,11):
#     print(x)

# exercise 7: Print the multiplication table of a number entered by the user.

keep_asking = True
while keep_asking:
    x = (input('Enter a number to get the multiplication table. Type exit, to stop the code run: '))
    if x.isalpha():
        print(input('You have typed no-numbers. Try again.'))
    elif x.lower() == 'exit':
        print(input('Goodbye, Fairwell, Auf wiederzein, Good night!'))
        keep_asking = False
    elif x!=0:
        i=0
        for i in range (1,11):
            y=x*i
            print(y)
            i+=1

