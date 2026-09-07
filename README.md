Object Screen Tracker
│
├── Screen capture
│     └── Gets frames/images of what's displayed
│
├── Object detection
│     └── Finds people, cars, balls, etc.
│
├── Object selector
│     └── User taps the object to track
│
├── Tracking engine
│     └── Follows the selected object frame-by-frame
│
└── Tracking overlay
      └── Glowing circle + arrows around the object# Object Tracking App 🎯

A real-time computer vision-powered object detection and tracking application for Android and iOS. Track any object on your device with a glowing spotlight overlay and directional arrows, displayed on top of all other apps.

## Features ✨

- **Real-time Object Detection**: Uses TensorFlow Lite / MediaPipe for instant object detection
- **Always-on-Top Overlay**: Floating tracking indicator visible over all apps
- **Glowing Spotlight Effect**: Visual feedback with animated glowing circle following the tracked object
- **Directional Arrows**: Shows movement direction and speed of the tracked object
- **Cross-Platform**: Works on both Android and iOS
- **Low Latency**: Optimized for real-time performance without lag
- **On-Device Processing**: Privacy-first approach with all processing on the device

## Tech Stack 🛠️

- **Frontend**: React Native + Expo
- **Computer Vision**: TensorFlow Lite / MediaPipe
- **Overlay System**: Native Android/iOS APIs
  - Android: `WindowManager`
  - iOS: `UIWindow`
- **State Management**: Redux (optional)
- **Performance**: GPU acceleration, frame rate optimization

## Project Structure 📁

```
object-tracking-app/
├── src/
│   ├── components/
│   │   ├── CameraView.js          # Camera stream component
│   │   ├── TrackingOverlay.js     # Overlay UI (glowing circle + arrows)
│   │   ├── ObjectSelector.js      # User selection interface
│   │   └── ControlPanel.js        # Start/Stop controls
│   ├── services/
│   │   ├── detectionService.js    # TensorFlow Lite / MediaPipe integration
│   │   ├── trackingEngine.js      # Tracking logic & calculations
│   │   └── overlayService.js      # Native overlay management
│   ├── utils/
│   │   ├── coordinates.js         # Coordinate transformations
│   │   ├── performance.js         # Performance monitoring
│   │   └── constants.js           # App constants
│   ├── screens/
│   │   ├── HomeScreen.js          # Main app screen
│   │   ├── TrackingScreen.js      # Active tracking screen
│   │   └── SettingsScreen.js      # Configuration
│   ├── App.js                     # Main app entry
│   └── store/                     # Redux store (if needed)
├── android/                       # Native Android code
├── ios/                           # Native iOS code
├── assets/                        # Images, icons, animations
├── .gitignore
├── app.json                       # Expo configuration
├── package.json
└── README.md
```

## Installation 🚀

### Prerequisites
- Node.js (v14+)
- Expo CLI: `npm install -g expo-cli`
- Android Studio (for Android) or Xcode (for iOS)

### Setup

```bash
# Clone the repository
git clone https://github.com/lovethnnadozie5-byte/object-tracking-app.git
cd object-tracking-app

# Install dependencies
npm install

# For TensorFlow Lite support
npm install @react-native-ml-kit/ml-kit

# For MediaPipe (alternative to TensorFlow)
npm install @mediapipe/tasks-vision

# Start Expo
expo start

# Run on Android
expo run:android

# Run on iOS
expo run:ios
```

## How It Works 🔍

1. **User opens the app** → Camera feed starts
2. **User selects an object** → Taps on the object they want to track
3. **Object detection runs** → TensorFlow Lite detects the object in real-time
4. **Tracking begins** → App follows the object's movement
5. **Visual feedback** → Glowing circle + arrows overlay shows tracking status
6. **Continuous tracking** → Keeps tracking until user stops

## API Reference 📚

### Tracking Engine
```javascript
// Start tracking
trackingEngine.startTracking(selectedObject)

// Stop tracking
trackingEngine.stopTracking()

// Get current position
const position = trackingEngine.getObjectPosition()

// Get velocity/direction
const velocity = trackingEngine.getVelocity()
```

### Overlay Service
```javascript
// Show overlay
overlayService.showOverlay()

// Update tracking indicator position
overlayService.updatePosition(x, y, confidence)

// Update directional arrows
overlayService.updateArrows(directionVector)

// Hide overlay
overlayService.hideOverlay()
```

## Performance Optimization ⚡

- GPU acceleration for model inference
- Frame rate capping (30-60 FPS)
- Memory pooling for continuous video streams
- Efficient canvas rendering for overlay
- Model quantization (TFLite)

## Platform-Specific Notes 📱

### Android
- Requires `CAMERA` permission
- Requires `SYSTEM_ALERT_WINDOW` permission (for overlay)
- Target SDK: Android 12+

### iOS
- Requires `NSCameraUsageDescription` in Info.plist
- Requires `UIWindow` configuration for overlay
- Target: iOS 13+

## Development Roadmap 🗺️

- [ ] Basic camera feed & object detection
- [ ] Real-time tracking engine
- [ ] Overlay UI with glowing circle
- [ ] Directional arrows & velocity calculation
- [ ] Android overlay implementation
- [ ] iOS overlay implementation
- [ ] Performance optimization & testing
- [ ] User selection interface
- [ ] Settings & configuration UI
- [ ] Data logging & analytics (optional)
- [ ] Release on Google Play & App Store

## Contributing 🤝

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License 📄

MIT License - See LICENSE file for details

## Support & Issues 💬

Found a bug or have a suggestion? [Open an issue](https://github.com/lovethnnadozie5-byte/object-tracking-app/issues)

---

**Built with ❤️ for real-time object tracking**
