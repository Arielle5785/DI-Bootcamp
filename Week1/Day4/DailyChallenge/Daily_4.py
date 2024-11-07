matrix=[
    ['7ii'], #0
    ['Tsx'], #1
    ['h%?'], #2
    ['i #'], #3
    ['sM '], #4
    ['$a '], #5
    ['#t%'], #6
    ['^r!']  #7
]
# print(matrix)
for i in enumerate(matrix):
    col1 = len(matrix[i][0])
    col2 = len(matrix[i][1])
    col3 = len(matrix[i][2])
print (f'column1: {col1}\ncolumn2: {col2}\ncolumn3: {col3}')


