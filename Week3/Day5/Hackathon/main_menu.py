welcome_message= input(
    '''
    Welcome to the self motivated application. To measure your progress with weight and fitness session.
    It is totally free.
    ''')
user_first_name = input (' Enter your first name: ') # varchar(50)
user_last_name = input ('Enter your last name: ') # varchar(50)
user_dob = input ('Enter your date of birth. e.g. 2024-12-31: ') # date, vaidation required, calculation of age
user_email = input ('Enter your email address: ') # text, vallidation rquired if @ included
user_city = input ('Enter the city you live in: ') # we could do a table with the list of cities in Israel. OPTIONAL, question of time
user_gender = input ('Enter your gender. (F)emale or (M)ale: ') # validation required on F or M
fitness = input ('Do you have any subscription to a fitness center? (Y)es or (N)o: ') # validation required on Y or N. OPTIONAL ask for the next question?
alternative_fitness= input ('Do you plan to go walking, running or swimming, by yourself? (Y)es or (N)o:  ') # validation required on Y or N.
fitness_center = input ('Enter the address of the fitness center: ')# track the address
fitness_alarm = input('''Enter the weekday ((M)onday, (T)uesday...) you are attending the session(s)per week. 
                      Type e(X)it when all the sessions are set: ''') # validation on the letter of the weekday. validation on X. Keep asking till X




