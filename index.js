// Sending an HTTP Request from a NodeJS server

//const http = require("http");
// const https = require("https");


// const options = {
//     hostname: 'api.abcfinancial.com',
//     path: 'rest/6597/prospects/terms',
//     port: '443',
//     method: 'GET',
//     Accept: "application/json;charset=UTF-8",
//     App_id: "7ec0ad08",
//     App_key: "78b9c380421e47863614616e6439f737",
// }

// const req = https.request(options, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);

//     res.on('data', (d) => {
//       console.log("we are displaying the data now  "+d);

//     });
//   });

//   req.on('error', (e) => {
//     console.error(e);
//   });
//   req.end();
import fetch from "node-fetch";


fetch("https://api.abcfinancial.com/rest/9003/members/agreements", 
{
    body: {
        "paymentPlanId": "55384c6f1ff44c7893ca4c7b0c36ffc3",
        "planValidationHash": "1767927421",
        "salesPersonId": "2e933fe277a74f4fa53a2c4c5d3632bf",
        "campaignId": "f80c4f63b33e497c8c49ae264551f0a1",
        "macAddress": "string",
        "activePresale": "true",
        "sendAgreementEmail": "true",
        "agreementContactInfo": {
          "firstName": "FFXIV",
          "middleInitial": "H",
          "lastName": "Endwalker",
          "email": "mrkitty@gmail.com",
          "gender": "Male",
          "homePhone": "5148901234",
          "cellPhone": "5148901234",
          "workPhone": "5148901234",
          "workExt": "1234",
          "birthday": "08/13/1994",
          "driversLicense": "string",
          "employer": "string",
          "wellnessProgramId": "340tj3g0j30gj02j",
          "barcode": "heavensward",
          "agreementAddressInfo": {
            "addressLine1": "28201 E Bonanza St",
            "addressLine2": "#409",
            "city": "South Park",
            "state": "CO",
            "country": "US",
            "zipCode": "80440"
          },
          "emergencyContact": {
            "ecFirstName": "Mitch",
            "ecLastName": "Conner",
            "ecPhone": "5148901234",
            "ecPhoneExtension": "1234"
          }
        },
        "todayBillingInfo": {
          "isTodayBillingSameAsDraft": "true",
          "todayCcCvvCode": "100",
          "todayCcBillingZip": "80440"
        },
        "draftBillingInfo": {
          "draftCreditCard": {
            "creditCardFirstName": "Mitch",
            "creditCardLastName": "Conner",
            "creditCardType": "visa",
            "creditCardAccountNumber": "4263982640269299",
            "creditCardExpMonth": "09",
            "creditCardExpYear": "2024"
          },
          "draftBankAccount": {
            "draftAccountFirstName": "",
            "draftAccountLastName": "",
            "draftAccountRoutingNumber": "",
            "draftAccountNumber": "",
            "draftAccountType": ""
          },
          "draftPaymentToken": {
            "paymentToken": "",
            "paymentTokenType": ""
          }
        },
        "payPageBillingInfo": {
          "payPageDraftCreditCard": {
            "draftCreditCardTransactionId": ""
          },
          "payPageDraftBankAccount": {
            "draftAccountTransactionId": ""
          },
          "payPageDueTodayCreditCard": {
            "todayCreditCardTransactionId": ""
          }
        },
        "schedules": [
          "Dues"
        ],
        "marketingPreferences": {
          "email": "true",
          "sms": "true",
          "directMail": "true",
          "pushNotification": "true"
        }
      },
    headers: {
        'Accept': 'application/json;charset=UTF-8',
        'app_id': '7ec0ad08',
        'app_key': '78b9c380421e47863614616e6439f737'
    },
    method: 'POST'
})