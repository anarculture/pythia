#!/usr/bin/env python3
"""
Analyze reference2.png for AR tracking quality
"""

import cv2
import numpy as np
import os

def analyze_ar_features(image_path):
    """
    Analyze the image for AR tracking quality
    """
    if not os.path.exists(image_path):
        print(f"❌ Error: {image_path} not found!")
        return
        
    img = cv2.imread(image_path)
    if img is None:
        print(f"❌ Error: Could not load {image_path}")
        return
        
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    print(f"🐸 Analyzing {image_path} for AR tracking quality...")
    print("=" * 50)
    
    # Image dimensions
    height, width = gray.shape
    print(f"📐 Dimensions: {width}x{height}")
    
    # File size
    file_size = os.path.getsize(image_path)
    print(f"💾 File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
    
    # Detect keypoints using ORB (similar to what AR systems use)
    orb = cv2.ORB_create(nfeatures=1000)
    keypoints, descriptors = orb.detectAndCompute(gray, None)
    
    print(f"🎯 Detected keypoints: {len(keypoints)}")
    
    # Analyze contrast
    contrast = gray.std()
    print(f"🌈 Image contrast (std dev): {contrast:.2f}")
    
    # Analyze brightness
    brightness = gray.mean()
    print(f"💡 Average brightness: {brightness:.2f}")
    
    # Analyze edge density
    edges = cv2.Canny(gray, 50, 150)
    edge_density = np.sum(edges > 0) / edges.size * 100
    print(f"📏 Edge density: {edge_density:.2f}%")
    
    # Check for uniform regions (bad for tracking)
    hist = cv2.calcHist([gray], [0], None, [256], [0, 256])
    max_hist_value = np.max(hist)
    uniformity = max_hist_value / (width * height) * 100
    print(f"🎨 Color uniformity: {uniformity:.2f}% (lower is better)")
    
    # Quality assessment
    print("\n🔍 AR TRACKING ASSESSMENT:")
    
    score = 0
    issues = []
    
    if len(keypoints) > 500:
        print("✅ Excellent keypoint count")
        score += 3
    elif len(keypoints) > 300:
        print("⚠️  Good keypoint count")
        score += 2
    else:
        print("❌ Low keypoint count")
        issues.append("Few distinctive features")
        score += 0
    
    if contrast > 50:
        print("✅ Good contrast")
        score += 2
    elif contrast > 30:
        print("⚠️  Moderate contrast")
        score += 1
    else:
        print("❌ Low contrast")
        issues.append("Low contrast")
        
    if edge_density > 10:
        print("✅ Rich edge detail")
        score += 2
    elif edge_density > 5:
        print("⚠️  Moderate edge detail")
        score += 1
    else:
        print("❌ Poor edge detail")
        issues.append("Few edges")
        
    if uniformity < 20:
        print("✅ Good texture variation")
        score += 1
    else:
        print("❌ Too uniform")
        issues.append("Uniform regions")
    
    print(f"\n📊 OVERALL SCORE: {score}/8")
    
    if score >= 6:
        print("🎉 EXCELLENT AR tracking potential")
    elif score >= 4:
        print("👍 GOOD AR tracking potential")
    elif score >= 2:
        print("⚠️  MODERATE AR tracking potential")
    else:
        print("❌ POOR AR tracking potential")
        
    if issues:
        print(f"\n⚠️  Issues to address: {', '.join(issues)}")

if __name__ == "__main__":
    analyze_ar_features("reference2.png")
