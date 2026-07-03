// ===== STEM + LIFE DATA — maths roadmap, degree modules, formulation drills, life track =====

const MATH_ROADMAP = [
  {id:"m1", phase:"Phase 1 — ODE consolidation (review)", items:[
    {id:"m1a", t:"First-order ODEs: separable, linear, exact, integrating factors"},
    {id:"m1b", t:"Second & higher-order linear ODEs: characteristic equations, undetermined coefficients, variation of parameters"},
    {id:"m1c", t:"Systems of ODEs: eigenvalue method, phase portraits"}
  ], res:"Paul's Online Math Notes (workhorse) · MIT OCW 18.03 · 3Blue1Brown for intuition"},
  {id:"m2", phase:"Phase 2 — Series & transforms", items:[
    {id:"m2a", t:"Power series solutions, ordinary vs singular points"},
    {id:"m2b", t:"Laplace transforms: definition, table fluency, shifting theorems"},
    {id:"m2c", t:"Inverse Laplace: partial fractions under pressure"},
    {id:"m2d", t:"Transfer functions — the bridge to Process Control (your most quant-transferable module)"}
  ], res:"Paul's Notes · Schaum's Outlines for problem volume · Brian Douglas for transfer functions"},
  {id:"m3", phase:"Phase 3 — PDEs & Fourier", items:[
    {id:"m3a", t:"The three canonical PDEs: heat, wave, Laplace — know which physics gives which"},
    {id:"m3b", t:"Boundary value problems and separation of variables"},
    {id:"m3c", t:"Fourier series: computing coefficients, convergence, even/odd extensions"},
    {id:"m3d", t:"Fourier transform: definition, key pairs, relation to Laplace"}
  ], res:"MIT OCW 18.03 (Fourier) · Paul's Notes PDE section · 3Blue1Brown 'But what is a Fourier series?'"},
  {id:"m4", phase:"Phase 4 — Numerical methods", items:[
    {id:"m4a", t:"Root finding: bisection, Newton-Raphson, convergence rates"},
    {id:"m4b", t:"Numerical integration: trapezoid, Simpson's, error terms"},
    {id:"m4c", t:"ODE solvers: Euler, RK4, stiffness — then meet ode45 in MATLAB"},
    {id:"m4d", t:"Linear systems: Gaussian elimination, LU, iterative methods"}
  ], res:"Chapra, Numerical Methods for Engineers · Steve Brunton lectures"},
  {id:"m5", phase:"Phase 5 — Quant extensions (stretch)", items:[
    {id:"m5a", t:"Probability: distributions, expectation, variance, CLT"},
    {id:"m5b", t:"Linear algebra deepening: eigendecomposition, SVD, least squares"},
    {id:"m5c", t:"Basic stochastic processes: random walks, intro to Brownian motion"},
    {id:"m5d", t:"Constrained optimisation: Lagrange multipliers — the single most portable cognitive skill in your degree"}
  ], res:"3Blue1Brown linear algebra series · MIT OCW 18.06 · Brunton for SVD"}
];

// 2026/27 modules — from your official module table.
const YEAR2_MODULES = [
  {id:"y1", name:"Reaction, Equilibria and Thermodynamics", cr:20, note:"Heavy formulation content: setting up equilibrium and energy balance equations from scenarios. Your priority module given the formulation gap.", link:"m2"},
  {id:"y2", name:"Chemistry and Materials", cr:20, note:"Content-recall heavy. Feed key facts into the review deck as you go — spaced retrieval during term is your retention system.", link:null},
  {id:"y3", name:"Introduction to Transport Phenomena", cr:20, note:"Momentum, heat and mass transfer are one framework, not three subjects. Everything reduces to flux = -(coefficient) × gradient. Directly built on the heat equation from your PDE phase.", link:"m3"},
  {id:"y4", name:"Discover: Labs and Data Analysis", cr:20, note:"Your Python/pandas work pays off directly here. Write lab analysis in Python even when Excel would do — CV compound interest.", link:null},
  {id:"y5", name:"Modelling Concepts and Tools (MCT)", cr:20, note:"CAM's successor territory — this is where Year 1's undiagnosed weakness lives. Front-load effort in weeks 1-3; do not let it drift. MATLAB track feeds this directly.", link:"m4"},
  {id:"y6", name:"Process Design and Analysis", cr:20, note:"Flowsheets, mass balances, degrees-of-freedom analysis. Pure formulation practice — the drills below are built for this.", link:null}
];

