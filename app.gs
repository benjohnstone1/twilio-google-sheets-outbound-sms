function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Twilio')
    .addItem('Send with Twilio', 'sendWithTwilio')
    .addToUi();
}

function sendWithTwilio() {
  // Store Twilio Account SID & Auth Token in a Properties Service
  var TWILIO_ACCOUNT_SID = PropertiesService.getScriptProperties().getProperty('TWILIO_ACCOUNT_SID');
  var TWILIO_AUTH_TOKEN = PropertiesService.getScriptProperties().getProperty('TWILIO_AUTH_TOKEN');

  var ss = SpreadsheetApp.getActiveSpreadsheet()

  var fromNumberList = ss.getRange("A2:A").getValues();
  var toNumberList = ss.getRange("B2:B").getValues();
  var msgBodyList = ss.getRange("C2:C").getValues();

  var url = 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json';

  var headers = {
    "Authorization": "Basic " + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN)
  };

  for (var i = 0; i < fromNumberList.length; i++) {
    if (toNumberList[i][0] != "") {
      var data = {
        "To": "+1" + toNumberList[i][0],
        "Body": msgBodyList[i][0],
        "From": "+1" + fromNumberList[i][0]
      };
      var options = {
        'method': 'post',
        'headers': headers,
        'payload': data
      };
      // Send message
      var response = UrlFetchApp.fetch(url, options);
      var msgSid = JSON.parse(response).sid
      // Writeback Message Sid
      ss.getRange("D"+(i+2)).setValue(msgSid);
    }
    // Do nothing for empty cells
  }

}
