import fetch from "node-fetch";
import http from "http";
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log("hello");
  res.write("<h1>It's working 🤗</h1>");
  res.end();
})

app.get("/testRequest", (req, res) => {
  console.log(req.headers);
})

// const server = http.createServer((req, res) => {

//   const headers = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
//     "Access-Control-Max-Age": 2592000, // 30 days
//     /** add other headers as per requirement */
//   };
  
//   if (req.method === "OPTIONS") {
//     res.writeHead(204, headers);
//     res.end();
//     return;
//   }

//   //if(req.headers.firstname) console.log("request has header " + req.headers['firstname'])

//   if(req.url === '/'){
//     console.log("hello");
//      res.write("<h1>It's working 🤗</h1>");
//      res.end();
//   }

//   if (["GET", "POST"].indexOf(req.method) > -1) {
//     res.writeHead(200, headers);
//     res.end("Hello World");
//     return;
//   }

//   // if(req.url === '/testRequest' || req.headers.firstName){
//   //   res.writeHead(200, headers);
//   //   res.end("Hello World");
//   //   console.log(req.headers);
//   //   return;
//   // }
// })

app.listen(port);
//server.listen(port);
console.log(`Listening on port ${port}...`);

    /*fetch(`https://api.abcfinancial.com/rest/${req.headers.club}/members/agreements`, 
    {
        body: {
            "paymentPlanId": req.headers.paymentplanid,
            "planValidationHash": req.headers.planValidationHash,
            "salesPersonId": "2e933fe277a74f4fa53a2c4c5d3632bf",
            "campaignId": req.headers.campaignId,
            "macAddress": "string",
            "activePresale": "true",
            "sendAgreementEmail": "true",
            "agreementContactInfo": {
              "firstName": req.headers.firstName,
              "middleInitial": "H",
              "lastName": req.headers.lastName,
              "email": req.headers.email,
              "gender": req.headers.gender,
              "homePhone": "5148901234",
              "cellPhone": "5148901234",
              "workPhone": "5148901234",
              "workExt": "1234",
              "birthday": req.headers.birthday,
              "driversLicense": "string",
              "employer": "string",
              "wellnessProgramId": "340tj3g0j30gj02j",
              "barcode": "heavensward",
              "agreementAddressInfo": {
                "addressLine1": req.headers.addressLine1,
                "addressLine2": "#409",
                "city": req.headers.city,
                "state": req.headers.state,
                "country": req.headers.country,
                "zipCode": req.headers.zipCode
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
            'app_key': '78b9c380421e47863614616e6439f737',
            "paymentPlanId": "55384c6f1ff44c7893ca4c7b0c36ffc3",
            "planValidationHash": "1767927421",
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
            "wellnessProgramId": "340tj3g0j30gj02j"
        },
        method: 'POST'
    })*/

/*
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
*/