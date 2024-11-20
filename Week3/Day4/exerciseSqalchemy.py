
import sqlalchemy
from sqlalchemy import create_engine
DATABASE_URL = "postgresql://postgres:1973@localhost:5433/countries"

engine = create_engine(DATABASE_URL)

connection = engine.connect()
create_table_query = f'''CREATE TABLE random_countries (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        capital VARCHAR(100) NOT NULL,
                        flag_code VARCHAR(100),
                        population INTEGER)'''

connection.execute(create_table_query)
connection.commit()
connection.close()
