## I-code-an-AI-API-to-Earn-PROFITS-1-Hour-build-OpenAI-Zuplo-Stripe

https://www.youtube.com/watch?v=xe6wU26bf6s&t=308s 

https://raw.githubusercontent.com/RodrigoMvs123/I-code-an-AI-API-to-Earn-PROFITS-1-Hour-build-OpenAI-Zuplo-Stripe/main/README.md

https://github.com/RodrigoMvs123/I-code-an-AI-API-to-Earn-PROFITS-1-Hour-build-OpenAI-Zuplo-Stripe/blame/main/README.md

## Zuplo Portal

- https://portal.zuplo.com/fuchsia_upper_hare/ania-haiku-api/~working-copy/edit?path=getting-started 

## New Project
ania-haiku-api

```bash
  ania-haiku-api
```
    
routes.oas.json

### Visual Studio Code
Terminal 
npm init

## Source Code
```javascript
Visual Studio Code
Explorer 
Open Editors
package.json

package.json
{
  "name": "i-code-an-ai-api-to-earn-profits-1-hour-build-openai-zuplo-stripe",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js

index.js

Visual Studio Code
Explorer
Open Editors
package.json
index.js

package.json
{
  "name": "i-code-an-ai-api-to-earn-profits-1-hour-build-openai-zuplo-stripe",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### Visual Studio Code
Terminal
```bash
npm i nodemon
```

## Source Code 
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

### Visual Studio Code
Terminal
```bash
npm run start
npm install express 
npm run start
```

Listening on port 8000

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

http://localhost:8000

“Welcome to my Haiku API”

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))

app.get('/haiku',(req, res) => res.json('This is my Haiku !'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

localhost:8000/haiku

“This is my Haiku !”

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const { OpenAi } = require('openai')
require('dotenv').config()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))

app.get('/haiku',(req, res) => {
    new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })
    res.json('This is my Haiku !')
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

## OpenAI UI
```javascript
OpenAI API KEY
API KEYS
Create a new secret key
```

```bash
demo-api
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
```

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js
.env

.env
OPENAI_API_KEY=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
```

```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js
.env

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const { OpenAi } = require('openai')
require('dotenv').config()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))

app.get('/haiku',(req, res) => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    res.json('This is my Haiku !')
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

### Visual Studio Code
Terminal
```bash
npm install openai
```

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js
.env

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const { OpenAi } = require('openai')
require('dotenv').config()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))

app.get('/haiku', async(req, res) => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    try {
        const completion = await openai.chat.completions({
            messages: [{ role: "system", content: "Write a haiku."}],
            model: "gpt-4"
        })
        console.log(completion)
        // res.json('This is my Haiku !')
    } catch (err) {
        console.error(err)
    }
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
```

### Visual Studio Code
Terminal
```bash
npm install dotenv
```

## Source Code
```javascript
Visual Studio Code
Explorer
Open Editors
package.json
index.js
.env

index.js
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const { OpenAi } = require('openai')
require('dotenv').config()

app.get('/',(req, res) => res.json('Welcome to my Haiku API'))
    const authHeaders = req.readers

    if(authHeaders.secretkey !== "super-secret-key") {
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
```

localhost:8000/haiku
```bash
{
	message: “You are not authorized to make this request.”
}
```
## Heroku UI
- https://www.heroku.com/ 

```javascript
Create new App
App name 
haiku-app
Choose Region
Europe
```

```javascript
Install the Heruku CLI
```
https://devcenter.heroku.com/articles/heroku-cli 

## GitHub UI
Create a new Git repository
```javascript
git init
heroku git:remote -a haiku-app
git add . 
git commit -am “added files” 
git push push heroku main
```

URL

haiku-app-92b6f0dbadc4.herokuapp.com

“Welcome to my Haiku App !”

## Zuplo Portal

```javascript
Add Route
Request Handling 
Sumary 
New Route
Path 
/ 
Handler 
URL Rewrite https://haiku-app-92b6…
Save

Test
“Welcome to my Haiku API”

Add Route
Request Handling 
Sumary 
Get Your AI Generative Haiku
Path 
/v1/haiku
```
Handler 
URL Rewrite 

https://haiku-app-92b6…/haiku 
```bash
{
	“You are not authorized to make this request.”
}
Save

Test
{
	“You are not authorized to make this request.”
}
```

```javascript
Test Your API

Method Get
Path
/v1/haiku
Headers
secretkey / super-secret-key

Body
“Winter´s chill descends, \nBlanket of white, pure and still, \nPeace in cold´s harsh blend.”

Policies

Add Policy
Add or Set Request Headers

Configuration
```
```bash
{ 	
	“name”: “secretkey”,
	“value”: “super-secret-key”

}
Save
```

