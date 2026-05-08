# 🚀 Modern E-Commerce Platform

A modern fullstack e-commerce platform built with **React + Vite + TypeScript** on the frontend and **Java Spring Boot** on the backend.

Designed with a premium UI/UX using **Tailwind CSS**, **shadcn/ui**, animations with **Framer Motion**, and scalable backend architecture using **Spring Boot REST APIs**.

---

# ✨ Features

## 🛍 Frontend (React + Vite)

- Modern responsive UI
- Product catalog
- Product details page
- Categories
- Ratings & reviews
- Product variants
- Shopping cart
- Dark mode support
- Animations with Framer Motion
- Reusable UI components with shadcn/ui
- React Router navigation
- Toast notifications
- Type-safe development with TypeScript

---

## ⚙ Backend (Spring Boot)

- RESTful API
- Product management
- Category management
- Review system
- Authentication with JWT
- PostgreSQL/MySQL integration
- DTO architecture
- Validation
- Exception handling
- Spring Security
- JPA/Hibernate

---

# 🧱 Tech Stack

## Frontend

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- React Router DOM
- React Hook Form
- Zod
- Sonner

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- PostgreSQL / MySQL
- Maven

---

# 📁 Project Structure

```bash
ecommerce-platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── data/
│   │   ├── lib/
│   │   ├── context/
│   │   └── types/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/main/java/com/ecommerce/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   ├── dto/
│   │   ├── security/
│   │   └── config/
│   │
│   ├── src/main/resources/
│   ├── pom.xml
│   └── application.yml
│
└── README.md
```

---

# 🎨 Frontend Setup

## Clone repository

```bash
git clone https://github.com/Flaviohmm/Ecommerce-platform.git
```

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# ☕ Backend Setup

## Navigate to backend

```bash
cd backend
```

## Run Spring Boot

### Maven Wrapper

```bash
./mvnw spring-boot:run
```

### Or using installed Maven

```bash
mvn spring-boot:run
```

Backend runs at:

```bash
http://localhost:8080
```

---

# 🔗 Frontend ↔ Backend Integration

## API Service Example

Create:

```bash
src/services/api.ts
```

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
```

---

# 📦 Example Product Endpoint

## Spring Boot Controller

```java
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @GetMapping
    public List<ProductDTO> getProducts() {
        return productService.findAll();
    }
}
```

---

## React Fetch Example

```tsx
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
}
```

---

# 🗄 Database Configuration

## PostgreSQL Example

```yml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/ecommerce
    username: postgres
    password: password

  jpa:
    hibernate:
      ddl-auto: update

    show-sql: true
```

---

# 🔐 JWT Authentication

## Features

- Login
- Register
- Protected routes
- Token validation
- Role-based authorization

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile devices

---

# 🌙 UI Features

- Glassmorphism
- Smooth animations
- Modern gradients
- Skeleton loading
- Hover effects
- Dark mode
- Responsive grids

---

# 🧩 Example Product Type

```ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  specs: Record<string, string>;
  variants: {
    name: string;
    options: string[];
  }[];
  inStock: boolean;
  featured?: boolean;
}
```

---

# 🚀 Production Build

## Frontend

```bash
npm run build
```

## Backend

```bash
mvn clean package
```

---

# 🐳 Docker Support (Optional)

## Frontend Dockerfile

```dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "preview"]
```

---

## Backend Dockerfile

```dockerfile
FROM eclipse-temurin:21

COPY target/app.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
```

---

# 📸 Screenshots

Add screenshots for:

- Homepage
- Product page
- Cart page
- Admin dashboard
- Mobile version

---

# 🛠 Future Improvements

- Stripe integration
- PayPal integration
- Admin dashboard
- Wishlist
- Search & filters
- Product recommendations
- Real-time notifications
- AI product assistant
- Multi-language support

---

# 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed with ❤️ using React, Vite, TypeScript, Tailwind CSS, and Spring Boot.