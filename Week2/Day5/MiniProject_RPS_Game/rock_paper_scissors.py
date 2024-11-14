from game import Game

# this should display a simple menu, get the user’s choice (with data validation), and return the choice.
# No looping should occur here. !!!! no class is required.
# The possibles choices are: Play a new game or Show scores or Quit
class Menu:
    def __init__(self):
        pass

def get_user_menu_choice():
    keep_asking = True
    print("\nMenu:")
    print("(g) Play a new game")
    print("(x) Show scores & quit")

    while keep_asking:
        choice = input("Enter your choice play a new (g)ame or e(x)it: ").strip().lower()
        if choice == 'g':
            Game.get_user_item()
        elif choice == 'x':
            keep_asking = False
        else:
            print("Invalid choice. Please type g or x")
            return get_user_menu_choice()


def print_results(results):
    print("\nGame Results:")
    print(f"Wins: {results('win', 0)}")
    print(f"Losses: {results('loss', 0)}")
    print(f"Draws: {results('draw', 0)}")
    print("\nThank you for playing!")


def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}  # Dictionary to store results

    while True:
        choice = get_user_menu_choice()

        if choice == 'x':  # Play a new game
            game = Game()
            result = game.play()

            # Update the results dictionary based on the game's outcome
            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            elif result == 'draw':
                results['draw'] += 1

        elif choice == 'g':  # Show scores
            Game.get_user_item()



# Run the main function
if __name__ == "__main__":
    menu = Menu
    main()
