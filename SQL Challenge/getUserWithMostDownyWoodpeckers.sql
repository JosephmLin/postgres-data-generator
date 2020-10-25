select transactions.user_id, COUNT(transactions.received) as woodpeckerData from transactions, game_items	
	where received::jsonb ? game_items.id::text AND game_items.display_name like 'downy%' 
	group by user_id
	order by woodpeckerData desc limit 1;
	
		