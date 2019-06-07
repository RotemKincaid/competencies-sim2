update house
set name = $1, address = $2, city = $3, state = $4, zipcode = $5, pic_url = $6, monthly_mortgage_amount = $7, desired_rent = $8
where house_id = $9

returning *;