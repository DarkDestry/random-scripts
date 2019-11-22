# XDCC Parser

I got tired of the popups that xdcc.horriblesubs.info keeps giving to copy your XDCC send commands. This basically scrapes the horriblesubs xdcc site and present it in a format that I like.

# Files

- XDCC Auto Parser.js - Nodejs version. 
- xdcc.html - html version.

# Usage

### HTML Version

https://darkdestry.github.io/random-scripts/xdcc/xdcc.html

First Row:

- Refresh
-- Scrapes xdcc.horriblesubs.info for the xdcc links. Make sure your query list is not empty!

Second row:

- Text field - Enter the full search term that you can use to find an anime on xdcc.horriblesubs.info
-- e.g `[HorribleSubs] Honzuki no Gekokujou`
-- Press add and the search term will be stored in your cookies.
- Drop Down
-- Used for removing search terms.
-- Select the search term you want to remove and click Remove.

### NodeJS version

- Put script in folder
- `npm install request`
- Open script and edit `searchList` with all the anime you want to track.
- Run script
