import { AdSenseSlot } from "@/components/adsense-slot";
import "./seo-pages.css";
import "./site.css";
import { canonicalUrl } from "./seo-config";

export type SeoPageId =
  | "privacy-policy"
  | "chess"
  | "tic-tac-toe"
  | "snakes-and-ladders"
  | "online-multiplayer"
  | "how-to-play";

export type GameSeoPageId =
  | "2048"
  | "arrows"
  | "bluff"
  | "callbreak"
  | "carrom"
  | "checkers"
  | "connect-four"
  | "crazyeights"
  | "hearts"
  | "joker-duel"
  | "ludo"
  | "poker"
  | "racer"
  | "rummy"
  | "spades"
  | "sudoku"
  | "teenpatti"
  | "uno"
  | "watersort";

type SeoRoutePageId = SeoPageId | GameSeoPageId;

type SeoPageContent = {
  title: string;
  description: string;
  intro: string;
  playHref?: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

const gamePages: Record<GameSeoPageId, SeoPageContent> = {
  "2048": {
    title: "Play 2048 Online",
    description:
      "Play 2048 free in your browser. Slide and merge numbered tiles on the 4x4 grid, plan directional moves, and build the 2048 tile.",
    intro:
      "2048 is a clean, addictive single-player mathematical puzzle played on a 4x4 grid. Shift numbered tiles across the board, merge identical values into larger powers of two, and build your way to the coveted 2048 tile.",
    playHref: "/?play=2048#games",
    sections: [
      {
        heading: "How tile movement and merging work",
        paragraphs: [
          "The board starts with two tiles, each showing either a 2 or a 4. Use arrow keys or swipe gestures to shift all tiles simultaneously in one of four directions: up, down, left, or right. Whenever two tiles with the same number collide during a move, they merge into a single tile displaying their combined sum.",
          "After every legal slide, a new tile (valued at 2 or 4) spawns in a random unoccupied cell. If the grid fills up and no adjacent matching tiles remain to merge, the game ends. Progress is saved locally in your browser, allowing you to resume your run at any time.",
        ],
      },
      {
        heading: "The corner anchoring strategy",
        paragraphs: [
          "The most reliable strategy to reach 2048 is corner anchoring: pick one corner of the board (such as the bottom-right) and keep your highest-value tile locked in that cell throughout the game. Avoid swiping in the opposite direction (never swipe up if your anchor is in the bottom row).",
          "Build a descending numerical chain along your anchor row (for example: 1024, 512, 256, 128). This organization prevents low-value tiles from getting trapped behind massive numbers and ensures smooth, cascading combination chains.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I continue playing after reaching 2048?",
        answer:
          "Yes! Reaching 2048 wins the primary milestone, but you can keep merging tiles to target 4096, 8192, and higher scores.",
      },
      {
        question: "What happens when no moves are left?",
        answer:
          "If the grid is completely full and no adjacent tiles share the same value, no more slides are possible and the game concludes with your final score.",
      },
      {
        question: "Which corner is best to keep the highest tile?",
        answer:
          "Any corner works well as long as you remain consistent. Bottom-left or bottom-right are popular because they naturally limit your movement to three directional keys.",
      },
    ],
    related: [
      { href: "/games/sudoku", label: "Play Sudoku" },
      { href: "/games/arrows", label: "Play Arrows" },
    ],
  },
  arrows: {
    title: "Play Arrows Online",
    description:
      "Play Arrows puzzle free in your browser. Slide directional arrows off the board, dodge blocked paths, manage 3 lives, and clear procedural grids.",
    intro:
      "Arrows is a minimalist spatial logic puzzle that challenges you to untangle complex patterns of directional arrows. Tap arrows to slide them off the board in the direction their head points, avoiding collisions to preserve your lives.",
    playHref: "/?play=arrows#games",
    sections: [
      {
        heading: "Puzzle mechanics and sliding exits",
        paragraphs: [
          "Each level presents a grid filled with straight and 90-degree bent arrows pointing towards board edges. Clicking or tapping an arrow commands it to slide outward along the exact path its arrowhead indicates. An arrow will successfully leave the board only if its entire exit trajectory to the boundary is completely clear of other arrows.",
          "If another arrow lies in its path, the tapped arrow cannot move. Attempting to slide a blocked arrow triggers an error chime and deducts one of your three lives. Clear every arrow from the board without losing all lives to solve the level.",
        ],
      },
      {
        heading: "Algorithmic solvability and solving strategies",
        paragraphs: [
          "Every level is procedurally generated in reverse order from its level seed, guaranteeing that every single puzzle has a 100% deterministic, deduction-based solution without any need for guesswork. Grids expand up to 30 columns and 32 rows on advanced stages.",
          "Always begin by scanning the outer borders for free arrows whose heads point directly into the empty margin outside the grid. Removing perimeter arrows opens up exit lanes for inner arrows that were previously pinned down. Use the built-in Hint tool if you ever find yourself stuck.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all Arrows levels guaranteed to be solvable?",
        answer:
          "Yes. Every level is generated in reverse order, ensuring that at least one unblocked arrow can be legally removed at every step.",
      },
      {
        question: "What causes you to lose a life in Arrows?",
        answer:
          "Tapping an arrow whose exit path is obstructed by another arrow costs one life. Losing all three lives resets the current level.",
      },
      {
        question: "How does the Hint feature work?",
        answer:
          "The Hint button highlights an arrow that currently has a completely clear, unblocked path off the board, helping you resume progress safely.",
      },
    ],
    related: [
      { href: "/games/watersort", label: "Play Water Sort" },
      { href: "/games/2048", label: "Play 2048" },
    ],
  },
  bluff: {
    title: "Play Bluff Online",
    description:
      "Play Bluff (Cheat) free online in your browser. Play cards face down, declare sequential ranks, call out bluffs, and empty your hand to win.",
    intro:
      "Bluff—also widely known as Cheat or I Doubt It—is a four-player card game where deception, sharp observation, and card counting reign supreme. Lay down cards face down, declare matching ranks, and call out your opponents when you suspect they are lying.",
    playHref: "/?play=bluff#games",
    sections: [
      {
        heading: "Rules of play and declaring ranks",
        paragraphs: [
          "A standard 52-card deck is dealt evenly to 4 players (13 cards each). The round begins with Aces, with subsequent turns requiring sequential ranks: 2s, 3s, 4s, continuing up to Kings and looping back to Aces. On your turn, you must place between 1 and 4 cards face down on the central discard pile and announce that they match the active rank.",
          "You have a choice: play the genuine cards matching the declared rank, or bluff by slipping in completely unrelated cards from your hand. If nobody challenges your play, the cards stay face down on the pile and play passes clockwise to the next player with the next rank in sequence.",
        ],
      },
      {
        heading: "Calling bluff, reveals, and card counting",
        paragraphs: [
          "After a player places their cards, each opponent has the opportunity to shout 'Bluff!'. When challenged, the played cards are turned face up. If the player was honest, the challenger must pick up the entire discard pile as a penalty. If the player was caught bluffing, the bluffer must pick up the entire pile.",
          "The first player to shed all their cards without being successfully challenged wins. Effective strategy relies on card counting: if you hold three Queens and an opponent claims two Queens, you know with 100% mathematical certainty they are bluffing because only four exist in the deck.",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if someone falsely accuses you of bluffing?",
        answer:
          "The played cards are revealed, and because you were honest, the accuser must pick up all cards currently in the center discard pile.",
      },
      {
        question: "Can I play more than one card on my turn?",
        answer:
          "Yes, you can lay down 1, 2, 3, or 4 cards simultaneously, provided you claim that all of them match the active rank for that turn.",
      },
      {
        question: "Can you win by bluffing on your final card?",
        answer:
          "Yes, but if an opponent calls bluff on your final card and you were lying, you must pick up the entire pile and continue playing.",
      },
    ],
    related: [
      { href: "/games/crazyeights", label: "Play Crazy Eights" },
      { href: "/games/uno", label: "Play UNO" },
      { href: "/games/poker", label: "Play Poker" },
    ],
  },
  callbreak: {
    title: "Play Call Break Online",
    description:
      "Play Call Break free online in your browser. Bid tricks, follow compulsory win rules, trump with spades, and score points over 5 competitive rounds.",
    intro:
      "Call Break is a tactical 4-player trick-taking card game originating from South Asia. Bid your contract accurately, adhere to strict trick-winning obligations, use spades as permanent trump, and maximize your score across five rounds.",
    playHref: "/?play=callbreak#games",
    sections: [
      {
        heading: "Round setup, bidding, and permanent spades trump",
        paragraphs: [
          "Call Break uses a standard 52-card deck dealt equally (13 cards to each of the 4 players). Spades serve as the permanent trump suit throughout every round. Before trick play begins, each player evaluates their hand and submits a 'bid' or 'call' from 1 to 13, representing the number of tricks they intend to take.",
          "The dealer rotates clockwise after every round. Hands must be redealt if any player receives no spades or holds no court cards (Jacks, Queens, Kings, or Aces), ensuring balanced competition.",
        ],
      },
      {
        heading: "Compulsory winning and trick execution",
        paragraphs: [
          "Players must follow the led suit. Call Break uniquely enforces a compulsory winning rule: if you can play a higher card of the led suit than the current highest card in the trick, you are legally required to do so. If you are void in the led suit, you must play a spade that beats any spade played so far; only if you cannot win the trick may you play any card.",
          "Scoring rewards precise bidding: meeting your bid B earns B points, plus 0.1 points for each overtrick (for instance, bidding 3 and capturing 4 tricks yields 3.1 points). Failing to reach your bid inflicts a severe negative penalty equal to your full bid (bidding 4 and winning 3 tricks yields -4.0 points).",
        ],
      },
      {
        heading: "Bidding strategy and trump preservation",
        paragraphs: [
          "Conservative bidding is paramount because broken contracts severely damage your cumulative score. Count guaranteed tricks using your top Spades (Ace and King) and high honors in long suits. Lead your side honors early before opponents exhaust their holdings and gain ruffing capability.",
        ],
      },
    ],
    faqs: [
      {
        question: "What card suit is trump in Call Break?",
        answer:
          "Spades are always the trump suit in Call Break and beat any non-spade card regardless of rank.",
      },
      {
        question: "What is the compulsory win rule?",
        answer:
          "You must follow the led suit AND play a higher card than the highest card in the trick if you have one in your hand.",
      },
      {
        question: "How does overtrick scoring work?",
        answer:
          "Every trick won above your bid awards +0.1 points (e.g., bidding 2 and winning 4 tricks awards 2.2 points).",
      },
      {
        question: "What happens if I miss my bid?",
        answer:
          "If you win fewer tricks than you bid, your bid is subtracted from your score as negative points (bidding 3 and getting 2 scores -3.0 points).",
      },
    ],
    related: [
      { href: "/games/spades", label: "Play Spades" },
      { href: "/games/hearts", label: "Play Hearts" },
    ],
  },
  carrom: {
    title: "Play Carrom Online",
    description:
      "Play Carrom free online in your browser for 2–4 players. Aim your striker, pocket carrom men, cover the red Queen, and master bank and cut shots.",
    intro:
      "Carrom is a classic tabletop strike-and-pocket game where fingertip precision meets physical geometry. Flick your heavy striker along the baseline, pocket white and black carrom men into corner pockets, and master the pivotal Queen cover rule.",
    playHref: "/?play=carrom#games",
    sections: [
      {
        heading: "Board layout, carrom men, and striker physics",
        paragraphs: [
          "The square board features four corner pockets and a center circle arranged with 19 carrom men: 1 Red Queen (50 points), 9 White coins (20 points), and 9 Black coins (10 points). The acrylic striker is positioned along your baseline, touching both front and back guidelines without overlapping the baseline circle, before aiming angle and shot power (1% to 100%).",
          "In Clear-the-board mode, players or pairs race to clear all of their assigned coins (White or Black) and the Queen. In the 8-board Point Game, players compete across eight successive boards to accumulate the highest point total.",
        ],
      },
      {
        heading: "The Queen cover rule and striker fouls",
        paragraphs: [
          "The red Queen is the most valuable piece on the board, but pocketing it alone is insufficient—it must be 'covered'. To secure the Queen, you must pocket another coin of your color on the very same shot or on your immediate next shot. If you fail to cover it, the Queen returns to the center circle.",
          "Pocketing the striker constitutes a foul: your turn ends immediately and one of your previously pocketed coins is returned to the center circle as a penalty ('due'). If the Queen was pocketed during the foul shot or was pending cover, it also returns to the center.",
        ],
      },
      {
        heading: "Advanced shot techniques and table control",
        paragraphs: [
          "Mastering Carrom requires more than straight shots: utilize cushion bank shots off the wooden frame to reach hidden pieces, execute cut shots by striking coins off-center to steer them into corner pockets, and play defensive safety shots to leave opponents with no clean baseline angles.",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if the Queen is pocketed but not covered?",
        answer:
          "The Queen returns to the center circle of the board and your turn ends without points.",
      },
      {
        question: "What is the penalty for pocketing the striker?",
        answer:
          "Pocketing the striker is a foul: you forfeit your turn, and one of your pocketed carrom coins is returned to the board as a penalty.",
      },
      {
        question: "Can I pocket the Queen on my final shot?",
        answer:
          "In Clear-the-board mode, you must pocket and cover the Queen before or on your final coin. Pocketing your last coin while the Queen remains uncovered causes your coin to return to the board.",
      },
      {
        question: "How many boards are played in Point Game?",
        answer:
          "Point Game mode is contested over eight complete boards, with the player or team holding the highest total score declared the winner.",
      },
    ],
    related: [
      { href: "/games/checkers", label: "Play Checkers" },
      { href: "/games/racer", label: "Play Realtime Racer" },
    ],
  },
  checkers: {
    title: "Play Checkers Online",
    description:
      "Play Checkers free in your browser. Jump opposing pieces with compulsory capture rules, chain multiple jumps, crown kings, and dominate the 8x8 board.",
    intro:
      "Checkers (English Draughts) is an iconic two-player board game of tactical positioning and forced moves. Maneuver across the 64-square checkerboard, capture enemy pieces with mandatory jump chains, and crown kings on the opponent's back rank.",
    playHref: "/?play=checkers#games",
    sections: [
      {
        heading: "Board setup and diagonal movement",
        paragraphs: [
          "Checkers is played on an 8x8 board using only the 32 dark squares. Each player begins with 12 pieces (Red versus Black) stationed on the dark squares of the three rows closest to them. Standard pieces (men) move diagonally forward one square into an unoccupied dark space.",
          "The objective is either to capture all of your opponent's pieces or to trap them so they cannot make any legal move on their turn.",
        ],
      },
      {
        heading: "Compulsory captures and multi-jump chains",
        paragraphs: [
          "You capture an opponent's piece by jumping diagonally over it into an empty square immediately beyond. In this implementation of Checkers, captures are strictly compulsory: whenever a jump is legally available, you must take it rather than making a quiet step.",
          "If a piece completes a jump and lands on a square where another capture is immediately possible, it must continue jumping as part of a multi-jump chain in the same turn until no further captures remain.",
        ],
      },
      {
        heading: "King promotion and winning strategy",
        paragraphs: [
          "When a piece reaches the farthest row on the opponent's side of the board, it is crowned King. Kings gain the powerful ability to move and capture diagonally in all four directions (both forwards and backwards). Note that reaching the king row mid-jump completes the turn immediately.",
          "Control the center four squares to dictate board geography, protect your back rank to deny early enemy kings, and set up 2-for-1 capture sacrifices to break open defensive formations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is jumping mandatory in Checkers?",
        answer:
          "Yes. If one or more capture jumps are available on your turn, you are required by rule to make a capture.",
      },
      {
        question: "Can a regular piece capture backwards?",
        answer:
          "No. Standard pieces can only move and jump forward diagonally. Only crowned Kings can move or capture in reverse.",
      },
      {
        question: "How does a game end in a draw?",
        answer:
          "A game is drawn if both players reach a stalemate where neither can force a win, or if 80 plies pass without a capture or man move.",
      },
    ],
    related: [
      { href: "/games/chess", label: "Play Chess" },
      { href: "/games/connect-four", label: "Play Connect Four" },
    ],
  },
  "connect-four": {
    title: "Play Connect Four Online",
    description:
      "Play Connect Four free online in your browser. Drop discs into the 7x6 grid, seize the critical center column, engineer double-threat traps, and connect 4.",
    intro:
      "Connect Four is an engaging two-player connection strategy game played on a vertical grid. Alternate dropping colored discs into seven vertical columns, racing to form an unbroken horizontal, vertical, or diagonal line of four while anticipating your opponent's threats.",
    playHref: "/?play=connect-four#games",
    sections: [
      {
        heading: "Grid mechanics and gravity drops",
        paragraphs: [
          "The board consists of a vertical grid with 7 columns and 6 rows (42 slots in total). Two players—Red and Yellow—take turns selecting a column to drop a disc. Gravity pulls each disc down to the lowest unoccupied slot in that column.",
          "The first player to align four of their colored discs in an uninterrupted straight line—either horizontally across, vertically upright, or diagonally in either direction—wins the game immediately.",
        ],
      },
      {
        heading: "Center column priority and line intersections",
        paragraphs: [
          "The center column (Column 4) is the strategic centerpiece of the board. A disc placed in the center column can participate in up to 16 potential winning four-in-a-row lines, compared to only 3 or 4 lines along the outer columns. Establishing a strong presence in the center provides maximum offensive reach and defensive resilience.",
        ],
      },
      {
        heading: "Engineering double threats and managing column parity",
        paragraphs: [
          "Directly threatening three-in-a-row is rarely enough against careful players because single threats are easily blocked. Advanced victory requires building a 'fork' or double-threat—such as an open-ended horizontal three where both ends are playable, forcing a win on the subsequent move.",
          "Pay close attention to vertical column parity: avoid dropping a disc that enables your opponent to immediately drop a winning piece directly on top of yours on their next turn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the player who moves first have an advantage?",
        answer:
          "Yes, mathematically Connect Four is a solved game where perfect play from the first player starting in the center column forces a win.",
      },
      {
        question: "Can four-in-a-row be achieved diagonally?",
        answer:
          "Yes, lines can be formed in any straight direction: horizontally across rows, vertically within columns, or diagonally across grid intersections.",
      },
      {
        question: "What happens if all 42 slots are filled without four-in-a-row?",
        answer:
          "If every slot on the board is occupied and neither player has connected four discs, the game is declared a draw.",
      },
    ],
    related: [
      { href: "/games/tic-tac-toe", label: "Play Tic-Tac-Toe" },
      { href: "/games/checkers", label: "Play Checkers" },
    ],
  },
  crazyeights: {
    title: "Play Crazy Eights Online",
    description:
      "Play Crazy Eights free in your browser with 2–4 players. Match cards by rank or suit, drop wild eights, declare suits, and race to 100 points.",
    intro:
      "Crazy Eights is a thrilling, fast-moving card shedding game for 2 to 4 players. Match the top discard by suit or number, deploy wild eights to dictate table direction, and shed your hand before your opponents to rack up victory points.",
    playHref: "/?play=crazyeights#games",
    sections: [
      {
        heading: "Deal, discard pile, and matching rules",
        paragraphs: [
          "Each player receives 5 cards (7 in two-player games). The remaining deck forms the face-down draw stock, with the top card flipped face up to establish the discard pile. On your turn, you must play a card that matches the top discard in either Rank (e.g. Queen on Queen) or Suit (e.g. Hearts on Hearts).",
          "If you cannot play a matching card and do not have an eight, you must draw cards from the stock pile until you find a playable card or the pile is depleted.",
        ],
      },
      {
        heading: "Wild eights and calling suits",
        paragraphs: [
          "All four Eights in the deck are completely wild! You may play an Eight on any turn, regardless of what card sits on top of the discard pile. When playing an Eight, you declare the active suit (Spades, Hearts, Clubs, or Diamonds) that the next player is required to match.",
          "Saving your wild eights for moments when you are stuck without other legal moves or when you can force an opponent into a suit they cannot match is a core winning skill.",
        ],
      },
      {
        heading: "End of round scoring and the 100-point target",
        paragraphs: [
          "A round ends as soon as a player sheds their last card ('goes out'). That player scores the point value of all cards remaining in the opponents' hands: Eights are worth 50 points, Court cards (Kings, Queens, Jacks) are worth 10 points, Aces are worth 1 point, and number cards score their face value. The first player to reach 100 points wins the match.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an Eight be played on top of another Eight?",
        answer:
          "Yes, an Eight can be played on any card at any time, including on top of a previously played Eight, allowing you to declare a fresh suit.",
      },
      {
        question: "How are cards scored when a round ends?",
        answer:
          "The winner receives points for all cards trapped in opponents' hands: 50 points for every 8, 10 for each face card, and face value for numbered cards.",
      },
      {
        question: "What happens if the draw stock runs out?",
        answer:
          "If the draw stock is exhausted, the discard pile (excluding the top card) is shuffled to form a fresh stock pile.",
      },
    ],
    related: [
      { href: "/games/uno", label: "Play UNO" },
      { href: "/games/bluff", label: "Play Bluff" },
      { href: "/games/rummy", label: "Play Rummy" },
    ],
  },
  hearts: {
    title: "Play Hearts Online",
    description:
      "Play Hearts free online in your browser. Pass cards strategically, avoid penalty hearts and the 13-point Queen of Spades, or Shoot the Moon to win.",
    intro:
      "Hearts is an evasion trick-taking card game for 4 players where the goal is to avoid capturing penalty cards. Pass trouble cards to rivals, follow suit with precision, dodge the lethal Queen of Spades, or boldly Shoot the Moon.",
    playHref: "/?play=hearts#games",
    sections: [
      {
        heading: "Deal, card passing rotation, and opening lead",
        paragraphs: [
          "The 52-card deck is dealt evenly to 4 players (13 cards each). Each hand begins with a 3-card pass following a 4-deal cycle: pass Left on Deal 1, Right on Deal 2, Across on Deal 3, and Hold (no pass) on Deal 4. The player holding the 2 of Clubs must lead it to start the first trick.",
          "Players must follow the led suit if able. Crucially, no penalty points (no Hearts and no Queen of Spades) can be played on the very first trick of the hand.",
        ],
      },
      {
        heading: "Breaking hearts and penalty scoring",
        paragraphs: [
          "Hearts cannot be led until 'hearts have been broken'—meaning a player with no cards in the led suit discarded a Heart on an earlier trick, or unless the leading player holds only Hearts in hand.",
          "Every Heart taken in a trick inflicts 1 penalty point (13 points total). The Queen of Spades ('Black Maria') inflicts a massive 13 penalty points on whoever takes her trick. The game continues until a player crosses 100 points, at which point the player with the lowest score wins.",
        ],
      },
      {
        heading: "Shooting the Moon: high risk, high reward",
        paragraphs: [
          "If a player manages to win ALL 13 Hearts and the Queen of Spades in a single deal (all 26 penalty points), they have 'Shot the Moon'. Instead of suffering 26 points, the shooter scores 0 points while every one of their three opponents is slapped with +26 penalty points!",
        ],
      },
    ],
    faqs: [
      {
        question: "How many penalty points are in a full round of Hearts?",
        answer:
          "There are 26 penalty points in every deal: 1 point for each of the 13 Hearts, and 13 points for the Queen of Spades.",
      },
      {
        question: "What does Shooting the Moon do?",
        answer:
          "Capturing all 13 hearts and the Queen of Spades awards 0 points to you and adds 26 penalty points to each of your opponents.",
      },
      {
        question: "When are hearts officially broken?",
        answer:
          "Hearts are broken the first time a player who cannot follow the led suit discards a Heart onto the trick.",
      },
    ],
    related: [
      { href: "/games/spades", label: "Play Spades" },
      { href: "/games/callbreak", label: "Play Call Break" },
    ],
  },
  "joker-duel": {
    title: "Play Joker Duel Online",
    description:
      "Play Joker Duel free in your browser. Build poker hands, trigger chip x mult combos, draft game-changing jokers, and win the best-of-three duel.",
    intro:
      "Joker Duel is an exhilarating two-player roguelike poker battler. Form the highest-scoring poker combinations, draft synergized jokers between rounds, and trigger exponential score explosions across a best-of-three match.",
    playHref: "/?play=joker-duel#games",
    sections: [
      {
        heading: "Poker hands and scoring formula",
        paragraphs: [
          "Select up to 5 cards from your dealt hand to play standard poker hands: High Card, Pair, Two Pair, Three of a Kind, Straight, Flush, Full House, Four of a Kind, or Straight Flush. Your hand score is calculated as Total Chips multiplied by Total Mult.",
          "Base hand types supply initial Chips and Mult (for example, a Flush provides base 35 Chips and 4 Mult). Played cards add their individual chip values (Aces add 11, face cards add 10, and number cards add their pip value) directly into the Chip pool before multiplication.",
        ],
      },
      {
        heading: "Drafting jokers and synergy mechanics",
        paragraphs: [
          "Between rounds, players visit the shop to draft powerful jokers. Jokers alter scoring mechanics: Jolly adds +4 Mult, Banner contributes +40 flat Chips, Lusty provides +3 Mult for every scoring Heart, Scary Face awards +30 Chips per scoring face card, Half yields +20 Mult when playing hands of 3 or fewer cards, and The Duo doubles your entire Mult (x2) if your hand contains a pair.",
          "Use your limited discards to sculpt your hand toward your active joker synergies, digging for specific suits or ranks to trigger maximum multiplier effects.",
        ],
      },
      {
        heading: "Best-of-three duel strategy",
        paragraphs: [
          "Winning requires pacing and adaptation: win two rounds to claim the duel. Leveling up your preferred hand types between rounds raises base Chips and Mult, providing a safe scoring floor even if dealt unfavorable ranks in the final showdown.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does scoring calculation work in Joker Duel?",
        answer:
          "Total score equals (Base Chips + Card Chip Values + Joker Chips) multiplied by (Base Mult + Joker Mult) multiplied by any X-Mult multipliers.",
      },
      {
        question: "Can I discard cards to redraw?",
        answer:
          "Yes, you have limited discards per round to discard unwanted cards and draw replacements from your deck.",
      },
      {
        question: "What is the difference between +Mult and X-Mult?",
        answer:
          "+Mult adds flat numbers to your multiplier, while X-Mult (like The Duo's x2) multiplies your entire accumulated multiplier for massive scores.",
      },
    ],
    related: [
      { href: "/games/poker", label: "Play Poker" },
      { href: "/games/bluff", label: "Play Bluff" },
      { href: "/games/hearts", label: "Play Hearts" },
    ],
  },
  ludo: {
    title: "Play Ludo Online",
    description:
      "Play Ludo free online in your browser for 2–4 players. Roll a 6 to enter, race tokens around the cross-shaped track, capture rivals, and reach home.",
    intro:
      "Ludo is the beloved cross-and-circle board game for 2 to 4 players. Roll dice to bring your tokens onto the board, race clockwise along the perimeter track, send opponent pieces back to their yards, and navigate all four tokens safely home.",
    playHref: "/?play=ludo#games",
    sections: [
      {
        heading: "Board layout, starting yard, and entering tokens",
        paragraphs: [
          "The board features four colored quadrants (Yellow, Green, Red, Blue) with each player controlling 4 tokens in their corner yard. A player must roll a 6 on the die to move a token out of the yard onto their starting square.",
          "Rolling a 6 also grants an immediate bonus roll. Players take turns rolling and advancing tokens clockwise around the perimeter track according to the number rolled.",
        ],
      },
      {
        heading: "Capturing rivals and safe star squares",
        paragraphs: [
          "Landing your token on a square occupied by an opponent's token captures that piece, banishing it all the way back to the opponent's yard (where they must roll another 6 to re-enter). Capturing an opponent's token awards an immediate bonus roll.",
          "Squares marked with stars and colored starting squares are designated safe zones where tokens cannot be captured. Multiple tokens of the same color on a square create a block.",
        ],
      },
      {
        heading: "Home column and exact roll requirements",
        paragraphs: [
          "After completing a full circuit around the board, tokens turn into their designated colored home column leading to the central triangle. An exact roll is required to land directly in the home triangle. The first player to bring all four tokens safely home wins the game.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I get an extra turn for rolling a six?",
        answer:
          "Yes! Rolling a 6 allows you to move and grants an immediate bonus roll.",
      },
      {
        question: "What happens when you capture an opponent's token?",
        answer:
          "The captured token is returned to its player's corner yard and you earn an immediate bonus die roll.",
      },
      {
        question: "Do I need an exact roll to reach home?",
        answer:
          "Yes, tokens must enter the home triangle with an exact roll. If the roll is higher than the remaining distance, the token cannot move.",
      },
    ],
    related: [
      { href: "/games/snakes-and-ladders", label: "Play Snakes & Ladders" },
      { href: "/games/checkers", label: "Play Checkers" },
    ],
  },
  poker: {
    title: "Play Texas Hold'em Poker Online",
    description:
      "Play Texas Hold'em Poker free online. Receive 2 hole cards, bet across pre-flop, flop, turn, and river, evaluate pot odds, and win at showdown.",
    intro:
      "Texas Hold'em is the world's premier poker game of skill, nerve, and calculated odds. Combine your two private hole cards with five shared community cards to construct the best five-card poker hand and outmaneuver rivals across four betting rounds.",
    playHref: "/?play=poker#games",
    sections: [
      {
        heading: "Hand rankings and deal structure",
        paragraphs: [
          "Every player receives two private hole cards face down. Five community cards are dealt face up on the board in three stages: the Flop (3 cards), the Turn (1 card), and the River (1 card). Players use any combination of their two hole cards and the five community cards to form the strongest five-card poker hand.",
          "Hand rankings from highest to lowest: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, and High Card.",
        ],
      },
      {
        heading: "Betting rounds: Check, Call, Raise, or Fold",
        paragraphs: [
          "Action unfolds over four betting rounds: Pre-flop, Flop, Turn, and River. When it is your turn to act, you may Check (pass action if no bet is made), Bet or Raise (increase the stake), Call (match the current bet), or Fold (surrender your cards and forfeit the pot).",
          "If two or more players remain after the final river betting round, a Showdown occurs: remaining players reveal their cards, and the strongest five-card hand wins the pot.",
        ],
      },
      {
        heading: "Position, pot odds, and bluffing",
        paragraphs: [
          "Table position is critical: acting late (especially on the Button) provides a massive advantage because you see how opponents act before making your decision. Calculate pot odds to determine if drawing to a straight or flush is mathematically profitable over the long run.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use only one hole card to make a hand?",
        answer:
          "Yes! You can use both hole cards, one hole card, or play the board (all five community cards) to make your best hand.",
      },
      {
        question: "What happens in the event of a tie?",
        answer:
          "If two or more players hold hands of identical rank and kickers, the pot is divided equally among them (a split pot).",
      },
      {
        question: "What are the small and big blinds?",
        answer:
          "Blinds are mandatory forced bets posted by the two players seated directly to the left of the dealer button before cards are dealt.",
      },
    ],
    related: [
      { href: "/games/joker-duel", label: "Play Joker Duel" },
      { href: "/games/teenpatti", label: "Play Teen Patti" },
      { href: "/games/bluff", label: "Play Bluff" },
    ],
  },
  racer: {
    title: "Play Realtime Racer Online",
    description:
      "Play Realtime Racer free online in your browser. Steer, accelerate, and drift around a top-down track in live 2-player racing action.",
    intro:
      "Realtime Racer is a top-down multiplayer racing game where split-second reflexes and steering precision decide the victor. Compete in real time against a live opponent or bot over three laps of heart-pounding racing.",
    playHref: "/?play=racer#games",
    sections: [
      {
        heading: "Steering controls and real-time throttle physics",
        paragraphs: [
          "Take command of your car using smooth directional steering and progressive acceleration. Maintain traction around hairpin bends, ease off the throttle to avoid spinouts, and hit full acceleration on straightaways.",
          "Both racers compete simultaneously on the same track in real time, making timing, corner entry, and racing line selection vital to victory.",
        ],
      },
      {
        heading: "Cornering apexes and collision management",
        paragraphs: [
          "The fastest path around the circuit is the classic racing line: enter wide, clip the inner corner apex, and exit wide onto the straightaway. Grazing barriers slows your car down, so smooth line discipline beats erratic high-speed collisions every time.",
        ],
      },
      {
        heading: "Three-lap championship format",
        paragraphs: [
          "Races are contested over three full laps. Track your lap times, anticipate your rival's braking points to execute clean overtakes, and cross the finish line first to claim the checkered flag.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many players can race at once?",
        answer:
          "Realtime Racer supports head-to-head 2-player competition online or against a responsive local computer opponent.",
      },
      {
        question: "How many laps are in a race?",
        answer:
          "Each match is contested over three full laps around the circuit.",
      },
      {
        question: "What happens if I hit the track barrier?",
        answer:
          "Colliding with track edges creates friction and reduces speed, emphasizing the importance of staying on the asphalt.",
      },
    ],
    related: [
      { href: "/games/carrom", label: "Play Carrom" },
      { href: "/games/2048", label: "Play 2048" },
    ],
  },
  rummy: {
    title: "Play Rummy Online",
    description:
      "Play Rummy free online for 2–6 players. Draw and discard cards, build pure and impure sequences, form sets, and make a valid declaration to win.",
    intro:
      "Rummy is a world-renowned card meld game combining memory, combination building, and sharp card disposal. Draw from the stock or discard pile, arrange your cards into valid sequences and sets, and be the first to declare to win.",
    playHref: "/?play=rummy#games",
    sections: [
      {
        heading: "Deal, drawing, and discard turn cycle",
        paragraphs: [
          "Each player receives 13 cards from two standard decks including printed and wild jokers. On your turn, you must draw one card—either from the closed stock pile or the open discard pile—and end your turn by discarding one card to the discard pile.",
          "The goal is to arrange all 13 cards into valid melds: Sequences (three or more consecutive cards of the same suit) and Sets (three or four cards of the same rank in different suits).",
        ],
      },
      {
        heading: "Pure sequences, wild jokers, and valid declarations",
        paragraphs: [
          "A valid Rummy declaration strictly requires at least two sequences, one of which MUST be a Pure Sequence (consecutive cards of the same suit without using any joker). The second sequence can be impure (utilizing a joker).",
          "Remaining cards can be grouped into additional sequences or sets. Once your hand is fully melded, discard your 14th card to the finish slot and announce your declaration.",
        ],
      },
      {
        heading: "Scoring and penalty point calculation",
        paragraphs: [
          "When a player successfully declares, opponents are penalized based on their unmelted cards ('deadwood'): Court cards (A, K, Q, J) carry 10 penalty points each, and pip cards carry their face value. Failing to form a pure sequence penalizes you for all cards in your hand.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a Pure Sequence in Rummy?",
        answer:
          "A Pure Sequence consists of three or more consecutive cards of the same suit formed without any wild joker (e.g. 4♠-5♠-6♠).",
      },
      {
        question: "Can a Set contain two cards of the same suit?",
        answer:
          "No. A valid set must contain cards of the same rank but with different suits (e.g. 7♠-7♥-7♦). Two cards of the same suit invalidate the set.",
      },
      {
        question: "What is the maximum penalty in a Rummy round?",
        answer:
          "In 13-card Indian Rummy, the maximum penalty cap for a full-count loss is typically 80 points.",
      },
    ],
    related: [
      { href: "/games/teenpatti", label: "Play Teen Patti" },
      { href: "/games/callbreak", label: "Play Call Break" },
      { href: "/games/hearts", label: "Play Hearts" },
    ],
  },
  spades: {
    title: "Play Spades Online",
    description:
      "Play Spades free online with partnerships or solo play. Bid your contract, avoid sandbag penalties, play nil, and trump with spades to win.",
    intro:
      "Spades is a strategic partnership trick-taking card game where spades are permanent trump. Bid your trick count with your partner, follow suit under pressure, avoid sandbag penalties, and race to 500 points.",
    playHref: "/?play=spades#games",
    sections: [
      {
        heading: "Partnerships, deal, and contract bidding",
        paragraphs: [
          "Four players compete in two fixed partnerships (North-South and East-West). Each player receives 13 cards from a 52-card deck. Before play begins, each team bids the total number of tricks they contract to win. Bids are combined between partners.",
          "A player can also bid 'Nil', contracting to take zero tricks during the round. Successfully making Nil earns a 100-point bonus, while taking even a single trick fails Nil and inflicts a 100-point penalty.",
        ],
      },
      {
        heading: "Trick play, leading spades, and trump rules",
        paragraphs: [
          "The player to the dealer's left leads the first trick. Players must follow the led suit if able. If void, you may play a spade (trump) or discard any side card. Spades cannot be led until 'spades are broken' (played when void in another suit) or unless the leader has only spades remaining.",
          "Each trick is won by the highest card of the led suit, or by the highest spade if any trump was played. The winner of the trick leads the next.",
        ],
      },
      {
        heading: "Scoring, sandbagging, and bag penalties",
        paragraphs: [
          "Making your bid awards 10 points per trick bid, plus 1 point for each extra trick ('bag' or overtrick). However, accumulating 10 bags across hands triggers a severe 'bag penalty' of -100 points! Failing your team bid costs 10 points per trick bid as a negative penalty. The first team to reach 500 points wins.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a Nil bid in Spades?",
        answer:
          "A Nil bid is a declaration that you will win zero tricks during the hand, earning a 100-point bonus if made, or a 100-point penalty if failed.",
      },
      {
        question: "What are bags and bag penalties?",
        answer:
          "Bags are overtricks won beyond your contract bid. Every 10 accumulated bags penalizes your team by -100 points.",
      },
      {
        question: "When can Spades be led?",
        answer:
          "Spades cannot be led until spades have been broken (played on a trick when a player could not follow suit) or if you hold only spades.",
      },
    ],
    related: [
      { href: "/games/callbreak", label: "Play Call Break" },
      { href: "/games/hearts", label: "Play Hearts" },
    ],
  },
  sudoku: {
    title: "Play Sudoku Online",
    description:
      "Play Sudoku free online in your browser. Fill the 9x9 grid, use pencil notes and elimination logic, and solve numbers 1 to 9 across all rows and boxes.",
    intro:
      "Sudoku is the world's most famous logic-based number placement puzzle. Fill the 9x9 grid so that every single row, column, and 3x3 nonet contains all numbers from 1 to 9 without repetition or guesswork.",
    playHref: "/?play=sudoku#games",
    sections: [
      {
        heading: "Grid structure and fundamental placement rules",
        paragraphs: [
          "The puzzle consists of an 81-cell grid subdivided into nine 3x3 boxes (nonets). Some cells are pre-filled with numbers as initial clues. Your objective is to place a single digit from 1 to 9 into each empty cell.",
          "No math is involved: every digit from 1 through 9 must appear exactly once in each of the 9 horizontal rows, each of the 9 vertical columns, and each of the nine 3x3 subgrids.",
        ],
      },
      {
        heading: "Pencil notes, singletons, and cross-hatching",
        paragraphs: [
          "Utilize candidate notes (pencil marks) to jot down possible numbers in empty cells. Search for 'Naked Singles' (cells where eight digits are already eliminated by intersecting rows, columns, and boxes) and 'Hidden Singles' (digits that can only legally fit into one cell within a given row, column, or box).",
          "Cross-hatching—scanning rows and columns to pinpoint where a specific number must go within a 3x3 box—is the fastest technique to populate empty cells.",
        ],
      },
      {
        heading: "Advanced elimination techniques",
        paragraphs: [
          "When simple singles are exhausted, employ advanced logic like Naked Pairs, Pointing Pairs, and Box-Line Reduction. Identifying that two cells in a row share the exact same two candidates eliminates those numbers from all other cells in that group.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Sudoku ever require guessing?",
        answer:
          "No. Every valid Sudoku puzzle has a unique solution that can be derived entirely through logical deduction.",
      },
      {
        question: "How do pencil notes help solve Sudoku?",
        answer:
          "Pencil notes let you record potential candidate numbers in each cell, making it easy to identify pairs, triples, and unique cell candidates.",
      },
      {
        question: "Can the same number appear twice in a 3x3 box?",
        answer:
          "No. Every 3x3 box, row, and column must contain each number from 1 to 9 exactly once.",
      },
    ],
    related: [
      { href: "/games/arrows", label: "Play Arrows" },
      { href: "/games/2048", label: "Play 2048" },
    ],
  },
  teenpatti: {
    title: "Play Teen Patti Online",
    description:
      "Play Teen Patti free online in your browser. 3-card Indian poker with Blind and Seen play, Chaal betting, Sideshows, and Showdowns.",
    intro:
      "Teen Patti (Three Cards) is a wildly popular Indian card game akin to three-card brag and poker. Evaluate your three-card hand, choose between Blind and Seen play, raise stakes with Chaal, and battle to the final Showdown.",
    playHref: "/?play=teenpatti#games",
    sections: [
      {
        heading: "Hand rankings in Teen Patti",
        paragraphs: [
          "Each player receives three private cards face down. Hand hierarchy from highest to lowest: Trail or Set (Three of a Kind, e.g. A-A-A), Pure Sequence (Straight Flush in same suit, e.g. A-K-Q), Sequence (Regular Straight, e.g. 9-8-7), Color (Flush in same suit), Pair (Two cards of same rank), and High Card.",
          "A boot amount (pot entry) is collected from every player before cards are dealt to seed the central pot.",
        ],
      },
      {
        heading: "Blind play vs. Seen play and Chaal betting",
        paragraphs: [
          "Players can choose to play 'Blind' (betting without looking at their cards) or 'Seen' (inspecting their cards). Playing Blind costs half the current stake of Seen players. A Seen player must bet at least double the blind amount (a 'Chaal') to remain in the hand.",
          "At any point on your turn, you may choose to Pack (fold your cards and exit the round).",
        ],
      },
      {
        heading: "Sideshows and Showdown",
        paragraphs: [
          "A Seen player may request a 'Sideshow' from the previous Seen player. If accepted, both players secretly compare hands and the holder of the lower-ranking hand is eliminated. When only two players remain, either player may pay for a 'Show' to reveal both hands and award the pot to the winner.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the highest hand in Teen Patti?",
        answer:
          "The highest hand is a Trail (Three of a Kind), with three Aces (A-A-A) being the ultimate unbeatable combination.",
      },
      {
        question: "What is the difference between Blind and Seen?",
        answer:
          "Blind players bet without looking at their cards and pay half the stake; Seen players inspect their cards but must pay double the blind bet.",
      },
      {
        question: "What is a Sideshow in Teen Patti?",
        answer:
          "A Sideshow is a private hand comparison between two adjacent Seen players where the lower hand is forced to fold immediately.",
      },
    ],
    related: [
      { href: "/games/poker", label: "Play Poker" },
      { href: "/games/rummy", label: "Play Rummy" },
    ],
  },
  uno: {
    title: "Play UNO Online",
    description:
      "Play UNO free online in your browser for 2–4 players. Match colors and numbers, unleash Skip, Reverse, Draw Two, and Wild Draw 4, and call UNO!",
    intro:
      "UNO is the world's most celebrated color-matching party card game. Match the top discard by color or number, disrupt your rivals with ruthless action cards, shout 'UNO!' on your final card, and empty your hand to win.",
    playHref: "/?play=uno#games",
    sections: [
      {
        heading: "Card matching and deck composition",
        paragraphs: [
          "The UNO deck features four vibrant colors (Red, Yellow, Green, Blue) with numbered cards from 0 to 9, alongside powerful Action cards. Players are dealt 7 cards each. On your turn, match the top card of the discard pile by either Color, Number, or Symbol.",
          "If you do not hold a playable card, you must draw one card from the draw pile; if the drawn card is playable, you may play it immediately.",
        ],
      },
      {
        heading: "Action cards: Skip, Reverse, Draw Two, and Wilds",
        paragraphs: [
          "Action cards dramatically alter table momentum: Skip forces the next player to lose their turn, Reverse flips the direction of play, and Draw Two (+2) forces the next player to draw two cards and forfeit their turn.",
          "Wild Cards can be played on any card and allow you to declare the new active color. The fearsome Wild Draw Four (+4) lets you change the color AND forces the next player to draw 4 cards and skip their turn.",
        ],
      },
      {
        heading: "Calling 'UNO!' and winning conditions",
        paragraphs: [
          "The instant you play your penultimate card and hold only ONE card remaining, you MUST call 'UNO!'. If you fail to call UNO before the next player takes their turn, an opponent can catch you, forcing you to draw two penalty cards. The first player to shed all cards wins the round.",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if I forget to say UNO?",
        answer:
          "If you have only one card left and another player catches you before the next turn begins, you must draw two penalty cards.",
      },
      {
        question: "Can I end the game on an Action card?",
        answer:
          "Yes, you can play an Action card or Wild card as your final card to win the game.",
      },
      {
        question: "Can Draw Two (+2) cards be stacked?",
        answer:
          "Under official standard rules, Draw Two cards cannot be stacked; the next player must draw two cards and forfeit their turn.",
      },
    ],
    related: [
      { href: "/games/crazyeights", label: "Play Crazy Eights" },
      { href: "/games/bluff", label: "Play Bluff" },
    ],
  },
  watersort: {
    title: "Play Water Sort Online",
    description:
      "Play Water Sort puzzle free online in your browser. Pour colored liquids between test tubes across 500 levels until every tube is sorted.",
    intro:
      "Water Sort is a relaxing yet deeply satisfying fluid color-sorting logic puzzle. Pour vibrant colored liquids between glass test tubes until every tube holds a single, pure color across 500 progressive levels.",
    playHref: "/?play=watersort#games",
    sections: [
      {
        heading: "Pouring mechanics and physics constraints",
        paragraphs: [
          "Each level presents a collection of test tubes containing multi-layered bands of colored liquids, alongside one or two empty buffer tubes. Select a tube to pour from, then tap a destination tube to pour the top liquid layer.",
          "You can only pour liquid if two conditions are met: the top color in the destination tube matches the color you are pouring, AND the destination tube has sufficient empty capacity to receive it. Empty tubes can receive any color liquid.",
        ],
      },
      {
        heading: "Sorting strategy and buffer tube management",
        paragraphs: [
          "The key to solving difficult levels is preserving empty tubes as long as possible. Use empty tubes to temporarily stage colors, allowing you to access and consolidate deep layers buried at the bottom of filled tubes.",
          "Prioritize assembling full four-layer tubes of a single color early. Once a tube is filled with one complete color, it is sealed, freeing up room and simplifying the remaining board state.",
        ],
      },
      {
        heading: "500 levels with local save progress",
        paragraphs: [
          "With 500 hand-crafted levels, puzzles evolve from straightforward 4-tube warmups into intricate multi-color brain teasers with hidden color layers. Your progress is saved automatically in your browser so you can resume where you left off.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you pour any color into an empty tube?",
        answer:
          "Yes! An empty tube can receive any color liquid, making it your most valuable tool for reorganizing mixed layers.",
      },
      {
        question: "What happens if I get stuck in Water Sort?",
        answer:
          "You can use the restart button to reset the current level without penalty and attempt a different pouring order.",
      },
      {
        question: "Can multiple layers of the same color pour at once?",
        answer:
          "Yes, if the source tube has multiple connected layers of the same color and the destination tube has enough space, all connected layers pour together.",
      },
    ],
    related: [
      { href: "/games/arrows", label: "Play Arrows" },
      { href: "/games/2048", label: "Play 2048" },
    ],
  },
};

const GAME_SEO_IDS: GameSeoPageId[] = [
  "2048",
  "arrows",
  "bluff",
  "callbreak",
  "carrom",
  "checkers",
  "connect-four",
  "crazyeights",
  "hearts",
  "joker-duel",
  "ludo",
  "poker",
  "racer",
  "rummy",
  "spades",
  "sudoku",
  "teenpatti",
  "uno",
  "watersort",
];

const pages: Record<SeoPageId, SeoPageContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "Learn what information GamesLord handles for browser games, online lobbies, voice and video, and optional advertising.",
    intro:
      "This policy explains the information handled when you use GamesLord, including online multiplayer, device permissions and optional advertising.",
    sections: [
      {
        heading: "Information used to run the site",
        paragraphs: [
          "You can play local games without creating a GamesLord account. If you join an online lobby, the service processes the room code, a temporary player identifier, the display name you provide, and WebRTC connection-signaling messages needed to connect players. Signaling messages are intended to expire after about 60 seconds, and inactive lobby records are intended to expire after about 30 seconds; periodic cleanup can make actual deletion later.",
          "Game moves and chat are exchanged between participants through the online game connection and are not intended to be stored as a game history by GamesLord. Your browser may store the most recent room details locally so you can use the rejoin feature. You can clear this information using your browser's site-data controls.",
        ],
      },
      {
        heading: "Camera, microphone and online connections",
        paragraphs: [
          "Voice and video are optional. The browser asks for permission before GamesLord can access your camera or microphone. Media is sent to other participants over WebRTC; when a direct connection cannot be established, a TURN relay provider may relay the connection. You can deny permission or turn off your camera and microphone in the game controls or browser settings.",
          "Online multiplayer requires exchanging connection information through the site's signaling service. The app uses hosting, database and, when configured, TURN providers to operate these features. Those providers process technical data as needed to provide their services.",
        ],
      },
      {
        heading: "Cookies, advertising and third parties",
        paragraphs: [
          "Advertising is optional and disabled unless the site operator enables it with deployment settings. If Google AdSense is enabled, Google and its partners may use cookies or similar technologies and process device, browser and ad-interaction information to serve, measure and, where permitted, personalize ads.",
          "Before serving ads in regions where consent is required, the operator must configure an applicable Google-certified consent management platform and consent message in AdSense Privacy & messaging, and comply with applicable laws. The site's ad integration is gated on an operator confirmation setting; that setting does not itself create or verify a consent message.",
          "The site and its hosting or service providers may process ordinary technical request data, such as browser and connection details, for delivery, security and troubleshooting. This app does not intentionally use a first-party analytics product.",
        ],
      },
      {
        heading: "Your choices and data requests",
        paragraphs: [
          "You can manage browser permissions, clear local site data, and use Google's ad and privacy settings to manage available advertising choices. Where a consent message is shown, use it to review or change the choices it offers. Your legal rights depend on where you live; contact the operator below to ask about a privacy request.",
        ],
      },
      {
        heading: "Policy changes and contact",
        paragraphs: [
          "This policy may be updated when GamesLord's features, providers or legal requirements change. The site operator is identified below using the public deployment settings. This general information is not legal advice; the operator should review it for the jurisdictions and services in which the site is offered.",
        ],
      },
    ],
    faqs: [],
    related: [],
  },
  chess: {
    title: "Play Chess Online",
    description:
      "Play Chess in your browser on GamesLord. Start a local game against the computer or create an online lobby and invite a friend.",
    playHref: "/?play=chess#games",
    intro:
      "Chess is a two-player strategy game where every move changes the position and the plans available to both sides. GamesLord lets you start a game in your browser, practice locally against the computer, or invite someone to an online lobby.",
    sections: [
      {
        heading: "How a Chess game works",
        paragraphs: [
          "One player controls the white pieces and the other controls the black pieces. White moves first, then both sides take turns moving one piece at a time. Each piece has its own pattern of movement, so learning those patterns is the first step toward planning a safe position.",
          "The goal is checkmate: attack the opposing king in a way that leaves no legal move to escape. Capturing pieces can help, but protecting your king and coordinating your pieces matter just as much.",
        ],
      },
      {
        heading: "Start a game on GamesLord",
        paragraphs: [
          "Choose Chess from the games list. For a solo practice session, select the computer option when it is offered. To play with another person, create an online lobby and share its invitation link or room code. Chess is a two-player game, so the host can set two active seats.",
          "Take a moment to check that the board is ready before making a move. If you are new to Chess, focus on developing pieces, keeping the king safe and avoiding moves that leave a piece undefended.",
        ],
      },
      {
        heading: "Simple ideas for your first games",
        paragraphs: [
          "Use the center of the board, bring out your knights and bishops, and avoid moving the same piece repeatedly without a clear reason. Before each turn, ask what your opponent’s last move attacks and whether your king or another piece is at risk.",
          "A short game against the computer is a useful way to get comfortable with selecting pieces and seeing how the board responds. Playing a friend adds a different challenge: explain your plans afterward and look for one move you would change next time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I play Chess by myself?",
        answer:
          "Yes. Choose the local computer option to play one side against the built-in computer opponent on the same device.",
      },
      {
        question: "Can I invite a friend to Chess?",
        answer:
          "Yes. Create an online lobby, share the room code or invite link, then start Chess when your friend has joined.",
      },
      {
        question: "How many people can play one Chess game?",
        answer:
          "Chess has two active players. Other people in the lobby can watch if the host has invited more attendees.",
      },
    ],
    related: [
      { href: "/games/checkers", label: "Play Checkers" },
      { href: "/games/connect-four", label: "Play Connect Four" },
      { href: "/online-multiplayer", label: "How online multiplayer lobbies work" },
    ],
  },
  "tic-tac-toe": {
    title: "Play Tic-Tac-Toe Online",
    description:
      "Play Tic-Tac-Toe free in your browser. Practice against the computer on one device or invite a friend to a GamesLord online lobby.",
    playHref: "/?play=ttt#games",
    intro:
      "Tic-Tac-Toe is a quick, two-player game with simple rules and room for clever decisions. Play a local round against the computer or invite a friend online, with no download required.",
    sections: [
      {
        heading: "The rules in a minute",
        paragraphs: [
          "The board has nine squares. Players take turns placing their mark in an empty square: one uses X and the other uses O. The first player to make a line of three marks horizontally, vertically or diagonally wins.",
          "If every square is filled and neither player has a line of three, the round is a draw. Since the board is small, the opening move and the response to the center square can quickly determine which lines are still possible.",
        ],
      },
      {
        heading: "Play locally or invite someone",
        paragraphs: [
          "Select Tic-Tac-Toe from the GamesLord games list. You can choose the local computer option for a one-device game, or create an online lobby and share the room code or invitation link with a friend.",
          "Tic-Tac-Toe uses two active seats. In an online lobby the host starts the round after choosing the game and deciding how many attendees should play; extra attendees can follow along as viewers.",
        ],
      },
      {
        heading: "A few useful tactics",
        paragraphs: [
          "When you can win on your next turn, take the square that completes your line. If your opponent has two marks in a row, block the open square before building a slower plan of your own.",
          "The center can contribute to four possible winning lines, while a corner contributes to three. Look for a fork: a move that creates two different winning threats so your opponent cannot block both at once.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is GamesLord Tic-Tac-Toe free?",
        answer:
          "Yes. You can open the game in a browser and start a local round or an online lobby without downloading a separate game.",
      },
      {
        question: "Can I play Tic-Tac-Toe against the computer?",
        answer:
          "Yes. Pick the local computer option to play against the built-in opponent on your device.",
      },
      {
        question: "Can more than two people join?",
        answer:
          "A round has two active players. The lobby can include additional attendees as viewers, up to its current room limit.",
      },
    ],
    related: [
      { href: "/games/connect-four", label: "Play Connect Four" },
      { href: "/games/checkers", label: "Play Checkers" },
      { href: "/how-to-play", label: "Getting started with GamesLord" },
    ],
  },
  "snakes-and-ladders": {
    title: "Play Snakes & Ladders Online",
    description:
      "Play Snakes & Ladders free online in your browser. Roll 1 to enter, climb ladders, cut rival tokens back to start, dodge snakes, and race to 100.",
    playHref: "/?play=snl#games",
    intro:
      "Snakes & Ladders is an iconic turn-based race across a 10x10 numbered board. Roll dice to enter the track, climb soaring ladders, cut rival tokens back to start, and navigate perilous snakes on your quest to square 100.",
    sections: [
      {
        heading: "The 100-square board and exact ladder & snake coordinates",
        paragraphs: [
          "The board spans 100 squares snaking upward from square 1 (bottom left) to square 100 (top left). Landing at the base of a ladder shoots you upward: ladders connect 6 to 48, 8 to 29, 21 to 84, 26 to 88, 44 to 65, and 49 to 70.",
          "Beware the treacherous snakes that slide you backwards: 31 to 9, 42 to 23, 47 to 28, 61 to 37, 86 to 45, 92 to 53, and the infamous 98 to 59 right before the finish line!",
        ],
      },
      {
        heading: "Dice mechanics, entry rules, and bonus rolls",
        paragraphs: [
          "Tokens begin off the board on START. A player must roll a 1 on the die to enter a token onto square 1. Rolling a 6 grants a consecutive bonus roll (up to a maximum of 2 consecutive sixes). Rolling a 1 also grants an immediate bonus roll!",
          "An exact roll is required to reach square 100; overshooting moves cannot be played and leave your token in place.",
        ],
      },
      {
        heading: "Competitive token cutting and multi-token tactical play",
        paragraphs: [
          "When a token lands on a square occupied by an opponent's token, the rival token is 'cut' and banished all the way back to START (where it must roll a 1 again to re-enter). Square 1 and square 100 are safe zones where cutting is forbidden.",
          "Choose to play with 1, 2, 3, or 4 tokens per player. With multiple tokens, you can split moves, protect vulnerable pieces, and hunt enemy tokens across the board.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I enter tokens onto the board?",
        answer:
          "You must roll a 1 on the die to move a token from START onto square 1.",
      },
      {
        question: "What is the token cutting rule?",
        answer:
          "Landing your token on a square occupied by an opponent's token sends that rival piece back to START. Square 1 and 100 are immune to cutting.",
      },
      {
        question: "Do sixes give an extra turn?",
        answer:
          "Yes, rolling a 6 (or a 1) grants an extra roll, capped at two consecutive sixes.",
      },
      {
        question: "Do I need an exact roll to win?",
        answer:
          "Yes, you must roll the exact number needed to land on square 100. If your roll overshoots 100, the token cannot move.",
      },
    ],
    related: [
      { href: "/games/ludo", label: "Play Ludo" },
      { href: "/games/tic-tac-toe", label: "Play Tic-Tac-Toe" },
      { href: "/games/checkers", label: "Play Checkers" },
    ],
  },
  "online-multiplayer": {
    title: "Online Multiplayer Games with Friends",
    description:
      "Create a GamesLord game lobby, share an invite link or room code, choose active players and let friends join online from their browsers.",
    intro:
      "GamesLord makes it easy to bring a group together for browser games. The host creates a lobby first, shares a link or room code, and chooses the game after friends arrive. Attendees who are not playing can watch.",
    sections: [
      {
        heading: "Create a lobby and invite friends",
        paragraphs: [
          "Choose a game and select the online lobby option. Once the room is ready, copy its invitation link or room code and send it to your group. Friends can open the link or enter the code from GamesLord’s join screen.",
          "Wait for attendees to connect before choosing the game setup. The host controls the game selection and the number of active players, so the group can decide who will play and who would rather watch.",
        ],
      },
      {
        heading: "Players and viewers share one room",
        paragraphs: [
          "A game may need fewer active players than the number of people who want to join the call. In that case, the host can assign the available player seats and let the remaining attendees spectate. Spectators stay in the lobby and can follow the same match.",
          "GamesLord currently supports up to eight total attendees in a room. The number of active seats depends on the selected game: Chess and Tic-Tac-Toe use two, while other games may allow more. The host can change the game from the lobby.",
        ],
      },
      {
        heading: "Chat and talk during a game",
        paragraphs: [
          "Text chat is available in the game room. Voice chat is offered when there are attendees watching beyond the active player seats, so a larger group can stay involved while a smaller set plays. Browser permissions may be required before using a microphone or camera.",
          "Online connections depend on your browser, network and the room’s connection setup. If a friend cannot connect, check that both people have a stable connection and that the browser has not blocked the required permissions.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I invite someone to a GamesLord game?",
        answer:
          "Create an online lobby, then share its invitation link or room code. Your friend can use either one to join.",
      },
      {
        question: "Can the host choose who plays?",
        answer:
          "Yes. The host chooses the game and active player count. Other attendees can watch when the room has more people than the game has seats.",
      },
      {
        question: "How many people can join one lobby?",
        answer:
          "A GamesLord room currently supports up to eight attendees total, including the host. The active player count is set for the selected game.",
      },
    ],
    related: [
      { href: "/how-to-play", label: "Step-by-step GamesLord instructions" },
      { href: "/games/chess", label: "Play Chess with a friend" },
    ],
  },
  "how-to-play": {
    title: "How to Play Online Games",
    description:
      "Learn how to play GamesLord games: challenge the computer, take turns with a friend on one device, or create an online lobby and invite friends.",
    intro:
      "GamesLord is a browser-based game room for quick solo sessions and online game nights. Use this guide to choose a game, start locally or invite friends, and understand how player seats and viewers work.",
    sections: [
      {
        heading: "Start a game on one device",
        paragraphs: [
          "Browse the game cards on the home page and choose a title. Select Play vs computer to take one side while the computer takes its turns automatically after a short pause. For a shared-device match, choose User vs User and pass the device between turns.",
          "Some games are designed for two active sides. In User vs User mode, both people take turns making moves on the same device; in computer mode, one person plays against the built-in opponent. Follow the game-room controls and use the menu to return to the games list.",
        ],
      },
      {
        heading: "Play online with friends",
        paragraphs: [
          "Choose the online lobby option to create a room. Copy the room code or invitation link and send it to the people you want to play with. Friends can open the link directly or choose Join a game and enter the code.",
          "After attendees arrive, the host picks a game and the number of active players. The selected game determines how many seats are available. If there are more attendees than seats, the extra people can watch rather than being removed from the room.",
        ],
      },
      {
        heading: "Make your game night smoother",
        paragraphs: [
          "Keep the lobby open while everyone joins, then confirm the game and player setup before starting. If the group wants a different game, the host can change the selection from the lobby.",
          "If your connection drops during an active online match, use Connect in the game room or the saved Rejoin button on the home page to return to the same seat while the room is still open. Text chat helps coordinate turns. Voice or video features may ask for browser permission, and a stable network helps online connections work reliably.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to install anything?",
        answer:
          "No. GamesLord games run in a modern web browser, so you can open the site and start playing without a separate app download.",
      },
      {
        question: "Can I play without inviting anyone?",
        answer:
          "Yes. Choose Play vs computer to play one side against the computer, or User vs User to take turns with another person on the same device.",
      },
      {
        question: "What happens when a lobby has extra attendees?",
        answer:
          "The host sets the active player count. Attendees who do not take a player seat can watch the game, and voice chat is offered when there are spectators.",
      },
      {
        question: "Can I rejoin a game after leaving?",
        answer:
          "If your connection drops during a game, use Connect in the room to rejoin as the same player while it is still open. The home page also offers a Rejoin button for your most recent online game; hosts can use it to reopen their lobby with the same room code and game selected.",
      },
    ],
    related: [
      { href: "/online-multiplayer", label: "Learn about online multiplayer" },
      { href: "/games/tic-tac-toe", label: "Try a quick Tic-Tac-Toe game" },
    ],
  },
};

const pagePaths: Record<SeoPageId, string> = {
  "privacy-policy": "/privacy-policy",
  chess: "/games/chess",
  "tic-tac-toe": "/games/tic-tac-toe",
  "snakes-and-ladders": "/games/snakes-and-ladders",
  "online-multiplayer": "/online-multiplayer",
  "how-to-play": "/how-to-play",
};

const legacyGamePages: SeoPageId[] = ["chess", "tic-tac-toe", "snakes-and-ladders"];
const gameGuideLinks = [
  { href: "/games/chess", label: "Play Chess Online" },
  { href: "/games/tic-tac-toe", label: "Play Tic-Tac-Toe Online" },
  { href: "/games/snakes-and-ladders", label: "Play Snakes & Ladders Online" },
  ...GAME_SEO_IDS.map((game) => ({
    href: `/games/${game}`,
    label: gamePages[game].title,
  })),
];

export function isGameSeoPage(page: string): page is GameSeoPageId {
  return Object.prototype.hasOwnProperty.call(gamePages, page);
}

function getSeoPageContent(page: SeoRoutePageId) {
  return isGameSeoPage(page) ? gamePages[page] : pages[page];
}

function getSeoPagePath(page: SeoRoutePageId) {
  return isGameSeoPage(page) ? `/games/${page}` : pagePaths[page];
}

export function seoHead(page: SeoRoutePageId) {
  const { title, description } = getSeoPageContent(page);
  const canonical = canonicalUrl(getSeoPagePath(page));
  const socialImage = "https://gameslord.online/playora/logo/gameslord-social-preview.png";
  return {
    meta: [
      { title: `${title} | GamesLord` },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `${title} | GamesLord` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: socialImage },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GamesLord - online multiplayer games, made for fun" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} | GamesLord` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: "GamesLord - online multiplayer games, made for fun" },
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
}

export function SeoPage({ page }: { page: SeoRoutePageId }) {
  const content = getSeoPageContent(page);
  const pageUrl = canonicalUrl(getSeoPagePath(page));
  const homeUrl = canonicalUrl("/");
  const siteOperator = import.meta.env.VITE_PUBLIC_SITE_OPERATOR?.trim();
  const privacyEmail = import.meta.env.VITE_PUBLIC_PRIVACY_EMAIL?.trim();
  const isGamePage =
    isGameSeoPage(page) || legacyGamePages.includes(page as SeoPageId);
  const structuredData = pageUrl && homeUrl
    ? [
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: page === "privacy-policy" ? "Privacy policy" : "Game guides",
              item: page === "privacy-policy" ? pageUrl : `${homeUrl}#game-guides`,
            },
            { "@type": "ListItem", position: 3, name: content.title, item: pageUrl },
          ],
        },
        ...(isGamePage
          ? [
              {
                "@context": "https://schema.org",
                "@type": "VideoGame",
                name: content.title,
                description: content.description,
                url: pageUrl,
                gamePlatform: "Web browser",
                applicationCategory: "Game",
                operatingSystem: "Web browser",
              },
            ]
          : []),
      ]
    : [];

  return (
    <div className="seo-page">
      {structuredData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <header className="seo-header">
        <a className="brand" href="/" aria-label="GamesLord home">
          <img className="brand-mark" src="/playora/logo/gameslord-logo-dark.svg" alt="GamesLord" />
        </a>
        <nav aria-label="Main navigation">
          <a href="/#games">Games</a>
          <a href={page === "privacy-policy" ? "/privacy-policy" : "/#game-guides"}>
            {page === "privacy-policy" ? "Privacy" : "Guides"}
          </a>
          <a href="/online-multiplayer">Online play</a>
        </nav>
        <a className="btn primary" href="/#games">Explore games</a>
      </header>

      <main className="seo-main">
        <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          {page === "privacy-policy" ? null : <><a href="/#game-guides">Guides</a><span aria-hidden="true">/</span></>}
          <span aria-current="page">{content.title}</span>
        </nav>
        <article>
          <header className="seo-hero">
            <p className="seo-kicker">{page === "privacy-policy" ? "SITE INFORMATION" : "GAMESLORD GUIDE"}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            {page !== "privacy-policy" ? (
              <a className="btn primary" href={content.playHref ?? "/#games"}>
                {content.playHref ? "Play this game" : "Browse games"} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </header>
          <div className="seo-article">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {page === "privacy-policy" &&
                section.heading === "Cookies, advertising and third parties" ? (
                  <p>
                    Read about{" "}
                    <a href="https://policies.google.com/technologies/ads" rel="noreferrer">
                      how Google uses data when you use partner sites
                    </a>{" "}
                    and review your{" "}
                    <a href="https://adssettings.google.com/" rel="noreferrer">
                      Google ad settings
                    </a>
                    .
                  </p>
                ) : null}
              </section>
            ))}
            {content.faqs.length ? (
              <section className="seo-faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading">Frequently asked questions</h2>
                {content.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            ) : null}
            {page === "privacy-policy" ? (
              <section aria-labelledby="privacy-contact-heading">
                <h2 id="privacy-contact-heading">Site operator and privacy contact</h2>
                <p>Last updated: October 25, 2026</p>
                <p>{siteOperator || "The GamesLord site operator has not yet been identified in deployment settings."}</p>
                {privacyEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(privacyEmail) ? (
                  <p>
                    Privacy questions: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
                  </p>
                ) : (
                  <p>
                    A privacy contact email has not been configured. The site operator should add one before
                    enabling advertising.
                  </p>
                )}
              </section>
            ) : null}
          </div>
          {page !== "privacy-policy" ? <AdSenseSlot placement="guide" /> : null}
        </article>
      </main>
      <footer className="seo-footer">
        <a className="brand" href="/" aria-label="GamesLord home"><img className="brand-mark" src="/playora/logo/gameslord-logo-dark.svg" alt="GamesLord" /></a>
        <p>Free browser games to play solo or with friends.</p>
        <div className="seo-footer-link-groups">
          <nav aria-label="Site pages"><ul><li><a href="/">Home</a></li><li><a href="/#game-guides">All guides</a></li><li><a href="/how-to-play">How to play</a></li><li><a href="/online-multiplayer">Online multiplayer</a></li><li><a href="/privacy-policy">Privacy policy</a></li></ul></nav>
          <nav aria-label="Game guides"><h2>Game guides</h2><div className="seo-footer-guide-lists">{Array.from({ length: 4 }, (_, column) => <ul key={column}>{gameGuideLinks.filter((_, index) => index % 4 === column).map((item) => <li key={item.href}><a href={item.href}>{item.label.replace(/^Play /, "").replace(/ Online$/, "")}</a></li>)}</ul>)}</div></nav>
        </div>
      </footer>
    </div>
  );
}
