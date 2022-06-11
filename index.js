import express from "express";
import cors from "cors";
import fetch from 'node-fetch';

const app = express();
const port = 8080;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
)

app.get("/", (req, res) => {
  console.log("hello");
  res.write("<h1>It's working 🤗</h1>");
  res.end();
})

app.post("/testRequest", (req, res) => {
  console.log("processing request");
  console.log(req.body);
  fetch(`https://api.abcfinancial.com/rest/6597/members/agreements`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json;charset=UTF-8',
            'app_id': '7ec0ad08',
            'app_key': '78b9c380421e47863614616e6439f737',
        },
        body: JSON.stringify( 
            {
              "paymentPlanId": "78156cf7931c4d8490eb18b6b99a0895", //"be5c379569e94e9ba415068751abf87b",
              "planValidationHash": "1190735785", //"1374140909",
              "salesPersonId": "",
              "campaignId": "f80c4f63b33e497c8c49ae264551f0a1",
              "macAddress": "string",
              "activePresale": "true",
              "sendAgreementEmail": "true",
              "agreementContactInfo": {
                "firstName": req.body.first_name,
                "middleInitial": "H",
                "lastName": req.body.last_name,
                "email": req.body.email,
                "gender": req.body.gender,
                "homePhone": req.body.phone,
                "cellPhone": "5148901234",
                "workPhone": "5148901234",
                "workExt": "1234",
                "birthday": req.body.birthDay,
                "driversLicense": "string",
                "employer": "string",
                "wellnessProgramId": "340tj3g0j30gj02j",
                "barcode": "heavensward",
                "agreementAddressInfo": {
                  "addressLine1": req.body.addres,
                  "addressLine2": "#409",
                  "city": req.body.city,
                  "state": req.body.province,
                  "country": "CA",
                  "zipCode": req.body.postalCode
                },
                "emergencyContact": {
                  "ecFirstName": req.body.ecFirstName,
                  "ecLastName": req.body.ecLastName,
                  "ecPhone": req.body.ecPhone,
                  "ecPhoneExtension": "1234"
                }
              },
              "todayBillingInfo": {
                "isTodayBillingSameAsDraft": "true",
                "todayCcCvvCode": req.body.cvvCode,
                "todayCcBillingZip": req.body.billingZip
              },
              "draftBillingInfo": {
                "draftCreditCard": {
                  "creditCardFirstName":  req.body.first_name,
                  "creditCardLastName": req.body.last_name,
                  "creditCardType": req.body.creditCardType,
                  "creditCardAccountNumber": "", //req.body.ccNumber,
                  "creditCardExpMonth": req.body.ccExpMonth,
                  "creditCardExpYear": req.body.ccExpYear
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
            }
          ),

        method: 'POST'
    }).then(response => console.log(response))
  res.status(201).send('Created agreement');
})

app.listen(port);
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