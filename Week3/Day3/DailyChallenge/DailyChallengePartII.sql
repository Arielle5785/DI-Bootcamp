-- Part II:
-- Create a table named Book, with the columns :
-- book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY,
-- book_title TEXT NOT NULL,
-- book_author VARCHAR(100)NOT NULL
-- );

-- Insert those books :
-- INSERT INTO book (book_title, book_author)
-- VALUES('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'), ('To kill a mockingbird', 'Harper Lee'); 

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, 
-- name NOT NULL UNIQUE, age. 
-- Make sure that the age is never bigger than 15 (Find an SQL method);
-- CREATE TABLE student (
-- student_id SERIAL PRIMARY KEY,
-- student_name VARCHAR (100)NOT NULL UNIQUE,
-- student_age INT CHECK (student_age <= 15)

-- Insert those students:
-- INSERT INTO student (student_name,student_age)
-- VALUES 
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- Create a table named Library, with the columns :
-- CREATE TABLE library (
-- borrowed_id SERIAL PRIMARY KEY,
-- book_id INT NOT NULL,
-- student_id INT NOT NULL,
-- borrowed_date DATE NOT NULL,
-- FOREIGN KEY (book_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_id) REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE)

-- Add 4 records in the junction table, use subqueries.
-- INSERT INTO library (book_id,student_id,borrowed_date)
-- VALUES 
-- ((SELECT book_id FROM book where book_title = 'Alice In Wonderland'), 
-- (SELECT student_id FROM student where student_name='John'),'2022-02-15'),
-- ((SELECT book_id FROM book where book_title = 'To kill a mockingbird'), 
-- (SELECT student_id FROM student where student_name='Bob'),'2021-03-03'),
-- ((SELECT book_id FROM book where book_title = 'Alice In Wonderland'), 
-- (SELECT student_id FROM student where student_name='Lera'),'2021-05-23'),
-- ((SELECT book_id FROM book where book_title = 'Harry Potter'), 
-- (SELECT student_id FROM student where student_name='Bob'),'2021-08-12');

-- Display the data: Select all the columns from the junction table
-- select * from library

-- Display the data: Select the name of the student and the title of the borrowed books
-- SELECT student.student_name, book.book_title
-- FROM library
-- JOIN student
-- 	ON library.student_id = student.student_id
-- JOIN book
-- 	ON book.book_id = library.book_id

-- Display the data: Select the average age of the children, that borrowed the book Alice in Wonderland
-- SELECT AVG(student.student_age) AS average_age
-- FROM student
-- JOIN library
-- 	ON library.student_id = student.student_id
-- JOIN book
-- 	ON book.book_id = library.book_id
-- WHERE book.book_title = 'Alice In Wonderland';

-- Display the data: Delete a student from the Student table, 
-- what happened in the junction table ? the student record was also deleted since the on delete cascade.
-- DELETE FROM student WHERE student_id = 2






