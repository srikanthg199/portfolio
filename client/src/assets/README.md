# Assets Directory

## Files to Add

### 1. Resume File

To add your resume:

1. **Save your resume as PDF**: Make sure your resume is in PDF format
2. **Rename the file**: Name it exactly `Srikanth_Golla_Resume.pdf`
3. **Place it here**: Put the file in this `/client/public/assets/` directory
4. **The download will work automatically**: The Hero component will download this file when users click "Download Resume"

### 2. Profile Picture

To add your profile picture:

1. **Prepare your photo**:

    - Use a professional headshot/portrait
    - Recommended formats: JPG, PNG, WebP
    - Recommended size: 400x400px to 800x800px (square or portrait)
    - Keep file size under 500KB for best performance

2. **Rename the file**: Name it exactly `profile-picture.jpg` (or `.png`)
3. **Place it here**: Put the file in this `/client/public/assets/` directory
4. **It will display automatically**: The About section will show your photo

## File Structure

```
client/public/assets/
├── README.md (this file)
├── Srikanth_Golla_Resume.pdf (your resume)
└── profile-picture.jpg (your profile photo)
```

## Important Notes

-   **Resume**: Must be named exactly `Srikanth_Golla_Resume.pdf`
-   **Profile Picture**: Must be named `profile-picture.jpg` (or `.png`)
-   Files in the `public` folder are served statically by Vite
-   **Fallback**: If profile picture is missing, a placeholder icon will show
-   **URLs in production**:
    -   Resume: `/assets/Srikanth_Golla_Resume.pdf`
    -   Profile: `/assets/profile-picture.jpg`

## Image Optimization Tips

-   **Compress images**: Use tools like TinyPNG or ImageOptim to reduce file size
-   **Square aspect ratio**: Works best for the circular profile display
-   **Good lighting**: Professional appearance with clear visibility
-   **Background**: Clean, simple background works best
