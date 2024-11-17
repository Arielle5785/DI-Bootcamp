-- SELECT COUNT (*) FROM actors
-- SELECT * FROM actors
INSERT INTO actors (first_name, last_name)
VALUES ('Bradley', 'Cooper');
-- result: ERROR:  Failing row contains (8, Bradley, Cooper, null, null).null value in column "dob" of relation "actors" violates not-null constraint 
-- ERROR:  null value in column "dob" of relation "actors" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (8, Bradley, Cooper, null, null).