function myFunction() {
  var webURL = "https://www.unive.it/data/people/5592881";
  var response = UrlFetchApp.fetch(webURL);
  var $ = Cheerio.load(response.getContentText());

  //for help on usage: https://github.com/tani/cheeriogs/blob/master/README.md


  var itemsOfInterest = $('h1').first().text().trim();
  Logger.log(itemsOfInterest);
  //to email it out

  var emailBody = "Teaching schedule: <b>" + itemsOfInterest + "</b>";
  
  /*MailApp.sendEmail({
    to: "elisabettajarova@gmail.com",
    subject: "Current Teaching schedule for Professor",
    htmlBody: emailBody
  });*/


  //check every week for example and notify via email only if there are changes! Excellent idea.
}
