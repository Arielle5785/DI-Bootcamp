# # # #Exercise1
# # # sample_dict = {
# # #     "class":{
# # #         "student":{
# # #             "name":"Mike",
# # #             "marks":{
# # #                 "physics":70,
# # #                 "history":80
# # #             }
# # #         }
# # #     }
# # # }
# # # print(sample_dict['class']['student']['marks']['history'])

# # user_dict = {'name':'Juliane',
# #              'email':'j@gmail.com',
# #              'age':34,
# #              'is_male':True,
# #              'height':1.59,
# #              'pets':['Caramel', 'Fluffy'], #a list into the dictionnary,
# #              'family':{'name':'Ariel',
# #                         'age': 5,
# #                         'relation': 'son',
# #                         'hobbies':[('yoga',3),('tennis',1),('chess',3)]
# #                      }
# #             }

# # # print(user_dict[name])
# # # print(user_dict['pets'][1])
# # # print(user_dict['family']['relation'])
# # # print(user_dict[''])


# # # user_name = input ('what is your name?')
# # # user_email = input('your email?)
# # # user_dict ={
# # #             'name':user_name,
# # #             'email':uesr_email,
# # # }
# # # print(user_dict)
# # # user_name = input ('what is your name?')
# # # user_email = input('your email?)
# # # user_dict ={
# # #             user_name:user_name,
# # #             user_email:uesr_email,
# # # }
# # # print(user_dict)

# # # for key in user_dict.keys():
# # #     print(key)
# # # for value in user_dict.value():
# # #     print(value)

# # # for key,value in user_dict.items():
# # # print(f'key: ' {key} 'value: ' {value})  

# # # #changing values
# # # user_dict['email'] = 'sch@gmail.com'
# # # print(user_dict)

# # # #adding  a value for the dictionary
# # # user_dict['job'] = 'full stack dev'
# # # print(user_dict)

# # # #delete a key value (an entry) of dictionary
# # # del user_dict['job']
# # # print(user_dict)
# # # #check if key or value exist in the dictionary

# # # print('pets' in user_dict.keys())
# # # print(user_dict)
# # # print('Juliane' in user_dict.values()) # check in values
# # # print('Juliane' in user_dict.items())

# # # dict_keys = []
# # # for key in user_dict.keys(
# # #     dict_keys.append(keys)
# # # )

# # # user_dict['family'].udate(['name':'Laetitia','age':18,'relation':'sister']) # here I am overwriting the previous values


# # # user_dict['family'].append[('name':'Laetitia','age':18,'relation':'sister')]
# # # print(user_dict)

# # user_dict2 = {
# #     'origin':'Brasil',
# #     'nickname':'Jul',
# #     'phone':'36431658'              
# #               }

# # user_dict.update(user_dict2)
# # print(user_dict)


# #Exercise

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# # keys_to_remove = ["name", "salary"]
# for 
# del sample_dict["name", "salary"]
# print(sample_dict)


# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1,2.2,3.3,4.4]

# print(dict(zip(list2,list3)))