# Challenge 1 To attention of Raquel: I don't understand the last example, result is {'g': [0], 'r': [1], 'a': [2], 'p': [3], 'e': [4], 's': [5]}
    # Ask a user for a word
# word = input('Enter one word, please: ')
    # Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
# index = 0
# word_index = {letter: [index for index, char in enumerate(word) if char == letter] for letter in word}
# print(word_index)
    # Make sure the letters are the keys.ok
    # Make sure the letters are strings.ok
    # Make sure the indexes are stored in a list and those lists are values.ok
    # Examples
    # "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
    # "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
    # "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

#Challenge 2+ Not correct.
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.ok
# Return “Nothing” if you can’t afford anything from the store.

# Initialize lists and variables
# Initialize lists and variables
items = []
prices = []
total_cost = 0  # Tracks the total cost of all items added to the cart

# Get the user's wallet amount and check if it’s a valid number
wallet = input('Enter the amount of dollars in your wallet: $')
if wallet.replace('.', '', 1).isdigit():
    budget = float(wallet)  # Convert to float for currency calculations
else:
    print("Invalid input. Setting budget to $0.")
    budget = 0

keep_asking = True

while keep_asking and budget > 0:
    # Get the item name
    q_item = input('Enter the item to buy. Type "exit" to check out: ').lower()
    
    # Check if user wants to exit
    if q_item == 'exit':
        break

    # Get the price and ensure it's a valid number
    q_price = input('Enter the price of the item: $')
    if q_price.replace('.', '', 1).isdigit():  # Allows one decimal for prices
        q_price = float(q_price)
    else:
        print("Invalid price input. Please enter a valid price.")
        continue

    # Check if item is affordable and add if it is
    if q_price <= budget:
        items.append(q_item)
        prices.append(q_price)
        budget -= q_price  # Deduct price from remaining budget
        total_cost += q_price  # Update total cost
        print(f"{q_item.capitalize()} added to cart. Remaining budget: ${budget:.2f}")
    else:
        print(f"You cannot afford {q_item}. You need an additional ${q_price - budget:.2f}.")
        # Allow the loop to continue in case the user has budget left to afford other items

# Sort items alphabetically
items.sort()

# Create a dictionary for the shopping cart
cart = dict(zip(items, prices))

# Display results
if cart:
    print("\nYour shopping cart:")
    for item, price in cart.items():
        print(f"{item.capitalize()}: ${price:.2f}")
else:
    print("Nothing to buy today")

