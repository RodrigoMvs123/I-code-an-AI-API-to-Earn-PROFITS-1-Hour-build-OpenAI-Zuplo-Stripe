const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const { OpenAi } = require('openai')
require('dotenv').config()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))
    const authHeaders = req.readers

    if(authHeaders.secretkey !== process.env.ZUPLOS_API_KEY) {
        res.json({ message: "You are not authorized to make this request." })
        return 
    }

app.get('/haiku', async(req, res) => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    try {
        const completion = await openai.chat.completions({
            messages: [{ role: "system", content: "Write a haiku."}],
            model: "gpt-4"
        })
        res.json(completion.choises[0].message.content)
    } catch (err) {
        console.error(err)
    }
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))

