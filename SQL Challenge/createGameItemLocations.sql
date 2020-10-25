CREATE TABLE game_item_locations (
	item_id uuid NOT NULL,
	location_id uuid NOT NULL,
	user_id uuid NOT NULL,
	CONSTRAINT fk_item_id
		FOREIGN KEY(item_id)
			REFERENCES game_items(id),
	CONSTRAINT fk_location_id
		FOREIGN KEY(location_id)
			REFERENCES  locations(id)
)
