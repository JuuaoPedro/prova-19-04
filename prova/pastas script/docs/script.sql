drop database if exists loja;
create database loja charset=UTF8 collate utf8_general_ci;
use loja;

create table vendedores(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    matricula varchar(50)
);

create table produtos(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    valor float(6,2)
);

create table vendas(
    id integer not null primary key auto_increment,
    data date not null,
    quantidade int not null,
    produtoid int not null,
    vendedorid int not null,
    FOREIGN KEY (produtoid) REFERENCES vendedores (id),
    FOREIGN KEY (vendedorid) REFERENCES produtos (id)
);

insert into vendedores values
(default, "Stefany Antonella", "14644"),
(default, "Stella", "01516"),
(default, "Tomas Isaac", "50913"),
(default, "Osvaldo Galvão", "72193");

insert into produtos values
(default, "Samsung Galaxy M53", "2211.11"),
(default, "Motorola Moto G42", "1499.00"),
(default, "Rainha das Chamas", "36.90"),
(default, "Cronicas Saxonicas O cavaleiro da morte", "57.90"),
(default, "O milagre da manhã", "56.59"),
(default, "Lavadoura de Roupas Brastemp BWK12AB", "2199.00"),
(default, "Fogao Atlas 4 Bocas", "899.00");

insert into vendas values
(default, "2023-04-18 09:08:39", 2, 1, 3),
(default, "2023-04-18 09:08:39", 1, 2, 3),
(default, "2023-04-18 09:08:39", 3, 1, 2),
(default, "2023-04-18 09:08:39", 1, 3, 2),
(default, "2023-04-18 09:08:39", 2, 2, 1),
(default, "2023-04-18 09:08:39", 1, 3, 1);

select * from vendedores;
select * from produtos;
select * from vendas;