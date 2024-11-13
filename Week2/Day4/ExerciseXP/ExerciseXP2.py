import json

with open ('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day4\\ExerciseXP\\family.json', 'r+', encoding ='utf-8') as f:
    # we convert a json file into a python dict
    my_family2 = json.load(f)
    # print(my_family2)
    # {'company': {'employee': {'name': 'emma', 'payable': {'salary': 7000, 'bonus': 800}}}}
    # salary = my_family2['company']['employee']['payable']['salary']
    # print('Salary:', salary)
    my_family2.setdefault('company', {}).setdefault('employee', {})['birthday'] = '1968-05-31'
    print(my_family2)

    f.seek(0)
    json.dump(my_family2,f,indent=4)
    f.truncate()