const FINAL_YEAR = {
  core:[{name:"Design Project", cr:40},{name:"Advanced Reactors and Thermodynamics", cr:20},{name:"Multiphase Systems", cr:20}],
  optionalNote:"Select 40 credits. Strategic picks for quant/data-science signalling: Plant Optimisation (constrained optimisation) and Energy Economics (markets). Efficient Use of Energy pairs well with both.",
  optional:["Efficient Use of Energy","Energy Economics","Engineering of Food","Introduction to Healthcare Technologies","Processing for Formulation","Petrochemical Engineering","Plant Optimisation"]
};

// Formulation-gap drills: setup ONLY. Write the governing equations; do not solve.
const FORMULATION_DRILLS = [
  {id:"f1", cat:"Mass balance", q:"A mixing tank receives two streams: 40 kg/h of 10 wt% salt solution and 60 kg/h of 25 wt% salt solution. One stream leaves. Set up (only) the total and component mass balances for steady state.", hint:"Define the boundary first. Total: in = out. Component: track the salt separately.", a:"Total: 40 + 60 = ṁ_out → ṁ_out = 100 kg/h. Salt: 0.10(40) + 0.25(60) = x_out(100). Two equations, two unknowns (ṁ_out, x_out). The skill was choosing the envelope and the component to track."},
  {id:"f2", cat:"Mass balance", q:"A distillation column separates 100 mol/h of 40 mol% benzene / 60 mol% toluene into distillate (95 mol% benzene) and bottoms (5 mol% benzene). Set up the balances to find D and B.", hint:"Two unknowns need two independent equations: one total, one component.", a:"Total: 100 = D + B. Benzene: 0.40(100) = 0.95D + 0.05B. Setup complete — solving is trivial algebra, which was never your bottleneck."},
  {id:"f3", cat:"Energy balance", q:"Water at 20 °C enters a steam-heated exchanger at 2 kg/s and must leave at 80 °C. Saturated steam condenses at 120 °C with latent heat λ. Set up the energy balance for required steam flow ṁ_s.", hint:"Match the heat released by condensation to the sensible heat gained by water.", a:"Q = ṁ c_p ΔT = 2 × 4180 × (80−20) on the water side; Q = ṁ_s λ on the steam side. Equate: ṁ_s = 2 × 4180 × 60 / λ. Recognising the two sides and equating them IS the formulation."},
  {id:"f4", cat:"Energy balance", q:"A CSTR runs an exothermic reaction (ΔH_rxn < 0) at steady state with cooling jacket. Write the general energy balance structure and name every term for this system.", hint:"Accumulation = in − out + generation − removal. Steady state kills one term.", a:"0 = ṁc_p(T_in − T) + (−ΔH_rxn)rV − UA(T − T_c). Terms: sensible flow, reaction generation, jacket removal. Setting accumulation to zero and naming the three competing terms is the whole exam skill."},
  {id:"f5", cat:"Transport", q:"Heat conducts through a plane wall of thickness L, conductivity k, faces held at T1 and T2. Set up the governing ODE and boundary conditions from the general heat equation — don't jump to the known answer.", hint:"Start from ∂T/∂t = α∇²T. What vanishes and why?", a:"Steady (∂T/∂t = 0), 1-D (∂²/∂y² = ∂²/∂z² = 0) → d²T/dx² = 0, with T(0)=T1, T(L)=T2. The marks are for stating the simplifying assumptions, not for T(x) linear."},
  {id:"f6", cat:"Transport", q:"A spherical catalyst pellet consumes species A by first-order reaction while A diffuses in. Set up the steady-state species balance in spherical coordinates with boundary conditions.", hint:"Balance on a spherical shell: diffusion in − diffusion out − consumption = 0.", a:"D_A (1/r²) d/dr(r² dC/dr) = kC, with dC/dr = 0 at r = 0 (symmetry) and C = C_s at r = R (surface). Shell balance + symmetry BC is the formulation pattern for every pellet/fin/slab problem."},
  {id:"f7", cat:"Transport", q:"A hot sphere at T_0 is dropped into cool fluid. State the criterion for lumped-capacitance analysis, then set up the resulting ODE.", hint:"Compare internal conduction resistance to external convection resistance.", a:"Biot number Bi = hL_c/k < 0.1 → temperature uniform inside. Then ρVc dT/dt = −hA(T − T_∞). Choosing lumped vs distributed IS the setup decision the exam tests."},
  {id:"f8", cat:"Thermo/equilibria", q:"For the reaction N₂ + 3H₂ ⇌ 2NH₃ starting with 1 mol N₂ and 3 mol H₂, define extent of reaction ξ and express all mole numbers and mole fractions at equilibrium.", hint:"n_i = n_i0 + ν_i ξ. Watch total moles change.", a:"n_N2 = 1−ξ, n_H2 = 3−3ξ, n_NH3 = 2ξ, n_tot = 4−2ξ. Mole fractions divide by (4−2ξ). Getting the stoichiometric bookkeeping right before touching K is the entire game."},
  {id:"f9", cat:"Process design", q:"A process has a mixer, reactor, separator, and a recycle from separator back to mixer. Fresh feed 100 kg/h. Draw the boundaries you would use and state which balances (overall vs unit) give you which unknowns.", hint:"Overall balance ignores recycle entirely. Unit balances see it.", a:"Overall envelope: fresh feed and products only — recycle is internal and invisible; use it first to pin exit flows. Then unit envelopes (mixer or separator) expose the recycle stream. Choosing envelope order is the formulation skill degrees-of-freedom analysis formalises."},
  {id:"f10", cat:"Process control", q:"A liquid tank of area A has inflow F_in (disturbance) and outflow F_out = h/R through a valve. Derive the transfer function structure from balance to H(s)/F_in(s) — set up every step.", hint:"Balance → linearise (already linear here) → deviation variables → Laplace.", a:"A dh/dt = F_in − h/R → in deviation variables, take Laplace: AsH(s) = F_in(s) − H(s)/R → H/F_in = R/(ARs+1). First-order gain R, time constant AR. This exact pipeline (balance → deviation → Laplace) is Process Control's core move, and it's a quant-desk move too."},
  {id:"f11", cat:"Reaction eng.", q:"Set up the design equation for an isothermal PFR achieving conversion X of A with rate law −r_A = kC_A. Define every symbol before writing anything.", hint:"Mole balance on a differential slice dV.", a:"F_A0 dX/dV = −r_A = kC_A0(1−X) (constant density). Separating definitions (F_A0, X, C_A0) from the balance is the discipline that closes the formulation gap."},
  {id:"f12", cat:"Dimensional", q:"Pressure drop in a pipe depends on ρ, μ, v, D, L, ε. Set up the dimensional analysis: choose repeating variables and name the dimensionless groups you expect.", hint:"Buckingham π: n variables − 3 dimensions = number of groups.", a:"7 − 3 = 4 groups: Euler number Δp/ρv² (target), Reynolds ρvD/μ, L/D, ε/D. Recognising that the answer must be Eu = f(Re, L/D, ε/D) before any algebra is formulation thinking at its purest."}
];

