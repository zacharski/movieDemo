create database movies3;

\c movies3

create role movieperson with login;

create table actors (
    id serial,
	firstname text,
	lastname text,
	role text,
	movie text
);

grant select on actors to movieperson;


insert into actors (firstname, lastname, role, movie)  VALUES

     ('Dwayne', 'Johnson', 'Spencer', 'Jumanji'),
     ('Karen', 'Gillan', 'Martha', 'Jumanji'),
     ('Jack', 'Black', 'Bethany', 'Jumani'),
     ('Nick', 'Jonas', 'Alex', 'Jumani'),
     ('Daisy', 'Ridley', 'Rey', 'Star Wars: The Last Jedi'),
     ('Oscar', 'Isaac', 'Poe', 'Star Wars: The Last Jedi'),
     ('Mark', 'Hamill', 'Luke Skywalker', 'Star Wars: The Last Jedi'),
     ('Frances', 'McDormand', 'Mildred Hayes', 'Three Billboards Outside Ebbing, Missouri'),
     ('Abbie', 'Cornish', 'Anne Willougby', 'Three Billboards Outside Ebbing, Missouri');
