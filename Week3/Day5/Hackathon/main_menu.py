
from datetime import datetime
welcome_message= input(
    '''
    Welcome to the self motivated application. To measure your progress with weight and fitness session.
    It is totally free.
    We will ask you first your credentials. Together, we\'ll set the session(s).
    YOU MUST update on daily basis your accomplishment on the sessions, and your weight.
    ''')
# user_first_name = input (' Enter your first name: ') # varchar(50)
# user_last_name = input ('Enter your last name: ') # varchar(50)
# user_dob = input ('Enter your date of birth. e.g. 2024-12-31: ') # date, vaidation required, calculation of age
# user_email = input ('Enter your email address: ') # text, vallidation rquired if @ included
# user_city = input ('Enter the city you live in: ') # we could do a table with the list of cities in Israel. OPTIONAL, question of time
# user_gender = input ('Enter your gender. (F)emale or (M)ale: ') # validation required on F or M
# fitness = input ('Do you have any subscription to a fitness center? (Y)es or (N)o: ') # validation required on Y or N. OPTIONAL ask for the next question?
# alternative_fitness= input ('Do you plan to go walking, running or swimming, by yourself? (Y)es or (N)o:  ') # validation required on Y or N.
# fitness_center = input ('Enter the address of the fitness center: ')# track the address
# fitness_alarm_day = input('''Enter the weekday ((M)onday, (T)uesday...) you are attending the session(s)per week. 
#                       Type (H)our to set the hour. Type e(X)it to end all the sessions: ''') # validation on the letter of the weekday. validation on X. Keep asking till X. valiation on H.

# fitness_alarm_hour = input('''Enter the time you are attending the session(s)per week. 
#                       Type (D)ay to set the next day. Type e(X)it to end all the sessions: ''') # 

# #print the summary of the schedule
# fitness_session_confirm = input('Enter (Y)es to confirm, otherwise (N)o: ')# to confirm the sessions. No to 
# fitness_notification = print(f'Today{fitness_alarm_day}, you have a session at {fitness_alarm_hour}.')# to be notified one hour before the session, the same day.
# fitness_session_accomplished = input ('Enter (C)omplete, to confirm you actually did your session. Otherwise (U)ncomplete: ')# validation with the return.
user_profile_w = input ('Enter your weight in kg: ') # validate the number format, stamp with the date
timestamp = datetime.now()# extract the day 
formatted_timestamp = timestamp.strftime("%Y-%m-%d")
user_profile_h = input ('Enter your height in com: ') # validate the number format. 
user_weight_notification = print ('''f'{formatted_timestamp} is the last time you have recorded your weight ({user_profile_w}).
                                  Please enter it again: ''')#validate the number format.
timestamp = datetime.now()# date updated
formatted_timestamp = timestamp.strftime("%Y-%m-%d") #date formatted updated 