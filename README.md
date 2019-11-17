# Overview

This repo conveys two concepts afforded by `steal`:

1. How to use local dependencies in development mode and switch to CDN vendoring in production
   - In this case `jQuery`
   - See [CDN](https://stealjs.com/docs/StealJS.loading-from-cdn.html)
2. How to minimise the bundle size when dealing with different application contexts
   - Public vs Private view
   - See [multi-main](https://stealjs.com/docs/steal-tools.multi-main.html)

# Getting Started

```sh
$ npm i
$ npm run build
$ npm run serve
```

# Dependency Graph

``` sh
.
├── app
│   └── app.js               # Simple app, extends Controller, registered via plugin
├── build.js                 # Build main
├── index.js                 # Main, initialises App on #root with opts using $.fn
├── jquery
│   └── plugin.js            # Registers controllers with $.fn
├── lib
│   └── controller.js        # Simple Controller
├── package.json             # steal config
├── private.js               # Full bundle
└── public.js                # Minimal bundle
```

# Development mode

> `index.html`

## Public view

- Displays a login link
- Loads an empty bundle

## Private view

- Displays a logout link and an instance of `App`
- Loads a full bundle

# Production mode

> `prod.html`

- Loads `jQuery` from CDN
- Loads `steal` from `dist`

Similar to development mode, but loads optimised bundles.
