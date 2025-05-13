8NSERT INTO users (first_name, last_name, email, password, birth_date, phone) VALUES
('Joao', 'Pedro', 'joao@gmail.com', '123', '1999-12-12', '999'),
('Cleber', 'Rodolfo', 'cleber@gmail.com', '123', '1999-12-12', '999'),
('Alvaro', 'Rodrigo', 'alvaro@gmail.com', '123', '1999-12-12', '999');

INSERT INTO atracoes (nome, tempo_espera, status, area) VALUES
('Montanha Mágica', 35, 'Muito Movimentado', 'ÁREA 1'),
('Carrossel Encantado', 15, 'Normal', 'ÁREA 1'),
('Roda Gigante Celestial', 32, 'Normal', 'ÁREA 2');

INSERT INTO users_has_atracoes (users_id, atracoes_id) VALUES
(1, 7),
(2, 7),
(3, 8),
(1, 8),
(2, 9),
(3, 9);

select users.first_name, `users_has_atracoes`.users_id, `users_has_atracoes`.atracoes_id
from users_has_atracoes
inner join atracoes 
on atracoes_id = `users_has_atracoes`.atracoes_id
inner join users
on users_id = `users_has_atracoes`.users_id;