Open vsCode.

“First, create a new folder — I’ll call mine disco-lamps. Inside that, let’s create three files: index.html, style.css, and app.js.”

“We’ll start with the HTML to create the basic structure of our page.”

**Step 1: HTML**

Type ! then tap to create HTML5 document (this a short cut to create HTML5 document)

<title> in title add the title you want I will add Disco lamps panel

use **link:css** to connects our HTML to the CSS file that contains all the styles.

<link rel="stylesheet" href="style.css" />

<!-- start with your H1 -->
<h1>Disco Lamp Panel</h1>

A large heading that appears at the top of the page.

It describes what this page/project is about.

<!-- Then lets build the button that will control all the lamps -->

<button id="flashAllBtn" onclick="toggleFlashAll()">Flash All Lamps</button>

A button that, when clicked, calls a JavaScript function toggleFlashAll().
This function will either start or stop flashing all the lamps at once.
The id="flashAllBtn" lets us change the button text later from JavaScript.

<div class="lamp-grid">
  <div class="lamp-block">
    <div class="lamp" id="lamp1"></div>
    <button onclick="toggleLamp('lamp1', 'red')">Toggle Red</button>
    <button onclick="flashLamp('lamp1', 'red')">Flash Red</button>
  </div>
</div>

Let’s break this down:
div class="lamp-grid"
This wraps all the lamps in a flexible grid layout.
The CSS will display them side-by-side and responsive.

div class="lamp-block"
This wraps a single lamp and its buttons.
Each lamp has its own block.

div class="lamp" id="lamp1"
This is the visual lamp — a circle styled by CSS.
It starts as "off".

The id="lamp1" allows JavaScript to find and control it.

Toggle Button

<button onclick="toggleLamp('lamp1', 'red')">Toggle Red</button>

When clicked, it runs the toggleLamp() function.
It passes the lamp’s ID (lamp1) and its color (red) to that function.

Flash Button

<button onclick="flashLamp('lamp1', 'red')">Flash Red</button>

This one turns the flashing effect on/off for this specific lamp.
It uses the same ID and color as input for the flashLamp() function.

We will repeat the last step for 5 times to create more lamps.

<div class="lamp-block">
    <div class="lamp" id="lamp2"></div>
    <button onclick="toggleLamp('lamp2', 'blue')">Toggle Blue</button>
    <button onclick="flashLamp('lamp2', 'blue')">Flash Blue</button>
</div>

<div class="lamp-block">
    <div class="lamp" id="lamp3"></div>
    <button onclick="toggleLamp('lamp3', 'green')">Toggle Green</button>
    <button onclick="flashLamp('lamp3', 'green')">Flash Green</button>
</div>

<div class="lamp-block">
    <div class="lamp" id="lamp4"></div>
    <button onclick="toggleLamp('lamp4', 'yellow')">Toggle Yellow</button>
    <button onclick="flashLamp('lamp4', 'yellow')">Flash Yellow</button>
</div>

<div class="lamp-block">
    <div class="lamp" id="lamp5"></div>
    <button onclick="toggleLamp('lamp5', 'purple')">Toggle Purple</button>
    <button onclick="flashLamp('lamp5', 'purple')">Flash Purple</button>
</div>

<div class="lamp-block">
    <div class="lamp" id="lamp6"></div>
    <button onclick="toggleLamp('lamp6', 'cyan')">Toggle Cyan</button>
    <button onclick="flashLamp('lamp6', 'cyan')">Flash Cyan</button>
</div>

Final Line: Script Tag

<script src="app.js"></script>

This loads the JavaScript file where all your logic lives.

It connects everything on the page to the interactivity you’ll build with JS.

**Step 2: CSS file**

```css
body {
  font-family: sans-serif;
  background: #fff;
  color: #3c3b3b;
  text-align: center;
  padding: 20px;
}
```

What it does
Uses a basic sans-serif font
Sets a background color white
Makes the text gray
Centers all text and content on the page
Adds spacing inside the page (padding: 20px)

Flash all button

```css
#flashAllBtn {
  padding: 10px 20px;
  margin-bottom: 20px;
  background: crimson;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}
```

What it does:
padding: 10px 20px

Adds space inside the button (top-bottom: 10px, left-right: 20px) — makes it bigger and easier to click.

margin-bottom: 20px
Adds space below the button so it doesn’t sit too close to the lamps.

background: crimson
Gives the button a bold red background color to make it stand out.

color: white
Sets the text color to white so it contrasts well with the red background.

border: none
Removes the default border to give it a cleaner, modern look.

font-size: 16px
Makes the text inside the button slightly larger and easier to read.

border-radius: 8px
Rounds the corners of the button — this makes the design look softer and friendlier.

cursor: pointer
Changes the mouse pointer to a hand icon when hovering over the button — tells the user it's clickable.

```css
#flashAllBtn:hover {
  background: darkred;
}
```

Changes the background color to dark red when the user hovers over the button.

