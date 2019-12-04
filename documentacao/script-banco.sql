create database cadastro ;
use cadastro;
create table cadastrouser 
(idcadastro int primary key auto_increment ,
nome varchar (40),
endereço varchar(50),
numero int ,
contato char(11),
quantidadedeflores varchar(40),
cor varchar(40),
email varchar (40),
senha varchar (30)
);
select * from cadastrouser ;