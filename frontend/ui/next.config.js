// @ts-check

const { composePlugins, withNx } = require('@nx/next');
const path = require('node:path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  nx: {},
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
