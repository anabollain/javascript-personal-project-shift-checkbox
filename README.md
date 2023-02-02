# JS Checkbox

## Description

These exercise consists on selecting multiple checkboxes when holding shift between two elements.

To do so, several steps have to be followed:

* Select all checkboxes with querySelectorAll()
* Add an event listener to each one of them with a loop
* Create a variable to save the last checked checkbox
* Set a 'flag' variable that starts as false
* If the user is holding the shift key and is checking the checkbox when clicking, we loop over all checkbox elements
* When looping, we check if the element responds to the checked checkbox. If true, we will have the first checked element and will turn the flag to true
* If the flag is true, we will change the checked attribute of all elements to true
* Once we have reached the last checked checkbox, the flag will return to false
* This way, we will only change the checked property to true for those elements who are between them

## Javascript Used

* querySelectorAll()
* for ... of
* forEach()
* shiftKey
* 'flag' variable
* event listener

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

