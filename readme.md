# Artwork inpsiration: 
![Artwork](https://github.com/superstephan1/web-animatie/blob/master/assets/artwork.jpg)

### style

The original artwork is created by Flatowl. A london based design studio. As you can see i diverted a lot from the original artwork. I decided to skip the texture of the original 
artwork because it made the svg image extremely unreadable. There isn't much backgroundinfo on the artwork itself so i decided to let my imagination do the work.
I decided to build a concept around planets in our solar system. Mainly Mars, Earth and Neptune. (chosen because of the color differences). 

### Interaction

I build a few interactions into my artwork.
1. Sunset and moonrise. With the top-left buttons you can change the setting of the artwork. this will show you the sunset and moonrise including stars in the background.
2. 300px scrolling animation to show other planets.
3. 400px scrolling animation to show planet headers.
4. 500px scrolling animation to show rocket animation from Earth to Mars.
5. 600px scrolling animation to show rocket animation from Earth to Neptune.
6. Click on planet to show a "battle" and title change to Conquer Mars/Neptune.
7. Press "p" on your keyboard to "plant" the dutch flag.

### Experiment

I experimented quite a bit with css animations. It took quite a long time to get the right "feel" with the scrolling animations. The biggest experiment were the responsiveness of the animations. 
I came to the conclusion that completely rewriting the rocket animations in the mobile viewport was the cleanest solution.


### Understanding

The logic of the artwork is mainly handled in js. Most of the work is done by toggling, adding and deleting classes from id's with different eventlisteners.
The most interesting thing i learned during this project is that classlist.toggle is useless when used in if statements that check scrolling postions. The classlist.toggle, toggles on every pixel that meets the if statement's requirement, so your animations get kinda "wonky".
