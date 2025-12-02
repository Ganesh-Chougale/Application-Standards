### **Canvas**

* 1:1 square aspect ratio
* Transparent background
* Works on any device (Android, tablet, PC, web, etc.)

---

# **1. Main Logo Animation — “H + Z Fusion”**

* Big **capital H** in the front

* Big **capital Z** *behind* the H

  * Z acts like a subtle background layer
  * Both are vector shapes (SVG)

* There is a **smooth reflective transition** effect on them
  (like a soft moving highlight passing across them)

---

# **2. Text Area Beneath the Logo**

Under the H + Z stack:

```
Hori-Zone app
<placeholder text>
<placeholder App Name>
```

These will be in a vertical stack, centered.

---

# **3. The Traveling “Ray Beam” Path Animation**

This is the coolest part.

A small glowing beam/line will travel in a very specific path:

### Path explained simply:

* Starts entering the text **“Hori-Zone app”** from the **left**
* Moves **right** across the entire text
* Turns **90° downward**
* Moves downward to the **next line (<placeholder text>)**
* Turns **90° right**
* Moves across the entire line
* Turns **90° downward**
* Moves down to **<placeholder App Name>**
* Turns **90° left**
* Moves across this final line *backwards*
* Ends at the end of the App Name text

It’s like a glowing scanning beam tracing each line one-by-one.

---

# **4. Final Phase-Out Transition**

* All elements (H, Z, the three text lines, the beam)
  **gradually fade into nothing**

* BUT the last line:

```
<placeholder App Name>
```

**remains**

Then:

* It **smoothly enlarges** (scale animation)
* Until it fills **around 90%** of the entire 1:1 canvas
* This becomes your **final app-opening logo** before merging into the main app

---

# 🟢 **Yes — I fully understood your concept.**

And this is 100% doable with pure SVG + CSS animations — no images, no videos.

---