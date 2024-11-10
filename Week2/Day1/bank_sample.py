class BankAccount:
    # transaction is not declared since it is tracking what will hapend, we set the balance to default
    def __init__(self, owner_name, account_number, balance=0):

        self.owner_name = owner_name
        self.account_number = account_number
        self.transaction = []
        self.balance = balance

    def show_balance(self):
        print(f'Your balance now is {self.balance}')

    def deposit(self, amount):
        self.balance += amount
        # self.show_balance()
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


my_account = BankAccount('Arielle Benadi', 'BE1234567657', 100)
my_account.deposit(500).withdraw(25).deposit(
    100).withdraw(25).deposit(50).withdraw(25)
my_account.show_transaction()
my_account.show_balance()


# implement on those methods (except show_balance() a code that will add their action to the transaction list.
# and do a deposit and a withdraw and then print the transaction list to see the tracked information
