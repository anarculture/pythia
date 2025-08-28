# ARtedita - Dual Target AR Demo

A professional AR experience using encantar.js v0.4.4 with dual image target support.

## Overview

ARtedita demonstrates advanced AR capabilities with:

- **Dual Image Tracking**: Two reference images, each anchoring different 3D content
- **Professional UX**: CRT terminal aesthetics with loading animations
- **Mobile Optimized**: Full viewport utilization and touch-friendly interface
- **Performance Optimized**: Adaptive tracking resolution and frame monitoring

## Dual Target Configuration

### Target 1: Face Model
- **Reference Image**: `reference.png`
- **3D Model**: `base_basic_shaded.glb`
- **Animation**: 5-second continuous rotation
- **Position**: `0 -1 0` with scale `1 1 1`

### Target 2: Moonwalk Animation
- **Reference Image**: `reference2.png` 
- **3D Model**: `moonwalk.glb`
- **Animation**: Built-in GLB animations via `animation-mixer`
- **Position**: `0 -1.2 0` with scale `0.8 0.8 0.8`

## Testing Instructions

### Manual Test Checklist

1. **Load Application**
   - Open `index.html` on mobile device
   - Grant camera permission when prompted
   - Wait for CRT loading screen to complete
   - Tap "INICIAR SISTEMA" to begin

2. **Test Face Target** (`reference.png`)
   - Point camera at `reference.png`
   - Verify `base_basic_shaded.glb` appears
   - Check model is stable and rotating
   - Confirm "Target: Face Model" indicator shows
   - Move target out of view → model should disappear

3. **Test Frog Target** (`reference2.png`)
   - Point camera at `reference2.png`
   - Verify `moonwalk.glb` appears with animation
   - Check model is stable and playing animations
   - Confirm "Target: Moonwalk Animation" indicator shows
   - Move target out of view → model should disappear

4. **Target Switching**
   - Switch between targets rapidly
   - Verify correct models appear for each target
   - Check no console errors occur
   - Confirm smooth transitions

## Browser Support

### Supported Devices
- **iOS Safari**: iPhone/iPad with iOS 11.3+
- **Android Chrome**: Android 7.0+ with WebRTC support
- **Desktop Chrome**: For development/testing (limited AR features)

### Requirements
- Camera access permission
- WebRTC support
- WebGL 2.0 support
- HTTPS connection (for production)

## Technical Implementation

### encantar.js Components Used
- `<ar-image-tracker>` - Handles dual reference images
- `<ar-reference-image>` - Defines each target with unique names
- `<ar-root>` - Anchors content to specific reference images
- `<a-assets>` - Preloads GLB models for performance

### Event Handling
- `artargetfound` - Triggered when target detected
- `artargetlost` - Triggered when target lost
- Browser compatibility checks with error messaging
- Camera permission handling with user feedback

## Development

### Local Server
```bash
# HTTP server (port 8080)
python3 -m http.server 8080

# Or use provided server script
python3 http_server.py
```

### File Structure
```
├── index.html              # Main AR application
├── reference.png           # Face target image
├── reference2.png          # Frog target image  
├── base_basic_shaded.glb   # Face 3D model
├── moonwalk.glb           # Moonwalk animation model
├── encantar.js            # encantar.js v0.4.4 framework
└── aframe-with-encantar.js # A-Frame integration
```

## Troubleshooting

- **Camera not working**: Check HTTPS connection and permissions
- **Models not loading**: Verify GLB file paths and preloading
- **Tracking issues**: Ensure good lighting and stable target images
- **Performance issues**: Check device capabilities and reduce model complexity
