const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const port = 3700;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const server = app.listen(port, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log('listening at host', host, port);
})

const dataPatient = {
  "resourceType": "Patient",
  "birthDate": "1985-08-01",
  "active": true,
  "gender": "male",
  "deceasedBoolean": false,
  "id": "Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB",
  "careProvider": [
    {
      "display": "Physician Family Medicine",
      "reference": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Practitioner/T3Mz3KLBDVXXgaRoee3EKAAB"
    }
  ],
  "name": [
    {
      "use": "usual",
      "family": [
        "Argonaut"
      ],
      "given": [
        "Jason"
      ]
    }
  ],
  "identifier": [
    {
      "use": "usual",
      "system": "urn:oid:1.2.840.114350.1.13.327.1.7.5.737384.0",
      "value": "E3826"
    },
    {
      "use": "usual",
      "system": "urn:oid:1.2.3.4",
      "value": "203579"
    }
  ],
  "address": [
    {
      "use": "home",
      "line": [
        "1979 Milky Way Dr."
      ],
      "city": "Verona",
      "state": "WI",
      "postalCode": "53593",
      "country": "US"
    },
    {
      "use": "temp",
      "line": [
        "5301 Tokay Blvd"
      ],
      "city": "MADISON",
      "state": "WI",
      "postalCode": "53711",
      "country": "US",
      "period": {
        "start": "2011-08-04T00:00:00Z",
        "end": "2014-08-04T00:00:00Z"
      }
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "608-271-9000",
      "use": "home"
    },
    {
      "system": "phone",
      "value": "608-771-9000",
      "use": "work"
    },
    {
      "system": "phone",
      "value": "608-771-9000",
      "use": "mobile"
    },
    {
      "system": "fax",
      "value": "608-771-9000",
      "use": "home"
    },
    {
      "system": "phone",
      "value": "608-771-9000",
      "use": "temp",
      "period": {
        "start": "2011-08-04T00:00:00Z",
        "end": "2014-08-04T00:00:00Z"
      }
    },
    {
      "system": "email",
      "value": "open@epic.com"
    }
  ],
  "maritalStatus": {
    "text": "Single",
    "coding": [
      {
        "system": "http://hl7.org/fhir/ValueSet/marital-status",
        "code": "S",
        "display": "Never Married"
      }
    ]
  },
  "communication": [
    {
      "preferred": true,
      "language": {
        "text": "English",
        "coding": [
          {
            "system": "urn:oid:2.16.840.1.113883.6.99",
            "code": "en",
            "display": "English"
          }
        ]
      }
    }
  ],
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
      "valueCodeableConcept": {
        "text": "Asian",
        "coding": [
          {
            "system": "2.16.840.1.113883.5.104",
            "code": "2028-9",
            "display": "Asian"
          }
        ]
      }
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
      "valueCodeableConcept": {
        "text": "Not Hispanic or Latino",
        "coding": [
          {
            "system": "2.16.840.1.113883.5.50",
            "code": "2186-5",
            "display": "Not Hispanic or Latino"
          }
        ]
      }
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-birth-sex",
      "valueCodeableConcept": {
        "text": "Male",
        "coding": [
          {
            "system": "http://hl7.org/fhir/v3/AdministrativeGender",
            "code": "M",
            "display": "Male"
          }
        ]
      }
    }
  ]
};


app.get('/api/getPatient', (req, res) => {
	res.json(dataPatient);
});








