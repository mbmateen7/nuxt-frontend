export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Scooter Mart',
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'bg-color'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'
            }

        ],
        script: [{
                src: 'http://localhost:8098'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'
            },
            {
                src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDE77aZRSdijiOr2Tnpls-PHvxU6yDArTc'
            },
            {
                src: '/js/custom.js',
                type: 'text/javascript',
                // body: true,
            }
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        'plugins/axios',
        'plugins/repositories',
        {
            src: 'plugins/helpers',
            ssr: false
        }
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],
    server: {
        host: '0.0.0.0', // default: localhost,
    },
    serverMiddleware: [
        // "redirect-ssl"
    ],
    axios: {
        proxy: false,
        // baseUrl: 'https://scootermart-api-laravel-prod.herokuapp.com/api'
        baseUrl: 'https://api.scootermart.io-devs.cf/api'
        // baseUrl: 'http://192.168.1.209:8000/api'
        // baseUrl: 'http://scooter-mart.test/api'
    },
    target: 'static',
    loading: "~/components/LoadingBar.vue",
    loadingIndicator: {
        name: 'circle',
        color: '#3B8070',
        background: 'white'
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    auth: {
        redirect: {
            login: "/login",
            logout: "/",
            callback: '/login',
            home: '/'
        },
        strategies: {
            local: {
                token: {
                    property: "access_token",
                    global: true,
                    required: true,
                    type: "Bearer",
                    maxAge: 0
                },
                user: {
                    property: '',
                    autoFetch: true
                },
                endpoints: {
                    login: {
                        url: "auth/login",
                        method: "post",
                    },
                    // logout: {
                    //     url: "auth/logout",
                    //     method: "post",
                    // },
                    user: {
                        url: "auth/user-details",
                        method: "get",
                    },
                },
            },
        },

    },
    router: {}
}
