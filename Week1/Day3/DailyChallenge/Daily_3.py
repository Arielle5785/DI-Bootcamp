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

#Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.ok
# Return “Nothing” if you can’t afford anything from the store.

items = []
price = []
keep_asking = True
q_wallet = input('Enter the amount of dollars in you wallet: $ ')
budget = float(q_wallet)

while keep_asking:
    q_items = input('Enter the item to buy. Type "exit" to check out: ').lower()
      
    if q_items == 'exit':
        break
    q_price = float(input('Enter the price of the item: $'))
   
    if budget < q_price:
        keep_asking = False
        print('Nothhing to buy today')
        
    elif total > budget:
        print(f"You cannot afford {q_items}. You need an additional ${price - budget:.2f}.")
        continue
    
    else:
        budget -= q_price
        items.append(q_items)
        items.sort()
        dict_cart = dict(zip(items, q_price))

print("Your shopping cart:")
print(dict_cart)

