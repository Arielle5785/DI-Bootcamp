with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week2\\Day4\\exreciseCourse.txt', 'r+', encoding='utf-8') as f:
    # content = f.read()
    # content = f.readline(5)
    # content = f.read(5)
    # list_text = f.readlines()
    # for line in list_content:
    #     print(line)
    # content = line
    # # # content = f.writelines(seq)
    # print(content)

    #4
    # print(list_content)
    # for line in list_content:
    #     line.split()
    occurences = {"Darth":0, 'Leah':0, "Luke":0}
    for line in occurences:
        if line == 'Darth\n':
            occurences['Darth'] +=1
        if line == 'Lea\n':
            occurences['Lea'] += 1
        if line == 'Luke\n':
            occurences['Luke'] += 1
            print(occurences)
