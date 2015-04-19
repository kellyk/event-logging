# event-logging

## Running

`php -S 127.0.0.1:8888`

## Setup

This currently logs to my personal google doc. To log events to your own Google doc, follow these steps:

1. Create a new form in Google Drive
2. Add four text fields: **id**, **bucket**, **element**, **type** and **action**

 ![Finding form id](/images/form.png)
3. Click **View form** to see your Google form, where you can find your specific Google doc info. See [Adding Your Google Form Info](#googleform).
4. Replace the values in `js/log.js` with your own Google doc info.

    $.ajax({
      url: "https://docs.google.com/forms/d/<YOUR_FORM_ID>/formResponse",
      data: {
        "entry_<YOUR_INPUT_1>" : user,
        "entry_<YOUR_INPUT_2>" : bucket,
        "entry_<YOUR_INPUT_3>" : eventData.element || "",
        "entry_<YOUR_INPUT_4>" : eventData.type || "",
        "entry_<YOUR_INPUT_5>" : eventData.action || ""
    });

5. Visit localhost:8888 and interact with the page.
6. See results in your Google form

 ![Finding form id](/images/spreadsheet.png)


### <a name="googleform">Adding your Google form info</a>

In `js/log.js` update the $.ajax method to replace my Google doc info with yours
* The URL should look like this:  https://docs.google.com/forms/d/YOUR_FORM_ID/viewform
* The data keys should be replaced with elements from your form, which can be found by inspecting the input fields and finding the ids

 ![Finding form id](/images/formids.png)
