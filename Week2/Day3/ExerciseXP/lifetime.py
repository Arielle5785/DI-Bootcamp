# Exercise 6 TA not sure it is correct: whe taking the date of yesterday I should have around 1440, and get a result of 2500, like it counts one more day.

from datetime import datetime
def birthday():
    bday = input('enter your bday, 1968-5-31: ')
    bday_cv = datetime.strptime(bday, '%Y-%m-%d')
    x = datetime. now()
    life_time = x - bday_cv
    # Convert the time difference to minutes
    minutes = life_time.total_seconds() // 60
    print(f"You have lived approximately {int(minutes):,} minutes.")


birthday()
