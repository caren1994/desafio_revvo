create database if not exists crud_revvo;

use crud_revvo;

create table if not exists user(
    id int unsigned not null auto_increment,
    Nome varchar(45) not null,
    Email varchar(100) not null,
    Imagem varchar(250) not null,
    primary key(id) 
);

insert into user values(1, 'Caren', 'caren@gmail.com','/imagens/imagem-mulher.jpg');

create table if not exists cursos(
    id int unsigned not null auto_increment,
    Titulo varchar(150) not null,
    Descricao varchar(200) not null,
    Imagem varchar(250) not null,
    primary key(id) 
);

insert into cursos values(1, ' Curso de Javascript', 'VENHA APRENDER jAVASCRIPT','/imagens/PC-setup.jpg');
insert into cursos values(2, ' Curso de Java', 'VENHA APRENDER jAVA','/imagens/PC-setup.jpg');
insert into cursos values(3, ' Curso de PHP', 'VENHA APRENDER PHP','/imagens/PC-setup.jpg');
insert into cursos values(4, ' Curso de PYTHON', 'VENHA APRENDER PYTHON','/imagens/PC-setup.jpg');
insert into cursos values(5, ' Curso de Typecript', 'VENHA APRENDER Typecript','/imagens/PC-setup.jpg');
insert into cursos values(6, ' Curso de GitHub', 'VENHA APRENDER GitHub','/imagens/PC-setup.jpg');