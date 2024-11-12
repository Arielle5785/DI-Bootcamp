class BankAccount:
    #class attribute meaning that every bank account. to increment it is defined
    ACCOUNT_AVAILABLE_NUMBER = 1000
    BANK_NAME = 'Hapoalim'
    
    # transaction is not declared since it is tracking what will hapend, we set the balance to default
    def __init__(self,__owner_name, account_number, balance=0):

        self.__owner_name = owner_name  # we need to add 2 underscores to make it private
        self.account_number = BankAccount.ACCOUNT_AVAILABLE_NUMBER 
        self.transaction = []
        self._balance = balance #proteted attribue  we add an underscore in front of the 
        BankAccount.ACCOUNT_AVAILABLE_NUMBER += 1
    @property
    def balance(self):
        return self._balance
    
    @balance.setter
    def balance(self,value):
        self._balance = value
        return self
    
    @classmethod#method that is set without creating an object
    def get_next_available_num(cls):
        return cls.ACCOUNT_AVAILABLE_NUMBER
    @staticmethod# method that within the class but doesn' t self
    def conversion(amount, rate):
        return amount * rate
    def show_balance(self):
        print(f'Your balance now is {self.balance}')

    def deposit(self, amount, currency = 'shekel'):
        if currency == 'dollard':
            amount = self.conversion (amount,3.77)
            self.balance += amount
        # self.show_balance()
        else:
            self.balance += amount
        self.transaction.append(f'Deposit: {amount}')
        return self

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            # self.show_balance()
            self.transaction.append(f'Withdraw : {- amount}')
        else:
            print('You don\'t have enough balance')
        return self

    def show_transaction(self):
        for i, track in enumerate(self.transaction):
            print(f'transaction {i+1}:  {track}')
        return self
    
    def __str__(self):
        output = f'''Account Number :{self.number}'''
        return output

my_account1 = BankAccount('Arielle Benadi', 100)
print(my_account.account_number)
my_account2 = BankAccount('Harry Potter', 100)
print(my_account.account_number)
my_account3 = BankAccount('AHermione Granger', 100)
print(my_account.account_number)
# my_account.deposit(500).withdraw(25).deposit(
#     100).withdraw(25).deposit(50).withdraw(25)
# my_account.show_transaction()
# my_account.show_balance()
# print(my_account._balance)
# print(my_account.__owner_name)
# print(my_account._BankAccount__owner_name)

# implement on those methods (except show_balance() a code that will add their action to the transaction list.
# and do a deposit and a withdraw and then print the transaction list to see the tracked information
my_account.balance = 50
print(my_account.balance)