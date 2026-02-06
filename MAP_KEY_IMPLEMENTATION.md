# Map Key System Implementation Guide

## Overview
The new map key system allows each world to have its own map key image displayed in the bottom-left corner of the map. Map keys can be toggled on/off through the context menu and user preferences are saved automatically.

## Features
- ✅ Per-world map key support (optional)
- ✅ Toggle visibility via context menu
- ✅ Persistent user settings (localStorage)
- ✅ Dynamic scaling to prevent covering too much of the map
- ✅ Responsive design with aspect ratio preservation
- ✅ Clean appearance with shadow effects

## How to Add a Map Key to Your World

### Step 1: Prepare Your Map Key Image
1. Create or obtain a map key image (PNG, JPG, or SVG format recommended)
2. Place the image file in your world's directory
3. Common location: `mapName/mapkey.png` or similar

### Step 2: Configure the Map in HTML
Edit your world's `index.html` file and pass the `mapKeyImage` option to the Unmined constructor:

```html
<script>
    const unmined = new Unmined('map', {
        // ... other options ...
        mapKeyImage: 'mapkey.png',  // Path to your map key image
        // ... other options ...
    });
</script>
```

### Step 3: Done!
The map key will now appear in the bottom-left corner with:
- Automatic dynamic scaling
- "Show map key" toggle in the right-click context menu
- User preference persistence (toggles persist across sessions)

## Configuration Options

### Available Options for Map Keys

```javascript
const options = {
    // ... existing options ...
    
    // Map key image path (relative to the HTML file's directory)
    // Set to null or omit to disable map key completely
    mapKeyImage: null,           // Default: no map key
    
    // Initial visibility state
    showMapKey: true,            // Default: true (if mapKeyImage is provided)
    
    // ... other existing options ...
};

new Unmined('map', options, regions);
```

## User Controls

### Context Menu
Right-click on the map to access:
- **Show map key** - Toggle the visibility of the map key (only appears if a map key is configured)

### Stored Preferences
User preferences are automatically saved to browser localStorage:
- The setting persists across page reloads
- Each browser/device has independent settings
- Clearing browser cache will reset preferences to defaults

## Dynamic Scaling Behavior

The map key automatically scales to fit your viewport with these constraints:
- **Maximum width**: 25% of viewport width
- **Maximum height**: 30% of viewport height (40% for initial calculation)
- **Aspect ratio**: Always preserved to avoid distortion
- **Position**: Bottom-left corner with 10px padding
- **Styling**: Shadow effect for depth

## Implementation Examples

### Example 1: Overworld Map
**File: Overworld_Day/index.html**
```html
<script>
    const unmined = new Unmined('map', {
        minRegionX: -10,
        minRegionZ: -10,
        maxRegionX: 10,
        maxRegionZ: 10,
        centerX: 0,
        centerZ: 0,
        imageFormat: 'png',
        maxZoom: 0,
        minZoom: -5,
        mapKeyImage: 'overworld-key.png'
    }, regions);
</script>
```

### Example 2: Nether Map (No Map Key)
**File: Nether/index.html**
```html
<script>
    const unmined = new Unmined('map', {
        minRegionX: -5,
        minRegionZ: -5,
        maxRegionX: 5,
        maxRegionZ: 5,
        centerX: 0,
        centerZ: 0,
        imageFormat: 'png',
        maxZoom: 0,
        minZoom: -5
        // No mapKeyImage specified - no map key will be shown
    }, regions);
</script>
```

### Example 3: The End Map with Key
**File: paper_1_21_1_2972731_the_end/index.html**
```html
<script>
    const unmined = new Unmined('map', {
        minRegionX: -2,
        minRegionZ: -2,
        maxRegionX: 2,
        maxRegionZ: 2,
        centerX: 0,
        centerZ: 0,
        imageFormat: 'png',
        maxZoom: 0,
        minZoom: -4,
        mapKeyImage: 'the-end-key.png',
        showMapKey: true  // Explicitly show (this is also the default)
    }, regions);
</script>
```

## Image Format Recommendations

### Ideal Map Key Dimensions
- **Width**: 800-1200px (will scale down automatically)
- **Height**: Proportional to width (e.g., 1:1 or 16:9)
- **Format**: PNG with transparency recommended for overlay appearance

### File Size Tips
- Keep under 500KB for fast loading
- Use PNG compression or WebP for better quality-to-size ratio
- Avoid very large images (above 2000px width)

## Troubleshooting

### Map Key Doesn't Appear
1. **Check file path**: Ensure the path in `mapKeyImage` is correct relative to the HTML file
2. **Check file exists**: Verify the image file is in the correct location
3. **Browser console**: Open DevTools (F12) and check for 404 errors in the Console tab
4. **Cache issue**: Try hard-refreshing (Ctrl+Shift+R or Cmd+Shift+R)

### Map Key is Too Large/Too Small
- The scaling is automatic and responsive
- Check that your image aspect ratio is reasonable
- Resize your image if needed before uploading

### Toggle Doesn't Work
- Ensure you right-clicked to open the context menu
- The "Show map key" option only appears if `mapKeyImage` is configured
- Check browser console for JavaScript errors

### Settings Not Saving
- Ensure localStorage is enabled in your browser
- Check if you're in private/incognito mode (localStorage won't persist)
- Look for any console errors related to storage

## API Reference

### Unmined Class Methods for Map Keys

```javascript
// Toggle map key visibility
unmined.toggleMapKey()

// Update the map key display (automatically called when options change)
unmined.updateMapKey()

// Access current options
unmined.#options.mapKeyImage   // Image path
unmined.#options.showMapKey    // Current visibility state
```

### Configuration Defaults
```javascript
Unmined.defaultOptions = {
    // ... other defaults ...
    showMapKey: true,           // Initially visible
    mapKeyImage: null,          // No map key by default
}
```

## Advanced Customization

### Custom CSS (if you want to style the map key container)
```css
.unmined-map-key-control {
    /* Custom styles applied to the map key container */
}

.unmined-map-key-control img {
    /* Custom styles applied to the image */
}
```

### Responsive Design
The map key automatically responds to window resizing. The scaling recalculates on image load to ensure proper dimensions.

## Migration from Old System

If you had a previous map key implementation:
1. Remove any old HTML elements or styles
2. Add the `mapKeyImage` option to your Unmined configuration
3. Move your map key images to the world directories
4. Test the toggle functionality
5. The new system will automatically manage visibility and persistence

---

**Questions or Issues?** Check the browser console (F12 → Console tab) for any error messages that can help identify problems.
