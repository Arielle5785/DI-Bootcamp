class Door:
    def __init__(self,is_opened = True):
        self.is_opened = is_opened

    def open_door(self):
        if self.is_opened:
            print('The door was already opened')
        else:
             print('the door is now opened')

    def close_door(self):
        if not self.is_opened:
            print('The door was already closed')
        else:
            print('the door is now closed')
            self.is_opened =True     

class BlockedDoor(Door):
    def open_door(self):
        raise Exception ('Blockedd Door cannot be opened')

    def close_door(self):
        raise Exception('Blockedd Door cannot be closed')


case1 = Door(True)
case2 = Door(False)
case1.open_door()
case1.close_door()
case3 = BlockedDoor()
case3.open_door()

