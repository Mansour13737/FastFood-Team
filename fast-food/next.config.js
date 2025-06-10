/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['your-image-domain.com'], // دامنه تصاویر خارجی را اینجا اضافه کنید
  },
}

module.exports = nextConfig
