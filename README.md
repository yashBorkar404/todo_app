# Next.js Todo App with GitHub Actions CI/CD

This is a [Next.js](https://nextjs.org) Todo application with GitHub Actions CI/CD pipeline implementation for DevOps lab assignments. The project demonstrates fundamental DevOps practices using GitHub's built-in CI/CD platform.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## DevOps Lab - GitHub Actions CI/CD

This project includes a complete CI/CD pipeline using GitHub Actions for DevOps lab assignments. The workflow includes:

### CI (Continuous Integration) Pipeline
- **Linting**: Ensures code quality and style consistency
- **Type Checking**: Validates TypeScript types
- **Building**: Verifies the application builds successfully

### CD (Continuous Deployment) Pipeline
- **Automated Deployment**: Deploys to GitHub Pages when changes are pushed to main branch
- **Build Caching**: Optimizes deployment speed by caching build artifacts

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/ci-cd.yml` and includes:

```yaml
name: Todo App CI/CD

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-test:
    # Build and test job configuration
    
  deploy:
    # Deployment job configuration
```

### How to Use

1. Push your code to GitHub
2. GitHub Actions will automatically run the CI/CD pipeline
3. View the workflow results in the Actions tab of your repository
4. After successful deployment, your app will be available at `https://[your-username].github.io/devopslab_todo_app`
