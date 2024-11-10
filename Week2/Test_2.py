#oop : creating objects
class PlayerCharacter:
    def __init__(self, name):
        self.name = name

    def run(self):
        print('run')    

player_1 = PlayerCharacter()

print(player_1)
