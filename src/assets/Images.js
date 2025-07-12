// Images collection - Single source of truth for all images
// Note: Add your actual image imports here when you have the files

// Profile Images
export const ProfileImages = {
  hero: '/images/hero-profile.jpg', // Add your hero profile image
  about: '/images/about-profile.jpg', // Add your about section image
  avatar: '/images/avatar.jpg' // Add your avatar image
};

// Background Images
export const BackgroundImages = {
  heroBg: '/images/hero-bg.svg', // Hero section background
  aboutBg: '/images/about-bg.svg', // About section background
  servicesBg: '/images/services-bg.svg', // Services section background
  contactBg: '/images/contact-bg.svg' // Contact section background
};

// Project Images
export const ProjectImages = {
  project1: '/images/projects/project-1.jpg',
  project2: '/images/projects/project-2.jpg',
  project3: '/images/projects/project-3.jpg',
  project4: '/images/projects/project-4.jpg',
  project5: '/images/projects/project-5.jpg',
  project6: '/images/projects/project-6.jpg'
};

// Technology Logos
export const TechLogos = {
  react: '/images/tech/react.svg',
  javascript: '/images/tech/javascript.svg',
  typescript: '/images/tech/typescript.svg',
  nodejs: '/images/tech/nodejs.svg',
  python: '/images/tech/python.svg',
  nextjs: '/images/tech/nextjs.svg',
  tailwind: '/images/tech/tailwind.svg',
  mongodb: '/images/tech/mongodb.svg',
  postgresql: '/images/tech/postgresql.svg',
  firebase: '/images/tech/firebase.svg',
  aws: '/images/tech/aws.svg',
  docker: '/images/tech/docker.svg',
  git: '/images/tech/git.svg',
  figma: '/images/tech/figma.svg',
  vscode: '/images/tech/vscode.svg'
};

// Decorative Images/Vectors
export const DecoImages = {
  heroVector: '/images/vectors/hero-vector.svg',
  aboutVector: '/images/vectors/about-vector.svg',
  servicesVector: '/images/vectors/services-vector.svg',
  contactVector: '/images/vectors/contact-vector.svg',
  codeVector: '/images/vectors/code-vector.svg',
  designVector: '/images/vectors/design-vector.svg'
};

// Placeholder images (you can use these until you get actual images)
export const PlaceholderImages = {
  profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  heroVector: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
  aboutVector: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  servicesVector: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  contactVector: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop'
};

// Export all images as a single object
export const Images = {
  ...ProfileImages,
  ...BackgroundImages,
  ...ProjectImages,
  ...TechLogos,
  ...DecoImages,
  ...PlaceholderImages
};

export default Images;
