my_name='Arielle'
print(type(my_name))

my_bool = True
print(type(my_name))

#STRINGS
greetings='Shabbat Shalom'

#indexing a string
print(greetings[3])

#slicing a string
print(greetings[2:4])
print(greetings[2:])

#-1 is the last index


#stings most used methods
print(len(greetings))
print(greetings[2:len(greetings)])
print(greetings.index(' '))
print(greetings.index('S'))

print('***',greetings[2:-1])

#capitalize
print('hello'.capitalize())

print('shabbat shalom'.capitalize())
print('shabbat shalom'.title())
print('shabbat shalom'.replace('shalom','meburah').title())

#save the results
#greetings_new = greetings.replace('shalom','meburah').title())


student="  Harry Potter  "
student = student.strip()
print (student + ' '+ greetings)

student = student.strip('o')
print(student)

#numbers: integer, float, complex numbers, boolean

int_num = 5

float_num = 5.7

#operations
print(int_num+float_num)
print(10*2)
print(5**2)
#greetings = 'shabbat shalom\n'
print(round(5/3,2))
print(round(5/3,4))
print(11//2)

if 12%3==0:
    print ('yes!')

if 196%5==1:
    print('nos!')    

