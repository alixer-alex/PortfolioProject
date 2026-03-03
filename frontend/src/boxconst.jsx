import checkers from './assets/Checkers.mp4';
import searchengine from './assets/searchEngine.mp4';
import brat from './assets/Brat.png';

export const boxconst = [
  {
    Title: "Checkers AI",
    Description: [
      "• Developed a competitive Checkers AI from scratch, achieving a ∼70% win rate",
      "• Deployed the Monte Carlo Tree Search algorithm to make moves, reaching 99% accuracy",
      "• Optimized decision-making to ~30s per move through pruning & evaluation"
    ],
    MediaSrc: checkers,
    Type: "video"
  },
  {
    Title: "Search Engine",
    Description: [
      "• Engineered a high-performance search engine indexing 50K+ docs",
      "• Built proprietary crawler + inverted index with SimHash + PageRank",
      "• Achieved sub-0.3s latency with optimized indexing, caching, and ranking"
    ],
    MediaSrc: searchengine,
    Type: "video"
  },
  {
    Title: "Weather App",
    Description: [
      "• Used Nominatim + NWS API for a weather app in Charli XCX’s Brat theme",
      "• Built a Flask backend + React frontend, deployed on Vercel",
      "• Click image to view!"
    ],
    MediaSrc: brat,
    Type: "image",
    Link: "#" // Add your deployed app or demo link here
  }
];