# # Exercises 1:Currencies
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f'{self.amount} {self.currency}s'

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         return f'{self.amount} {self.currency}s'

#     def __iadd__(self, other):
#         if self.currency != other:
#             raise ValueError(
#                 f'Cannot add between Currency type {self.currency} and {other}')
#         else:
#             return f'{self.currency} {self.amount + other}'

#     def __add__(self, number):
#         self.amount += 5
#         return self.amount

#     # Your code starts HERE
# # Using the code above, implement the relevant methods and dunder methods which will output the results below.
# # Hint: When adding 2 currencies which don’t share the same label you should raise an error.
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# # str(c1)
# # '5 dollars'
# print(str(c1))
# # int(c1)
# # 5
# print(int(c1))  # instead of print(c1.int())
# # repr(c1)
# # '5 dollars'
# print(repr(c1))
# # c1 + 5
# # 10
# print(c1+5)
# # c1 + c2
# # 15
# print(c1.iadd(c2))
# # c1
# # 5 dollars
# print(str(c1))
# # c1 += 5
# # c1
# # 10 dollars
# print(add(c1))
# # c1 += c2
# # c1
# # 20 dollars
# print(c1.iadd(c1, c2))
# # c1 + c3
# # TypeError: Cannot add between Currency type < dollar > and < shekel >
# print(c1.iadd(c3))
