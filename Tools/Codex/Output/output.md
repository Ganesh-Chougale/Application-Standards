# Codebase Report

## Folder Structure
```
Opening transition
└── splash/
    ├── adapters/
    │   ├── android/
    │   │   └── splash_activity.xml
    │   ├── electron/
    │   │   └── preload_splash.js
    │   ├── flutter/
    │   │   └── splash.dart
    │   ├── ios/
    │   │   └── splash.storyboard
    │   ├── react-native/
    │   │   └── splash.js
    │   └── web/
    │       └── index.html
    ├── core/
    │   ├── splash.css
    │   ├── splash.html
    │   └── splash.svg
    └── docs/
        ├── README.md
        ├── structure.md
        └── temp.md
```

---

## Code Summary
Opening transition\splash\adapters\android\splash_activity.xml:
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@android:color/white"
    android:gravity="center">
    <androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat
        android:id="@+id/animatedVector"
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:contentDescription="Loading..."
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Loading..."
        android:textColor="#333333"
        android:textSize="16sp"
        app:layout_constraintBottom_toBottomOf="@id/animatedVector"
        app:layout_constraintEnd_toEndOf="@id/animatedVector"
        app:layout_constraintStart_toStartOf="@id/animatedVector"
        app:layout_constraintTop_toBottomOf="@id/animatedVector"
        app:layout_constraintVertical_chainStyle="packed" />
</androidx.constraintlayout.widget.ConstraintLayout>
```

Opening transition\splash\adapters\electron\preload_splash.js:
```js

```

Opening transition\splash\adapters\ios\splash.storyboard:
```storyboard

```

Opening transition\splash\adapters\react-native\splash.js:
```js

```

Opening transition\splash\adapters\web\index.html:
```html

```

Opening transition\splash\core\splash.css:
```css
/* Splash Screen Animation */
@keyframes spin {
  to { 
    transform: rotate(360deg);
  }
}
#spinner {
  animation: spin 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: center;
  will-change: transform;
}
/* Optional: Fade in effect for the splash */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.splash-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  animation: fadeIn 0.3s ease-out;
}
```

Opening transition\splash\core\splash.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Splash Screen</title>
    <link rel="stylesheet" href="splash.css">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="splash-container">
        <?xml version="1.0" encoding="UTF-8"?>
        <svg viewBox="0 0 200 200" width="200" height="200">
            <circle id="spinner" 
                    cx="100" 
                    cy="100" 
                    r="50" 
                    fill="none" 
                    stroke="#4285F4" 
                    stroke-width="8" 
                    stroke-dasharray="80, 200" 
                    stroke-linecap="round"
                    stroke-dashoffset="0">
            </circle>
            <text x="50%" 
                  y="50%" 
                  text-anchor="middle" 
                  dy=".3em" 
                  font-family="Arial, sans-serif" 
                  font-size="14"
                  fill="#333">
                Loading...
            </text>
        </svg>
    </div>
    <script>
        // Example: Hide splash after 3 seconds (for demo)
        setTimeout(() => {
            document.querySelector('.splash-container').style.display = 'none';
        }, 3000);
    </script>
</body>
</html>
```

Opening transition\splash\core\splash.svg:
```svg
<svg
    id="hz-splash"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
>
    <!-- BACKGROUND (transparent) -->
    <rect width="100%" height="100%" fill="none"/>
    <!-- GROUP: Logo Letters -->
    <g id="logo-group" text-anchor="middle" dominant-baseline="middle">
        <!-- Z behind -->
        <text id="letter-z"
              x="500"
              y="350"
              font-size="420"
              font-weight="900"
              fill="#FFFFFF20">
            Z
        </text>
        <!-- H front -->
        <text id="letter-h"
              x="500"
              y="350"
              font-size="420"
              font-weight="900"
              fill="#FFFFFF">
            H
        </text>
        <!-- Reflection highlight placeholder -->
        <rect id="reflection-mask"
              x="0" y="0"
              width="1000" height="1000"
              fill="url(#reflection-gradient)"
              opacity="0">
        </rect>
    </g>
    <!-- Text group -->
    <g id="text-stack" text-anchor="middle" fill="#FFFFFF">
        <text id="t-line1"
              x="500"
              y="550"
              font-size="60"
              font-weight="600">
            Hori-Zone app
        </text>
        <text id="t-line2"
              x="500"
              y="650"
              font-size="50"
              opacity="0.7">
            &lt;placeholder text&gt;
        </text>
        <text id="t-line3"
              x="500"
              y="750"
              font-size="85"
              font-weight="700">
            &lt;placeholder App Name&gt;
        </text>
    </g>
    <!-- Beam Path (invisible lines that beam will follow) -->
    <g id="beam-paths" stroke="none" fill="none">
        <!-- Line 1: left → right (line1 text) -->
        <line id="path-l1" x1="150" y1="550" x2="850" y2="550"/>
        <!-- Down 1: to line2 -->
        <line id="path-d1" x1="850" y1="550" x2="850" y2="650"/>
        <!-- Line 2: right → inside text2 -->
        <line id="path-l2" x1="850" y1="650" x2="150" y2="650"/>
        <!-- Down 2: to line3 -->
        <line id="path-d2" x1="150" y1="650" x2="150" y2="750"/>
        <!-- Line 3: left → inside text3 (end) -->
        <line id="path-l3" x1="150" y1="750" x2="850" y2="750"/>
    </g>
    <!-- Beam indicator (will animate later) -->
    <circle id="beam"
            cx="150" cy="550"
            r="10"
            fill="#00FFFF"
            opacity="0">
    </circle>
    <!-- Final placeholder that will scale up in last phase -->
    <text id="final-app-name"
          x="500"
          y="750"
          font-size="85"
          font-weight="700"
          fill="#FFFFFF"
          text-anchor="middle"
          opacity="0">
        &lt;placeholder App Name&gt;
    </text>
</svg>
```



---

