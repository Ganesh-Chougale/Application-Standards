# Universal Splash Screen

A lightweight, cross-platform splash screen solution using SVG and CSS animations.

## Files

- `splash.svg` - The vector-based splash screen graphic
- `splash.css` - Animation and styling for the splash screen
- `splash.html` - Example web implementation

## Usage

### Web/Electron
1. Include the SVG directly in your HTML or as an image source
2. Import the CSS file or copy the animation styles
3. Use the `.splash-container` class for the container element

### React Native
```jsx
import { Svg, Circle, Text } from 'react-native-svg';
// Use the same SVG paths and animation logic
```

### Flutter
```dart
import 'package:flutter_svg/flutter_svg.dart';
// Use SvgPicture.asset() with the SVG file
```

### Native (Android/iOS)
- **Android**: Convert SVG to VectorDrawable
- **iOS**: Use the SVG in Asset Catalog or convert to PDF

## Customization
- Change colors in the SVG or via CSS
- Adjust animation timing in `splash.css`
- Modify dimensions in the SVG `viewBox`

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ with polyfills

## License
MIT
