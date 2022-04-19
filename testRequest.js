import fetch from "node-fetch";
const args = process.argv.slice(2);

switch (args[0]){
    case 'post':
        postRequest();
        break;
    case 'get':
        getRequest();
        break;
    default:
        console.log("Sorry that isn't an argument.")
}

function getRequest()
{
    fetch("https://api.abcfinancial.com/rest/6597/members?page=1&size=5",
    {
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'app_id': '7ec0ad08',
            'app_key': '78b9c380421e47863614616e6439f737'
        },
        method: 'GET'
    })
}

function postRequest() 
{ 
    fetch("http://localhost:3000/testRequest", 
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
            'club':'6597',
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
    })
}
