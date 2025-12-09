# Database Documentation (ongoing)

## Overview

Database digunakan untuk menyimpan data produk, stok, dan transaksi pembelian pada sistem furniture store.

Dashboard:
https://github.com/doltonsedward/simple-product-dashboard

## Tables

### 1. products

- Menyimpan data produk furniture.
- Kolom penting: name, price, description.

### 2. stock

- Menyimpan jumlah stok tiap produk.

### 3. orders

- Menyimpan transaksi yang dibuat oleh admin.

## ERD

products (1) --- (1) stock  
products (1) --- (many) orders

<!--
## Setup

### Import schema -->
