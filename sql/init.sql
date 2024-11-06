create database tech_clin

create extension if not exists "uuid-ossp"

-- usando nome users pois user eh reservado pelo postgres
create table users (
	id uuid primary key default uuid_generate_v4(),
	name varchar(255),
	email varchar(255),
	password varchar(255)
)

create table especialidade (
	id SERIAL primary key,
	descricao varchar(100)
);