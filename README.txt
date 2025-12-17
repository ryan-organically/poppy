=====================================
MEMORIAL SLIDESHOW - QUICK START
=====================================

HOW TO ADD YOUR PHOTOS
----------------------
1. Copy your photos into the "media" folder
2. Open "slides.js" in any text editor (Notepad works fine)
3. Edit the slides list to include your photos

Example - change this:
    { type: "photo", src: "media/sample1.jpg", caption: "Add your first photo" },

To this:
    { type: "photo", src: "media/grandpa-wedding.jpg", caption: "Wedding Day 1965" },


SLIDE TYPES
-----------
PHOTO (with optional caption):
    { type: "photo", src: "media/photo.jpg", caption: "Your caption here" },

PHOTO (no caption):
    { type: "photo", src: "media/photo.jpg" },

VIDEO:
    { type: "video", src: "media/video.mp4", caption: "Video title" },

TEXT SLIDE:
    { type: "text", content: "Main message", subtitle: "Smaller text below" },


CUSTOMIZING THE HEADER
----------------------
In slides.js, edit these lines:
    title: "In Loving Memory",
    subtitle: "Grandfather's Name",
    dates: "1940 - 2024",

Set showHeader to false to hide the header entirely.


HOW TO RUN THE SLIDESHOW
------------------------
Option 1: Double-click index.html to open in your browser
Option 2: Drag index.html onto your browser window

For iPad/iPhone:
- Host online (see below) or transfer via AirDrop/iCloud


KEYBOARD CONTROLS
-----------------
Space      = Play/Pause
Left/Right = Previous/Next slide
F          = Fullscreen
Escape     = Exit fullscreen


COPYING TO A FLASH DRIVE
------------------------
1. Copy the ENTIRE folder (including media folder) to your flash drive
2. On any computer, open the index.html file from the flash drive
3. The slideshow will run directly from the flash drive


SETTINGS
--------
In slides.js you can adjust:
- autoPlayInterval: 6000     (milliseconds - 6000 = 6 seconds per slide)
- transitionDuration: 1000   (fade speed in milliseconds)
- startPaused: false         (set to true to start paused)


SUPPORTED FORMATS
-----------------
Photos: JPG, JPEG, PNG, GIF, WebP
Videos: MP4, WebM (MP4 recommended for best compatibility)


TIPS
----
- Use high-resolution photos for best quality
- Keep video files under 100MB for smooth playback
- Test the slideshow before the event
- Have a backup ready (Google Slides with the same photos)