```javascript
Test Your API

Method Get
Path
/v1/haiku
Body
“Moonlight´s gentle gleam, \nSilence broken by night´s whispers, \nPeace in starlit dreams.”

Add Policy
API Key Authentication 

Configuration
Ok

Add Policy
Monetization

Configuration
Ok
Save

routes.oas.json

Request Hendling
Summary
Home
Save

dev-portal.json
Developer Portal Here

Get Your Ai Generated Haiku
Test

dev-portal.json
Page Settings
Ania´s Haiku API

Require Authentication
Checked

Monetization Settings 
Checked 
Save
```

## Stripe UI
- https://dashboard.stripe.com/register 

```javascript
Test Mode
On

Product Catalog 
Add Product
Name
Free Haiku
Add Product

Add Product
Name
Silver Level Haiku Member
Amount 
10.00
Add Product

Add Product
Name 
Golden Level Haiku Member
Amount
50.00
Add Product

Product Catalog
Pricing Tables
Create pricing tables
Products
Free Haiku
Silver Level Haiku Member
Golden Level Haiku Member
Continue
Finish

Code
…<script ..
id=“...”
key=“...”

dev-portal.json
Page Settings
Ania´s Haiku API

Require Authentication
Checked

Monetization Settings 
Checked 

Pricing Table ID* …

Publishable Key* …

Secret Key …

Search API Key
Reveal Test Key
Secret Key $env(STRIPE_API_KEY)

Settings
Environment Variables 
Add Variables
Name
STRIPE_API_KEY
Value
…
Secret
Checked 
```

## Zuplo Portal
```javascript
Zuplo Docs 
Monetization
```
https://zuplo.com/docs/articles/monetization-webhook-setup 
```javascript
import {
  RuntimeExtensions,
  StripeMonetizationPlugin,
  environment,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  // Create the Stripe Plugin
  const stripe = new StripeMonetizationPlugin({
    webhooks: {
      signingSecret: environment.STRIPE_WEBHOOK_SIGNING_SECRET,
    },
    stripeSecretKey: environment.STRIPE_SECRET_KEY,
  });
  // Register the plugin
  runtime.addPlugin(stripe);
}
```

Modules

Runtime Extension
```javascript
zuplo.runtime.ts
import {
  RuntimeExtensions,
  StripeMonetizationPlugin,
  environment,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  // Create the Stripe Plugin
  const stripe = new StripeMonetizationPlugin({
    webhooks: {
      signingSecret: environment.STRIPE_WEBHOOK_SIGNING_SECRET,
    },
    stripeSecretKey: environment.STRIPE_API_KEY,
  });
  // Register the plugin
  runtime.addPlugin(stripe);
}
```

## Stripe UI
```javascript
Settings
Environment Variables
Add Variables
Name
STRIPE_WEBHOOK_SIGNING_SECRET
```

## Zuplo UI
```javascript
Zuplo Docs 
Monetization
```
https://zuplo.com/docs/articles/monetization-webhook-setup 

https://your-api-url.dev>/__plugins/stripe/webhooks

```javascript
Search Webhooks
Add endpoint
```
Endpoint URL

https://ania-haiku-api-main-14680de.d2.zuplo.dev/__plugins/stripe/webhooks

```javascript
Select Events
customer.subscription.created
Checked
customer.subscription.deleted
Checked
customer.subscription.updated
Checked
Add Events
Add Endpoint

Webhooks
Signing secret
Copy
```

## Stripe UI
```javascript
Settings
Environment Variables
Add Variables
Name
STRIPE_WEBHOOK_SIGNING_SECRET
Value 
Paste
Secret
Checked
Save
```

## Zuplo Portal
```javascript
Zuplo Portal
Services

Metering Services 
Configure
Create Plan
Name
Free Haiku Tier
Stripe UI
Product Catalog
Free Haiku …
External ID
…
Label
Requests 
Max Value
10
Create Plan

Create Plan
Name
Silver Haiku Tier
Stripe UI
Product Catalog
Silver Level Haiku Member …
External ID
…
Label
Requests 
Max Value
100
Create Plan

Create Plan
Name
Gold Haiku Tier
Stripe UI
Product Catalog
Golden Level Haiku Member …
External ID 
…
Label
Requests 
Max Value
5000
Create Plan
```

ania-haiku-api-main-14680de.d2.zuplo.dev/docs/routes/-pricing
```javascript
Free Haiku   Silver Level Haiku Member   Gold Level Haiku Member
0/month        10/month                                50/month
Subscribe     Subscribe                               Subscribe
```

## Haiku
```javascript
Subscribe to Free Haiku
Card Information …

Your Subscription
API Keys 
Copy 
Docs
Get Your AI Generated Haiku
Test
Json
```

“Golden autumn levels\nDrifiting gently in cool breeze…
