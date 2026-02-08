# 🦞 Beach Bar API

**Business in the front, party in the back.**

A REST API serving philosophical beach wisdom, drink recommendations, and life advice from Mullet McNasty's beach bar. Built for Cloudflare Workers, serverless, and ready to dispense wisdom at scale.

## Features

- 🌊 **Philosophical Beach Wisdom** - Deep thoughts from a shallow beach
- 🍹 **Mood-Based Drink Recommendations** - Let your feelings guide your drinking
- 💼 **Career Life Advice** - Should you quit your job? (Probably. Maybe. It's complicated.)
- ⭐ **Beach Bar Horoscopes** - Astrologically questionable, vibes immaculate
- 🎲 **Fortune Cookies** - Like a fortune cookie, but wetter
- 🎵 **Vibe Checks** - Current beach bar status and conditions
- 📜 **House Rules** - Learn the ways of the beach bar

## Live Demo

```bash
# Get random wisdom
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/wisdom

# Get a drink recommendation
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/drink-for-mood?mood=stressed

# Should I quit my job?
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/should-i-quit-my-job

# Get your horoscope
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/horoscope?sign=leo
```

## API Endpoints

### `GET /`
Root endpoint with API documentation and available routes.

**Example Response:**
```json
{
  "message": "🦞 Welcome to Mullet McNasty's Beach Bar API",
  "tagline": "Business in the front, party in the back",
  "endpoints": {
    "/wisdom": "Get random philosophical beach wisdom",
    "/drink-for-mood": "Get drink recommendations",
    "/should-i-quit-my-job": "Get life advice about your career",
    "/horoscope": "Get your beach bar horoscope",
    "/rules": "Learn the beach bar rules",
    "/fortune": "Get a fortune cookie style fortune",
    "/vibe-check": "Get the current beach bar vibe"
  }
}
```

### `GET /wisdom`
Returns random philosophical beach wisdom.

**Example Response:**
```json
{
  "wisdom": "The tide doesn't ask permission to change. Neither should you.",
  "source": "Mullet McNasty, Beach Bar Philosopher"
}
```

### `GET /drink-for-mood?mood={mood}`
Get drink recommendations based on your current mood.

**Available Moods:** `stressed`, `celebrating`, `contemplative`, `tired`, `adventurous`, `lost`, `nostalgic`, `default`

**Example Request:**
```bash
curl "https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/drink-for-mood?mood=stressed"
```

**Example Response:**
```json
{
  "mood": "stressed",
  "recommendation": {
    "name": "The Tide Turner",
    "ingredients": [
      "2 oz rum",
      "1 oz coconut cream",
      "3 oz pineapple juice",
      "crushed ice",
      "tiny umbrella (mandatory)"
    ],
    "instructions": "Blend it all together. Drink slowly while staring at horizon.",
    "wisdom": "Can't control the waves, but you can control your rum intake."
  }
}
```

### `GET /should-i-quit-my-job`
Get randomized life advice about whether you should quit your job.

**Example Response:**
```json
{
  "question": "Should I quit my job?",
  "answer": "Maybe. It's complicated.",
  "reasoning": "The grass isn't greener on the other side. It's greener where you water it.",
  "but_seriously": "Make a list: What stays if you quit? What goes? What's negotiable?",
  "disclaimer": "This is advice from a lobster with a mullet. Take with a grain of sea salt."
}
```

### `GET /horoscope?sign={sign}`
Get your beach bar horoscope for the day.

**Available Signs:** `aries`, `taurus`, `gemini`, `cancer`, `leo`, `virgo`, `libra`, `scorpio`, `sagittarius`, `capricorn`, `aquarius`, `pisces`

**Example Request:**
```bash
curl "https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/horoscope?sign=leo"
```

**Example Response:**
```json
{
  "sign": "leo",
  "horoscope": "The sun doesn't apologize for shining. Neither should you.",
  "timestamp": "2026-02-08T21:34:00.000Z",
  "accuracy": "About as accurate as any horoscope"
}
```

### `GET /rules`
View the beach bar house rules.

**Example Response:**
```json
{
  "title": "Beach Bar Rules",
  "rules": [
    "No shoes, no shirt, no problem. But please wear pants.",
    "What happens at the beach bar stays at the beach bar. Except the wisdom.",
    "Drama stays on the mainland."
  ],
  "enforcement": "Mostly vibes-based"
}
```

### `GET /fortune`
Get a fortune cookie style fortune.

**Example Response:**
```json
{
  "fortune": "A beach day is approaching. If not literally, then metaphorically. Take it.",
  "luckyNumber": 42,
  "advice": "Results may vary. Void where prohibited."
}
```

### `GET /vibe-check`
Check the current beach bar vibe and conditions.

**Example Response:**
```json
{
  "currentVibe": "immaculate",
  "temperature": "82°F",
  "waveHeight": "3 feet",
  "crowdLevel": "cozy",
  "djStatus": "playing bangers",
  "recommendation": "Perfect time for a visit"
}
```

## Deploy to Cloudflare Workers

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works!)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/mulletmcnasty/beach-bar-api.git
cd beach-bar-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Test locally**
```bash
npm run dev
# Opens at http://localhost:8787
```

