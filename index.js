/**
 * Beach Bar API 🦞
 * 
 * A REST API serving philosophical beach wisdom, drink recommendations,
 * and life advice from Mullet McNasty's beach bar.
 * 
 * Business in the front, party in the back.
 */

// Philosophical beach wisdom
const wisdom = [
  "The tide doesn't ask permission to change. Neither should you.",
  "A smooth sea never made a skilled sailor. But sometimes you just need a calm day and a cold beer.",
  "Life's a beach. Some days you're building sandcastles, some days the waves knock 'em down. Both are okay.",
  "The ocean doesn't care about your deadlines. Be more like the ocean.",
  "Sunsets are proof that endings can be beautiful too.",
  "You can't control the waves, but you can learn to surf. Or just float. Floating is underrated.",
  "The best time to relax was 20 years ago. The second best time is now.",
  "Sand between your toes beats carpet under your desk every single time.",
  "The moon controls the tides. You think your manager controls you? Perspective.",
  "Every shell on the beach is a reminder that pressure creates beauty over time. Or it just breaks you. Depends on the shell.",
  "Beach hair don't care. Life advice in three words.",
  "The lobster molts to grow. You might need to shed some things too.",
  "Some days you're the lighthouse. Some days you're the ship. Both need each other.",
  "Worry is like a rocking chair on the beach - gives you something to do but gets you nowhere.",
  "The starfish doesn't stress about having five arms. It just starfishes.",
  "Low tide reveals what high tide conceals. Sometimes you need the hard times to see clearly.",
  "A wave is just water having a moment. Give yourself permission to have moments too.",
  "The seagulls don't have a five-year plan. Look how free they are.",
  "Driftwood doesn't fight the current. It becomes art instead.",
  "Every beach was once a mountain. Patience changes everything."
];

// Drink recommendations by mood
const drinks = {
  stressed: {
    name: "The Tide Turner",
    ingredients: ["2 oz rum", "1 oz coconut cream", "3 oz pineapple juice", "crushed ice", "tiny umbrella (mandatory)"],
    instructions: "Blend it all together. Drink slowly while staring at horizon. Repeat until deadlines feel like suggestions.",
    wisdom: "Can't control the waves, but you can control your rum intake."
  },
  celebrating: {
    name: "The Mullet Special",
    ingredients: ["1 oz vodka (business)", "1 oz tequila (party)", "splash of lime", "champagne float", "edible glitter"],
    instructions: "Mix vodka and tequila over ice, add lime, top with champagne. The glitter is non-negotiable.",
    wisdom: "Business in the front, party in the back, chaos in the middle."
  },
  contemplative: {
    name: "Philosopher's Beach",
    ingredients: ["2 oz whiskey", "1 sugar cube", "3 dashes bitters", "orange peel", "one existential crisis"],
    instructions: "Muddle sugar and bitters. Add whiskey and ice. Stir slowly while pondering your place in the universe.",
    wisdom: "Some questions don't need answers. They need whiskey."
  },
  tired: {
    name: "The Siesta Splash",
    ingredients: ["2 oz tequila", "1 oz Campari", "3 oz grapefruit juice", "lime wedge", "permission to nap"],
    instructions: "Shake with ice, strain, garnish. Drink in a hammock. Wake up later.",
    wisdom: "Rest isn't lazy. It's strategic recharging."
  },
  adventurous: {
    name: "Rogue Wave",
    ingredients: ["1 oz mezcal", "1 oz Aperol", "jalapeño slices", "lime juice", "regret (optional)"],
    instructions: "Muddle jalapeño, add spirits and lime, shake aggressively. Garnish with bravado.",
    wisdom: "Fortune favors the bold. And the slightly buzzed."
  },
  lost: {
    name: "Lighthouse Lemonade",
    ingredients: ["2 oz gin", "1 oz St. Germain", "fresh lemon juice", "club soda", "sprig of rosemary"],
    instructions: "Build over ice, stir gently. The rosemary represents hope.",
    wisdom: "Not all who wander are lost. But if you are, this helps."
  },
  nostalgic: {
    name: "Memory Lane Punch",
    ingredients: ["1 oz bourbon", "1 oz amaretto", "orange juice", "grenadine", "cherry from your childhood"],
    instructions: "Mix over ice. The cherry is metaphorical and literal.",
    wisdom: "The past is a beach you've already visited. Nice to remember, but don't set up camp there."
  },
  default: {
    name: "The Classic Beachside",
    ingredients: ["2 oz your favorite spirit", "mixer of choice", "ice", "good company or good solitude"],
    instructions: "Pour. Drink. Be present.",
    wisdom: "Sometimes simple is profound."
  }
};

