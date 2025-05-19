# RadiantX - E-Commerce Website Automation Testing Suite

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📝 Overview

RadiantX is a robust end-to-end automation testing suite designed for e-commerce websites using Cypress. This project demonstrates comprehensive test coverage for critical e-commerce functionalities, ensuring reliable user experiences across various shopping flows and account management features.

## ✨ Key Features

- **Account Management Tests**
  - User registration flow
  - Login authentication
  - Account creation validation
  
- **Shopping Experience Tests**
  - Product browsing and filtering
  - "What's New" section navigation
  - Product selection and customization
  
- **Cart & Checkout Tests**
  - Add to cart functionality
  - Quantity updates
  - Shipping information handling
  - Payment processing
  
- **Data-Driven Testing**
  - Fixture-based test data management
  - Reusable test configurations
  - Environment-specific settings

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deeptimaan-k/RadiantX.git
   ```

2. Navigate to project directory:
   ```bash
   cd RadiantX
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 🧪 Running Tests

### Using Cypress Test Runner

```bash
npx cypress open
```

### Headless Mode

```bash
npx cypress run
```

### Running Specific Test Suite

```bash
npm run test:whatsNew
```

## 📁 Project Structure

```
RadiantX/
├── cypress/
│   ├── e2e/
│   │   └── tests/
│   │       ├── signUpForm.cy.js
│   │       └── whatsNew.cy.js
│   ├── fixtures/
│   │   ├── registerAccountData.json
│   │   └── whatsNewData.json
│   ├── pages/
│   │   ├── newAccountRegisterPage.js
│   │   └── whatsNewPage.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── package.json
└── cypress.config.js
```

## 🔍 Test Coverage

### 1. User Registration
- First name and last name validation
- Email verification
- Password requirements
- Success message verification

### 2. Shopping Flow
- Browse "What's New" section
- Product selection and customization
- Cart management
- Checkout process
- Order confirmation

### 3. Shipping & Payment
- Address form validation
- Shipping method selection
- Payment method verification
- Order placement confirmation

## 🛠️ Technologies Used

- Cypress: E2E testing framework
- JavaScript: Programming language
- Page Object Model: Design pattern
- Custom Commands: Reusable test actions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

Deeptimaan Krishna Jadaun
- Email: deeptimaankrishnajadaun@gmail.com
- GitHub: [@deeptimaan-k](https://github.com/deeptimaan-k)

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Thanks to the Cypress team for their excellent documentation
- The e-commerce platform for providing a robust testing environment
- All contributors who help improve this testing suite

---
Made with ❤️ by Deeptimaan Krishna Jadaun (Radiant)