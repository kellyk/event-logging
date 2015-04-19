# event-logging

## Running

`php -S 127.0.0.1:8888`

## Setup

This currently logs to my personal google doc. To log events to your own Google doc, follow these steps:

1. Create a new form in Google Drive
* Add four text fields: **id**, **element**, **type** and **action**

 ![Finding form id](/images/form.png)
* Click **View form** to see your Google form, where you can find your specific form ids.
* Replace the values in `js/log.js` with your own Google doc info.
* Visit localhost:8888 and interact with the page. See [Adding Your Google Form Info](#googleform).
* See results in your Google form

 ![Finding form id](/images/spreadsheet.png)


### <a name="googleform">Adding your Google form info</a>

In `js/log.js` update the $.ajax method to replace my info with yours
* The URL should look like this:  https://docs.google.com/forms/d/YOUR_FORM_ID/viewform
* The data keys should be replaced with elements on your form, which can be found by inspecting the input fields and finding the ids

 ![Finding form id](/images/formids.png)
