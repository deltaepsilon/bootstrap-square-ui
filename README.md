Bootstrap Square UI
========================

##designmodo.com Square UI & Twitter Bootstrap 3.0
This is a mashup.

See Square UI at http://designmodo.com/square/

See basic Twitter Bootstrap docs at http://twitter.github.io/bootstrap/

See Twitter Bootstrap 3.0 notes at https://github.com/twitter/bootstrap/pull/6342

If you're serious about using this, purchase Square UI from designmodo. It's prettier than whatever I could make in $150 worth of my time.

##Build
I swapped out Bootstrap's Makefile build process with a Gruntfile instead. The Gruntfile is shorter, more readable, and frankly, I have no idea how to use Make. Sorry.

And Grunt supports liveload. Thank you Grunt. Thank you.

See Grunt docs at http://gruntjs.com/

##Current State
The ELEMENT page is up and looks about right in Chrome, Safari, FF, Mobile Safari and Mobile Chrome. 

Mobile browsers are currently a bit ugly up because the Bootstrap popups are not currently popping in front of the codeblocks below them.

I also had to do a bit of hackery to make the select look non-native. The arrows on the right do not actually open the select, because they're an overlayed div. I know it's yucky, but so are selects. Sorry. Compromises.

I have now mucked a bit with some JS, but I tried to keep it simple.

So I may have put some of the images a little too close together in the spritesheet. I've spread them out where necessary, but there are still limits to how much one can grow some of these divs without running into unrelated parts of the spritesheet. Again, compromises. If you take the time to fix this up, please contribute back.
