# #Exercise 1 14:20
# my_fav_numbers = {2,31,27,56,5785,1968,1948}
# my_fav_numbers_1 = {6,11}
# my_fav_numbers = my_fav_numbers.union(my_fav_numbers_1)
# # print(my_fav_numbers)
# my_fav_numbers_list = list(my_fav_numbers)
# my_fav_numbers.pop()
# # print(my_fav_numbers)
# my_fav_numbers = set(my_fav_numbers_list)
# friend_fav_numbers = {5,20,51,7}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

#Exercise 2 14:28
#NO, it is a fixed sequence, no possible modification
#PS: I would recommend to rephrase te question:
# Given a tuple that includes integers, is it...

# #Exercise 3 14:35
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# # print(basket)
# basket.remove('Blueberries')
# basket.append('Kiwi')
# basket.insert(0,'Apples')
# # print(basket)
# count_apples = basket.count('Apples')
# # print(count_apples)
# basket.clear()
# print(basket)


# Exercise 4 14:48 - took me a while because of the layout
# float: is number with decimals e.g. 3.64389870
# integer is number without decimals e.g. 3

# n=1.5
# list_num = []

# for i in range (8):
#     list_num.append( n + 0.5 * i )

# print(list_num)

# Exercise 5 15:03

# for n in range (1,21):
#     print(n)


# for n in range (1,21):
#     if n % 2 == 0:
#         print(n)

# Exercise 6 15:12

# name = []
# keep_asking = True

# while keep_asking:
#     list = input ('write a name, enter "Arielle" to finish the question to be asked ')

#     if list =='Arielle':
#         keep_asking = False
#     else:
#         name.append(list)

# print(name)

# Exercise 7: 15:20


# fruits = input('enter one or several fruit(s) you like, separated by the space character ')
# # print(type(fruits))
# string_1 = fruits.split()
# # print(string_1)
# # print(type(string_1))
# # print(list_f)
# fav_fruits = input ('enter a name of any fruit')

# if fav_fruits in string_1:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')


# Exercise 8: 16:15

# topping =[]
# keep_asking = True

# while keep_asking:
#     question = input ('Add a topping for your pizza. Type "quit" to exit ')

#     if question =='quit':
#         keep_asking = False
#         count_t = len(topping)
#         price = 10 + count_t * 2
#         print(f'here is the list of your topping: {topping}. The total price is {price} USD')
#     else:
#         topping.append(question)
#         # print(type(topping))
#         print(f'here is the list of your topping: {topping}')


# Exercise 9 16:40
# tickets = 0
# total = 0
# keep_asking = True

# while keep_asking:
#     question =  input ('what is the age of that person? . Type "quit" to exit.') 
   
#     if question =='quit':
#         keep_asking = False
#         total +=tickets
        
#         print(f'here is the total: {tickets} USD')
#     else:
#         qn = int(question)
#         if qn < 3:
#             price = 0
#         elif 3<= qn <=12:
#             price = 10
#         elif qn > 12:
#             price = 15
#         else:
#             print('Invalid entry. Only full years.')
        
#         tickets +=price
#         print(f'Ticket price added: {price} USD. Current ticket prices: {tickets}')

#Exercice 9B: TO THE TA, can we make a keep asking dependent from the result of another one?
# list = ['Jacqueline','Francis','Dima','Harry','Hermione']
# allowed_list =[]
# for name in list:
#     age = int(input(f'How old are you, {name}? '))
#     if 16 < age < 21:
#         allowed_list.append(name)
#         print(f'{name} you have the required age.')
#     else:
#         list.remove(name)
#         print(f'Sorry,{name}, you don\'t have the required age.')

# print (f'Here is the list of the happy attendees: ', allowed_list)
            
# Exercise 10 

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# out_of_stock = 'Pastrami sandwich'
# one_message = False
# while out_of_stock in sandwich_orders:
#     sandwich_orders.remove(out_of_stock)
#     if not one_message:
#         print(f"Our {out_of_stock} is out of stock, so we have removed it from the order.")
#         one_message = True
    
    
# finished_sandwiches =[]
# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)  
#     print(f"I made your {sandwich}.")
#     finished_sandwiches.append(sandwich)
    
        
