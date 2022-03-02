# Twilio Google Sheets Outbound SMS
Simple demo for sending outbound SMS from Google Sheets via Twilio


## You Will Need
Twilio Account SID, Auth Token and phone number. You can find your Account SID and Auth Token when you first log-in to the Twilio Console here: https://www.twilio.com/console. You can purchase, or find your existing Twilio phone number here: https://www.twilio.com/console/phone-numbers/incoming.

A Google Apps account, so you can create a Google Sheet.

## Instructions

1. Create a new Google Sheet and Give it 4 Columns.
   - "From"  
   - "To"
   - "Body"
   - "MessageSid"

2. In the sheet menu select "Extensions" then "Apps Script". This will open a new browser tab for writing your script.

![AppScript](https://user-images.githubusercontent.com/7649418/156449401-c3891ce2-1b78-4670-8dd7-0a3f8a479d28.png)

3. You should be taken to Code.gs file with an empty function. Copy the code [here](https://github.com/benjohnstone1/twilio-google-sheets-outbound-sms/blob/main/app.gs) and paste it into your Code.gs file and save.

4. Add Account SID and Auth Token using [Properties Service](https://developers.google.com/apps-script/guides/properties)
   - Back on the browser tab where you've been writing your code click the "File" menu, then "Project properties", then click the "Script properties" tab in the window that pops up. This is where you will need your Twilio Account SID, Auth Token, and phone number. Plus you will be setting several other properties. Using the image below as your guide. Add the same exact properties you see in the image. Replace the blurred out parts with your specific information.

7. Populate "From" field with a Twilio-owned number in your account, "To" field with where you want to send the message and the "Body" with your desired message

8. Hit "Send with Twilio"!

![Send_with_Twilio](https://user-images.githubusercontent.com/7649418/156449125-4025b0a7-2795-42a6-a4b9-8d055f846e6a.png)




