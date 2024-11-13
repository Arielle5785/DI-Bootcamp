# from func import xyz
# import random
# import string
from datetime import datetime
from faker import Faker
# print(dir(string))
# print(xyz(3, 2))

# Exercise 3: #first, import the random and string module built-in. then use the ascii_letters to get upper and lower cases, coming from the string. Refer to dir(). Then combine the radom and the string.
# def random_string(length=5):
#     letters = string.ascii_letters
#     return ''.join(random.choice(letters) for _ in range(length))
# print(random_string())

# Exercise 4: first import the datetime module buit-in, then create the function. Pay attention no Class, no self.simple.

# x = datetime.datetime(2024, 11,12) #year, month, day HH:MM:SS
# print(x.strftime('%x'))#mm/dd/yy ref W3

# Exercise 5
# def from_now_to_jan():
#   x = datetime.datetime.now() #2024-11-12 16:28:47.375044
#   next_year = int(x.strftime('%Y')) + 1
#   new_year = datetime.datetime(next_year, 1, 1)
#   time_left = new_year - x  # 49 days, 7:04:39.339714

#   days = time_left.days
#   hours, remainder = divmod(time_left.seconds, 3600)
#   minutes, seconds = divmod(remainder, 60)

# print(f"{days} days, {hours:02}:{minutes:02}:{seconds:02}")

# print(help(divmod)) divmod(x, y, /)
# Return the tuple(x//y, x % y).  Invariant: div*y + mod == x.

# Exercise 6 TA not sure it is correct: whe taking the date of yesterday I should have around 1440, and get a result of 2500, like it counts one more day.
# def birthday():
#     bday = input ('enter your bday, 1968-5-31: ')
#     bday_cv = datetime.strptime(bday, '%Y-%m-%d')
#     x = datetime. now()
#     life_time = x - bday_cv
#     # Convert the time difference to minutes
#     minutes = life_time.total_seconds() // 60

#     print(f"You have lived approximately {int(minutes):,} minutes.")

# birthday()

# Exercise 7
# pip install Faker. Then import faker from Faker
fake = Faker()
users = []
keys = ['name', 'adress', 'langage_code']


def add_user():
    user_data = {
        'name': fake.name(),
        'address': fake.address(),
        'langage_code': fake.language_code()
    }
    users.append(user_data)


# add_user()
# add_user()

# print(users)

# print(help(datetime))
# print(dir(datetime))

