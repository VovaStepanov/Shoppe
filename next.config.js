/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "dfstudio-d420.kxcdn.com"
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig
