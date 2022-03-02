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
   - Note that you will need to use the classic editor to add this for now (switch over to the classic editor and add your script properties)
  
  ![Screen Shot 2022-03-02 at 2 16 55 PM](https://user-images.githubusercontent.com/7649418/156451298-7f973a49-c73e-4800-b5b6-c224d2c19c51.png)
![Screen Shot 2022-03-02 at 2 21 32 PM](https://user-images.githubusercontent.com/7649418/156451784-d93ae78a-1574-44df-8437-188f90f2dc24.png)


5. Back in your sheet populate the "From" field with a Twilio-owned number in your account, "To" field with where you want to send the message and the "Body" with your desired message

6. Hit "Send with Twilio" This will then loop through each row in your sheet and if it's non empty will call the Twilio API and send the message using the paramaters provided.

![Send_with_Twilio](https://user-images.githubusercontent.com/7649418/156449125-4025b0a7-2795-42a6-a4b9-8d055f846e6a.png)




