# GitHub Pages Deployment Setup

This repository is configured with GitHub Actions to automatically deploy to GitHub Pages using Bun.

## Deployment Workflows

### 1. Main Deployment (`deploy.yml`)
- **Trigger**: Push to `main` branch or manual dispatch
- **Actions**: Builds and deploys to GitHub Pages
- **URL**: https://zaidcode.me (custom domain) or https://zaidhafeezvu.github.io

### 2. Continuous Integration (`ci.yml`)
- **Trigger**: Push to `main`/`new-portfolio` branches or PRs to `main`
- **Actions**: Linting, type checking, build verification, and size analysis

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Save the configuration

### 2. Configure Custom Domain (Optional)
The CNAME file is already configured for `zaidcode.me`. To use a different domain:
1. Update the `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Update repository settings > Pages > Custom domain

## Build Configuration

The project uses Vite with optimized settings for GitHub Pages:
- **Base URL**: `/` (for custom domain)
- **Output**: `dist/` directory
- **Assets**: Chunked for optimal loading
- **Source maps**: Disabled for production

## Development Workflow

1. **Development**: Work on feature branches
2. **Pull Request**: Create PR to `main` (triggers CI checks)
3. **Review**: Review changes and automated checks
4. **Merge**: Merge to `main` (triggers production deployment)

## Monitoring

- **Build Status**: Check GitHub Actions tab
- **Deployment**: Monitor Pages deployments in repository settings
- **Performance**: Build size reports in CI workflow summaries

## Troubleshooting

### Common Issues:
1. **Build fails**: Check dependencies in `package.json` and `bun.lock`
2. **Assets not loading**: Verify `base` configuration in `vite.config.js`
3. **Domain not working**: Check CNAME file and DNS configuration
4. **Cache issues**: Clear browser cache or check CDN settings

### Commands:
```bash
# Local development
bun install
bun run dev

# Production build
bun run build
bun run preview

# Linting
bun run lint
```
