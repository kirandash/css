# Advanced Responsive Layouts with CSS Flexbox

## 1. Intro
### 1.1 Caveats
1. Modern feature. Thus not supported in older browsers. Check support at: https://caniuse.com/#search=flex
2. Tools for making compatible code: 
    - **autoprefixer**: https://github.com/postcss/autoprefixer : To autoprefix CSS code
    - **modernizr**: https://modernizr.com/ : To detect if a feature is working or not.

## 2. Flexbox-Powered Menus
### 2.1 Single-level Menu layout
**Note**: Base CSS file with all imports: style-menus.css and base html file: munus.html file.
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

### 2.2 Advanced Menus with nested flex
1. Implement nested flex. nav-advanced.css
2. `flex: 1 0 12em;` Grow 1, shrink 0. Base width: 12em. When menus shrink, li items should never shrink below 12ems of width. If menu item is wider, grow wide as much as possible. If menu item < 12em, menu item should wrap down instead of shrink
3. `display: flex;` Item inside li tag ie anchor tag should fill up the entire space vertically

### 2.3 Multilevel Menus with Dropdowns
1. Always make sure that your dropdown menu is accessible on all devices. Touch screen. Using keyboard, voice control etc. Not just click event with mouse.
2. Code for accessible menus: jQuery + JS/menu-toggle.js
3. Add CSS in nav-multi-level.css
4. `diplay: flex` to align items.
5. `justify-content: space-between` to evenly space items.
6. `flex: 1 0 auto;` For flex items to take full space with no gap after the justify-content
7. `flex: 1 1 auto;` Allowing flex item in drop down to grow if wide content or even shrink if content is narrow. So it can drop to next line

### 2.4 Social Media Menu
1. nav-social.css
2. screen-reader-text class for hiding text on visual browsers but can be readable on screen readers. Accessibility purpose.
3. All icons are shown based on href tag link.

### 2.5 Multiple/Mixed Menus
1. Multi-level Menu + Social Media Menus. nav-mixed.css

## 3. Card Layouts
### 3.1 Challenges with Card Layout
1. Grid / Card layout with floats are not properly cleared or positioned.
2. Solutions:
    - Masonry: https://masonry.desandro.com/ Ex: https://www.pinterest.com/
    - Flexbox

### 3.2 Grid of cards with Flexbox
1. Flex will make all columns equal height by default. Width can be set by `flex: 0 1 calc(33% - 1em);` Grow by a factor of 0. Shrink by a factor of 1 and base width of 33%. Allowed to shrink but not allowed to grow.
2. Fallback code: `width: calc(33% - 1em)`

### 3.3 Media Queries

### 3.4 Solution for "anchor not filling the card" issue
1. When flex stretches it's children. The anchor tags do not scale. So the card with smaller heights will have areas that is not clickable. Ex: First and 3rd cards in our example.
2. To solve add `display: flex` to the parent of anchor tag. Which will make anchor fill the full height of card vertically.
