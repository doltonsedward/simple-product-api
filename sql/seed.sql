-- =========================================
-- SEED DATA: PRODUCTS
-- =========================================

INSERT INTO products (name, price, description, image_url)
VALUES
('Minimalist Wooden Desk', 2500000, 'Meja kerja minimalis dari kayu solid untuk ruang kerja modern.', 'desk1.jpg'),
('Ergonomic Office Chair', 1800000, 'Kursi kantor ergonomis dengan lumbar support premium.', 'chair1.jpg'),
('Modern Bookshelf', 1500000, 'Rak buku tinggi bergaya modern, cocok untuk rumah dan kantor.', 'bookshelf1.jpg'),
('Compact Coffee Table', 950000, 'Meja kopi compact dengan finishing matte.', 'coffee-table.jpg'),
('LED Standing Lamp', 650000, 'Lampu berdiri modern dengan LED hemat energi.', 'lamp1.jpg'),
('Solid Wood Dining Table', 3500000, 'Meja makan kayu solid untuk tampilan ruang makan elegan.', 'dining-table.jpg'),
('Comfort Lounge Sofa', 4200000, 'Sofa lounge nyaman dengan desain Scandinavian.', 'sofa1.jpg'),
('Floating Wall Shelves', 480000, 'Rak dinding melayang minimalis untuk dekorasi ruang.', 'shelf-floating.jpg'),
('Modern TV Cabinet', 2100000, 'Kabinet TV modern dengan banyak ruang penyimpanan.', 'tv-cabinet.jpg'),
('Office Drawer Unit', 850000, 'Laci kantor portable dengan desain sleek.', 'drawer1.jpg');

-- =========================================
-- SEED DATA: STOCK
-- (Semua produk dimulai dengan stok default)
-- =========================================

INSERT INTO stock (product_id, quantity)
VALUES
(1, 20),
(2, 35),
(3, 15),
(4, 25),
(5, 40),
(6, 10),
(7, 8),
(8, 30),
(9, 12),
(10, 18);
