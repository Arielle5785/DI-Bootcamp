-- Exercise 1: DVD Rental

-- Get a list of all the languages, from the language table.
-- select name from language

-- Get a list of all films joined with their languages (language_id) – select the following details : film title, description, and language name.
-- SELECT film.title, film.description, language.name
-- FROM film
-- JOIN language
-- ON film.language_id = language.language_id
-- select distinct language_id  from film

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT film.title, film.description, language.name
-- FROM language
-- FULL JOIN film
-- ON film.language_id = language.language_id
-- order by language.name DESC

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- id SERIAL PRIMARY KEY,
-- name TEXT);
-- INSERT INTO new_film (name)
-- VALUES ('A room with a view'), ('Love actually'), ('Overboard'), ('Lethal Weapon')

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INT,
-- language_id INT,
-- title VARCHAR (100),
-- score INT NOT NULL CHECK (score BETWEEN 1 AND 10),
-- review_text TEXT,
-- last_update DATE NOT NULL,
-- CONSTRAINT fk_film FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost)
-- VALUES ('A room with a view','romantic movie 19th century in Italy.', 1986, 1, 1, 4.99, 120, 14.99 ); 
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES (1, 1, 'great movie', 8, 'had a good time. Enjoying the actors play, the music and the story.', '2024-11-19'),
-- (1, 1, 'SO-SO movie', 5, 'Another RomCom', '2024-11-19');
-- select * from customer_review
-- select * from new_film

-- Delete a film that has a review from the new_film table, what happens to the customer_review table? the review was deleted.
-- DELETE FROM new_film WHERE id = 1
-- select * from customer_review
