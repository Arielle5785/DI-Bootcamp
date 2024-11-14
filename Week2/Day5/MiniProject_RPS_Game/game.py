import random


class Game:
    def __init__(self):
        self.item_c = ''
        self.item = ''

    def get_user_item(self):
        while True:
            item = input('Select (r)ock, (p)aper, or (s)cissors: ').lower()
            if item not in ['r', 'p', 's']:
                print('Invalid choice, you must type either \'r\' for rock, \'p\' for paper, or \'s\' for scissors. Try again')
            else:
                self.item = item
                return item

    def get_computer_item(self):
        self.item_c = random.choice(['r', 'p', 's'])
        return self.item_c

    def get_game_result(self):
        if self.item == self.item_c:
            print(' This a draw.')
            return 'draw'
        elif (self.item == 'r' and self.item_c == 's') or \
             (self.item == 'p' and self.item_c == 'r') or \
             (self.item == 's' and self.item_c == 'p'):
            print('The player won against the computer. Congratulations!')
            return 'win'
        else:
            print('The computer won against the player.')
            return 'loss'

    def play(self):
       self.get_user_item()
       self.get_computer_item()
       return self.get_game_result()


# game = Game()
# user_choice = game.get_user_item()
# print(f'You have selected : {user_choice}')
# game.get_computer_item()
# print(f'The computer selects: {game.item_c}')
# game.get_game_result()
