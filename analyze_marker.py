import cv2
import numpy as np
import sys

def analyze_marker(image_path):
    print(f"Analyzing {image_path}...")
    
    try:
        img = cv2.imread(image_path)
        if img is None:
            print("Error: Could not read image.")
            return

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # 1. Contrast (Standard Deviation)
        contrast = np.std(gray)
        print(f"Contrast (Std Dev): {contrast:.2f}")
        
        # 2. Feature Points (ORB)
        orb = cv2.ORB_create()
        keypoints = orb.detect(gray, None)
        num_keypoints = len(keypoints)
        print(f"Number of ORB Features: {num_keypoints}")
        
        # 3. Frequency Analysis (Laplacian Variance - Sharpness/Complexity)
        laplacian_var = cv2.Laplacian(gray, cv2.CV_64F).var()
        print(f"Complexity (Laplacian Var): {laplacian_var:.2f}")

        # Assessment
        print("\n--- Assessment ---")
        if num_keypoints < 100:
            print("❌ Poor: Too few features. Tracking will be unstable.")
        elif num_keypoints < 500:
            print("⚠️ Fair: Moderate features. Might work but could be jittery.")
        else:
            print("✅ Good: High feature count. Should track well.")
            
        if contrast < 30:
            print("❌ Low Contrast: Image is too flat/washed out.")
        else:
            print("✅ Good Contrast.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        analyze_marker(sys.argv[1])
    else:
        print("Usage: python3 analyze_marker.py <image_path>")
