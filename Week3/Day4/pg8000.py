print('hello')
import pg8000


connection = pg8000.connect(database = 'bootcamp',
                              user = 'postgres',
                              password = '3443',
                              host='localhost',
                              port='5433')

cursor = connection.cursor()

create_table_query = f'''CREATE TABLE random_countries2 (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        capital VARCHAR(100) NOT NULL,
                        flag_code VARCHAR(100),
                        population INTEGER)'''

cursor.execute(create_table_query)
connection.commit()
connection.close()
