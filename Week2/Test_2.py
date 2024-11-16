# my_list = [1,2,3,4,5]
# print(list(map(lambda item:item*2, my_list)))
# # print(my_list)
#square
# my_list =[5,4,3]
# print(list(map(lambda item: item**2, my_list)))

#sorting on the second arguent of each tuple included in the list
# a = [(0,2), (4,3), (9,9), (10,-1)]
# a.sort(key = lambda x:x[1])
# print(a)
#sorting based on the first index
a=[(4,3),(0,2),(10,-1),(9,9)]
a.sort()
print(a)
