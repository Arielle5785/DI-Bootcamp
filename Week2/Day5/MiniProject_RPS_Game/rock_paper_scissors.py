from game import Game

# this should display a simple menu, get the user’s choice (with data validation), and return the choice.
# No looping should occur here. !!!! no class is required.
# The possibles choices are: Play a new game or Show scores or Quit


def get_user_menu_choice():
    print("\nMenu:")
    print("(g) Play a new game")
    print("(x) Show scores & quit")

    choice = input(
        "Enter your choice play a new (g)ame or e(x)it: ").strip().lower()
    if choice in ['g', 'x']:
        return choice
    else:
        print("Invalid choice. Please type g or x. Try again.")
        return get_user_menu_choice()


def print_results(results):
    print("\nGame Results Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("\nThank you for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()
        if choice == 'g':
            # Play a new game
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == 'x':
            print('You quit the game.')
            print_results(results)
            break


if __name__ == "__main__":
    main()
