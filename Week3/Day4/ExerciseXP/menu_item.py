from config import connection, cursor
from dotenv import load_dotenv
import os

load_dotenv()

# db_database = os.getenv('database'),
# db_user = os.getenv('username'),
# db_password = os.getenv('password'),
# db_host = os.getenv('host'),
# db_port = os.getenv('port')


class MenuItem:
    def __init__(self, name, price=0):
        self.name = name.lower()
        self.price = price


    def save(self):
        '''Save the menu item to the database.'''
        query = "INSERT INTO menu_items (item_name, item_price) VALUES ('%s', '%s')" %(self.name, self.price)
        cursor.execute(query)
        connection.commit()
        connection.close()


    def delete(self):
        """Delete the menu item from the database."""
        query = "DELETE FROM Menu_Items WHERE item_name = '%s'"%(self.name)
        cursor.execute(query)
        connection.commit()
        print(f"Menu item '{self.name}' deleted successfully!")
        connection.close()


    # def update(self, new_name=None, new_price=None):
    #     """Update the menu item in the database."""
    #     query = f"UPDATE Menu_Items SET {
    #             ', '.join(query_parts)} WHERE item_name = %s"
    #         cursor.execute(query, tuple(params))
    #         connection.commit()
    #         print(f"Menu item '{self.new_name}' updated successfully!")
    #     except Exception as e:
    #         print(f"Error updating menu item: {e}")
    #     finally:
    #         if connection:
    #             cursor.close()
    #             connection.close()


hamburger = MenuItem('Burger', 35)
hamburger.save()
# hamburger.delete()
# hamburger.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()
