#Exercise 1
print('Hello world\n' *4)

#Exercise 2: Some Math
#math = (99**3) *8
print((99**3) *8)

#Exercise 3: What is the Output?
>>> 5 < 3 Result False
>>> 3 === 3 Result True
>>> 3 === "3" Result False integer is not text
>>> "3" > 3 Result Error : cannot compare text with integer
>>> "Hello" == "hello" Result False : case sensitve

#Exercise 4 : Your Computer Brand
computer_brand = input ('what is your computer brand?')
print (f'I have a {computer_brand} computer')

#Exercise 5 : Your Information

name = input('Please type your full name')
age = input('What is your age?')
shoe_size = input('What is your shoe size?')
info = input(f'Hello {name}, you are {age} years old. It is funny that it has nothing to do with {shoe_size} number.' )
print (info)

# #Exercise 6: A & B
a = int (input ('Enter a number between 0 and 10: '))
b =  int (input ('Enter a number between 0 and 10: '))

if a > b :
   print ('Hello World')
else: 
   print(f'{a} is lower or equal to {b}') 

#Exercise 7 : odd or even
n = int(input('Enter a number: '))

if n%2 == 0:
   print('the number is even.')
else:     
   print('the number is odd.')

# #Exercise *: What is your name?

full_name = input ("Write your full name, e.g. Harry Potter: ")

if full_name == 'Arielle Benadi':
    print('your are funny! How is it possible that we share the same full name!!')
else:
    print('My name is Arielle Benadi, and hopefully we don\'t share the same full name.')


#Exercise 9 : Tall Enough to ride a roller coaster

height = int(input('enter your height in centimeters, e.g. 158 cm: '))

if height >= 145:
    print ('you are tall enough to ride.')
else:
    print ('you are not enought tall to ride, you must grow to reach 145 cm minimum.')



