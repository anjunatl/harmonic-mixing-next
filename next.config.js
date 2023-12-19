const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/scss')],
    },
}

module.exports = nextConfig
