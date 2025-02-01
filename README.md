
# 🗲 - Venus OS Dashboard - 🗲

![Overview](https://github.com/user-attachments/assets/5c450676-acba-4c8b-a558-dc36ff85c208)

## What is Venus OS Dashboard ?

Venus OS Dashboard is a card to clone aspect of Venus OS gui-v2 for [Home Assistant][home-assistant] Dashboard UI.

### Features

-   🛠 Editor for all options (no need to edit `yaml`)
-   😍 Icon picker
-   ⚓ Entity picker
-   🚀 0 dependencies : no need to install another card.
-   🌈 Based on Material UI
-   🌓 Light and dark theme support
-   🌎 Internationalization

## Installation

### HACS

Not available for now (hope sooner)

### Manual

Install this package in www directory (and any sub directory in www) in HA and add "ressource"s in "parameter / dashboard / 3 dots on right upper corner / ressources" and click on "add ressources" bouton.

Type "/local/any_dir/venus/venus.js" in URL (where "any_dir" is the directory where you put "venus" directory). So, if you put "venus" directly in www, youy URL was "/local/venus/venus.js". If you put "venus" in "www/community", your URL was "/local/community/venus/venus.js".

After that, select "Javascript module" and click on "creat".

Restart HA and "et voila"... Venus OS Dashboard must be available in lovelace card picker menu.

Enjoy ! 

## Usage

Venus OS Dashboard can be configured using Dashboard UI editor.

1. In Dashboard UI, click 3 dots in top right corner.
2. Click _Edit Dashboard_.
3. Click Plus button to add a new card.
4. Find the _Custom: Venus OS Dashboard card in the list.

