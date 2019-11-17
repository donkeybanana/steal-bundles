# Getting Started

```sh
$ npm i
$ python3 -m http.server 8000
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
└── package.json             # steal config
```

# Development mode

``` sh
$ open index.html 
```

- Loads `jQuery` from `node_modules`
- Loads `steal` from `node_modules`

# Production mode

- Loads `steal` from `dist`
- Loads `jQuery` from CDN

``` sh
$ node build.js
$ open prod.html
```
