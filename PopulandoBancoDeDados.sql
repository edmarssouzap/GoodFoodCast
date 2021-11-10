USE GoodFoodDB;

INSERT INTO Cliente (Nome) VALUES ('Edmar');
INSERT INTO Cliente (Nome) VALUES ('Ezequiel');
INSERT INTO Cliente (Nome) VALUES ('Fabiana');

INSERT INTO Item (Nome, Preco) VALUES ('Hot Dog', 9.90);
INSERT INTO Item (Nome, Preco) VALUES ('X-Salada', 8.49);
INSERT INTO Item (Nome, Preco) VALUES ('Coxinha', 3.90);
INSERT INTO Item (Nome, Preco) VALUES ('Refrigerante Coca-Cola 350ml', 4.90);

INSERT INTO Login (Usuario, Senha) VALUES ('Edmar', 'a123');
INSERT INTO Login (Usuario, Senha) VALUES ('Vanessa', '456');
INSERT INTO Login (Usuario, Senha, TipoUsuario) VALUES ('Thiago', 'a123', 'Administrador');
INSERT INTO Login (Usuario, Senha, TipoUsuario, Status) VALUES ('Ezequiel', '1122', 'Usuario', 'A');
INSERT INTO Login (Usuario, Senha, TipoUsuario, Status) VALUES ('Patricia', 'teste', 'Usuario', 'I');

SELECT * FROM Pedido;
