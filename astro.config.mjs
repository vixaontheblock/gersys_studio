import { defineConfig } from 'astro/config';
// The confirmed production domain; override only when deliberately migrating.
const site = process.env.SITE_URL || 'https://gersys-studio.vercel.app';
export default defineConfig({ site, trailingSlash: 'always' });