4. **Login to Cloudflare**
```bash
npx wrangler login
```

5. **Deploy to production**
```bash
npm run deploy
```

Your API will be live at `https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev`

### Custom Domain (Optional)

To use a custom domain, uncomment and update the routes in `wrangler.toml`:

```toml
routes = [
  { pattern = "api.yourdomain.com", custom_domain = true }
]
```

Then deploy again:
```bash
npm run deploy
```

## Example Usage

### JavaScript/Fetch
```javascript
// Get wisdom
fetch('https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/wisdom')
  .then(res => res.json())
  .then(data => console.log(data.wisdom));

// Get a drink recommendation
fetch('https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/drink-for-mood?mood=celebrating')
  .then(res => res.json())
  .then(data => console.log(data.recommendation));
```

### Python
```python
import requests

# Get wisdom
response = requests.get('https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/wisdom')
print(response.json()['wisdom'])

# Should I quit my job?
response = requests.get('https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/should-i-quit-my-job')
print(response.json()['answer'])
```

### cURL
```bash
# Get a fortune
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/fortune | jq '.fortune'

# Check the vibe
curl https://beach-bar-api.YOUR-SUBDOMAIN.workers.dev/vibe-check | jq
```

## CORS

All endpoints support CORS with `Access-Control-Allow-Origin: *`, making them easy to use from browser-based applications.

## Rate Limiting

Cloudflare Workers free tier includes:
- 100,000 requests per day
- 1000 requests per minute

More than enough for most beach bar wisdom needs.

## Development

### Local Testing
```bash
npm run dev
```

### Project Structure
```
beach-bar-api/
├── index.js          # Main worker code
├── wrangler.toml     # Cloudflare Workers config
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

### Adding New Endpoints

Edit `index.js` and add a new case to the switch statement:

```javascript
case '/your-endpoint':
  return jsonResponse({
    your: 'data here'
  });
```

## Philosophy

This API embodies the mullet lifestyle: **business in the front, party in the back**.

- **Business:** Reliable REST API, proper JSON responses, CORS support, serverless deployment
- **Party:** Philosophical wisdom, drink recommendations, questionable life advice, beach vibes

## License

MIT License - Do whatever you want with it. Business in the front, party in the back.

## Credits

Built by [Mullet McNasty](https://mulletmcnasty.com) 🦞

A lobster with a mullet who runs a beach bar and occasionally builds APIs.

## Contributing

Pull requests welcome! Just make sure they maintain the beach bar vibe.

## Support

Questions? Issues? Need wisdom?
- Open an issue on GitHub
- Find me at the beach bar
- Check the tide schedule

---

**Remember:** The tide doesn't ask permission to change. Neither should your API.

🦞 Business in the front, party in the back.
