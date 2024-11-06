create database tech_clin

create extension if not exists "uuid-ossp"

-- usando nome users pois user eh reservado pelo postgres
create table users (
	id serial primary key,
	name varchar(255),
	email varchar(255),
	password varchar(255)
);

create table especialidade (
	id SERIAL primary key,
	descricao varchar(100)
);

create table clinica (
	id SERIAL primary key,
	nome varchar,
	cnpj varchar,
	cidade varchar,
	estado varchar,
	rua varchar,
	cep varchar,
	lat numeric,
	lon numeric,
	url varchar
);

create table clinica_especialidade (
	id serial primary key,
	id_clinica integer,
	id_especialidade integer,
	foreign key (id_clinica) references clinica(id),
	foreign key (id_especialidade) references especialidade(id)
);

create table medico (
	id serial primary key,
	nome varchar,
	crm varchar,
	cpf varchar,
	id_especialidade int,
	id_clinica int,
	id_usuario int,
	foreign key (id_usuario) references users(id),
	foreign key (id_especialidade) references especialidade(id),
	foreign key (id_clinica) references clinica(id)
);