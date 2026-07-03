const POLYMATH = {
  philosophy: {
    questions: [
      "How do you know what you know, and when should you stop trusting it?",
      "What makes an argument bad, and how do you catch yourself making one?",
      "Is the right action the one with the best outcome, the one that follows the rule, or the one a good person would do?",
      "Does science actually prove anything, or just survive attempts to kill it?",
      "What would you agree to if you didn't know which position in society you'd end up in?"
    ],
    units: [
      {
        id: "phi1",
        title: "Epistemology: belief, justification, truth",
        question: "How do you know what you know, and when should you stop trusting it?",
        core: "Knowledge is usually defined as justified true belief, but Gettier cases show that definition breaks under lucky guesses that happen to be true. The real working question isn't \"what is knowledge\" philosophically, it's \"how strong is my justification relative to the claim I'm making\" — and most people wildly overrate the second half. Treat confidence as a number you update, not a binary you defend.",
        thinkers: ["Descartes", "Edmund Gettier", "David Hume", "W.V.O. Quine"],
        reading: [
          { title: "Meditations on First Philosophy", author: "René Descartes", note: "The canonical attempt to doubt everything and rebuild knowledge from certainty." },
          { title: "The Problems of Philosophy", author: "Bertrand Russell", note: "Short, plain-English entry point into what justification even means." }
        ]
      },
      {
        id: "phi2",
        title: "Logic and fallacies",
        question: "What makes an argument bad, and how do you catch yourself making one?",
        core: "Deductive validity is about form, not content — a valid argument with false premises still gives you garbage, and a sound one is valid plus true premises. Most everyday bad reasoning isn't a formal error, it's an informal fallacy: strawmanning, ad hominem, affirming the consequent, base-rate neglect. Learn the standard list once, then actively hunt for them in your own arguments, not just other people's.",
        thinkers: ["Aristotle", "Gottlob Frege"],
        reading: [
          { title: "Prior Analytics", author: "Aristotle", note: "The origin of syllogistic logic — where \"valid form\" as a concept starts." },
          { title: "An Illustrated Book of Bad Arguments", author: "Ali Almossawi", note: "Fast, visual reference for spotting fallacies in real time." }
        ]
      },
      {
        id: "phi3",
        title: "Ethics I: consequentialism vs deontology",
        question: "Is the right action the one with the best outcome, or the one that follows the rule?",
        core: "Consequentialism (Bentham/Mill) judges actions purely by outcomes — maximise aggregate wellbeing, full stop, which makes it computationally clean but licenses uncomfortable trade-offs (sacrifice one to save five). Deontology (Kant) judges actions by whether the rule behind them could be universalised, which protects individual rights but can produce rigid, outcome-blind verdicts. Most people are closet consequentialists until the trolley problem gets personal, then suddenly discover deontological intuitions.",
        thinkers: ["Jeremy Bentham", "John Stuart Mill", "Immanuel Kant"],
        reading: [
          { title: "Groundwork of the Metaphysics of Morals", author: "Immanuel Kant", note: "The categorical imperative, in the original — dense but foundational." },
          { title: "Utilitarianism", author: "John Stuart Mill", note: "Short, readable defence of the greatest-happiness principle." }
        ]
      },
      {
        id: "phi4",
        title: "Ethics II: virtue ethics",
        question: "What would a genuinely good person do, and is that even a well-defined question?",
        core: "Virtue ethics sidesteps \"what rule\" and \"what outcome\" and asks \"what would a person of good character do here\" — character and habituated disposition come first, actions are downstream. Aristotle's key move is the doctrine of the mean: virtues sit between two vices of excess and deficiency (courage between recklessness and cowardice). It's less useful for resolving hard edge-case dilemmas but arguably more useful for actually building the kind of person who doesn't need a formula.",
        thinkers: ["Aristotle", "Alasdair MacIntyre"],
        reading: [
          { title: "Nicomachean Ethics", author: "Aristotle", note: "The founding text of virtue ethics and still the best statement of it." }
        ]
      },
      {
        id: "phi5",
        title: "Philosophy of science: Popper and Kuhn",
        question: "Does science actually prove anything, or just survive attempts to kill it?",
        core: "Popper's answer: science never proves theories true, it only fails to falsify them — a theory earns credibility by surviving genuine attempts to disprove it, and unfalsifiable claims aren't science at all. Kuhn's answer complicates this: science doesn't progress smoothly through falsification, it lurches through paradigm shifts where an old framework is replaced wholesale, not incrementally corrected. Both matter for you as an engineer: Popper gives you a filter for pseudoscience, Kuhn warns you that \"normal science\" inside a paradigm can miss anomalies for decades.",
        thinkers: ["Karl Popper", "Thomas Kuhn"],
        reading: [
          { title: "The Logic of Scientific Discovery", author: "Karl Popper", note: "Falsifiability as the demarcation criterion, argued from first principles." },
          { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", note: "Where \"paradigm shift\" comes from — short and genuinely paradigm-shifting itself." }
        ]
      },
      {
        id: "phi6",
        title: "Political philosophy: Hobbes, Locke, Rawls",
        question: "What would you agree to if you didn't know which position in society you'd end up in?",
        core: "Hobbes: without a state, life is \"solitary, poor, nasty, brutish, and short,\" so people rationally consent to an absolute sovereign to escape chaos. Locke: state power is conditional, legitimate government exists to protect pre-existing natural rights (life, liberty, property), and consent can be withdrawn. Rawls updates the whole tradition with the veil of ignorance: design your society's rules as if you didn't know what position in it you'd be born into — this is the cleanest tool you'll get for stress-testing whether a policy is actually fair or just convenient for people like you.",
        thinkers: ["Thomas Hobbes", "John Locke", "John Rawls"],
        reading: [
          { title: "Leviathan", author: "Thomas Hobbes", note: "The founding argument for the social contract as escape from anarchy." },
          { title: "A Theory of Justice", author: "John Rawls", note: "The veil of ignorance and \"justice as fairness\" — the modern reference point." }
        ]
      },
      {
        id: "phi7",
        title: "Free will and determinism",
        question: "If every state of the universe is caused by the last, can any choice really be yours?",
        core: "Hard determinism says physics fixes the future, so free will is an illusion; libertarian free will says some choices genuinely aren't determined; compatibilism — the majority position among philosophers — argues \"free\" was never about breaking causation, it's about acting according to your own reasons without external coercion. For practical purposes (moral responsibility, holding yourself accountable), compatibilism is the only version that doesn't collapse into either fatalism or magical thinking.",
        thinkers: ["Baruch Spinoza", "Daniel Dennett", "Galen Strawson"],
        reading: [
          { title: "Elbow Room: The Varieties of Free Will Worth Wanting", author: "Daniel Dennett", note: "The strongest, most readable case for compatibilism." }
        ]
      },
      {
        id: "phi8",
        title: "Practical rationality: Bayesian thinking and decision theory",
        question: "How should you actually update your beliefs and choices when new evidence arrives?",
        core: "Bayesian reasoning treats belief as a probability you update proportionally to evidence strength, not a switch you flip — the size of the update depends on how surprising the evidence is given what you already believed. Decision theory adds: choose the action with the best expected value across possible states of the world, weighted by probability, not the action that feels safest. This is the direct bridge from philosophy into quant finance — every options price and every risk model is applied decision theory under uncertainty.",
        thinkers: ["Thomas Bayes", "Frank Ramsey", "Daniel Kahneman"],
        reading: [
          { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", note: "Where rational decision theory meets how humans actually reason — and fail to." },
          { title: "The Signal and the Noise", author: "Nate Silver", note: "Bayesian updating made concrete through forecasting examples." }
        ]
      }
    ],
    cards: [
      { q: "What is a Gettier case and why does it break the \"justified true belief\" definition of knowledge?", a: "A Gettier case is a scenario where someone has a justified true belief that is only true by luck or coincidence, not because the justification actually tracked the truth — e.g. believing your watch shows the right time because it happens to be stopped at the correct hour. It shows justified + true + believed isn't sufficient for knowledge." },
      { q: "What's the difference between a valid argument and a sound argument?", a: "Valid means the conclusion logically follows from the premises regardless of whether the premises are true. Sound means the argument is valid AND all premises are actually true." },
      { q: "What is the strawman fallacy?", a: "Misrepresenting someone's argument in a weaker, more extreme form, then attacking that version instead of their actual position." },
      { q: "What is affirming the consequent, and why is it invalid?", a: "Reasoning \"if P then Q; Q is true; therefore P is true.\" It's invalid because Q could have been caused by something other than P." },
      { q: "What's the core difference between consequentialism and deontology?", a: "Consequentialism judges an action solely by its outcomes (maximise good results). Deontology judges an action by whether it follows a universalisable moral rule, regardless of outcome." },
      { q: "What is Kant's categorical imperative, in one formulation?", a: "Act only according to a rule that you could will to become a universal law — i.e., ask whether it would still work if everyone did it." },
      { q: "What is the trolley problem designed to expose?", a: "The gap between consequentialist intuitions (pull the lever, save five, kill one) and deontological intuitions (don't actively kill, even to save more) — most people's judgments flip depending on how \"active\" the killing feels." },
      { q: "What is Aristotle's doctrine of the mean?", a: "Each virtue is a mid-point between two vices — one of excess, one of deficiency. Courage, for example, sits between recklessness (excess) and cowardice (deficiency)." },
      { q: "What is Popper's falsifiability criterion?", a: "A theory is scientific only if it makes predictions that could, in principle, be shown false by observation. Theories that can't fail any test aren't doing scientific work, however true they sound." },
      { q: "How does Kuhn's account of scientific progress differ from Popper's?", a: "Popper sees science advancing continuously through falsification. Kuhn argues science mostly does incremental \"normal science\" inside a paradigm, then undergoes sudden, discontinuous paradigm shifts when anomalies pile up too high to ignore." },
      { q: "What is a Kuhnian paradigm shift?", a: "A wholesale replacement of the dominant theoretical framework in a field, not a gradual correction — e.g. Newtonian to relativistic physics — after which even old data gets reinterpreted." },
      { q: "What is Hobbes's argument for why people accept an absolute sovereign?", a: "Without government, humans exist in a \"state of nature\" that is a war of all against all — life is \"solitary, poor, nasty, brutish, and short.\" Rational people trade some freedom for an absolute sovereign's protection because anything is better than that chaos." },
      { q: "How does Locke's view of the social contract differ from Hobbes's?", a: "Locke holds government legitimacy is conditional on protecting pre-existing natural rights (life, liberty, property); if it fails, the people can withdraw consent and replace it. Hobbes's sovereign, once granted power, is not revocable in the same way." },
      { q: "What is Rawls's \"veil of ignorance\"?", a: "A thought experiment: design society's rules without knowing what position (rich/poor, talented/not, majority/minority) you'll occupy in it. This forces rules to be fair to the worst-off, since you might end up there." },
      { q: "What is the difference between hard determinism and compatibilism?", a: "Hard determinism says causation rules out free will entirely. Compatibilism redefines free will as acting on your own reasons without external coercion — compatible with a deterministic universe, because \"free\" was never about escaping causation in the first place." },
      { q: "In Bayesian reasoning, what determines how much you should update a belief after new evidence?", a: "The strength of the evidence relative to your prior — specifically, how much more likely that evidence is under your hypothesis than under the alternative (the likelihood ratio)." },
      { q: "What is expected value, and why does decision theory recommend maximising it?", a: "Expected value is the probability-weighted average of all possible outcomes of a choice. Decision theory recommends maximising it because, over repeated decisions under uncertainty, it's the criterion that performs best on average." },
      { q: "What is the base rate fallacy?", a: "Ignoring the underlying prior probability (base rate) of an event when judging how likely a specific instance is — e.g. overestimating disease probability after a positive test without accounting for how rare the disease is." },
      { q: "What's the difference between necessary and sufficient conditions?", a: "A necessary condition must be true for something to happen but doesn't guarantee it. A sufficient condition guarantees the outcome on its own but isn't the only way to get there." },
      { q: "What is an ad hominem fallacy?", a: "Attacking the person making an argument (their character, motives, background) instead of addressing the argument's actual content." },
      { q: "What did Hume argue about induction?", a: "That we can never logically justify inferring future patterns from past observations — the fact that the sun has risen every day doesn't logically guarantee it will tomorrow; we just assume nature stays uniform." },
      { q: "What is the is-ought problem (Hume's guillotine)?", a: "You cannot logically derive a normative claim (\"ought\") purely from descriptive facts (\"is\") — moving from \"this is how things are\" to \"this is how things should be\" requires an extra, unstated value premise." },
      { q: "What is virtue ethics' main criticism of both consequentialism and deontology?", a: "That both reduce ethics to a decision procedure or algorithm, when moral life is really about character and practical wisdom (phronesis) that can't be fully captured by any rule or calculation." },
      { q: "What is the difference between a Type I and Type II error in a decision-theoretic / hypothesis-testing sense?", a: "Type I is a false positive — rejecting a true null hypothesis (believing an effect exists when it doesn't). Type II is a false negative — failing to detect a real effect." },
      { q: "Why is compatibilism the majority position among professional philosophers on free will?", a: "Because it preserves moral responsibility and the ordinary meaning of \"free choice\" (acting on your own uncoerced reasons) without requiring an implausible break from physical causation." }
    ]
  },

  economics: {
    questions: [
      "Why do incentives explain almost everything people actually do, regardless of what they say?",
      "What is GDP actually measuring, and what does it hide?",
      "Can markets be beaten, and if so, by whom and how?",
      "Why does free trade make both sides richer even when one side is better at everything?",
      "Why do humans make predictably irrational financial decisions, and can you exploit that?"
    ],
    units: [
      {
        id: "eco1",
        title: "Microeconomics: incentives and marginalism",
        question: "Why do incentives explain almost everything people actually do, regardless of what they say?",
        core: "People and firms respond to marginal incentives, not averages or intentions — decisions are made at the margin (should I do one more unit) not in aggregate. \"People respond to incentives\" sounds trivial until you realise most bad policy design ignores it completely (rent controls reduce housing supply, subsidies get captured, taxes shift behaviour). If you want to predict what an agent will actually do, ignore their stated goals and look at what they're incentivised to do.",
        thinkers: ["Adam Smith", "Alfred Marshall", "Steven Levitt"],
        reading: [
          { title: "The Wealth of Nations", author: "Adam Smith", note: "The \"invisible hand\" and division of labour, from the source." },
          { title: "Freakonomics", author: "Steven Levitt & Stephen Dubner", note: "Incentive analysis applied to everyday, non-obvious situations." }
        ]
      },
      {
        id: "eco2",
        title: "Elasticity and price mechanisms",
        question: "Why do some price changes barely move demand while others crash it?",
        core: "Elasticity measures how responsive quantity demanded/supplied is to a price change — necessities (insulin) are inelastic, luxuries and substitutable goods are elastic. This single number explains why taxing cigarettes barely reduces smoking short-term but taxing a specific brand of soda tanks its sales (close substitutes exist). Elasticity is also why firms with market power price-discriminate: charge inelastic customers more.",
        thinkers: ["Alfred Marshall"],
        reading: [
          { title: "Principles of Economics", author: "Alfred Marshall", note: "The original formal treatment of supply, demand, and elasticity." }
        ]
      },
      {
        id: "eco3",
        title: "Macroeconomics: GDP, inflation, unemployment",
        question: "What is GDP actually measuring, and what does it hide?",
        core: "GDP measures the total market value of final goods and services produced — it's a flow, not a stock, and it says nothing about distribution, unpaid work, or wellbeing. Inflation (general price level rising) erodes real purchasing power even if nominal wages rise; unemployment isn't one number but a mix of frictional, structural, and cyclical types with very different policy fixes. The macro numbers you see on the news are proxies, not the thing itself — always ask what's excluded.",
        thinkers: ["Simon Kuznets", "John Maynard Keynes"],
        reading: [
          { title: "The General Theory of Employment, Interest and Money", author: "John Maynard Keynes", note: "The foundational text for modern macro and demand-side policy." }
        ]
      },
      {
        id: "eco4",
        title: "Central banks and monetary policy",
        question: "How does an interest rate decision in one building move an entire economy?",
        core: "Central banks control short-term interest rates and the money supply to target inflation and (often) employment — raising rates cools borrowing/spending/investment, cutting rates does the opposite. Quantitative easing (buying bonds to push money into the system) became the main tool once rates hit zero in 2008 and 2020. Understanding the transmission mechanism (rate change to borrowing cost to spending to inflation, with long lags) is essential for reading any market move tied to a Fed or Bank of England decision.",
        thinkers: ["Milton Friedman", "Ben Bernanke"],
        reading: [
          { title: "A Monetary History of the United States", author: "Milton Friedman & Anna Schwartz", note: "The case that monetary policy, not just fiscal policy, drives major recessions." }
        ]
      },
      {
        id: "eco5",
        title: "Markets, finance, and risk (quant-relevant)",
        question: "Can markets be beaten, and if so, by whom and how?",
        core: "The Efficient Market Hypothesis says asset prices already reflect all available information, so consistently beating the market via public information is near-impossible — weak, semi-strong, and strong forms differ in what \"all information\" includes. Risk and return are linked: higher expected return requires bearing more systematic (undiversifiable) risk, priced via models like CAPM. An option is the right, not obligation, to buy (call) or sell (put) an asset at a set price by a set date — its value comes from volatility, time to expiry, and the underlying price relative to the strike, formalised by Black-Scholes.",
        thinkers: ["Eugene Fama", "Harry Markowitz", "Fischer Black", "Myron Scholes"],
        reading: [
          { title: "A Random Walk Down Wall Street", author: "Burton Malkiel", note: "The most accessible case for market efficiency and index investing." },
          { title: "Options, Futures, and Other Derivatives", author: "John Hull", note: "The standard quant-finance textbook — start skimming this early." }
        ]
      },
      {
        id: "eco6",
        title: "Trade and comparative advantage",
        question: "Why does free trade make both sides richer even when one side is better at everything?",
        core: "Comparative advantage says a country should specialise in whatever it produces at the lowest opportunity cost relative to its own alternatives, not whatever it's absolutely best at — even a country worse at producing everything gains from trading, because specialising frees up resources on both sides. This is one of the few genuinely counterintuitive, provably correct results in economics, and it's the strongest argument against reflexive protectionism (though it says nothing about distributional losers, which is where the real political fights happen).",
        thinkers: ["David Ricardo", "Paul Krugman"],
        reading: [
          { title: "On the Principles of Political Economy and Taxation", author: "David Ricardo", note: "The original proof of comparative advantage." }
        ]
      },
      {
        id: "eco7",
        title: "Behavioural economics",
        question: "Why do humans make predictably irrational financial decisions, and can you exploit that?",
        core: "Classical economics assumes rational utility-maximising agents; behavioural economics shows humans systematically deviate in predictable ways — loss aversion (losses hurt roughly twice as much as equivalent gains feel good), anchoring, overconfidence, and framing effects. Prospect theory replaced expected utility as the more accurate descriptive model of how people actually evaluate risky choices. This matters for quant finance directly: market bubbles and crashes are behavioural phenomena that pure efficient-market theory struggles to explain.",
        thinkers: ["Daniel Kahneman", "Amos Tversky", "Richard Thaler"],
        reading: [
          { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", note: "System 1 / System 2 and the core biases, from the researcher who won the Nobel for this." },
          { title: "Misbehaving", author: "Richard Thaler", note: "How behavioural econ fought its way into the mainstream, told as a personal history." }
        ]
      },
      {
        id: "eco8",
        title: "Economic history: Industrial Revolution to 2008",
        question: "What actually changed when economies industrialised, and what broke in 2008?",
        core: "The Industrial Revolution (Britain, ~1760-1840) was the first sustained break from the Malthusian trap — output per person grew faster than population for the first time in history, driven by coal, steam power, and institutional change (property rights, capital markets). The 2008 financial crisis was a debt-fuelled housing bubble amplified by mortgage securitisation (bundling risky loans into products rated as safe) and excessive leverage in banks — when housing prices fell, the whole interconnected system of derivatives built on top collapsed simultaneously. Both are essential case studies for understanding how growth and systemic risk actually work, not just the theory.",
        thinkers: ["Robert Allen", "Ben Bernanke", "Michael Lewis"],
        reading: [
          { title: "The Ascent of Money", author: "Niall Ferguson", note: "Sweeping, readable history of finance connecting industrialisation to modern crises." },
          { title: "The Big Short", author: "Michael Lewis", note: "The 2008 crisis through the traders who saw it coming — makes securitisation intuitive." }
        ]
      }
    ],
    cards: [
      { q: "What does it mean to think \"at the margin\" in economics?", a: "Evaluating decisions by the effect of one additional unit (marginal cost/benefit), not by totals or averages — e.g. deciding whether to study one more hour based on that hour's specific payoff, not your overall grade." },
      { q: "What is price elasticity of demand?", a: "The percentage change in quantity demanded divided by the percentage change in price — it measures how sensitive demand is to price changes. Elastic demand (>1) means quantity is highly responsive; inelastic (<1) means it barely moves." },
      { q: "Why do firms with market power price-discriminate?", a: "Because different customer segments have different price elasticities — charging inelastic (less price-sensitive) customers more and elastic customers less extracts more total revenue than a single uniform price." },
      { q: "What does GDP measure, and what are its two main blind spots?", a: "GDP is the total market value of final goods and services produced in a period. It excludes unpaid work (e.g. childcare) and says nothing about how income is distributed or overall wellbeing." },
      { q: "What are the three types of unemployment?", a: "Frictional (temporary, between jobs), structural (skills/location mismatch with available jobs), and cyclical (caused by a downturn in the business cycle)." },
      { q: "How does a central bank raising interest rates reduce inflation?", a: "Higher rates raise the cost of borrowing, which reduces consumer spending and business investment, which reduces aggregate demand and eases upward pressure on prices — with a lag of several months to years." },
      { q: "What is quantitative easing?", a: "A central bank buying financial assets (usually government bonds) to inject money into the economy and lower long-term interest rates, typically used when short-term rates are already near zero." },
      { q: "What does the Efficient Market Hypothesis claim?", a: "That asset prices fully reflect all available information, so it's extremely difficult to consistently outperform the market using that same information — implying stock prices follow something close to a random walk." },
      { q: "What's the difference between weak, semi-strong, and strong forms of EMH?", a: "Weak form: prices reflect all past price data (technical analysis is useless). Semi-strong: prices reflect all public information (fundamental analysis is useless). Strong form: prices reflect all information including insider/private information." },
      { q: "What is a call option and what is a put option?", a: "A call option gives the right (not obligation) to buy an asset at a set strike price by a set date. A put option gives the right to sell at a set strike price by a set date." },
      { q: "What three main factors drive an option's value?", a: "The underlying asset's price relative to the strike price, the volatility of the underlying, and the time remaining until expiry." },
      { q: "What is comparative advantage and why does it hold even when one country is worse at everything?", a: "Comparative advantage is producing a good at a lower opportunity cost than another party, relative to your own alternatives. Even a country that is absolutely worse at producing everything still gains from specialising in whatever it's relatively least bad at, because trade frees up resources for both sides to consume more than either could alone." },
      { q: "What's the difference between absolute advantage and comparative advantage?", a: "Absolute advantage is producing more output per unit of input than a rival. Comparative advantage is having a lower opportunity cost — a country can lack absolute advantage in everything and still have comparative advantage in something." },
      { q: "What is loss aversion?", a: "The tendency for losses to feel roughly twice as psychologically painful as equivalent gains feel pleasurable — a core finding of prospect theory that violates standard expected utility theory." },
      { q: "What is prospect theory and how does it differ from expected utility theory?", a: "Prospect theory (Kahneman & Tversky) describes how people actually evaluate risky choices — using reference points, loss aversion, and probability weighting — rather than the rational expected-value maximisation assumed by expected utility theory." },
      { q: "What is anchoring bias?", a: "The tendency to rely too heavily on the first piece of information encountered (the \"anchor\") when making subsequent judgments, even when that number is arbitrary or irrelevant." },
      { q: "What caused the 2008 financial crisis, in brief?", a: "A US housing bubble fuelled by risky subprime mortgages, which were bundled into mortgage-backed securities rated as safe and sold widely; when house prices fell and defaults rose, losses cascaded through a highly leveraged, interconnected banking system." },
      { q: "What is mortgage securitisation?", a: "Bundling many individual mortgage loans into a single tradeable financial product (a mortgage-backed security) whose payments come from the underlying borrowers' repayments — it spreads risk but can obscure the true quality of the underlying loans." },
      { q: "What made the Industrial Revolution a break from the Malthusian trap?", a: "For the first time in history, output per person grew sustainably faster than population growth, driven by coal-powered mechanisation, factory production, and institutional changes like secure property rights and capital markets." },
      { q: "What is CAPM (Capital Asset Pricing Model) used for?", a: "It estimates an asset's expected return based on its systematic risk (beta) relative to the overall market, showing that higher expected return requires bearing more undiversifiable risk." },
      { q: "What is the difference between systematic and unsystematic risk?", a: "Systematic risk affects the whole market (e.g. recessions, interest rate changes) and can't be diversified away. Unsystematic risk is specific to one company or sector and can be reduced through diversification." },
      { q: "What is the invisible hand, per Adam Smith?", a: "The idea that individuals pursuing their own self-interest in a competitive market, without intending to, tend to produce socially beneficial outcomes — resources get allocated efficiently without central coordination." },
      { q: "Why does a subsidy sometimes fail to help its intended target?", a: "Because incentives shift along the whole supply chain — sellers may raise prices to capture part of the subsidy, or the subsidy changes behaviour (e.g. overproduction) in ways that offset the intended benefit." },
      { q: "What is stagflation and why did it challenge classical Keynesian economics?", a: "Stagflation is simultaneous high inflation and high unemployment/stagnant growth (as in the 1970s), which classical Keynesian models said shouldn't happen together — it helped popularise monetarist and supply-side alternatives." },
      { q: "What is the difference between nominal and real values in economics?", a: "Nominal values are measured in current prices, unadjusted for inflation. Real values are adjusted for inflation, so they reflect actual purchasing power or quantity change over time." }
    ]
  },

  politics: {
    questions: [
      "How does a country with no single written constitution avoid collapsing into chaos?",
      "What actually stops a US president or a UK prime minister from just doing whatever they want?",
      "Why do states go to war even when cooperation would leave everyone richer?",
      "What's the real difference between left and right beyond the slogans?",
      "How do voting systems quietly determine what kind of politics a country gets?"
    ],
    units: [
      {
        id: "pol1",
        title: "The UK system: Westminster and the unwritten constitution",
        question: "How does a country with no single written constitution avoid collapsing into chaos?",
        core: "The UK constitution is uncodified — it's built from statutes, common law, convention, and precedent rather than one document, which makes it flexible but dependent on norms being honoured rather than enforced. Parliamentary sovereignty means Parliament can, in principle, make or unmake any law, and no Parliament can bind its successor — the fusion of executive and legislature (the PM sits in and depends on Parliament) is the sharpest structural contrast with the US. This works only because unwritten conventions carry real force; when a PM breaks one (prorogation in 2019), the system strains visibly.",
        thinkers: ["A.V. Dicey", "Peter Hennessy", "Walter Bagehot"],
        reading: [
          { title: "The Hidden Wiring: Unearthing the British Constitution", author: "Peter Hennessy", note: "The best account of how much of the UK constitution runs on unwritten convention, not law." },
          { title: "The English Constitution", author: "Walter Bagehot", note: "The classic 19th-century account of the \"dignified\" vs \"efficient\" parts of British government." }
        ]
      },
      {
        id: "pol2",
        title: "The US system: separation of powers and checks and balances",
        question: "What actually stops a US president or a UK prime minister from just doing whatever they want?",
        core: "The US Constitution deliberately splits power across three co-equal branches — legislative (Congress), executive (President), judicial (Supreme Court) — each with tools to check the others (veto, judicial review, impeachment, confirmation power). This is the opposite design philosophy from Westminster fusion: the US trades governing speed for structural resistance to any one branch dominating. In practice gridlock is a feature, not a bug, of the framers' design — it was built to be hard to move fast.",
        thinkers: ["James Madison", "Alexander Hamilton", "Montesquieu"],
        reading: [
          { title: "The Federalist Papers", author: "Alexander Hamilton, James Madison, John Jay", note: "The original argument for the US constitutional design, especially Federalist No. 51 on checks and balances." }
        ]
      },
      {
        id: "pol3",
        title: "Political ideologies",
        question: "What's the real difference between left and right beyond the slogans?",
        core: "The clearest single-axis version: attitudes to the role of the state in redistributing resources and regulating markets (left favours more, right favours less), but this collapses fast once you add a second axis — social/cultural liberalism vs authoritarianism, which cuts across the economic one. Liberalism (classical) prioritises individual liberty and limited state power; conservatism prioritises tradition, institutions, and gradual change over abstract reform; socialism prioritises collective ownership/control of production. Nearly all real political disagreement is a fight over which axis matters most in a given debate, not a clean single spectrum.",
        thinkers: ["Edmund Burke", "John Stuart Mill", "Karl Marx"],
        reading: [
          { title: "Reflections on the Revolution in France", author: "Edmund Burke", note: "The founding text of modern conservatism, written as a live reaction against the French Revolution." },
          { title: "On Liberty", author: "John Stuart Mill", note: "The classic liberal case for individual freedom and its limits (the harm principle)." }
        ]
      },
      {
        id: "pol4",
        title: "International relations: realism vs liberalism",
        question: "Why do states go to war even when cooperation would leave everyone richer?",
        core: "Realism says the international system is anarchic (no world government to enforce agreements), so states must prioritise survival and relative power over cooperation, because trust is unenforceable and betrayal can be fatal — this is why states keep militarising even when everyone would be better off disarming. Liberalism (in IR) counters that institutions, trade interdependence, and democratic norms can build enough trust and shared interest to escape that trap, at least partially. The realist frame explains why security dilemmas and arms races recur; the liberal frame explains why the EU and NATO exist at all.",
        thinkers: ["Thucydides", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
        reading: [
          { title: "The Twenty Years' Crisis", author: "E.H. Carr", note: "A founding realist critique of interwar liberal idealism, still sharp today." },
          { title: "History of the Peloponnesian War", author: "Thucydides", note: "The original realist text — \"the strong do what they can and the weak suffer what they must.\"" }
        ]
      },
      {
        id: "pol5",
        title: "Game theory of politics",
        question: "Why can rational actors end up in outcomes that make everyone worse off?",
        core: "The security dilemma and arms races are prisoner's dilemmas at the state level: mutual disarmament is the best joint outcome, but each side's dominant strategy is to arm regardless of what the other does, so both end up worse off than they could be. Voting systems have their own game-theoretic pathologies — Arrow's impossibility theorem proves no ranked voting system can satisfy a small set of obviously fair conditions simultaneously, which is why every electoral system has some built-in distortion. Coalition politics is repeated-game bargaining, where short-term defection (breaking a coalition promise) trades off against long-term reputation cost.",
        thinkers: ["John von Neumann", "Kenneth Arrow", "Thomas Schelling"],
        reading: [
          { title: "The Strategy of Conflict", author: "Thomas Schelling", note: "Game theory applied directly to deterrence, bargaining, and international conflict." }
        ]
      },
      {
        id: "pol6",
        title: "Political economy",
        question: "How do voting systems and institutions shape what kind of economy a country ends up with?",
        core: "Political economy studies how political institutions and economic outcomes shape each other — property rights enforcement, electoral incentives, and lobbying all determine what policies actually get made, not just what's economically \"optimal\" on paper. First-past-the-post systems push toward two dominant parties and stable single-party government (Duverger's Law); proportional representation produces more parties and coalition bargaining. Extractive institutions (concentrated power, weak property rights) reliably produce worse long-run growth than inclusive ones — this is one of the best-evidenced claims linking political structure to economic outcomes.",
        thinkers: ["Daron Acemoglu", "James Robinson", "Mancur Olson"],
        reading: [
          { title: "Why Nations Fail", author: "Daron Acemoglu & James Robinson", note: "The core argument that institutions, not geography or culture, explain long-run national prosperity." }
        ]
      },
      {
        id: "pol7",
        title: "Voting systems and representation",
        question: "How do voting systems quietly determine what kind of politics a country gets?",
        core: "First-past-the-post (UK, plurality in single-member districts) rewards concentrated regional support and punishes smaller parties whose vote is spread thin — it manufactures majorities that don't match national vote share. Proportional systems allocate seats closer to vote share but tend to produce coalition governments and give small parties outsized bargaining power. Neither is \"correct\" — Arrow's theorem guarantees every system involves some trade-off between proportionality, stability, and simplicity.",
        thinkers: ["Maurice Duverger", "Kenneth Arrow"],
        reading: [
          { title: "The Hidden Wiring: Unearthing the British Constitution", author: "Peter Hennessy", note: "Also covers how the UK's electoral and constitutional arrangements interact in practice." }
        ]
      }
    ],
    cards: [
      { q: "What does it mean that the UK constitution is \"uncodified\"?", a: "There is no single written document called \"the constitution\" — it's built from Acts of Parliament, common law, court judgments, and unwritten conventions, making it flexible but dependent on norms being respected rather than legally fixed." },
      { q: "What is parliamentary sovereignty?", a: "The principle that the UK Parliament can make or unmake any law, and no Parliament can bind a future Parliament — it is the supreme legal authority, with no higher constitutional court able to strike down its Acts." },
      { q: "How does the fusion of powers in the UK differ from the US separation of powers?", a: "In the UK, the executive (PM and cabinet) sits inside and depends on the legislature (Parliament) for its authority. In the US, the executive (President) is elected separately from Congress and is constitutionally independent of it." },
      { q: "What is judicial review in the US constitutional sense?", a: "The power of courts, especially the Supreme Court, to strike down laws or executive actions that are found unconstitutional — established by Marbury v. Madison (1803), not explicitly written into the original Constitution." },
      { q: "What does Federalist No. 51 argue?", a: "That ambition must be made to counteract ambition — by giving each branch of government the constitutional means and incentive to check the others, no single branch can accumulate unchecked power." },
      { q: "What is the two-axis model of political ideology?", a: "One axis for economic policy (state intervention vs free market), a second axis for social/cultural attitudes (liberal vs authoritarian) — together they explain why, e.g., someone can be economically left-wing but socially conservative." },
      { q: "What is Burke's core argument against radical, abstract political reform?", a: "That societies are complex accumulated systems of tradition and precedent that shouldn't be redesigned from first principles by any one generation — gradual, cautious reform preserves what works better than revolutionary rebuilding." },
      { q: "What is Mill's harm principle?", a: "The state (or society) is only justified in restricting an individual's liberty to prevent harm to others — not to protect the individual from themselves or to enforce moral conformity." },
      { q: "What does realism in international relations assume about the international system?", a: "That it is anarchic — there is no world government to enforce agreements between states — so states must prioritise their own security and relative power because cooperation cannot be reliably guaranteed." },
      { q: "What is the security dilemma?", a: "When one state increases its military capability for defensive reasons, other states perceive it as threatening and arm in response, leaving everyone less secure despite each state acting rationally in its own interest." },
      { q: "How does liberal IR theory explain cooperation between states, contra realism?", a: "Through international institutions, economic interdependence (trade raises the cost of conflict), and shared democratic norms, which build enough trust and mutual interest to sustain cooperation despite anarchy." },
      { q: "What is Arrow's impossibility theorem?", a: "A proof that no ranked-choice voting system can simultaneously satisfy a small set of reasonable fairness criteria (e.g. no dictator, independence of irrelevant alternatives, unanimity) when there are three or more options — every system involves some trade-off or flaw." },
      { q: "What is Duverger's Law?", a: "First-past-the-post electoral systems tend to produce and sustain two dominant parties, because votes for smaller parties are structurally wasted in single-winner districts." },
      { q: "What's the difference between first-past-the-post and proportional representation?", a: "FPTP awards each seat to whoever gets the most votes in that constituency, often producing a governing majority that doesn't match national vote share. PR allocates seats roughly proportional to national or regional vote share, usually producing coalition governments." },
      { q: "What is a prisoner's dilemma, and why does it apply to arms races?", a: "A game where each player's individually rational choice (defect/arm) leads to a worse joint outcome than if both had cooperated (disarmed), because cooperation only pays off if you can trust the other side not to defect — which states at war footing can't verify." },
      { q: "According to Acemoglu and Robinson, what's the core difference between \"extractive\" and \"inclusive\" institutions?", a: "Extractive institutions concentrate political and economic power in a narrow elite and weaken property rights/incentives for the majority. Inclusive institutions broadly distribute power and secure property rights, which sustains long-run investment and growth." },
      { q: "What is the difference between hard power and soft power in international relations?", a: "Hard power is coercive influence through military or economic force. Soft power is influence through attraction and persuasion — culture, values, diplomacy — getting others to want what you want without coercion (a term coined by Joseph Nye)." },
      { q: "What was significant about the 2019 UK prorogation controversy constitutionally?", a: "It tested whether an unwritten convention (that prorogation isn't used to evade parliamentary scrutiny) could be enforced — the Supreme Court ruled the prorogation unlawful, showing courts can still constrain executive action even without a codified constitution." },
      { q: "What is the difference between a unitary and a federal state?", a: "In a unitary state, ultimate authority rests with the central government, which may delegate power but can revoke it (the UK, despite devolution). In a federal state, power is constitutionally divided between central and regional governments, and neither can unilaterally strip the other's authority (the US)." },
      { q: "What is collective action / the free-rider problem in political economy?", a: "Individuals or states benefit from a public good (defence, clean environment, disarmament) whether or not they contribute to it, so rational self-interest leads to under-provision unless coordination is enforced." },
      { q: "What does \"the strong do what they can and the weak suffer what they must\" (Thucydides) illustrate?", a: "The realist claim that in the absence of enforceable rules between states, power determines outcomes, not moral appeals — a foundational quote for realist IR theory." },
      { q: "What is the difference between positive and negative liberty (Isaiah Berlin's distinction)?", a: "Negative liberty is freedom from external interference or coercion. Positive liberty is the capacity or resources to actually act on your own goals — the distinction underlies much of the left-right disagreement about what \"freedom\" requires the state to do." },
      { q: "What is a coalition government and why does bargaining power there not always match seat count?", a: "A government formed by two or more parties combining seats to reach a majority. A small party can hold outsized bargaining power if it's a necessary partner to reach that majority (a \"kingmaker\"), regardless of how few seats it holds." },
      { q: "What is the core claim of political realism about human nature that underlies IR realism?", a: "That states, like individuals, are fundamentally self-interested and power-seeking, so international politics should be analysed as it is (power struggles) rather than as it ought to be (cooperative idealism)." },
      { q: "What is devolution in the UK context?", a: "The transfer of certain powers from the central UK Parliament to regional bodies (Scottish Parliament, Senedd, Northern Ireland Assembly) — but because the UK is unitary not federal, Westminster retains the legal authority to overrule or revoke devolved powers." }
    ]
  },

  history: {
    questions: [
      "Why do empires that look unstoppable at their peak collapse within a few generations?",
      "What did the Islamic Golden Age actually preserve and create, and why did it end?",
      "Why did the Industrial Revolution happen in Britain first, and not somewhere richer at the time?",
      "What actually made the 20th century's wars different from everything before them?",
      "What do individual leaders change versus what was going to happen anyway?"
    ],
    units: [
      {
        id: "his1",
        title: "Rise and fall of Rome",
        question: "Why do empires that look unstoppable at their peak collapse within a few generations?",
        core: "Rome's rise was built on relentless institutional adaptability (absorbing conquered peoples as citizens, not just subjects) and military-logistical superiority (roads, standing legions), not just luck. Its fall in the West (476 CE) was never one cause — overextension, currency debasement, political instability (short emperor tenures, civil wars), and external pressure from migrating peoples compounded over centuries, not decades. The lesson that generalises: large systems rarely die from one blow, they die from accumulated internal fragility that a final external shock merely exposes.",
        thinkers: ["Julius Caesar", "Augustus", "Edward Gibbon"],
        reading: [
          { title: "The History of the Decline and Fall of the Roman Empire", author: "Edward Gibbon", note: "The canonical (if dated) account — read excerpts, not the whole thing." },
          { title: "SPQR: A History of Ancient Rome", author: "Mary Beard", note: "Modern, accessible, and more historiographically careful than Gibbon." }
        ]
      },
      {
        id: "his2",
        title: "The Ottoman Empire",
        question: "How did one empire bridge Europe, Asia, and the Islamic world for six centuries?",
        core: "The Ottomans built a remarkably durable multi-ethnic, multi-religious empire (1299-1922) through pragmatic administration — the millet system let religious communities self-govern under Ottoman sovereignty, reducing friction that destroyed less flexible empires. Their long decline (from roughly the 17th century) is a case study in what happens when institutional flexibility calcifies: military-technological stagnation relative to Europe, and rigid bureaucracy that outlived its usefulness. Understanding the Ottomans corrects the common Eurocentric framing of this period as purely a European story.",
        thinkers: ["Mehmed II", "Suleiman the Magnificent"],
        reading: [
          { title: "Osman's Dream", author: "Caroline Finkel", note: "The standard single-volume history of the Ottoman Empire, start to end." }
        ]
      },
      {
        id: "his3",
        title: "The Islamic Golden Age",
        question: "What did the Islamic Golden Age actually preserve and create, and why did it end?",
        core: "From roughly the 8th to 13th centuries, Baghdad's House of Wisdom and centres across the Islamic world translated, preserved, and substantially extended Greek, Persian, and Indian knowledge in mathematics, medicine, and astronomy — algebra (al-jabr) and algorithm both derive from this era, via al-Khwarizmi. This directly connects to your own study of Quranic Arabic: the same scholarly culture that produced tafsir (Quranic exegesis) and grammar also produced the translation movement that kept classical science alive for Europe to later rediscover. Its relative decline correlates with the 1258 Mongol sack of Baghdad and a shift of scholarly and trade centres westward and eastward, not any single cause.",
        thinkers: ["Al-Khwarizmi", "Ibn Sina (Avicenna)", "Ibn Rushd (Averroes)"],
        reading: [
          { title: "The House of Wisdom", author: "Jim Al-Khalili", note: "Accessible account of the translation movement and its scientific legacy, written by a physicist." },
          { title: "Lost Enlightenment", author: "S. Frederick Starr", note: "Focuses on Central Asia's contribution, often left out of the standard narrative." }
        ]
      },
      {
        id: "his4",
        title: "Industrial and scientific revolutions",
        question: "Why did the Industrial Revolution happen in Britain first, and not somewhere richer at the time?",
        core: "Britain had the specific combination that mattered: accessible coal, secure property rights and patent law that rewarded invention, a relatively mobile labour force freed from feudal ties, and colonial trade networks providing capital and raw materials. The Scientific Revolution (roughly 1543-1687, Copernicus to Newton) preceded and enabled it by establishing empirical, mathematical method as the standard for understanding nature — without that epistemic shift, steam power stays a curiosity, not a system. This is the best single case study for why \"who industrialises first\" is a question about institutions and specific resource endowments, not general wealth or population size.",
        thinkers: ["James Watt", "Isaac Newton", "Adam Smith"],
        reading: [
          { title: "The British Industrial Revolution in Global Perspective", author: "Robert Allen", note: "The leading economic-historical explanation for why Britain, specifically, industrialised first." }
        ]
      },
      {
        id: "his5",
        title: "The 20th century: world wars and Cold War",
        question: "What actually made the 20th century's wars different from everything before them?",
        core: "WWI was industrialised warfare colliding with 19th-century military doctrine — the result was unprecedented casualty scale from machine guns, artillery, and trench stalemate, triggered by an alliance system that turned a regional assassination into a continental catastrophe. WWII was shaped decisively by the punitive Versailles settlement, the Great Depression's political radicalisation, and Hitler's specific ideological project — it's the strongest case against \"wars just happen,\" because this one had identifiable, avoidable political causes. The Cold War (1947-1991) replaced direct war between great powers with proxy conflicts and mutually assured destruction — nuclear weapons didn't end great-power conflict, they changed its form entirely.",
        thinkers: ["Woodrow Wilson", "Winston Churchill", "George Kennan"],
        reading: [
          { title: "The Sleepwalkers", author: "Christopher Clark", note: "The best account of how WWI's alliance system turned a local crisis into total war." },
          { title: "The Cold War: A New History", author: "John Lewis Gaddis", note: "Concise, opinionated single-volume Cold War history from its leading historian." }
        ]
      },
      {
        id: "his6",
        title: "Strategic leaders as case studies",
        question: "What do individual leaders change versus what was going to happen anyway?",
        core: "Caesar exploited a structurally weakening Roman Republic (concentrated wealth, a professionalised army loyal to generals over the state) rather than single-handedly breaking a healthy system — he was an accelerant, not the sole cause. Bismarck is the clearest case of a leader who mattered decisively: his \"blood and iron\" realpolitik and precise use of controlled wars unified Germany on a timetable that wasn't inevitable. Churchill and Napoleon sit between these poles — both rode genuine historical necessity (existential war, revolutionary chaos) but each made contingent decisions (Churchill's 1940 refusal to negotiate, Napoleon's Russian invasion) that changed outcomes measurably. The generalisable skill: for any leader, separate what the situation forced from what their specific choices added.",
        thinkers: ["Julius Caesar", "Otto von Bismarck", "Napoleon Bonaparte", "Winston Churchill"],
        reading: [
          { title: "Bismarck: A Life", author: "Jonathan Steinberg", note: "Sharp on how much Bismarck's individual judgment, not just circumstance, shaped German unification." },
          { title: "The Storm of War", author: "Andrew Roberts", note: "Churchill and WWII decision-making told as strategic case study, not just narrative." }
        ]
      },
      {
        id: "his7",
        title: "History of capitalism",
        question: "How did capitalism go from Dutch merchant ventures to the system that shapes almost every decision today?",
        core: "Capitalism's key institutional innovations arrived in stages: double-entry bookkeeping and merchant banking in Renaissance Italy, joint-stock companies and public debt markets in 17th-century Netherlands and Britain (the Dutch East India Company is arguably the first modern corporation), then industrial-scale factory capital in 18th-19th century Britain. Each stage solved a specific problem — how to pool capital, spread risk, or scale production — and each created new instabilities (speculative bubbles from tulip mania to 2008 are a recurring structural feature, not an aberration). Understanding this as an evolving set of institutional solutions, not a fixed ideology, is the difference between a historian's and an ideologue's view of markets.",
        thinkers: ["Adam Smith", "Karl Marx", "Fernand Braudel"],
        reading: [
          { title: "The Ascent of Money", author: "Niall Ferguson", note: "Traces capitalism's institutional history from Renaissance banking to modern derivatives." },
          { title: "Capital in the Twenty-First Century", author: "Thomas Piketty", note: "The major modern data-driven account of capitalism's tendency toward inequality — read selectively, it's long." }
        ]
      }
    ],
    cards: [
      { q: "What are the main compounding causes historians give for Rome's fall in the West?", a: "Chronic overextension of the empire's borders, currency debasement causing inflation, political instability from rapid emperor turnover and civil wars, and sustained external pressure from migrating peoples — no single cause, but decades of accumulated fragility." },
      { q: "What was the millet system in the Ottoman Empire?", a: "A system allowing religious communities (Christian, Jewish, etc.) to govern their own internal affairs under Ottoman sovereignty, which reduced administrative friction across a vast multi-ethnic, multi-religious empire." },
      { q: "What was the House of Wisdom and why does it matter?", a: "A major intellectual centre in Abbasid Baghdad (8th-13th century) where scholars translated and extended Greek, Persian, and Indian texts in mathematics, medicine, and astronomy — it preserved classical knowledge that later fed into the European Renaissance." },
      { q: "What does the word \"algebra\" derive from, and who is credited with it?", a: "From \"al-jabr,\" part of the title of a 9th-century treatise by the mathematician al-Khwarizmi (whose name also gives us \"algorithm\") — a direct product of the Islamic Golden Age's mathematical scholarship." },
      { q: "What event is commonly cited as marking the end of the Islamic Golden Age's peak scholarly centre?", a: "The 1258 Mongol sack of Baghdad, which destroyed the House of Wisdom and much of the city's scholarly infrastructure — though decline was gradual and multi-causal, not solely due to this event." },
      { q: "What four factors are typically cited for why Britain industrialised first?", a: "Accessible coal reserves, secure property rights and patent law incentivising invention, a labour force freed from feudal constraints, and capital/raw materials from colonial trade networks." },
      { q: "How did the Scientific Revolution enable the Industrial Revolution?", a: "It established empirical observation and mathematical modelling as the standard method for understanding nature (Copernicus to Newton), which was the epistemic groundwork needed to systematically engineer and improve technologies like the steam engine." },
      { q: "What structural factor turned the 1914 assassination of Archduke Franz Ferdinand into a world war?", a: "The European alliance system — a web of mutual defence treaties meant to deter war instead guaranteed that a regional conflict triggered a chain reaction of mobilisations across the continent." },
      { q: "What three factors are usually cited as enabling Hitler's rise to power?", a: "The punitive terms of the Treaty of Versailles (economic and national humiliation), the political radicalisation caused by the Great Depression's mass unemployment, and Hitler's specific ideological programme and political skill in exploiting both." },
      { q: "What changed about great-power conflict during the Cold War compared to before?", a: "Direct war between the two superpowers (US and USSR) was replaced by proxy wars, ideological competition, and deterrence through mutually assured destruction (nuclear weapons) rather than direct confrontation." },
      { q: "What structural weaknesses in the Roman Republic did Julius Caesar exploit rather than create?", a: "Concentrated wealth inequality, a professionalised army whose loyalty had shifted from the state to individual generals, and a political system unable to manage the empire's expanded scale — Caesar accelerated an existing crisis rather than causing it alone." },
      { q: "What is Bismarck's \"blood and iron\" approach, and what did it achieve?", a: "Bismarck's realpolitik strategy of using carefully controlled, limited wars (against Denmark, Austria, France) rather than idealistic negotiation to unify the German states under Prussian leadership by 1871." },
      { q: "What contingent decision by Churchill in 1940 is often cited as historically decisive?", a: "His refusal to negotiate peace terms with Germany after the fall of France, when key cabinet members favoured exploring terms — a choice that kept Britain in the war rather than an inevitable outcome of the situation." },
      { q: "Why is the Dutch East India Company (VOC) considered the first modern corporation?", a: "It was the first company to issue tradeable shares to the public on a permanent basis, raising large amounts of capital from dispersed investors while spreading risk — the template for the joint-stock company." },
      { q: "What financial innovation, developed in Renaissance Italy, underlies modern accounting?", a: "Double-entry bookkeeping, developed by Italian merchant bankers, which records every transaction as both a debit and credit — enabling systematic tracking of profit, loss, and capital." },
      { q: "What is the common thread between tulip mania and the 2008 financial crisis, per financial historians?", a: "Both are speculative bubbles driven by leveraged buying, herd behaviour, and mispriced risk that eventually corrected sharply — evidence that speculative excess is a recurring structural feature of capitalism, not a one-off aberration." },
      { q: "What was Suleiman the Magnificent's reign considered the peak of, in Ottoman history?", a: "The Ottoman Empire's territorial extent, military power, administrative/legal reform, and cultural output — often treated as the empire's golden age (16th century)." },
      { q: "Why is Napoleon's invasion of Russia (1812) treated as a case of contingent leadership failure rather than inevitable defeat?", a: "The decision to invade with overextended supply lines deep into Russian territory during winter was a specific strategic choice, not a forced necessity — the catastrophic losses that followed reshaped the European balance of power for a generation." },
      { q: "What does \"opportunity cost\" mean when applied to why Britain, not another wealthy region, industrialised first?", a: "Other regions (e.g. Qing China) had comparable or greater wealth and population but lacked Britain's specific combination of accessible coal, institutional incentives for invention, and capital markets — general wealth wasn't sufficient without those specific enabling conditions." },
      { q: "What is the significance of Ibn Sina (Avicenna) in the Islamic Golden Age?", a: "His Canon of Medicine synthesised Greek, Islamic, and Persian medical knowledge into a systematic reference text that remained a standard medical textbook in both the Islamic world and Europe for centuries." },
      { q: "What is the Malthusian trap, and how does it relate to pre-industrial history?", a: "The theory that population growth tends to outpace food production improvements, keeping most of history's populations near subsistence level — the Industrial Revolution is significant precisely because it was the first sustained escape from this pattern." },
      { q: "What was the significance of the Congress of Vienna (1815) that Bismarck later operated within?", a: "It established a balance-of-power system among European great powers after Napoleon's defeat, aiming for stability through diplomatic equilibrium — the system Bismarck later exploited and reshaped through targeted wars to unify Germany." },
      { q: "How did the Treaty of Versailles' economic terms contribute to WWII?", a: "Heavy reparations and territorial losses imposed on Germany caused prolonged economic hardship and national resentment, which the Nazi party exploited politically, especially once compounded by the Great Depression." },
      { q: "What generalisable historical lesson does Rome's fall illustrate about large complex systems?", a: "Large systems rarely collapse from a single cause or event — they typically accumulate internal structural fragility over a long period, and a final external shock merely exposes weaknesses that were already present." }
    ]
  }
};

const CODING = {
  python: {
    lessons: [
      {
        n: 1,
        title: "Variables and Types",
        topics: ["int, float, str, bool", "variable assignment and naming", "type() and casting", "basic arithmetic operators"],
        exercise: "Build a simple compound interest calculator: take principal, annual rate, and years as variables, compute final value, print formatted output.",
        done: true
      },
      {
        n: 2,
        title: "Control Flow",
        topics: ["if/elif/else", "for loops and while loops", "range()", "break/continue", "comparison and boolean operators"],
        exercise: "Write a script that classifies daily stock returns into 'gain', 'loss', or 'flat' for a hardcoded list of prices, and counts how many days fall into each category.",
        done: false
      },
      {
        n: 3,
        title: "Data Structures",
        topics: ["lists and list methods", "tuples", "dictionaries", "sets", "indexing and slicing"],
        exercise: "Store a week of ticker prices in a dictionary keyed by date, then write code to find the max, min, and the date of each without using built-in max/min shortcuts first (then verify with them).",
        done: false
      },
      {
        n: 4,
        title: "Functions",
        topics: ["def and return", "default and keyword arguments", "scope (local vs global)", "docstrings", "*args and **kwargs"],
        exercise: "Write a reusable function `simple_return(prices: list) -> list` that computes day-over-day percentage returns from a list of prices, with a docstring and input validation for empty lists.",
        done: false
      },
      {
        n: 5,
        title: "String Handling and File I/O",
        topics: ["string methods and f-strings", "reading/writing text files", "reading CSV with the csv module", "basic exception handling (try/except)"],
        exercise: "Write a script that reads a CSV of daily stock prices from disk, parses each row safely (handling malformed rows with try/except), and writes a cleaned-up version back out.",
        done: false
      },
      {
        n: 6,
        title: "Object-Oriented Basics",
        topics: ["classes and __init__", "instance methods and attributes", "class vs instance variables", "basic inheritance"],
        exercise: "Build a `Portfolio` class that holds a dict of {ticker: shares}, with methods to add/remove a position and compute total value given a dict of current prices.",
        done: false
      },
      {
        n: 7,
        title: "Modules, Packages, and the Standard Library",
        topics: ["import styles", "useful stdlib modules (datetime, math, random, statistics)", "installing packages with pip", "virtual environments"],
        exercise: "Use `datetime` and `random` together to simulate 252 trading days of dates and generate a synthetic random-walk price series, saved to a list.",
        done: false
      },
      {
        n: 8,
        title: "NumPy Fundamentals",
        topics: ["ndarray creation and shape", "vectorised operations vs loops", "indexing/slicing/broadcasting", "np.random for simulation"],
        exercise: "Rewrite the Lesson 4 daily-returns function using NumPy vectorised operations instead of a Python loop, then benchmark the speed difference on 1 million simulated prices.",
        done: false
      },
      {
        n: 9,
        title: "Pandas for Financial Data",
        topics: ["Series and DataFrame basics", "reading CSV/Excel into a DataFrame", "filtering, groupby, and rolling windows", "handling missing data"],
        exercise: "Load a multi-column CSV of several tickers' daily prices into a DataFrame, compute each ticker's 20-day rolling volatility, and identify the most volatile ticker over the period.",
        done: false
      },
      {
        n: 10,
        title: "Matplotlib and Capstone Project",
        topics: ["line/bar/histogram plots", "subplots and labelling", "styling for readability", "putting it together: a small end-to-end analysis"],
        exercise: "Capstone: pull or load a year of daily prices for 3-5 tickers, compute returns and rolling volatility with pandas/NumPy, and produce a single matplotlib figure with subplots showing price history, return distribution, and a rolling volatility comparison across tickers.",
        done: false
      }
    ]
  },
  matlab: {
    note: "MATLAB syntax is close enough to Python/NumPy that the concepts transfer directly — the main shift is 1-indexing instead of 0-indexing, and MATLAB's native strength in matrix operations and built-in ODE solvers, which is exactly why chemical engineering courses lean on it for reactor and process modelling.",
    units: [
      {
        id: "mat1",
        title: "Syntax transfer from Python",
        core: "Variables, loops, and conditionals map almost directly from Python, with two key differences to internalise immediately: MATLAB arrays are 1-indexed, not 0-indexed, and every statement needs a semicolon to suppress console output. Cell arrays and structs replace Python's lists and dicts respectively, with slightly clunkier syntax (curly braces for cell contents, dot notation for struct fields)."
      },
      {
        id: "mat2",
        title: "Matrices and vectorisation",
        core: "MATLAB (MATrix LABoratory) was built around matrix operations from the ground up — operations like A*B, inv(A), and A\\b (solving linear systems) are first-class, not library add-ons like NumPy. Vectorise everything you can: a for-loop over array elements in MATLAB is drastically slower than the equivalent vectorised operation, exactly as with NumPy versus raw Python loops."
      },
      {
        id: "mat3",
        title: "Plotting and visualisation",
        core: "plot(), subplot(), and figure() cover most 2D needs directly, with surf() and mesh() for 3D — the syntax is more verbose than matplotlib but the defaults look publication-ready faster. Always label axes and add legends explicitly; MATLAB won't infer them the way pandas sometimes does."
      },
      {
        id: "mat4",
        title: "ODE solvers: ode45 and friends",
        core: "ode45 is the default workhorse for solving systems of ordinary differential equations numerically (adaptive-step Runge-Kutta) — you define a function returning derivatives, hand it a time span and initial conditions, and it returns the solution trajectory. This is the single most chemical-engineering-relevant MATLAB skill: reactor kinetics, mass/energy balances, and dynamic process models all reduce to systems of ODEs solved this way."
      },
      {
        id: "mat5",
        title: "Simulink basics",
        core: "Simulink is MATLAB's block-diagram environment for modelling dynamic systems visually instead of writing explicit code — you wire together blocks representing integrators, transfer functions, and control logic. It's heavily used in process control courses because it makes feedback loops (PID controllers regulating a reactor, for instance) visually traceable in a way that raw ODE code isn't.",
      },
      {
        id: "mat6",
        title: "Chemical engineering applications",
        core: "The core recurring pattern: set up mass/energy balance ODEs for a reactor or separation unit, solve with ode45, then sweep a parameter (feed rate, temperature) across a range and plot the resulting steady-state or dynamic behaviour. This combination — ODE solving plus vectorised parameter sweeps plus plotting — is exactly the skill set your process modelling coursework will demand, and it directly parallels the pandas/NumPy/matplotlib pipeline from the Python track."
      }
    ]
  },
  projects: [
    {
      title: "Financial data scraper and dashboard",
      why: "Directly demonstrates the full quant/data-science pipeline (data acquisition, cleaning, analysis, visualisation) with a live, checkable output — exactly what recruiters for quant/data roles look for in a portfolio project over a toy Kaggle notebook.",
      milestones: [
        "Pull historical price data for a basket of tickers via a free API (e.g. yfinance)",
        "Store and clean the data in pandas, handling missing days and corporate actions",
        "Compute rolling returns, volatility, and correlation matrix across the basket",
        "Build an interactive dashboard (Plotly Dash or Streamlit) showing price history, returns, and risk metrics",
        "Deploy it publicly (Streamlit Community Cloud) so it's a live link on your CV, not just a repo"
      ]
    },
    {
      title: "Process simulation tool",
      why: "Bridges chemical engineering coursework directly to programming skill — few chemical engineering students can actually code their own simulations, so a working reactor/process model in Python or MATLAB is a genuine differentiator on both engineering and quant applications.",
      milestones: [
        "Define mass and energy balance equations for a chosen unit operation (e.g. CSTR or batch reactor)",
        "Implement and solve the system as ODEs (SciPy's solve_ivp in Python, or ode45 in MATLAB)",
        "Add a parameter sweep to explore steady-state behaviour across feed rate/temperature ranges",
        "Visualise dynamic and steady-state results clearly, with proper units labelled throughout",
        "Write a clear README explaining the physical model and assumptions, not just the code"
      ]
    },
    {
      title: "Options pricing and backtesting engine",
      why: "The single highest-signal project for quant finance recruiting specifically — implementing Black-Scholes and a backtest from scratch proves you understand the maths, not just the API calls, and it's a natural talking point in interviews.",
      milestones: [
        "Implement Black-Scholes pricing for European call/put options from the closed-form formula",
        "Add Greeks calculation (delta, gamma, vega, theta) and verify against a known reference implementation",
        "Build a simple backtesting framework for a rules-based strategy (e.g. moving-average crossover) on historical data",
        "Compute performance metrics (Sharpe ratio, max drawdown, cumulative return) for the backtest",
        "Compare backtested strategy performance against a buy-and-hold benchmark and present the results clearly"
      ]
    }
  ],
  git: {
    units: [
      {
        id: "git1",
        title: "Git basics",
        core: "Git tracks changes as commits — snapshots of your project at a point in time, each with a message explaining what changed and why. The core daily loop is git add (stage changes), git commit (save a snapshot), git push (send to remote) — get comfortable with git status and git diff before anything else, since they're what you'll check constantly."
      },
      {
        id: "git2",
        title: "Branching and merging",
        core: "A branch is an independent line of development — create one (git checkout -b feature-name) to build or experiment without touching the working main branch, then merge it back once it's ready. Merge conflicts happen when two branches change the same lines differently; resist the urge to panic-resolve them, read both versions and decide deliberately which (or both) should survive."
      },
      {
        id: "git3",
        title: "GitHub as a portfolio",
        core: "For a student aiming at quant/data-science roles, GitHub is a second CV — recruiters and interviewers do check it, especially for projects with real commit history (not one giant initial commit) showing iterative work over time. Pin your 3-4 strongest repos on your profile, and make sure each has a working, runnable state on the default branch at all times.",
      },
      {
        id: "git4",
        title: "README and repo hygiene",
        core: "A good README states what the project does, how to run it (exact setup commands), and what it demonstrates — assume the reader will give it 30 seconds before deciding whether to look further. Keep a .gitignore for environment files and data dumps, use meaningful commit messages (\"add rolling volatility calc\" not \"update\"), and never commit API keys or credentials — use environment variables instead."
      }
    ]
  }
};
