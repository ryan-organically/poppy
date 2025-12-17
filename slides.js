// ============================================
// MEMORIAL SLIDESHOW CONFIGURATION
// ============================================
// Edit this file to customize your slideshow
// ============================================

const config = {
  // -----------------------------------------
  // MEMORIAL INFORMATION
  // -----------------------------------------
  title: "Jerome Crist II",
  subtitle: "In Loving Memory",
  dates: "1930 – 2025",
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
    {
      type: "photo",
      src: "media/Bubby and poppy wedding pic.jpg"
    },
    {
      type: "photo",
      src: "media/bubby and poppy.jpg",
      caption: "At the Grand Canyon"
    },
    {
      type: "photo",
      src: "media/luau 4 siblings.jpg",
      caption: "With his four children"
    },
    {
      type: "photo",
      src: "media/kids and poppy.jpg",
      caption: "Poppy and the grandchildren",
      captionLeft: true
    },
    {
      type: "photo",
      src: "media/poppy and kk on national.jpg",
      caption: "Poppy and KK"
    },
    {
      type: "photo",
      src: "media/colleen and poppy.jpg",
      caption: "Jerry and Colleen",
      captionLeft: true
    },
    {
      type: "photo",
      src: "media/popopy and erin bus.jpg",
      caption: "Giving a bus tour"
    },
    {
      type: "photo",
      src: "media/Jerome at breakfast.jpg"
    },
    {
      type: "photo",
      src: "media/Jerome Crist Portrait.jpg"
    },
    {
      type: "photo",
      src: "media/Jerome and offspring.jpg"
    },
    {
      type: "photo",
      src: "media/Dana and Ty with grandpa.jpg",
      captionLeft: true
    },
    {
      type: "photo",
      src: "media/Jerry and Erin.jpg"
    },
    {
      type: "photo",
      src: "media/jerome skull.jpg"
    },

    // Closing text slide
    {
      type: "text",
      content: "A husband of 50 years, a father for 66"
    }
  ]
};
