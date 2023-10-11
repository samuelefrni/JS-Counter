<div align="center"><img src="/assets/img/fav.png" width="150px"></div>
<h1 align="center">JS Counter</h1>
<p align="center">A simple JS Counter realized by Samuele Furnari.
<br>
Click here to <a href="https://samuelefrni.github.io/js-counter/"><strong>Live Demo</strong></a>
</p>

## Table of contents

- [Introduction to Project](#introduction-to-project)
  - [Structure](#structure)
  - [Technologies used](#technologies-used)
- [Usage](#usage)
- [Responsiveness](#responsiveness)

### Introduction to Project

The project consists in the creation of a counter that allows the user to increase and decrease by 1 its value, 
which will initially be 0, by using the two +/- buttons.
In addition to the basic functions, I've create, a reset button, which allows you to reset the counter, and an auto button, which automatically increases its value.

### Structure

This is the project's structure:
- **index.html** : where I've create the supporting structure of the project, in which the stylesheet (CSS) for the graphics of the counter and the scripts for its functions are inserted.
- **styles.sass / styles.css** : stylesheets with which I've create the style and graphics of the counter.
- **app.js** : script designed to create the various HTML elements and the counter functions (increase/decrease, reset and auto).

### Technologies used

For create this counter I've used different technologies:
- **Visual Studio Code**, as editor for writing code.
- **HTML**, for realized the counter's structure.
- **Bootstrap**, a CSS's framework for develop web interface that I've used to make the site 100% responsive.
- **SASS**, a powerful professional grade CSS extension for the stylesheets;
- **JavaScript**, programming language that I've use for the realization counter's functionalities.
- **Git**, is a distributed version control system.

### Usage

Using the counter is very simple. The counter's value is increased and decreased by 1 with a click on the `+` / `-` buttons.
To reset the current value just click on the `reset` button, while if you want the counter to automatically increase its value click on the `auto` button, which you can also use to stop and restart the increase.

You can also use the keyboard to use the counter :
- `ArrowUp` to increase the counter's by 1.
- `ArrowDown` to decrease the counter's by 1.
- `a/A` to increase automatically the counter's value.
- `r/R` to reset.

### Responsiveness

Thanks to the use of Media Queries, I've manage to take care of the Responsiveness aspect of the counter and of the website, which adapts perfectly to the change in the size of the device on which it is displayed.

