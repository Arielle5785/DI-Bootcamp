--Aggregate functions
-- select * from actors
-- select avg (oscars) as average_oscars from actors
-- select count(actor_id) as total_actors from actors
-- select * from actors
-- insert into actors (first_name, last_name,dob,oscars)
-- values ('Ben', 'Stiller', '1965-11-30', 1)
-- select sum (oscars) as total from actors where last_name = 'Stiller' 
-- select first_name, max (oscars) as best_actor from actors group by first_name;
-- SELECT first_name, last_name, oscars
-- FROM actors
-- WHERE oscars = (SELECT MAX(oscars) FROM actors);