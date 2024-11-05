# #Exercise1
# # keys = ['Ten', 'Twenty', 'Thirty']
# # values = [10, 20, 30]

# # my_dict = dict(zip(keys, values))
# # print(my_dict)

# #Exercise2: question to Rquel, I couldn't make a one by one {name, age, price}
# # f_names = []
# # f_ages = []
# # ticket = 0
# # total_coast = 0
# # keep_asking = True


# # while keep_asking : 
# #     q1 = input('Please enter the first name of the attendee: ')
# #     q2 = input('Please enter the age of this person: ')
# #     q3 = input("type exit ")
# #     f_names.append(q1)
# #     f_ages.append(q2)
# #     family_ma = list(zip(f_names,f_ages))
# #     print(family_ma)

# #     if q3=='exit':
# #         keep_asking = False
# #         print(f'here is the total: {ticket} USD') 

# #     else:
# #         qn = int(q2)


# #     if qn < 3:
# #         price = 0
# #     elif 3<= qn <=12:
# #         price = 10
# #     elif qn > 12:
# #         price = 15
# #     else:
# #         print('Invalid entry. Only full years.')
# #     ticket += price
# #     print(f'{f_names}, aged {f_ages}, paying {price}.')

# #Exercise 3
# # shop1 = {
# #     'name':'Zara',
# #     'creation_date': 1975,
# #     'creation_name':'Amancio Ortega Gaona',
# #     'type_of_clothes':('men', 'women', 'children', 'home'),
# #     'international_competitors':('Gap', 'H&M', 'Benetton'),
# #     'number_stores': 7000,
# #     'major_color':{
# #         'France':'blue',
# #         'Spain':'red',
# #         'US':('pink','green')
# #     }
    
# #     }
# # print(shop1)

# #3.Change the number of stores to 2.
# # shop1['number_stores'] = 2
# # print(shop1)

# #4.Print a sentence that explains who Zaras clients are.
# # brand_name = shop1["name"]
# # client_countries = ", ".join(shop1["major_color"].keys())
# # product_types = ", ".join(shop1["type_of_clothes"])
# # print(f"{brand_name}'s clients are mainly from {client_countries}. They buy clothes for {product_types}.")

# #5. Add a key called country_creation with a value of Spain.
# # shop1.update({'country_creation': 'Spain'})
# # shop1_keys = []
# # for key in shop1.keys():
# #     shop1_keys.append(key)
# # print(shop1_keys)

# #6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# # if 'international_competitors' in shop1:
# #     competitors = list(shop1["international_competitors"])
# #     competitors.append("Desigual")
# #     shop1["international_competitors"] = competitors
# #     print(shop1["international_competitors"])

# # 7. Delete the information about the date of creation.
# # del shop1['creation_date']
# # print(shop1)

# # 8. Print the last international competitor.
# shop1 = {
#     'name':'Zara',
#     'creation_date': 1975,
#     'creation_name':'Amancio Ortega Gaona',
#     'type_of_clothes':('men', 'women', 'children', 'home'),
#     'international_competitors':('Gap', 'H&M', 'Benetton','Desigual'),
#     'number_stores': 7000,
#     'major_color':{
#         'France':'blue',
#         'Spain':'red',
#         'US':('pink','green')},
#     'country_creation':'Spain' 
#     }
# # list_comp = list(shop1['international_competitors'])
# # last_competitor = list_comp[-1]                  
# # print(last_competitor)
# # print(shop1['international_competitors',])

# # 9. Print the major clothes colors in the US.
# # us_colors = shop1['major_color']['US']
# # print(f"The major clothing colors in the US are: {', '.join(us_colors)}")

# # 10. Print the amount of key value pairs (ie. length of the dictionary).
# # shop1_keys = []
# # for key in shop1.keys():
# #     shop1_keys.append(key)
# # print(len(shop1_keys))

# # 11. Print the keys of the dictionary.
# # keys = list(shop1.keys())
# # print(keys)

# # 12. Create another dictionary called more_on_zara with the following details:
# more_on_zara = {
#     'creation_date': 1975,
#     'number_stores': 10000
#     }
# print(more_on_zara)

# # 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# # shop1.update(more_on_zara)
# # print(shop1)
# merged_dict = {**shop1, **more_on_zara}
# print(merged_dict)

# # 14. Print the value of the key number_stores. What just happened ?
# print(f'Number of stores:', merged_dict['number_stores'])
# #the number of stores from the first dictionary (no duplicated keys) has been overwritten by the nuber of stores from the more_on_zara. In reality, the data manager should tell whether the number is to be added or updated.





