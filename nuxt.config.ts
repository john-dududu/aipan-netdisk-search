export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        // head
        head: {
            title: '搜网盘热门美剧电影综艺动漫韩剧日剧英剧-网盘资源搜索',
            meta: [
                {
                    name: 'description',
                    content: '搜网盘热门美剧电影综艺动漫韩剧日剧英剧-网盘资源搜索-人人影视-樱花动漫-在线看动漫。'
                },
                {
                    name: 'baidu-site-verification',
                    content: 'codeva-HQsJhwhYdf'
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'referrer',
                    content: 'no-referrer'
                },
                {
                    name: 'referrer',
                    content: 'always'
                },
                {
                    name: 'referrer',
                    content: 'strict-origin-when-cross-origin'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-D88MP2QBSH',
                    async: true
                },
                // {
                //     src: 'https://alwingulla.com/88/tag.min.js',
                //     async: true,
                //     'data-cfasync': 'false',
                //     'data-zone': '83543',
                 
                // }, 
                {
                    src: '/ga.js'
                },
                {
                    src: '/qrcode.min.js'
                },
                {
                    src: 'https://challenges.cloudflare.com/turnstile/v0/api.js'
                },
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692876876156287',
                    async: true,
                    crossorigin: 'anonymous'
                }
            ]

        }
    },
    // build modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',

    ],
    colorMode: {
        preference: 'light',
        classSuffix: ''
    },
    tailwindcss: {
        configPath: 'tailwind.config.js'
    },
    googleFonts: {
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: true,
        download: false,
        base64: false,
        families: {
            'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Poetsen One': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Sedan SC': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Briem Hand': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Noto Sans Simplified Chinese': [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },
    i18n: {
        defaultLocale: 'cn',
        langDir: './assets/lang/',
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'cn',
                name: '中文',
                iso: 'zh-CN',
                file: 'zh-CN.json'
            }
        ],
    },
    plugins: [

    ],
    nitro: {
        devProxy: {
           
        }
    },
    runtimeConfig: {
        openaiApiKey: '',
        proxyUrl: ''
    }
})