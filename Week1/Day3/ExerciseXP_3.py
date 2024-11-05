#Exercise1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# my_dict = dict(zip(keys, values))
# print(my_dict)

#Exercise2: question to Rquel, I couldn't make a one by one {name, age, price}
# f_names = []
# f_ages = []
# ticket = 0
# total_coast = 0
# keep_asking = True


# while keep_asking : 
#     q1 = input('Please enter the first name of the attendee: ')
#     q2 = input('Please enter the age of this person: ')
#     q3 = input("type exit ")
#     f_names.append(q1)
#     f_ages.append(q2)
#     family_ma = list(zip(f_names,f_ages))
#     print(family_ma)

#     if q3=='exit':
#         keep_asking = False
#         print(f'here is the total: {ticket} USD') 

#     else:
#         qn = int(q2)


#     if qn < 3:
#         price = 0
#     elif 3<= qn <=12:
#         price = 10
#     elif qn > 12:
#         price = 15
#     else:
#         print('Invalid entry. Only full years.')
#     ticket += price
#     print(f'{f_names}, aged {f_ages}, paying {price}.')

#Exercise 3
shop1 = {
    'name':'Zara',
    'creation_date': 1975,
    'creation_name':'Amancio Ortega Gaona',
    'type_of_clothes':('men', 'women', 'children', 'home'),
    'international_competitors':('Gap', 'H&M', 'Benetton'),
    'number_stores': 7000,
    'major_color':{
        'France':'blue',
        'Spain':'red',
        'US':('pink','green')
    }
    
    }
# print(shop1)



