select locations.geom from locations 
	LEFT JOIN game_item_locations
	ON locations.id = game_item_locations.location_id
	where
		ST_DistanceSphere(
			locations.geom,
			ST_MakePoint(1, 1)
		) <= 3000
		