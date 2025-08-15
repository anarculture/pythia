#!/bin/bash

# Copy rigged models to working directory
cp "/home/anarculture/Scaricati/cara_nft_AR/base_basic_shaded_skeleton_only.glb" "/home/anarculture/code/anarculture/encantar2/ar-demo/"
cp "/home/anarculture/Scaricati/cara_nft_AR/base_basic_shaded_skeleton_and_skinning.glb" "/home/anarculture/code/anarculture/encantar2/ar-demo/"

echo "Rigged models copied successfully!"
echo "Files available:"
ls -la *.glb
