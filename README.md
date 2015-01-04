Feather-Menu
============

A lightweight solution for a mobile slide-in menu, Feather Menu coicides nicely with the Feather grid system (https://github.com/JDerwisz/Feather), but works just as well on its own.

##Installation##

1) Include core.css in the ```<head>``` section of the page

2) Include core.js within the ```<body>``` section; for best results, just before the closing ```</body>``` tag

Optionally, you can include skin.css, on the page, if you'd like to use the menu style in the demo.

##Getting Started##

First, you will need to create the HTML for your mobile menu. Since it is possible to create multiple menus using this implementation, each menu you create must be assigned the ```feather-menu``` class, as well as a specific ID. Like this:

```html
<div id="feather-main" class="feather-menu"></div>
```

In addition to the basic menu structure, Feather Menu relies on trigger elements to open and close the menu. A clickable element with the ID of your menu + "-open" will trigger that specific menu to open, while a clickable element with the ID of your menu + "-close" will trigger that specific menu to close. So following the previous example, we could open the menu using:

```html
<a id="feather-main-open" >Open Menu</a>
```

and then close the menu with:

```html
<a id="feather-main-close">Close Menu</a>
```

Since the menu can also be closed by clicking outside of it, it makes sense to place the ```feather-main-close``` trigger on the menu itself, in the form of an "X".

Finally, to initialize the menu, run the ```setMenu``` Javascript function, referencing the menu's ID. Do make sure to add it **after** including ```core.js``` thought. Like this:
```html
<script src="../core/core.js"></script>
<script>setMenu("feather-main");</script>
```

##Customizing The Menu##

The ```setMenu``` function offers two easy ways of customizing the menu through its parameters:

```javascript
setMenu(menuID, menuPosition, menuWidth);
```
**menuID:** required; *ID of the menu to build* (string)

**menuPosition** optional; *Position to display the menu, "left" or "right"* (string)

**menuWidth** optional; *Width of menu in pixels* (int)

```javascript
setMenu("feather-main", "right", 300);
```

To further customize the menu, feel free to add your own CSS.

##Single Menu Example##

```html
<head>
  <link rel="stylesheet" type="text/css" href="../core/core.css">
</head>
<body>
  <div id="feather-main" class="feather-menu">
    <a id="feather-main-close">Close Menu</a>
  </div>
  <a id="feather-main-open">Open Menu</a>
  
  <script src="../core/core.js"></script>
  <script>setMenu("feather-main");</script>
</body>
```

##Multiple Menus Example##

```html
<head>
  <link rel="stylesheet" type="text/css" href="../core/core.css">
</head>
<body>
  <div id="feather-main" class="feather-menu">
    <a id="feather-main-close">Close Menu</a>
  </div>
  <a id="feather-main-open">Open Menu</a>
  
  <div id="feather-sub" class="feather-menu">
    <a id="feather-sub-close">Close Menu</a>
  </div>
  <a id="feather-sub-open">Open Menu</a>
  
  <script src="../core/core.js"></script>
  <script>setMenu("feather-main");</script>
  <script>setMenu("feather-sub", "right", 300);</script>
</body>
```