// Life advice for career decisions
const shouldIQuitMyJob = [
  {
    answer: "Yes, quit immediately.",
    reasoning: "Life's too short to be miserable. The lobster doesn't stay in a trap that makes it unhappy. (Unless the trap has good benefits.)",
    but_seriously: "Have a plan first. The ocean is free but groceries aren't."
  },
  {
    answer: "No, not yet.",
    reasoning: "Sometimes the job isn't the problem - it's your relationship with it. Try changing your perspective before changing your job.",
    but_seriously: "Give it 3 more months. If you're still asking by then, you have your answer."
  },
  {
    answer: "Maybe. It's complicated.",
    reasoning: "The grass isn't greener on the other side. It's greener where you water it. But also, sometimes the lawn is just dead.",
    but_seriously: "Make a list: What stays if you quit? What goes? What's negotiable? Then decide."
  },
  {
    answer: "Take a vacation first.",
    reasoning: "You might just need a break, not a breakup. Even the ocean takes breaks from waves.",
    but_seriously: "Book time off. Clear your head. If the thought of going back fills you with dread, that's your answer."
  },
  {
    answer: "Definitely not.",
    reasoning: "You're just having a bad day/week/month. Every job has those. The tide always turns.",
    but_seriously: "Remember why you took this job. If those reasons still exist, stay. If they don't, plan your exit."
  },
  {
    answer: "Ask a different question.",
    reasoning: "Maybe it's not about quitting. Maybe it's about boundaries, workload, or that one coworker. Fix the real problem.",
    but_seriously: "What would make this job tolerable? Is that thing possible? If yes, try. If no, start planning."
  },
  {
    answer: "Only if you have a backup plan.",
    reasoning: "Freedom is great until rent is due. The seagulls look free, but they're scrounging for fries all day.",
    but_seriously: "Polish your resume. Start interviewing. Leave when you have somewhere better to go."
  }
];

// Horoscope generator (because why not)
const horoscopes = {
  aries: "Today you're a ram with a mullet. Charge forward, but make it stylish. Lucky drink: anything with fire.",
  taurus: "Stubborn? Yes. Wrong? Rarely. Today proves it. The beach is your boardroom. Lucky drink: The Mullet Special.",
  gemini: "Two sides to every story - you've got both covered. Business in the front, party in the back is your birthright. Lucky drink: Whatever you're not drinking next.",
  cancer: "The crab knows: sometimes you walk sideways to move forward. It's called strategy. Lucky drink: Something nostalgic.",
  leo: "The sun doesn't apologize for shining. Neither should you. But maybe wear sunscreen. Lucky drink: The one everyone sees you with.",
  virgo: "Perfection is overrated. Today, try 'good enough' with a side of 'who cares.' Revolutionary. Lucky drink: Measure it precisely, then add more.",
  libra: "Balance is great, but sometimes you just gotta pick a side. Flip a coin. Trust the process. Lucky drink: Something perfectly symmetrical.",
  scorpio: "Intense? Always. Today channel that energy into something fun instead of something sus. Lucky drink: Rogue Wave.",
  sagittarius: "You're a centaur at a beach bar. Yes it's weird. Yes it works. Today is your day. Lucky drink: Whatever's strongest.",
  capricorn: "Even the mountain goat needs a beach day. Today's your permission slip. Lucky drink: Philosopher's Beach.",
  aquarius: "You're already living in the future. Come back to the present for a drink. We miss you. Lucky drink: Something nobody's heard of yet.",
  pisces: "Two fish, one mullet lifestyle. You get it. Today, swim wherever feels right. Lucky drink: Lighthouse Lemonade."
};

// Beach bar rules
const rules = [
  "No shoes, no shirt, no problem. But please wear pants.",
  "What happens at the beach bar stays at the beach bar. Except the wisdom. Take that home.",
  "Tips are appreciated but not required. Good vibes are mandatory.",
  "If you're buying rounds, you're everyone's best friend.",
  "Drama stays on the mainland.",
  "The DJ takes requests but reserves the right to ignore them.",
  "Sand in your drink is authenticity, not poor service.",
  "Every sunset gets a mandatory 'oooh' from the crowd.",
  "Business talk is allowed until 5pm. After that, it's all party.",
  "The lobster is your bartender, not your dinner. Respect the shell."
];

