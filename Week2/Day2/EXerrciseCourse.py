# What is the difference between these 2 pieces of code ?
# class A(B):
#     def __init__(self, *args, **kwargs)
#     B.__init__(self, *args, **kwargs)
#     pass


# class A(B):
#     def __init__(self, *args, **kwargs)
#     super().__init__(*args, **kwargs)
#     pass
# #exactly the same result since theversion of Python didn't get the super function

# Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.
n = my_list[0]
p = my_list[0+i]
try:
    sum(my_list)
except:
    raise TypeError('There are characters that are not in numbers in the list')

# my_list = [2, 3,1,2,"four",42,1,5,3,"imanumber"]
