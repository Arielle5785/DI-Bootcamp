import pg8000

connection = pg8000.connect(database='restaurant',
                            user='postgres',
                            password='3443',
                            host='localhost',
                            port='5433')

cursor = connection.cursor()
