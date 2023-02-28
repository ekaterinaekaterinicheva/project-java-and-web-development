import express from 'express';
export const router = express.Router();
import needle from 'needle';
import * as dotenv from 'dotenv';
dotenv.config();

// Env vars
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY_VALUE,
            'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
        }
    }
    const response = await fetch(                                     
        'https://urban-dictionary7.p.rapidapi.com/v0/random', options        
    )
    console.log(response);

     if (response.ok) {
        const data = await response.json();        
        res.send(data);        
        
    } else {
        res.send("Ooops");
    }
});     

//module.exports = router;

export default router;