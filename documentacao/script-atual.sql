create database cadastro ;
use cadastro;
create table cadastrouser 
(idcadastro int primary key auto_increment ,
nome varchar (40),
endereco varchar(50),
numero int ,
contato char(11),
email varchar (40),
senha varchar (30)
);
select * from cadastrouser ;


   