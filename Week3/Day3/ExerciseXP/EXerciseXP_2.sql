-- Exercise 2 : DVD Rental
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- select * from language
-- italian = 2, japanese = 3
-- select * from film film_id 133 = italian, 384 = japanese
-- UPDATE film SET language_id = 2  WHERE film_id = 133;
-- UPDATE film SET language_id = 3  WHERE film_id = 384;


-- Which foreign keys (references) are defined for the customer table? store_id
-- select * from customer
-- select * from store
-- How does this affect the way in which we INSERT into the customer table? we need to enter it manually,
-- while the data existed already and we could make errors/typos.


-- We created a new table called customer_review. 
-- Drop this table. Is this an easy step, or does it need extra checking? no extra step as the customer_review is a child table, not a parent table.
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES (2, 1, 'great movie', 8, 'had a good time. Enjoying the actors play, the music and the story.', '2024-11-19'),
-- (3, 1, 'SO-SO movie', 5, 'Another RomCom', '2024-11-19');
-- DROP TABLE customer_review

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet). 
-- SELECT COUNT (rental_id) FROM rental  where return_date is NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- select rental.return_date, rental.inventory_id, inventory.inventory_id, inventory.film_id , 
-- film.film_id, film.replacement_cost
-- from rental
-- join inventory
-- 	on rental.inventory_id = inventory.inventory_id
-- join film
-- 	on inventory.film_id = film.film_id
-- where return_date is NULL
-- order by film.replacement_cost DESC limit 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
-- but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- select * from film
-- where description ilike '%sumo wrestler%'
-- select film.film_id, film.description, film_actor.actor_id, film_actor.film_id, actor.actor_id,actor.first_name , actor.last_name
-- from actor
-- join film_actor
-- 	on film_actor.actor_id = actor.actor_id
-- join film
-- 	on film_actor.film_id = film.film_id
-- where actor.first_name = 'Penelope' 
-- 	AND actor.last_name = 'Monroe' 
-- 	AND film.description ilike '%sumo wrestler%';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- select description, film_id, title from film where description ilike '%documentary%' and length < 60 and rating = 'R'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
-- select rental.customer_id, rental.return_date, customer.customer_id, customer.first_name, customer.last_name, film.rental_rate, film.film_id
-- from rental
-- join customer
-- 	on rental.customer_id = customer.customer_id
-- join film
-- 	on rental.inventory_id = film.film_id
-- where customer.first_name = 'Matthew'
-- AND customer.last_name = 'Mahan'
-- AND rental.return_date between '2005-07-28'AND '2005-08-01'
-- AND film.rental_rate > 4.00

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, 
-- and it looked like it was a very expensive DVD to replace.
select rental.customer_id, rental.return_date, customer.customer_id, customer.first_name, customer.last_name,  
film.film_id, film.title, film.description, film.replacement_cost
from rental
join customer
	on rental.customer_id = customer.customer_id
join film
	on rental.inventory_id = film.film_id
where customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND (film.title ilike '%boat%'
OR film.description ilike '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 10;
