select game_items.id, COUNT(transactions.received) , transactions.user_id from game_items, transactions
where transactions.received::jsonb ? game_items.id::text
	group by game_items.id, user_id
	order by user_id