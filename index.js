const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const translate = require('translate-google');

// Define the port to listen on
const port = 3000;

// Define a route
app.post('/convert', async (req, res) => {
    try {
    //get the text in body with this format {text: "Hello, How are u?"}
    const data = req.body;
    // in data.text we have the value we need to convert
    console.log("data", data.text);
    const translatedText = await translate(data.text, { to: 'fr' });
    console.log(translatedText);

    //write convert to french logic here for now i am giving a dummy value
    const convertedToFrenchText = {
        translation: translatedText,
    };

  res.send(convertedToFrenchText); // Send a response
    } catch (error) {
        console.log("Error*", error)
        res.send(error);

    }
});