// Life & career track.
const LIFE_TRACK = [
  {id:"l1", title:"Driving", items:[
    {id:"l1a", t:"Theory test", done:true},
    {id:"l1b", t:"Practical lessons (booked — log each one)"},
    {id:"l1c", t:"Mock test standard reached"},
    {id:"l1d", t:"Practical test passed"}
  ]},
  {id:"l2", title:"Cooking — 5-recipe mastery", items:[
    {id:"l2a", t:"Shakshuka — cook 5×, last one from memory"},
    {id:"l2b", t:"Chana masala — cook 5×, last one from memory"},
    {id:"l2c", t:"One-pot chicken and rice — cook 5×"},
    {id:"l2d", t:"Egg fried rice — cook 5×"},
    {id:"l2e", t:"Garlic butter pasta with parmesan — cook 5×"}
  ]},
  {id:"l3", title:"Touch typing", items:[
    {id:"l3a", t:"Keybr: all letters unlocked"},
    {id:"l3b", t:"Monkeytype: 40 wpm sustained"},
    {id:"l3c", t:"Monkeytype: 60 wpm sustained"},
    {id:"l3d", t:"80 wpm — done, stop optimising"}
  ]},
  {id:"l4", title:"Career assets", items:[
    {id:"l4a", t:"Hospitality CV (LaTeX)", done:true},
    {id:"l4b", t:"STAR story bank: 6 stories written and rehearsed"},
    {id:"l4c", t:"GitHub project live with README (see Coding → Projects)"},
    {id:"l4d", t:"Technical CV variant for placement applications"},
    {id:"l4e", t:"Tutoring: first paying maths/chemistry student"},
    {id:"l4f", t:"Spring week / insight scheme applications (quant + eng, Oct-Dec window)"}
  ]},
  {id:"l5", title:"Deen & discipline", items:[
    {id:"l5a", t:"Daily Arabic review — protected non-negotiable, before anything else"},
    {id:"l5b", t:"Weekly review ritual (Sunday): update every tracker honestly"},
    {id:"l5c", t:"Morning deep-work block guarded (you peak early — spend it on formulation drills or maths, never admin)"}
  ]}
];

const STAR_PROMPTS = [
  "A time you diagnosed why something failed (CAM post-mortem counts — showing you investigated a weak result is a strength story)",
  "A time you taught someone something difficult",
  "A time you delivered under time pressure",
  "A time you pushed back on advice and were right to",
  "A time you built something end-to-end (dashboard, CV, flashcard app)",
  "A time you changed approach after feedback"
];
