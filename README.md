# 🛒 FullStack E-commerce Application

A complete **Full-Stack E-commerce Web Application** built with **Angular** (frontend) and **Spring Boot** (backend).  
This project demonstrates modern web development practices by combining a powerful Java backend with a responsive Angular frontend.

---

## 🎯 Overview
This application allows users to:
- Browse products
- View product details
- Add products to cart
- Manage cart items
- Checkout (order placement workflow)

It follows a **RESTful API architecture** with secure and scalable design principles.

---

## 🛠 Tech Stack

### Frontend (Angular)
- **Angular 16+**
- **TypeScript**
- **Bootstrap** for responsive UI
- **Angular Router** for navigation
- **HTTPClient** for API communication

### Backend (Spring Boot)
- **Java 17+**
- **Spring Boot** (REST APIs)
- **Spring Data JPA** for database operations
- **MySQL** as the relational database
- **Maven** for build automation

### Others
- **Docker** support
- **RESTful architecture**
- Clean modular structure

---

## ✨ Features

### Backend
- RESTful APIs for products, categories, and orders
- Database integration using Spring Data JPA
- Layered architecture: Controller → Service → Repository → Entity
- Exception handling and validations
- Ready for containerization with Docker
- Payment gateway integration


### Frontend
- Responsive UI with Angular & Bootstrap
- Product listing and search functionality
- Product detail page
- Shopping cart management
- Checkout workflow
- State management via services

---

## 📂 Project Structure
```bash

FullStack-Ecommerce-Angular-Spring-Boot-/
│
├── backend/ # Spring Boot Backend
│ ├── src/main/java # Entities, Controllers, Services, Repositories
│ ├── src/main/resources
│ │ └── application.properties
│ └── pom.xml
│
├── frontend/ # Angular Frontend
│ ├── src/app # Components, Services, Models
│ ├── src/assets
│ └── angular.json
│
├── Dockerfile
└── README.md
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- Angular CLI
- Java 17+
- Maven
- 
- MySQL database

### Backend Setup
```bash
cd backend
# Configure MySQL in application.properties
mvn spring-boot:run
```
### frontend Setup
```bash
cd frontend
npm install
ng serve --open
```

## 📌 Future Improvements

User authentication & authorization (JWT)

Admin dashboard for product management

Order history & tracking

Unit & integration testing

## 👨‍💻Author

#### Omar Mohamed Elqady
Full-Stack Developer | Angular • Spring Boot • SQL/NoSQL

