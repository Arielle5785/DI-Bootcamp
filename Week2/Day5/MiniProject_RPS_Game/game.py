import random


class Game:
    def __init__(self):
        self.item_c = ''

    def get_user_item(self):
        while True:
            item = input('Select (r)ock, (p)aper, or (s)cissors: ').lower()
            if item not in ['r', 'p', 's']:
                print('Invalid choice, you must type either \'r\' for rock, \'p\' for paper, or \'s\' for scissors. Try again')
            else:
                return item

    def get_computer_item(self):
        self.item_c = random.choice(['r', 'p', 's'])
        

    # def get_game_result(self, user_item, computer_item):
    #     self.user_itme = user_item
    #     self.computer_item = item_c
    #     if user_item == item_c
    #     pass
    # def play(self):
    #     pass


game = Game()
user_choice = game.get_user_item()
print(f'You have selected : {user_choice}')
game.get_computer_item()
print(f'The computer selects: {game.item_c}')

