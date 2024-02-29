import webpack from 'webpack';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    webpack: (config, options) => {
        config.plugins.push(
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
        );
        return config;
    },
};
//https://medium.com/geekculture/using-owl-carousel-with-nextjs-e63a166225b0
export default nextConfig;
