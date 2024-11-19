-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- CREATE TABLE customer (
-- c_id SERIAL PRIMARY KEY,
-- c_first_name VARCHAR (50) NOT NULL,
-- c_last_name VARchar (100) NOT NULL
-- );
-- CREATE TABLE customer_profile(
-- cp_id SERIAL PRIMARY KEY, 
-- cp_isLoggedIn BOOLEAN DEFAULT false,
-- cp_customer_id INT NOT NULL,
-- FOREIGN KEY (cp_customer_id) REFERENCES customer (c_id));

-- Insert those customers
-- INSERT INTO customer (c_first_name, c_last_name)
-- VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- Insert those customer profiles, use subqueries
-- INSERT INTO customer_profile (cp_isLoggedIn,cp_customer_id )
-- VALUES (true, (SELECT c_id FROM customer WHERE c_first_name='John')),
-- (false,(SELECT c_id FROM customer WHERE c_first_name='Jerome') )

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
-- SELECT customer.c_first_name, customer_profile.cp_isLoggedIn
-- FROM customer
-- JOIN customer_profile
-- ON customer.c_id = customer_profile.cp_id
-- WHERE customer_profile.cp_isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - 
-- even the customers those who don’t have a profile.
-- SELECT customer.c_first_name, customer_profile.cp_isLoggedIn
-- FROM customer
-- FULL JOIN customer_profile
-- ON customer.c_id = customer_profile.cp_id

-- The number of customers that are not LoggedIn
-- SELECT COUNT(cp_id) FROM customer_profile WHERE cp_isLoggedIn = false
