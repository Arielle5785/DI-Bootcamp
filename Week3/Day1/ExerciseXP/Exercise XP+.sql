-- CREATE TABLE students(id SERIAL PRIMARY KEY, last_name VARCHAR (20), first_name VARCHAR (20), birth_date date );
-- INSERT INTO students (first_name, last_name, birth_date)
-- -- VALUES ('Marc', 'Benichou', '1998-12-03');
-- VALUES ('Yoan','Cohen','2010-12-03'),
-- ('Lea','Benichou','1987-07-27'),
-- ('Amelia','Dux','1996-04-07'),
-- ('David','Grez','2003-06-14'),
-- ('Omer','Simpson','1980-10-03');
-- VALUES ('Arielle', 'Benadi','1968-05-31');
-- DELETE FROM students WHERE last_name = 'Arielle'
-- SELECT * FROM students WHERE first_name = 'Arielle'
SELECT * FROM students
-- SELECT first_name, last_name FROM students WHERE
-- -- id = 2;
-- last_name = 'Benichou' AND first_name = 'Marc';
-- first_name LIKE '%a%'
-- first_name LIKE 'A%'
-- first_name LIKE '%a'
-- first_name LIKE '%a_'
-- id = 1 or id = 3;
-- SELECT * FROM students WHERE birth_date >= '2000-01-1';
