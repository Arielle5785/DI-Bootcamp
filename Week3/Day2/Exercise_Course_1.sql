-- create table movies(
-- movie_id serial, movie_tile varchar (100) not null,
-- movie_title text,
-- movie_story text, 
-- actor_playing_id integer,
-- primary key (movie_id),
-- foreign key (actor_playing_id) references actors (actor_id)
-- )

-- truncate table movies
-- update  movies 
-- select * from movies
-- insert into movies( movie_story)
INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));
-- 
--create table producers ( id serial primary key,
-- first_name varchar (20),
-- last_name varchar (20),
-- movies int foreign key (movies) references movie (movie_id)