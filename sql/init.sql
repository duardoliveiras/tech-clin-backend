create database tech_clin

create extension if not exists "uuid-ossp"

create table user (
	id uuid primary key default generate_uuid_v4(),
	email varchar(255),
	password varchar(255)
)
