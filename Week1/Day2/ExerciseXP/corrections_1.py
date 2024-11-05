# ages = input('enter the ages, sep by space').split()
# print(ages)
# total = 0

# i=0
# for i in ages:
#     if i <3:
#         total +=0
#     elif 3 >= i <= 12:    
#         total+= 10
#     el    


list_num1=[]
for i in range(1,6):
   if i==5:
      break
   list_num1.append(i)
   list_num1.append(i+0.5)
   print(list_num1[1:])