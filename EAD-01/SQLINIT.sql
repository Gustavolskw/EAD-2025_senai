/*1-*/
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'SenhaForte123!';
GRANT SELECT, INSERT ON test-db.cadastro_injectable TO 'app_user'@'localhost';
FLUSH PRIVILEGES;

/*2-*/
CREATE USER 'readonly_user'@'localhost' IDENTIFIED BY 'SenhaLeitura123!';
GRANT SELECT ON test-db.cadastro_injectable TO 'readonly_user'@'localhost';
FLUSH PRIVILEGES;



/*3-*/
CREATE USER 'insert_user'@'localhost' IDENTIFIED BY 'SenhaInsercao123!';
GRANT INSERT ON test-db.cadastro_injectable TO 'insert_user'@'localhost';
FLUSH PRIVILEGES;

/*4-*/
REVOKE DELETE, UPDATE, DROP, ALTER ON test-db.cadastro_injectable FROM 'app_user'@'localhost';
FLUSH PRIVILEGES;