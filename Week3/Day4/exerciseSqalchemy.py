import psycopg2


####psycopg2
connection = psycopg2.connect(database = 'countries',
                              user = 'postgres',
                              password = '3443',
                              host='localhost',
                              port='5433')

cursor = connection.cursor()
cursor.execute('DROP TABLE IF EXISTS random_countries')
create_table_query = f'''CREATE TABLE random_countries (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        capital VARCHAR(100) NOT NULL,
                        flag_code VARCHAR(100),
                        population INTEGER)'''

cursor.execute(create_table_query)
connection.commit()