Lamp Grid Container

```css
.lamp-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
```

What it does
Uses Flexbox to arrange lamp blocks side-by-side
flex-wrap: wrap lets them move to a new row on smaller screens
gap: 30px adds spacing between the lamps

```css
.lamp-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

What it does
Stacks the lamp and buttons vertically (column)
Centers them horizontally

The Lamp Circle

```css
.lamp {
  width: 80px;
  height: 80px;
  background-color: transparent;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 0 10px #000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
```

What it does
Makes a square lamp (80px x 80px)
Turns it into a circle using border-radius: 50%
Default color is transparent
Adds a subtle shadow
Adds smooth transitions for any change

Buttons

```css
button {
  margin: 3px;
  padding: 6px 10px;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

What it does
Styles the buttons with dark background
Rounded corners (border-radius: 5px)
Removes border lines
Adds spacing and padding
Changes the cursor on hover

Glowing Lamp States
We will use these classes to add colors for each lamp when toggle the buttons using JS

```css
.lamp.on-red {
  background-color: red;
  box-shadow: 0 0 20px red;
}
.lamp.on-blue {
  background-color: blue;
  box-shadow: 0 0 20px blue;
}
.lamp.on-green {
  background-color: green;
  box-shadow: 0 0 20px green;
}
.lamp.on-yellow {
  background-color: yellow;
  box-shadow: 0 0 20px yellow;
}
.lamp.on-purple {
  background-color: purple;
  box-shadow: 0 0 20px purple;
}
.lamp.on-cyan {
  background-color: cyan;
  box-shadow: 0 0 20px cyan;
}
```

What it does
These classes apply a color and glowing shadow
Added dynamically with JavaScript when a lamp is "on"
Each color has its own class (e.g. on-red, on-blue)

**step 3: JavaScript**

```javascript
let flashing = {};
let flashAllInterval = null;
let allLampIds = ["lamp1", "lamp2", "lamp3", "lamp4", "lamp5", "lamp6"];
```

Variable Purpose:

flashing: Keeps track of which lamps are flashing one by one.
flashAllInterval: Used to control flashing of all lamps at once.
allLampIds: Just a list of lamp IDs — we use this to control all lamps in a loop.

Toggle One Lamp

```javascript
const toggleLamp = (id, color) => {
  const lamp = document.getElementById(id);

  // Stop flashing if this lamp is already flashing
  if (flashing[id]) {
    clearInterval(flashing[id]);
    flashing[id] = null;
  }

  // Turn lamp off if it’s already on
  if (lamp.classList.contains(`on-${color}`)) {
    lamp.className = "lamp";
  } else {
    // Otherwise, turn it on with color
    lamp.className = "lamp on-" + color;
  }
};
```

What it does:
Gets the lamp by its id.
If it's flashing, stop the flashing.
If it's on → turn it off.
If it's off → turn it on and make it glow in the selected color.

Flash One Lamp

```javascript
const flashLamp = (id, color) => {
  const lamp = document.getElementById(id);

  // If this lamp is already flashing, stop it
  if (flashing[id]) {
    clearInterval(flashing[id]);
    flashing[id] = null;
    lamp.className = "lamp"; // turn it off
  } else {
    // Start flashing every 0.5 seconds (500 ms)
    flashing[id] = setInterval(() => {
      lamp.classList.toggle(`on-${color}`);
    }, 500);
  }
};
```

What it does:
If the lamp is already flashing, stop the flashing and turn it off.
If it's not flashing, start toggling it on/off every 500ms — creating a flashing effect.

Helper: Color Picker Function

```javascript
const getLampColor = (index) => {
  const colors = ["red", "blue", "green", "yellow", "purple", "cyan"];
  return colors[index % colors.length];
};
```

What it does:
We have 6 colors.
This function gives a color based on the lamp’s position.
If you go past 6 lamps, % makes sure you loop back to the start of the list.

Flash All Lamps Button

```javascript
const toggleFlashAll = () => {
  if (flashAllInterval) {
    // Stop all flashing
    clearInterval(flashAllInterval);
    flashAllInterval = null;

    // Turn off all lamps
    allLampIds.forEach((id) => {
      document.getElementById(id).className = "lamp";
    });

    // Change button text back
    document.getElementById("flashAllBtn").innerText = "Flash All Lamps";
  } else {
    // Start flashing all lamps
    let on = false;

    flashAllInterval = setInterval(() => {
      on = !on;

      allLampIds.forEach((id, index) => {
        const color = getLampColor(index);
        const lamp = document.getElementById(id);
        lamp.className = on ? `lamp on-${color}` : "lamp";
      });
    }, 500);

    // Update button text
    document.getElementById("flashAllBtn").innerText = "Stop Flashing";
  }
};
```

What it does:
If flashing is already happening → stop it and turn off all lamps.
If not flashing yet → start toggling all lamps on/off every 500ms.
The on variable helps switch between ON and OFF each time.
The button text changes based on what’s happening.
