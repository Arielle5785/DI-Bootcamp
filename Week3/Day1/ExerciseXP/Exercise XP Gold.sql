-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT first_name, last_name, birth_date FROM students ORDER BY last_name FETCH NEXT 4 ROWS ONLY; 
-- Fetch the details of the youngest student.
-- SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC FETCH NEXT 1 ROWS ONLY; 
-- Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date FROM students OFFSET 2 FETCH NEXT 3 ROWS ONLY; 
-- select * from students
