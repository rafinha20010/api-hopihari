DELIMITER $$
	CREATE TRIGGER after_insert_user_has_atracoes
    AFTER INSERT ON hopi_hari_db.users_has_atracoes
    FOR EACH ROW 
    BEGIN 
    
		DECLARE wait_time INT;
        DECLARE users_has_atracoes_count INT;
        DECLARE total_wait INT;
        
        
        SELECT tempo_espera INTO wait_time
        FROM atracoes
        WHERE atracoes_id = NEW.atracoes_id;
        
        SELECT COUNT(id) INTO users_has_atracoes_count
        FROM hopi_hari_db.users_has_atracoes
        WHERE atracoes_id = NEW.atracoes_id;
        
        SET total_wait = wait_time * users_has_atracoes_count;
        
        INSERT INTO notifications (description, atracoes_id, users_id, status)
        VALUES (CONCAT(total_wait, "minuto(s) de espera para o brinquedo"), NEW.users_id, NEW.atracoes_id, TRUE);
        
        end $$
        
        
DELIMITER ;