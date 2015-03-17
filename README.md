# Local Blueline development

For developing and deploying new Blueline styles. If you want to use Blueline in a project, all you need to do is include a link to it in the `head`. See docs for more info.


## Setting up Blueline

Blueline runs on the CSS framework [Foundation](http://foundation.zurb.com/). These instructions are adapted from Foundation's [manual install process.](http://foundation.zurb.com/docs/sass.html#nocli)

### Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

### Procedure
  * Clone this repo and `cd` into it.
  * Create a `bower_components` directory and `cd` into it.
  * Add [bower-foundation](https://github.com/NUKnightLab/bower-foundation) as a submodule named `foundation`: `git submodule add -f git@github.com:NUKnightLab/bower-foundation.git foundation`
  * Compile CSS with Compass: `compass watch`

DO NOT commit `bower_components/foundation`.

## Modifying Blueline
TK, notes on which files to modify and which to leave alone

## Deploying new versions of Blueline
TK, how to deploy to Github Pages (probably) and conventions for updating version number when needed.

## Upgrading Foundation
**Note: untested with Blueline**
If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```
