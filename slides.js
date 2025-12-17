// ============================================
// MEMORIAL SLIDESHOW CONFIGURATION
// ============================================
// Edit this file to customize your slideshow
// ============================================

const config = {
  // -----------------------------------------
  // MEMORIAL INFORMATION
  // -----------------------------------------
  title: "In Loving Memory",           // Main title (or loved one's name)
  subtitle: "Grandfather's Name",       // Subtitle or name
  dates: "1940 – 2024",                // Life dates
  showHeader: true,                     // Set to false to hide the header

  // -----------------------------------------
  // SLIDESHOW SETTINGS
  // -----------------------------------------
  autoPlayInterval: 6000,              // Time per slide in milliseconds (6000 = 6 seconds)
  transitionDuration: 1000,            // Fade transition time in milliseconds
  startPaused: false,                  // Set to true to start paused

  // -----------------------------------------
  // SLIDES
  // -----------------------------------------
  // Add your slides below. Each slide can be:
  //
  // PHOTO:  { type: "photo", src: "media/filename.jpg", caption: "Optional caption" }
  // VIDEO:  { type: "video", src: "media/filename.mp4", caption: "Optional caption" }
  // TEXT:   { type: "text", content: "Main text", subtitle: "Optional subtitle" }
  //
  // Examples are provided below - replace with your own photos and captions
  // -----------------------------------------

  slides: [
    // Opening text slide
    {
      type: "text",
      content: "In Loving Memory",
      subtitle: "A celebration of life"
    },

    // Sample photo slides - replace these with your photos
    {
      type: "photo",
      src: "media/sample1.jpg",
      caption: "Add your first photo to the media folder"
    },
    {
      type: "photo",
      src: "media/sample2.jpg",
      caption: "Then update this file with the filename"
    },
    {
      type: "photo",
      src: "media/sample3.jpg"
      // No caption - just the photo
    },

    // Example video slide (uncomment to use)
    // {
    //   type: "video",
    //   src: "media/family-video.mp4",
    //   caption: "Special moments"
    // },

    // Closing text slide
    {
      type: "text",
      content: "Forever in Our Hearts",
      subtitle: "Thank you for being part of our lives"
    }
  ]
};
