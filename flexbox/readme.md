# Advanced Responsive Layouts with CSS Flexbox

## 1. Intro
### 1.1 Caveats
1. Modern feature. Thus not supported in older browsers. Check support at: https://caniuse.com/#search=flex
2. Tools for making compatible code: 
    - **autoprefixer**: https://github.com/postcss/autoprefixer : To autoprefix CSS code
    - **modernizr**: https://modernizr.com/ : To detect if a feature is working or not.

## 2. Flexbox-Powered Menus
### 2.1 Single-level Menu layout
1. Always proceed with mobile first approach.
2. First write CSS for smallest device possible. Then start adding media queries for larger screens.
3. `display: flex`, default setting: align items to left and show them one after another.
4. `justify-content: flex-end;` To move items to right while keeping the order unlike Float
    - center
    - space-around
    - space-between
5. `flex-wrap: wrap;` By default items are always shown in single line and for small devices, items gets squished. This makes sure that if there is not enough space then items will get wrapped to next line
6. `flex: 1 0 auto;`: while doing justify-content adjustments ex: space-around and space-between: there is some empty space in between items. Solve this by adding: flex grow by a factor of 1, shrink by a factor of 0, and base's width auto. Thus, if there is empty space then the items will grow to fill it. Thus leaving no empty space. But while shrinking we mentioned 0 which means if there is no space, it will fall to next line.
    - justify-content: flex-end, flex-start or center will not work with flex: 1 0 auto. Must remove