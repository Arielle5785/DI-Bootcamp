#data Structure
#sequences= string
#data strcture = list
#sets
#tuples





# my_name = "Arielle"
# last_name = "Benadi"
# nickname = "5785"

# user_info = [my_name,last_name, nickname]
# print(user_info)

# user_name = list(user_name)
# print(user_name)

#methods for list
# num_list = [1,2,3,2,8,10]
# num_list.append(145)
# print(num_list)
# num_list.insert(2,55)
# print(num_list)

# num_list.remove(2)
# print(num_list)
# del num_list[3]

# num_list.pop() # delete the last element
# print(num_list)

# deleted_el = num_list.pop(3) #pop(index): delete the element in this index and save what was deleted
# print(deleted_el) 

# print(num_list[4:])

# #tuples: fixed sequence
# some_tupple = tuple()
# scores = (10,45,33,67)

# #convert to a list
# scores_list = list(scores)
# scores_list.append(120)
# #convert back to tuple
# updated_tuple = tuple(scores_list)
# print(updated_tuple)
# print(type(updated_tuple))

#unpack a tuple
# score1,score2,score3,score4 = scores

# print(score1)
# print(score2)
# print(score3)
# print(score4)

# print(scores[-1])

num_list = [1,2,4,7,2,8,10]
print(num_list.index(4)) #index of the element 4 = result is 2
num_list[2] = 40 # knpowing where is the element 4, I can replace 4 by 40
print(num_list)



