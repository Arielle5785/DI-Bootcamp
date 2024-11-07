

# matrix=[
#     ['*****************'],
#     [''],
#     ['*  ','   ','|','   ','|','   ','  *'],
#     [''],
#     ['*  ','---','|','---','|','---','  *'],
#     [''],
#     ['*  ','   ','|','   ','|','   ','  *'],
#     [''],
#     ['*  ','---','|','---','|','---','  *'],
#     [''],
#     ['*  ','   ','|','   ','|','   ','  *'],
#     [''],
#     ['*****************'],
# ]
#First create the list where to insert the X & O
#Print the title, the outside boarder
#create a loopin that function that repeats the 2 same rows
#end by printing the ast row of *. Out of the loop.
display_board =[
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

def print_board():
    print('Welcome to TIC TAC TOE!\n\n\n')
    print('TIC TAC TOE\n')
    print('*****************')

    for row in display_board :
        print('*  ','   | '.join(row),'    *')
        print('*  ','--- | --- | ---  ','*')

    print('*****************')

print_board()

#player_input(player) - to get the position from the player



