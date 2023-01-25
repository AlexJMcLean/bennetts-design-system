import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "./stylesVariables";

const GlobalStyle = createGlobalStyle`

    :root {
        --page-max-width: 1240px;
        --header-height: 60px;
        --header-margin: 40px;

        @media screen and (max-width: ${mediaQueries.desktop}) {
            --header-margin: 48px;
        }
        @media screen and (max-width: ${mediaQueries.mobile}) {
            --header-margin: 32px;
        }

        // Based on: https://type-scale.com/?size=17&scale=1.125&text=A%20Visual%20Type%20Scale&font=Poppins&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
        --font-size-100: 0.8rem;
        --font-size-200: 0.9rem;
        --font-size-300: 0.95rem;
        --font-size-400: 1rem;
        --font-size-500: 1.05rem;
        --font-size-600: 1.125rem;
        --font-size-700: 1.266rem;
        --font-size-800: 1.424rem;
        --font-size-900: 1.602rem;
        --font-size-1000: 1.802rem;
        --font-size-1100: 2.027rem;
        --font-size-1200: 2.281rem;
        --font-size-1300: 2.566rem;
        --font-size-1400: 2.887rem;
        --font-size-1500: 3.247rem;
        --font-size-1600: 3.653rem;
        --font-size-1700: 4.11rem;
        --font-size-1800: 4.624rem;
        --font-size-1900: 5.202rem;
        --font-size-2000: 5.852rem;

        @media screen and (max-width: ${mediaQueries.mobile}) {
            --font-size-100: 0.75rem;
            --font-size-100: 0.85rem;
            --font-size-200: 0.9rem;
            --font-size-300: 0.95rem;
            --font-size-400: 1rem;
            --font-size-500: 1.067rem;
            --font-size-600: 1.138rem;
            --font-size-700: 1.215rem;
            --font-size-800: 1.296rem;
            --font-size-900: 1.383rem;
            --font-size-1000: 1.476rem;
            --font-size-1100: 1.575rem;
            --font-size-1200: 1.68rem;
            --font-size-1300: 1.793rem;
            --font-size-1400: 1.913rem;
            --font-size-1500: 2.041rem;
            --font-size-1600: 2.178rem;
            --font-size-1700: 2.323rem;
            --font-size-1800: 2.479rem;
            --font-size-1900: 2.645rem;
            --font-size-2000: 2.822rem;
        }

        --font-weight-400: 400;
        --font-weight-500: 500;
        --font-weight-600: 600;
        --font-weight-700: 700;

        --letter-spacing-100: -0.0025em;
        --letter-spacing-200: -0.005em;
        --letter-spacing-300: -0.01em;
        --letter-spacing-400: -0.015em;
        --letter-spacing-500: -0.02em;
        --letter-spacing-600: -0.025em;
        --letter-spacing-700: -0.03em;
        --letter-spacing-800: -0.035em;
        --letter-spacing-900: -0.04em;
        --letter-spacing-1000: -0.045em;

        --border-radius-100: 0;
        --border-radius-200: 2px;
        --border-radius-300: 4px;
        --border-radius-400: 6px;
        --border-radius-500: 8px;
        --border-radius-600: 10px;
        --border-radius-700: 12px;
        --border-radius-800: 14px;
        --border-radius-round: 1000px;





        --text: #434e4e;
        --text-strong: #1c1e1e;
        --text-subdued: #767676;
        --text-link: #4e52b8;
        --surface: #fff;
        --surface-subdued: #f9f9f9;
        --surface-information: #dcf5f0;
        --surface-warning: #ffeceb;
        --surface-code-inline: #f1f1f1;
        --primary: #008060;
        --border-color: #e9e9e9;
        --border: 1px solid var(--border-color);
        --card-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 2px rgb(0 0 0 / 4%);
        --card-shadow-hover: 0 4px 7px rgba(0, 0, 0, 0.1),
            0 0 0 0.5px var(--border-color);
        --decorative-1: #dfefd2;
        --decorative-2: #fae8d4;
        --decorative-3: #f8dff1;
        --decorative-4: #dce0f5;
        --backdrop: rgba(0, 0, 0, 0.5);
        --code-keyword: #017b33;
        --code-function: var(--code-keyword);
        --code-string: #6a00df;
        --code-boolean: #d6004b;
        --code-number: #c55100;
        --code-operator: var(--text);
        --code-punctuation: var(--text-subdued);
        --code-property: var(--code-keyword);
        --code-selector: var(--code-keyword);
        --code-comment: #3d2fe8;
    }

    body,
    html {
        margin: 0;
        padding: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.55;
        background: var(--surface);
        color: var(--text);
        font-size: 100%;
        text-decoration: none;
        box-sizing: border-box;
        list-style-type: none;
        -webkit-font-smoothing: anitaliased;
        border: none;
        appearance: none;
        outline: none;

        *:focus-visible {
            box-shadow: var(--focus-outline);
        }

        code,
        pre {
            .keyword {
            color: var(--code-keyword);
            }
            .function {
            color: var(--code-function);
            }
            .string {
            color: var(--code-string);
            }
            .boolean {
            color: var(--code-boolean);
            }
            .number {
            color: var(--code-number);
            }
            .operator {
            color: var(--code-operator);
            }
            .punctuation {
            color: var(--code-punctuation);
            }
            .property {
            color: var(--code-property);
            }
            .selector {
            color: var(--code-selector);
            }
            .comment {
            color: var(--code-comment);
            }
        }
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
