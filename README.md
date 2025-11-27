# Pythia

Pythia is a browser-based AR reader that allows the camera to identify specific images and produce immersive 3D scenes in the user's viewport.

## Features
- **Image Recognition**: Instantly identifies target images using `encantar.js`.
- **3D Scene Overlay**: Renders interactive A-Frame scenes on top of real-world targets.
- **Browser-Based**: No app installation required; runs directly in modern mobile browsers.

## Getting Started
1. **Reference Image**: Place your target image (e.g., a book cover, poster, or card) in the root directory.
2. **3D Content**: Add your GLB/GLTF models or A-Frame primitives.
3. **Configuration**: Update `index.html` to link the image target to your 3D scene.

## Usage
Serve the directory using a local HTTPS server or deploy to a static host (AR requires HTTPS or localhost).