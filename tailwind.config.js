const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            colors: {
                orange: {
                    DEFAULT: "hsl(25, 97%, 53%)"
                },
                grey: {
                    DEFAULT: "hsl(217, 12%, 63%)",
                    "500": "hsl(216, 12%, 54%)"
                },
                blue: {
                    DEFAULT: "hsl(213, 19%, 18%)",
                    "500": "hsl(216, 12%, 8%)"
                }
            },
            boxShadow: {
                '3xl': '0 0 100px rgba(0, 0, 0, 1)',
            }
        },
        fontFamily: {
            mono: ["'Overpass'", ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [],
}
