/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack5: true,
}

const withTM = require('next-transpile-modules')([
  'solito',
  'moti',
  '@motify/core',
  '@motify/components',
  'tailwindcss-react-native',
  'react-native-web',
  'app',
])

const { withExpo } = require('@expo/next-adapter')
const withExpoConfig = { projectRoot: __dirname }

const path = require('path')
const withImages = require('next-images')
const withImagesConfig = {
  exclude: path.resolve(__dirname, '../../node_modules/*'),
  images: { disableStaticImages: true },
}

const withPlugins = require('next-compose-plugins')
module.exports = withPlugins(
  [withTM, [withExpo, withExpoConfig], [withImages, withImagesConfig]],
  nextConfig
)
