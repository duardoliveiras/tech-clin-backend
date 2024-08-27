create database tech_clin

create extension if not exists "uuid-ossp"

-- usando nome users pois user eh reservado pelo postgres
create table users (
	id uuid primary key default generate_uuid_v4(),
	email varchar(255),
	password varchar(255)
)
