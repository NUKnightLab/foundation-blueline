# Local PurpleLine development

For developing and deploying new PurpleLine styles. If you want to use PurpleLine in a project, all you need to do is include a link to it in the `head`. See docs for more info.


## Setting up PurpleLine

PurpleLine runs on the CSS framework [Foundation](http://foundation.zurb.com/). These instructions are adapted from Foundation's [manual install process.](http://foundation.zurb.com/docs/sass.html#nocli)

### Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

### Procedure
  * Clone this repo and `cd` into it.
  * Create a `bower_components` directory and `cd` into it.
  * Add [purpleline-foundation](https://github.com/NUKnightLab/purpleline-foundation) as a submodule named `foundation`: `git submodule add -f git@github.com:NUKnightLab/purpleline-foundation.git foundation`
  * Compile CSS with Compass: `compass watch`

DO NOT commit `bower_components/foundation`. ([See here](http://stackoverflow.com/questions/1139762/ignore-files-that-have-already-been-committed-to-a-git-repository) for helpful information on how to remove files that have already been committed.)

## Modifying PurpleLine
TK, notes on which files to modify and which to leave alone

## Deploying new versions of PurpleLine
<!--Add: difference between deploying CDN and PL website; conventions for updating version number when needed.-->
```bash
fab build
fab stage stage_latest
[update version number]
```
change to cdn repo

```bash
pull
push
fab deploy
```

## Upgrading Foundation
**Note: untested with PurpleLine**
If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```
