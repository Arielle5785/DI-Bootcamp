# matrix = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]

# # Print each row on a new line
# for row in matrix:
#     print(row)

display_board =[
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

def print_board():
    print('Welcome to TIC TAC TOE!\n\n\n')
    print('TIC TAC TOE\n')
    print('***********************')

    for row in display_board :
        print('*  ','   | '.join(row),'    *')
        print('*  ','--- | --- | ---  ','*')

    print('***********************')

print_board()
