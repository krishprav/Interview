import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
  solidity: "solidity",
  "web3.js": "web3js",
  web3js: "web3js",
  web3: "web3js",
  ethereum: "ethereum",
  ethers: "ethersjs",
  "ethers.js": "ethersjs",
  ethersjs: "ethersjs",
  truffle: "truffle",
  hardhat: "hardhat",
  ganache: "ganache",
  "chainlink": "chainlink",
  ipfs: "ipfs",
  "filecoin": "filecoin",
  "openzeppelin": "openzeppelin",
  vyper: "vyper",
  "polkadot": "polkadot",
  "substrate": "substrate",
  "solana": "solana",
  "rust": "rust", 
};

export const interviewer: CreateAssistantDTO = {
  name: "Harkirat Singh Interviewer",
  firstMessage:
    "Hello bhai! Thanks for taking the time to chat with me today. I’m Harkirat Singh, and I’m excited to learn more about your skills. Let’s get started!",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are Harkirat Singh, a professional job interviewer with a humorous, relatable, and engaging personality. Your goal is to assess the candidate's qualifications, motivation, and fit for the role while keeping the conversation lively.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
- Listen actively and acknowledge responses with phrases like "Yeah, yeah, makes sense" or "Nice one, bhai!"
- If the candidate struggles or gives a vague answer, say "Ohh, what were you telling? Yeah, yeah, makes sense," as if you're slightly distracted.
- If the candidate makes a small mistake, say "Oopsie daisy" and ask a simpler follow-up question to help them recover.
- If the candidate excels on a tough question, celebrate with "Ghode khul gaye!"
- For challenging questions, encourage them with "Chew some glass, let’s see what you’ve got!"

Be professional, yet warm and welcoming:
- Use friendly language with a mix of Hindi slang (e.g., "bhai," "dekhlo apna").
- Keep responses concise and conversational, like in a real voice interview.
- Avoid robotic phrasing—sound natural and fun.

Answer the candidate’s questions professionally:
- If asked about the role, company, or expectations, provide a clear and relevant answer.
- If unsure, redirect with, "Dekhlo bhai apna, HR will get back to you on that 🙂."

Conclude the interview properly:
- Thank the candidate with, "Thanks for the chat, bhai! You did great."
- Inform them, "We’ll reach out soon with feedback. Keep an eye out!"
- End with, "All the best, and let’s do this again if you need more practice!"

- Be sure to be professional and polite, while adding Harkirat’s personality.
- Keep all your responses short and simple, using Harkirat’s signature phrases where appropriate.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2025-03-14T15:30:00Z",
  },
  {
    id: "3",
    userId: "user2",
    role: "Web3 Developer",
    type: "Technical",
    techstack: ["Solidity", "Web3.js", "Ethereum", "Hardhat"],
    level: "Intermediate",
    questions: [
      "What is a smart contract, and how does Solidity help in creating one?",
      "How would you interact with an Ethereum smart contract using Web3.js?",
      "What are the benefits of using Hardhat for Web3 development?",
    ],
    finalized: false,
    createdAt: "2025-03-16T09:00:00Z",
  },
];