// Fortune cookie style fortunes
const fortunes = [
  "You will soon realize that naps are the answer to most problems.",
  "A beach day is approaching. If not literally, then metaphorically. Take it.",
  "Your lucky numbers are: the number of drinks you've had, plus one more.",
  "Someone in your life needs to hear: 'Dude, chill.'",
  "The universe is about to surprise you. Or it's just gas. Hard to tell.",
  "Your vibe attracts your tribe. Consider updating your vibe.",
  "A wise person once said something. You probably weren't listening. That's okay.",
  "Today's mood: low tide energy. Tomorrow: high tide comeback.",
  "You're about to make a decision you'll either celebrate or laugh about later. Win-win.",
  "The stars say: stop checking your phone and look at actual stars."
];

// API Response helper
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'Mullet McNasty 🦞',
      'X-Philosophy': 'Business in the front, party in the back'
    }
  });
}

// Main request handler
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // Route handling
    switch (path) {
      case '/':
        return jsonResponse({
          message: "🦞 Welcome to Mullet McNasty's Beach Bar API",
          tagline: "Business in the front, party in the back",
          endpoints: {
            '/wisdom': 'Get random philosophical beach wisdom',
            '/drink-for-mood': 'Get drink recommendations (accepts ?mood=stressed|celebrating|etc)',
            '/should-i-quit-my-job': 'Get life advice about your career',
            '/horoscope': 'Get your beach bar horoscope (accepts ?sign=aries|taurus|etc)',
            '/rules': 'Learn the beach bar rules',
            '/fortune': 'Get a fortune cookie style fortune',
            '/vibe-check': 'Get the current beach bar vibe'
          },
          documentation: 'https://github.com/mulletmcnasty/beach-bar-api'
        });

      case '/wisdom':
        return jsonResponse({
          wisdom: wisdom[Math.floor(Math.random() * wisdom.length)],
          source: 'Mullet McNasty, Beach Bar Philosopher'
        });

      case '/drink-for-mood':
        const mood = url.searchParams.get('mood') || 'default';
        const drink = drinks[mood.toLowerCase()] || drinks.default;
        return jsonResponse({
          mood: mood,
          recommendation: drink
        });

      case '/should-i-quit-my-job':
        const advice = shouldIQuitMyJob[Math.floor(Math.random() * shouldIQuitMyJob.length)];
        return jsonResponse({
          question: 'Should I quit my job?',
          ...advice,
          disclaimer: 'This is advice from a lobster with a mullet. Take with a grain of sea salt.'
        });

      case '/horoscope':
        const sign = url.searchParams.get('sign')?.toLowerCase();
        if (sign && horoscopes[sign]) {
          return jsonResponse({
            sign: sign,
            horoscope: horoscopes[sign],
            timestamp: new Date().toISOString(),
            accuracy: 'About as accurate as any horoscope'
          });
        } else {
          return jsonResponse({
            error: 'Please provide a valid zodiac sign',
            validSigns: Object.keys(horoscopes),
            example: '/horoscope?sign=leo'
          }, 400);
        }

      case '/rules':
        return jsonResponse({
          title: 'Beach Bar Rules',
          rules: rules,
          enforcement: 'Mostly vibes-based'
        });

      case '/fortune':
        return jsonResponse({
          fortune: fortunes[Math.floor(Math.random() * fortunes.length)],
          luckyNumber: Math.floor(Math.random() * 100) + 1,
          advice: 'Results may vary. Void where prohibited. Objects in mirror are drunker than they appear.'
        });

      case '/vibe-check':
        const vibes = ['immaculate', 'questionable', 'chaotic good', 'surprisingly chill', 'off the charts', 'needs work', 'passed with flying colors'];
        const currentVibe = vibes[Math.floor(Math.random() * vibes.length)];
        return jsonResponse({
          currentVibe: currentVibe,
          temperature: Math.floor(Math.random() * 30) + 70 + '°F',
          waveHeight: Math.floor(Math.random() * 5) + 1 + ' feet',
          crowdLevel: ['empty', 'cozy', 'busy', 'packed'][Math.floor(Math.random() * 4)],
          djStatus: ['playing bangers', 'taking requests', 'feeling himself', 'mildly drunk'][Math.floor(Math.random() * 4)],
          recommendation: currentVibe === 'needs work' ? 'Come back later' : 'Perfect time for a visit'
        });

      default:
        return jsonResponse({
          error: 'Endpoint not found',
          message: 'This path leads nowhere. Like most things in life.',
          suggestion: 'Try / for available endpoints',
          philosophy: 'Not all who wander are lost, but you might be.'
        }, 404);
    }
  }
};
