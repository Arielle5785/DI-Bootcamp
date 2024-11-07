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
    print('***********************')

    for row in display_board :
        print('*  ','   | '.join(row),'    *')
        print('*  ','--- | --- | ---  ','*')

    print('***********************')

print_board()
#ask the player the position
#replace the position in the ref_board
#call the function to print the X and O

#determine the player X or O
# make X  or O dynamic
# def xo_select():
#     xo = input('Select X or O to play: ').upper()

#     while xo not in ('X', 'O'):
#         print('Only the alphabetic letters X or O can be used in this game.')
#         xo = input('Select X or O to play: ').upper()
#         if xo == 'X':
#             i= 1 and turn == 'O'
#         elif:
#             i= 2 and turn == 'X' 
#         else:       
#         return

store_x = []
store_o = []  
def player_input(player):
    keep_asking = True
    # player_input()
    row_question = int(input('What position do you play? Type 1, for the first row, 2 for the second and 3 for the last: '))
    col_question = int(input('What position do you play? Type 1, for the first column, 2 for the second and 3 for the last: '))

    while not (1<= row_question <= 3 and 1<= col_question <= 3) or display_board[row_question-1][col_question-1] != ' ':
        print(f'The position is already fullfilled or invalid reply. Try again.')
        row_question = int(input('What position do you play? Type 1, for the first row, 2 for the second and 3 for the last: '))
        col_question = int(input('What position do you play? Type 1, for the first column, 2 for the second and 3 for the last: '))
    display_board[row_question-1][col_question-1] = player
    if player == 'X':
        store_x.append((row_question-1,col_question-1))
    else:
        store_o.append((row_question-1,col_question-1))

    

#definie functions OK
# print(player_input())
win_combination = [
    [(0,0), (0,1), (0,2)],
    [(1,0), (1,1), (1,2)],
    [(2,0), (2,1), (2,2)],
    [(0,0), (1,0), (2,0)],
    [(0,1), (1,1), (2,1)],
    [(0,2), (1,2), (2,2)],
    [(0,0), (1,1), (2,2)],
    [(0,2), (1,1), (2,0)]
    ]
# return1 = check_win()
def check_win(store, player):
    for comb in win_combination:
        count = 0
        for lists in comb:
            if lists in store:
                count +=1
            else:
                break
            if count == 3:
                print(f'The Player{player} has won!')
                return True
 
def check_tie(store, player):
    if not check_win(store, player) :
        filled_positions= 0
        cell = display_board[row_question-1][col_question-1]
        if cell != ' ':
            filled_positions +=1
        elif filled_positions == 9:
            print("It's a tie!")
            return True
        return False


# Main game function
def game():
    while True:
        player_input('X')
        print_board()
        if check_win(store_x,'X'):
            break
        if check_tie(store_x,'X'):
            break

        player_input('O')
        print_board()
        if check_win(store_o,'O'):
            break
        if check_tie(store_o,'O'):
            break

game()



