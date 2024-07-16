![Bootstrap Theme Switcher](https://github.com/berkguclukol/bootstrap-theme-switcher/blob/main/dist/image/128x128.png?raw=true)
# Bootstrap Theme Switcher
A javascript plugin for dark &amp; light mode switching and control added in Bootstrap version 5.3.

### Installation

```bash
git clone https://github.com/berkguclukol/bootstrap-theme-switcher.git
cd bootstrap-theme-switcher
npm install
start .\example.html
```
### Add your page
```html
<script type="text/javascript" src="dist/js/theme_switcher.min.js"></script>
```

### Add the button you want.
```html
<button class="theme-changer-btn"></button>
```

### with Default Value
If no values are assigned to the html tag, it will be defined as "dark mode" and "light mode" by default.
```html
<html
        lang="en"
        data-bs-theme="light"
        data-light-value="LIGHT MODE"
        data-dark-value="DARK MODE">
<head></head>
<body>
    <button class="btn btn-primary theme-changer-btn">
</body>
</html>
```

### with Buttons Value
If a value is assigned to the button tag, the values defined in the button will be assigned by bypassing the html tag.
```html
<button
    class="btn btn-primary theme-changer-btn"
    data-light-value="Light"
    data-dark-value="Dark">
</button>
```

### Icon Value
There are no restrictions on the use of icons. Any icon font value can be added to the button or html tag.
#### Bootstrap Icon
```html
<button
    class="btn btn-primary theme-changer-btn"
    data-light-value='<i class="bi bi-sun"></i>'
    data-dark-value='<i class="bi bi-moon"></i>'>
</button>
```

#### Ionicons Icon
```html
<button
    class="btn btn-primary theme-changer-btn"
    data-light-value='<ion-icon name="sunny-outline"></ion-icon>'
    data-dark-value='<ion-icon name="moon-outline"></ion-icon>'>
</button>
```

### Technology

![Bootstrap Theme Switcher](https://skillicons.dev/icons?i=html,javascript,bootstrap)

### Tool used
![Bootstrap Theme Switcher](https://skillicons.dev/icons?i=git,idea,ai,ps)

### License

MIT