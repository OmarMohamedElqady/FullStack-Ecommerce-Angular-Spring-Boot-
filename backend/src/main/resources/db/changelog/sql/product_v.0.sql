CREATE TABLE product (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    category_id BIGINT NOT NULL,
    sku VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    unit_price DECIMAL(10, 2),
    image_url VARCHAR(255),
    active BOOLEAN DEFAULT TRUE,
    units_in_stock INT,
    date_created DATETIME,
    last_updated DATETIME,
    FOREIGN KEY (category_id) REFERENCES product_category(id)
);