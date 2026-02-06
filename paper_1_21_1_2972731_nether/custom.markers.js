/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [
        {
            x: 500,
            z: 500,
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Right click / hold to turn markers off",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "10px Minecraftia, sans-serif",
        },
        // Example 1: Simple marker
        {
            x: -14,
            z: 17,
            image: "../items/minecraft_compass.png",
            imageAnchor: [0.5, 0.5],
            imageScale: 0.6,
        },

        // Example 2: Marker with text
        {
            x: -11,
            z: 77,
            image: "../items/minecraft_beacon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.6,
            text: "Shopping Hole",
            textColor: "DarkTurquoise", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },

        {
            x: 55,
            z: 53,
            image: "../items/minecraft_honey_bottle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.6,
            text: "Donut Market",
            textColor: "DarkTurquoise", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },

                {
            x: -92,
            z: 93,
            image: "../items/minecraft_tnt.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.6,
            text: "Gamming District",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "10px Minecraftia, sans-serif",
        },

        {
            x: 3,
            z: -205,
            image: "../items/minecraft_ender_eye.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Stronghold",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "10px Minecraftia, sans-serif",
        },
                {
            x: 5,
            z: 116,
            image: "../items/minecraft_campfire.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Society",
            textColor: "SandyBrown", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },
                        {
            x: 142,
            z: 91,
            image: "../items/minecraft_rotten_flesh.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Humans",
            textColor: "SandyBrown", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },
                                {
            x: -108,
            z: 156,
            image: "../items/minecraft_enchanted_fishing_rod.gif",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Coolsville",
            textColor: "SandyBrown", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },
                                                {
            x: 59,
            z: 77,
            image: "../items/minecraft_cake.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Donut",
            textColor: "SandyBrown", 
            offsetX: 0,
            offsetY: 10,
            font: "12px Minecraftia, sans-serif",
        },
        // Example 3: Text only
        // add your markers here




        // do not delete the following two closing brackets
    ]
}
