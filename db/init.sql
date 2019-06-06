create table house(
house_id serial primary key,
name text,
address text,
city text,
state text,
zipcode INTEGER,
pic_url TEXT
);

insert into house(name, address, city, state, zipcode, pic_url) 
values('house1', '123 dreamland st.', 'Phoenix', 'Arizona', '85243', 'https://assets.site-static.com/userFiles/657/image/Camelot_Development_Northbridge.jpg'),
('house2', '345 yeah right lane', 'New York', 'New York', '37846' , 'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg'),
('house3', '987 nope dr.', 'neverland', 'neverstate', '38488', 'https://www.rd.com/wp-content/uploads/2017/10/Upside-Down-Houses-That-Will-Make-You-Look-Twice-courtesy-@nightrav3n-FT.jpg')




