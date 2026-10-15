// app.js - Cheerio Pilot Interactive Prototype Logic

const scenarios = {
  template_rejection: {
    id: "template_rejection",
    badge: "Top Query #1",
    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    errorCode: "Meta API Code: #131030",
    title: "WhatsApp Template Rejected: Parameter Count Mismatch",
    desc: "User tried submitting a promotional Diwali broadcast template, but Meta rejected it within 90 seconds due to invalid variable indexing and missing sample values.",
    rootCause: "Non-Tech Syntax Error",
    rootCauseColor: "text-amber-300",
    guardrail: "The Copilot operates strictly in Deterministic Auto-Fix Mode for WhatsApp templates. It preserves user marketing copy verbatim, corrects variable numbering sequentially ({{1}}, {{2}}), injects required sample payloads, and validates character limits before sending a single HTTP request to Meta's Graph API.",
    inTokens: 1480,
    outTokens: 265,
    cost: "$0.00038",
    timeSaved: "45 mins",
    botPrompt: "I detected that Meta rejected template 'Diwali_Sale_V1'. The error was caused by skipping variable {{1}} and jumping straight to {{2}}, plus missing sample preview values required by Meta's September 2026 guidelines. Would you like me to auto-repair the syntax and resubmit it to Meta?",
    render: (container) => {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <!-- Left: Problem & Diff view -->
          <div class="md:col-span-7 flex flex-col gap-3">
            <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-bold text-slate-300">Template Payload Comparison</span>
                <span class="text-[10px] text-rose-400 font-mono">Meta Status: REJECTED</span>
              </div>
              <div class="space-y-1.5 text-xs font-mono">
                <div class="text-[11px] text-slate-400 font-sans mb-1 font-semibold">User Draft (Rejected):</div>
                <div class="diff-del">"Hey {{2}}, Diwali Dhamaka! Get flat {{3}}% off on all ethnic wear. Shop: {{4}}"</div>
                <div class="text-[10px] text-rose-400 mt-1 mb-2 font-sans">&times; Error: Variable {{1}} missing. Meta requires sequential 1-based indexing.</div>

                <div class="text-[11px] text-slate-400 font-sans mb-1 font-semibold">Cheerio Pilot Auto-Repaired:</div>
                <div class="diff-add">"Hey {{1}}, Diwali Dhamaka! Get flat {{2}}% off on all ethnic wear. Shop: {{3}}"</div>
                <div class="text-[10px] text-emerald-400 mt-1 font-sans">&check; Sample payload injected: {{1}}='Rahul', {{2}}='20', {{3}}='fabstyle.com/sale'</div>
              </div>
            </div>

            <!-- Auto Fix Action Box -->
            <div id="action-box-template" class="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <h4 class="text-xs font-bold text-white">Ready for 1-Click Autonomous Repair</h4>
                <p class="text-[11px] text-slate-400 mt-0.5">Will format parameters, generate samples, and ping Meta Graph API.</p>
              </div>
              <button id="btn-fix-template" onclick="executeTemplateAutoFix()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/30 flex items-center gap-1.5">
                <span>Auto-Fix & Resubmit</span>
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
            <div id="fix-status-template" class="hidden"></div>
          </div>

          <!-- Right: Real WhatsApp Phone Simulation -->
          <div class="md:col-span-5 flex flex-col items-center">
            <span class="text-[10px] uppercase font-mono text-slate-400 mb-1.5 tracking-wider">Customer Phone Preview</span>
            <div class="phone-mockup">
              <div class="phone-header">
                <div class="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-[10px] text-white font-bold">FS</div>
                <div class="text-left">
                  <p class="text-[11px] font-bold text-slate-100 leading-tight">FabStyle Official</p>
                  <p class="text-[9px] text-emerald-400">Meta Verified Business</p>
                </div>
              </div>
              <div class="phone-screen" id="phone-preview-screen">
                <div class="wa-bubble-bot">
                  <p id="wa-preview-text">Hey <strong>Rahul</strong>, Diwali Dhamaka! Get flat <strong>20%</strong> off on all ethnic wear. Shop: <strong>fabstyle.com/sale</strong></p>
                  <div class="text-right text-[9px] text-slate-400 mt-1">10:45 AM &bull; Official WABA</div>
                </div>
                <div class="mt-auto bg-slate-900/90 border border-slate-700/60 rounded-lg p-2 text-center">
                  <span class="text-[10px] text-indigo-300 font-semibold">&bull; CTA Button: Shop Festival Deals &bull;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  waba_registration: {
    id: "waba_registration",
    badge: "Top Query #2",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    errorCode: "Meta Graph Error: #133005",
    title: "Meta WABA Phone Registration: Number Already Registered",
    desc: "Business owner is trying to connect +91 98765 43210 to Cheerio, but Meta blocked it because the number is currently tied to a personal or WhatsApp Business mobile app.",
    rootCause: "Coexistence Conflict",
    rootCauseColor: "text-amber-400",
    guardrail: "Meta Cloud API strictly forbids a phone number from being active on the mobile app and Cloud API concurrently. Copilot detects this pre-registration, provides a 3-step visual migration guide without data loss, and verifies number release via Graph API heartbeat.",
    inTokens: 1620,
    outTokens: 310,
    cost: "$0.00042",
    timeSaved: "38 mins",
    botPrompt: "I detected error #133005 for phone +91 98765 43210. Meta's rules require that before a number connects to the official Cloud API, the account on the phone app must be deleted (your chat history can be backed up). I have prepared the 3-step Unlinking Wizard for you.",
    render: (container) => {
      container.innerHTML = `
        <div class="space-y-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 class="text-xs font-bold text-slate-200 mb-3 flex items-center justify-between">
              <span>Guided 3-Step Phone Unlinking Wizard</span>
              <span class="text-[10px] text-amber-400 font-mono">Status: Pending Device Release</span>
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div class="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">1</div>
                <h5 class="font-bold text-slate-200">Open WhatsApp on Phone</h5>
                <p class="text-[11px] text-slate-400 mt-1">Go to Settings &gt; Account &gt; Delete My Account (This frees the number for Cloud API).</p>
              </div>

              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div class="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">2</div>
                <h5 class="font-bold text-slate-200">Request Cloud OTP</h5>
                <p class="text-[11px] text-slate-400 mt-1">Choose Voice Call or SMS. Cheerio triggers Meta's official 6-digit OTP to your SIM.</p>
              </div>

              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div class="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">3</div>
                <h5 class="font-bold text-slate-200">Set 2FA Business PIN</h5>
                <p class="text-[11px] text-slate-400 mt-1">Copilot auto-generates & stores a cryptographically secure 6-digit PIN in your vault.</p>
              </div>
            </div>
          </div>

          <!-- Interactive Test Trigger -->
          <div id="waba-action-box" class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div class="text-xs">
              <span class="text-slate-300 font-semibold">Simulate Device Deletion & Verify Number:</span>
              <p class="text-[11px] text-slate-400">Pings Meta Graph API to confirm number availability.</p>
            </div>
            <button onclick="simulateWabaVerification()" class="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition">
              Verify Number Release
            </button>
          </div>
          <div id="waba-result-box" class="hidden"></div>
        </div>
      `;
    }
  },

  chatbot_loop: {
    id: "chatbot_loop",
    badge: "Top Query #3",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    errorCode: "Logic Break: Dead End Node #4",
    title: "Chatbot Flow Break: Incomplete Conditional Branch",
    desc: "Abandoned Cart Flow has a condition node evaluating 'Cart Value > ₹2,000'. The 'FALSE' branch is completely unconnected, trapping 14% of customers with no reply.",
    rootCause: "Workflow Configuration Gap",
    rootCauseColor: "text-violet-300",
    guardrail: "Cheerio Pilot flow linting parses all JSON DAG nodes. When an unhandled conditional branch or missing fallback node is detected, it auto-synthesizes a non-destructive fallback to prevent silent drops.",
    inTokens: 1720,
    outTokens: 290,
    cost: "$0.00043",
    timeSaved: "50 mins",
    botPrompt: "I ran a dry-run linter on your 'Abandoned Cart' workflow. Node #4 has a condition for carts under ₹2,000 that drops into an empty void. Customers in this bracket get no follow-up! I can auto-patch this with a smart discount fallback node.",
    render: (container) => {
      container.innerHTML = `
        <div class="space-y-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div class="flex items-center justify-between mb-3 text-xs">
              <span class="font-bold text-slate-200">Interactive DAG Flow Visualizer</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400">Broken Branch Found</span>
            </div>

            <!-- Flow Nodes Visual -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div class="p-3 rounded-lg bg-slate-900 border border-slate-700 w-full text-center">
                <span class="text-[10px] text-slate-400 uppercase font-mono">Trigger</span>
                <p class="font-bold text-white mt-0.5">Cart Abandoned</p>
              </div>
              <span class="text-slate-500">&rarr;</span>
              <div class="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/50 w-full text-center">
                <span class="text-[10px] text-indigo-400 uppercase font-mono">Condition Node #4</span>
                <p class="font-bold text-white mt-0.5">Value &gt; ₹2,000?</p>
              </div>
              <span class="text-slate-500">&rarr;</span>
              <div class="flex flex-col gap-2 w-full">
                <div class="p-2 rounded bg-emerald-950/40 border border-emerald-500/40 text-center">
                  <span class="text-[9px] text-emerald-400 uppercase font-mono">TRUE Branch</span>
                  <p class="font-medium text-[11px] text-slate-200">Send 15% VIP Coupon</p>
                </div>
                <div id="flow-false-node" class="p-2 rounded bg-rose-950/40 border border-rose-500/60 text-center">
                  <span class="text-[9px] text-rose-400 uppercase font-mono">FALSE Branch</span>
                  <p class="font-medium text-[11px] text-rose-300">&times; UNCONNECTED (Dead End)</p>
                </div>
              </div>
            </div>
          </div>

          <div id="flow-patch-action" class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div class="text-xs">
              <span class="text-slate-200 font-bold">1-Click Auto-Patch Flow</span>
              <p class="text-[11px] text-slate-400">Inserts dynamic 'Free Shipping Offer' node for carts &le; ₹2,000.</p>
            </div>
            <button onclick="patchChatbotFlow()" class="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition">
              Patch Workflow DAG
            </button>
          </div>
          <div id="flow-patch-result" class="hidden"></div>
        </div>
      `;
    }
  },

  shopify_webhook: {
    id: "shopify_webhook",
    badge: "Top Query #4",
    badgeColor: "bg-slate-700 text-slate-300",
    errorCode: "HTTP 401: Unauthorized",
    title: "E-Commerce Integration: Shopify Webhook Expired Token",
    desc: "Cheerio stopped receiving 'Order Created' and 'Checkout Update' events because the Shopify custom app secret token was rotated during a theme update.",
    rootCause: "Token Authentication Expiry",
    rootCauseColor: "text-slate-300",
    guardrail: "Copilot performs an automated handshake test, prompts for OAuth refresh with 1-click re-authorization, and triggers a backfill replay of missed events from Shopify's buffer.",
    inTokens: 1390,
    outTokens: 240,
    cost: "$0.00035",
    timeSaved: "30 mins",
    botPrompt: "I detected that Shopify returned HTTP 401 for webhook 'orders/create'. This happens when the store's private token rotates. Would you like me to trigger a 1-click OAuth re-handshake and backfill the 18 missed order events?",
    render: (container) => {
      container.innerHTML = `
        <div class="space-y-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-slate-200">Shopify Webhook Telemetry</span>
              <span class="text-rose-400 font-mono">18 Events Buffered</span>
            </div>
            <div class="code-container text-slate-400 text-[11px] space-y-1">
              <div>POST https://api.cheerio.in/v1/webhooks/shopify/orders_create</div>
              <div class="text-rose-400">&larr; HTTP/1.1 401 Unauthorized (Invalid X-Shopify-Hmac-SHA256)</div>
              <div class="text-slate-500">Last Successful Sync: 4 hours ago &bull; Impact: Delayed WhatsApp order confirmations</div>
            </div>
          </div>

          <div id="shopify-action-box" class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div class="text-xs">
              <span class="text-slate-200 font-bold">1-Click OAuth Handshake & Replay</span>
              <p class="text-[11px] text-slate-400">Re-signs webhook secrets and safely pushes 18 queued messages.</p>
            </div>
            <button onclick="repairShopifyWebhook()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition">
              Repair & Replay
            </button>
          </div>
          <div id="shopify-result-box" class="hidden"></div>
        </div>
      `;
    }
  },

  human_escalation: {
    id: "human_escalation",
    badge: "Top Query #5",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    errorCode: "Escalation Tier: Meta Compliance",
    title: "Meta Legal Business Verification & GSTIN Audit",
    desc: "Meta restricted messaging tier to 250 msgs/day because the legal business name on the GST certificate does not match the Meta Business Manager legal entity name.",
    rootCause: "Legal & Compliance Restriction",
    rootCauseColor: "text-cyan-300",
    guardrail: "CRITICAL SAFETY BOUNDARY: AI cannot and must NOT make compliance decisions or fabricate legal documents. When legal verification fails, Copilot auto-packages an exhaustive diagnostic dossier and hands off to Cheerio's human compliance team.",
    inTokens: 1850,
    outTokens: 380,
    cost: "$0.00051",
    timeSaved: "60 mins",
    botPrompt: "I analyzed your Meta Business Manager status. Meta has flagged a legal discrepancy: your GST Certificate name ('FabStyle Apparel Pvt Ltd') differs slightly from your Meta Business Account ('FabStyle D2C'). This requires human compliance review. I have pre-assembled a full dossier so our senior specialist can file an expedited appeal for you.",
    render: (container) => {
      container.innerHTML = `
        <div class="space-y-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-slate-200">Pre-Packaged Human Escalation Packet</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-400">Zero Customer Friction</span>
            </div>
            <p class="text-[11px] text-slate-400 mb-3">The customer will NOT have to re-explain anything. The human agent receives the exact payload:</p>
            <div class="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5 font-mono text-[11px] text-slate-300">
              <div><span class="text-slate-500">Business Name:</span> FabStyle D2C</div>
              <div><span class="text-slate-500">Meta WABA ID:</span> 109284719283741</div>
              <div><span class="text-slate-500">Discrepancy:</span> GST Certificate name = "FabStyle Apparel Pvt Ltd"</div>
              <div><span class="text-slate-500">Current Tier:</span> Restricted Tier (250 msgs/day) &rarr; Target: Tier 1 (1,000/day)</div>
              <div><span class="text-slate-500">Priority:</span> HIGH (Festive Sale In Progress)</div>
            </div>
          </div>

          <div id="escalation-action-box" class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div class="text-xs">
              <span class="text-slate-200 font-bold">Transfer to Human Senior Specialist</span>
              <p class="text-[11px] text-slate-400">Average response time: 8 minutes &bull; WhatsApp direct ping</p>
            </div>
            <button onclick="triggerHumanHandoff()" class="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition">
              Dispatch to Specialist
            </button>
          </div>
          <div id="escalation-result-box" class="hidden"></div>
        </div>
      `;
    }
  }
};

let currentScenario = "template_rejection";

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  selectScenario("template_rejection");
  setupTelemetryModal();
  recalcFinancials();
});

// Tab Switcher
function setupTabs() {
  const tabs = [
    { btn: "tab-btn-copilot", content: "tab-copilot" },
    { btn: "tab-btn-calculator", content: "tab-calculator" },
    { btn: "tab-btn-architecture", content: "tab-architecture" }
  ];

  tabs.forEach(t => {
    document.getElementById(t.btn).addEventListener("click", () => {
      tabs.forEach(o => {
        document.getElementById(o.btn).classList.remove("active");
        document.getElementById(o.content).classList.add("hidden");
        document.getElementById(o.content).classList.remove("block");
      });
      document.getElementById(t.btn).classList.add("active");
      document.getElementById(t.content).classList.remove("hidden");
      document.getElementById(t.content).classList.add("block");
    });
  });
}

// Select Scenario
function selectScenario(scenarioKey) {
  currentScenario = scenarioKey;
  const s = scenarios[scenarioKey];
  if (!s) return;

  // Update scenario header
  document.getElementById("scenario-badge").className = `px-2 py-0.5 rounded text-xs font-semibold border ${s.badgeColor}`;
  document.getElementById("scenario-badge").innerText = s.badge;
  document.getElementById("scenario-code").innerText = s.errorCode;
  document.getElementById("scenario-title").innerText = s.title;
  document.getElementById("scenario-desc").innerText = s.desc;
  document.getElementById("scenario-cause-tag").innerText = s.rootCause;
  document.getElementById("scenario-cause-tag").className = `text-xs font-semibold mt-0.5 ${s.rootCauseColor}`;
  document.getElementById("guardrail-text").innerHTML = s.guardrail;

  // Update telemetry stats
  document.getElementById("stat-in-tokens").innerText = s.inTokens.toLocaleString();
  document.getElementById("stat-out-tokens").innerText = s.outTokens.toLocaleString();
  document.getElementById("stat-cost").innerText = s.cost;
  document.getElementById("cost-pill-val").innerText = `${s.cost} / query`;

  // Render scenario workspace
  const body = document.getElementById("dynamic-workspace-body");
  s.render(body);

  // Initialize bot message in chat
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = `
    <div class="flex gap-2.5 items-start">
      <div class="w-6 h-6 rounded bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">CP</div>
      <div class="bg-slate-800/90 text-slate-200 p-3 rounded-xl rounded-tl-none border border-slate-700/60 max-w-[90%] leading-relaxed">
        <p class="font-semibold text-indigo-300 text-[11px] mb-1">Cheerio Diagnostic Copilot</p>
        <p>${s.botPrompt}</p>
      </div>
    </div>
  `;
}

// Action Handlers
function executeTemplateAutoFix() {
  const btn = document.getElementById("btn-fix-template");
  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin inline-block mr-1">&#9696;</span> Auto-Fixing...`;

  setTimeout(() => {
    document.getElementById("action-box-template").classList.add("hidden");
    const statusBox = document.getElementById("fix-status-template");
    statusBox.className = "p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300";
    statusBox.innerHTML = `
      <div class="flex items-center gap-2 font-bold mb-1">
        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Template Successfully Auto-Repaired & Approved by Meta!</span>
      </div>
      <p class="text-[11px] text-slate-300">Variables re-indexed sequentially ({{1}}, {{2}}, {{3}}). Sample values and body category verified against Meta Cloud API. Template status changed to <strong class="text-emerald-400">APPROVED</strong>.</p>
    `;
    statusBox.classList.remove("hidden");

    // Update phone preview
    document.getElementById("wa-preview-text").innerHTML = `Hey <strong>Rahul</strong>, Diwali Dhamaka! Get flat <strong>20%</strong> off on all ethnic wear. Shop: <strong>fabstyle.com/sale</strong>`;

    // Append to chat
    appendChatMessage("bot", "Great news! I fixed the parameter syntax and resubmitted your template to Meta. Meta Graph API returned HTTP 200 OK — your template is now APPROVED and ready for broadcast!");
  }, 1200);
}

function simulateWabaVerification() {
  const box = document.getElementById("waba-action-box");
  box.classList.add("hidden");
  const result = document.getElementById("waba-result-box");
  result.className = "p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300";
  result.innerHTML = `
    <div class="flex items-center gap-2 font-bold mb-1">
      <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Phone Number Verified & Attached to Cloud API!</span>
    </div>
    <p class="text-[11px] text-slate-300">Meta Graph API verified that +91 98765 43210 has been released from mobile app. Two-Factor Authentication PIN registered. Number status: <strong class="text-emerald-400">ACTIVE & READY</strong>.</p>
  `;
  result.classList.remove("hidden");
  appendChatMessage("bot", "Phone number +91 98765 43210 is now successfully attached to your Cheerio Meta Business Account! You can now send automated broadcasts and configure chatbot workflows.");
}

function patchChatbotFlow() {
  const box = document.getElementById("flow-patch-action");
  box.classList.add("hidden");
  
  const falseNode = document.getElementById("flow-false-node");
  falseNode.className = "p-2 rounded bg-indigo-950/60 border border-indigo-500/50 text-center";
  falseNode.innerHTML = `
    <span class="text-[9px] text-indigo-300 uppercase font-mono">FALSE Branch (Patched)</span>
    <p class="font-medium text-[11px] text-slate-200">&check; Auto-Fallback: Send Free Shipping Offer</p>
  `;

  const result = document.getElementById("flow-patch-result");
  result.className = "p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300";
  result.innerHTML = `
    <div class="flex items-center gap-2 font-bold mb-1">
      <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Workflow DAG Validated: 0 Dead Ends!</span>
    </div>
    <p class="text-[11px] text-slate-300">Node #4 now seamlessly routes carts &le; ₹2,000 to the Free Shipping Incentive trigger. Customer trap rate eliminated from 14% to 0%.</p>
  `;
  result.classList.remove("hidden");
  appendChatMessage("bot", "I patched the missing conditional branch in your Abandoned Cart Flow! All carts under ₹2,000 will now receive an automated Free Shipping nudge instead of getting stuck in limbo.");
}

function repairShopifyWebhook() {
  const box = document.getElementById("shopify-action-box");
  box.classList.add("hidden");
  const result = document.getElementById("shopify-result-box");
  result.className = "p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300";
  result.innerHTML = `
    <div class="flex items-center gap-2 font-bold mb-1">
      <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Shopify OAuth Handshake Renewed!</span>
    </div>
    <p class="text-[11px] text-slate-300">New HMAC secret exchange complete. 18 buffered order events replayed successfully. Webhook latency: 142ms.</p>
  `;
  result.classList.remove("hidden");
  appendChatMessage("bot", "Shopify connection is restored! The HMAC secrets were renewed and all 18 pending order events have been replayed. Customers have now received their order confirmation WhatsApp messages.");
}

function triggerHumanHandoff() {
  const box = document.getElementById("escalation-action-box");
  box.classList.add("hidden");
  const result = document.getElementById("escalation-result-box");
  result.className = "p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-300";
  result.innerHTML = `
    <div class="flex items-center gap-2 font-bold mb-1">
      <svg class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      <span>Ticket #CH-88219 Dispatched to Senior Compliance Specialist</span>
    </div>
    <p class="text-[11px] text-slate-300">Dossier sent to WhatsApp Support Escalation Desk. Estimated response time: <strong>8 minutes</strong>. You will receive an immediate WhatsApp notification once our compliance officer opens Meta's expedited ticket.</p>
  `;
  result.classList.remove("hidden");
  appendChatMessage("bot", "I have packaged your GST certificate and Meta Business Manager logs and created priority Ticket #CH-88219. Senior Compliance Specialist Priyank has been assigned. You won't have to repeat yourself!");
}

// Chat functions
function appendChatMessage(sender, text) {
  const chatMessages = document.getElementById("chat-messages");
  const isBot = sender === "bot";

  const msgDiv = document.createElement("div");
  msgDiv.className = `flex gap-2.5 items-start ${isBot ? "" : "flex-row-reverse"}`;
  msgDiv.innerHTML = `
    <div class="w-6 h-6 rounded ${isBot ? "bg-indigo-600" : "bg-emerald-600"} text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
      ${isBot ? "CP" : "AH"}
    </div>
    <div class="${isBot ? "bg-slate-800/90 text-slate-200 border-slate-700/60 rounded-tl-none" : "bg-indigo-600 text-white rounded-tr-none"} p-3 rounded-xl border max-w-[85%] leading-relaxed text-xs">
      <p class="font-semibold ${isBot ? "text-indigo-300" : "text-white"} text-[10px] mb-0.5">
        ${isBot ? "Cheerio Diagnostic Copilot" : "You (Abhishek)"}
      </p>
      <p>${text}</p>
    </div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const val = input.value.trim();
  if (!val) return;

  appendChatMessage("user", val);
  input.value = "";

  setTimeout(() => {
    generateDynamicBotResponse(val);
  }, 700);
}

function triggerQuickPrompt(text) {
  document.getElementById("chat-input").value = text;
  handleUserChatSubmit(new Event("submit"));
}

function generateDynamicBotResponse(userText) {
  const lower = userText.toLowerCase();
  let reply = "";

  if (lower.includes("auto-fix") || lower.includes("fix this") || lower.includes("template")) {
    reply = "I'm ready! If you click 'Auto-Fix & Resubmit' on the left panel, I will automatically sequence the parameters, inject sample values, and re-request approval from Meta Graph API.";
  } else if (lower.includes("phone") || lower.includes("whatsapp app") || lower.includes("unlink")) {
    reply = "Meta requires numbers to be unlinked from the phone app before registering on Cloud API. You can safely delete your account in the WhatsApp app (after backing up) and click 'Verify Number Release' on the left.";
  } else if (lower.includes("human") || lower.includes("agent") || lower.includes("talk to")) {
    reply = "Of course. If you need human assistance, I can package your full diagnostic dossier and transfer you to a specialist right away. Click 'Dispatch to Specialist' on the left panel!";
  } else if (lower.includes("cost") || lower.includes("token") || lower.includes("price")) {
    reply = "This diagnostic session uses approximately 1,500 input tokens and 300 output tokens on GPT-4o-mini, costing ~$0.00081 per query. That's a 99.9% cost reduction compared to human support ($0.90/ticket)! Check the 'Cost & ROI Model' tab for full formulas.";
  } else {
    reply = "I understand. I am constantly monitoring your Meta Business Manager, WhatsApp templates, and webhook endpoints. Let me know if you would like me to diagnose any specific pillar on your dashboard.";
  }

  appendChatMessage("bot", reply);
}

// Financial Calculator
function recalcFinancials() {
  const businesses = parseInt(document.getElementById("slider-biz").value);
  const queriesPerBiz = parseFloat(document.getElementById("slider-query").value);
  const deflectionRate = parseInt(document.getElementById("slider-deflection").value) / 100;

  document.getElementById("slider-biz-val").innerText = businesses.toLocaleString();
  document.getElementById("slider-query-val").innerText = queriesPerBiz.toFixed(1);
  document.getElementById("slider-deflection-val").innerText = `${Math.round(deflectionRate * 100)}%`;

  const totalQueries = Math.round(businesses * queriesPerBiz);
  const deflectedQueries = Math.round(totalQueries * deflectionRate);
  const humanQueries = totalQueries - deflectedQueries;

  // AI Running Cost ($0.003 / query including tokens, embeddings, pinecone, serverless)
  const aiCostPerQuery = 0.003;
  const totalAiMonthlyCost = Math.round(totalQueries * aiCostPerQuery * 100) / 100;

  // Human cost: 1 agent handles 600 tickets/month, cost = $540/month (₹45,000)
  const ticketsPerAgent = 600;
  const agentCost = 540;
  const baselineAgents = Math.ceil(totalQueries / ticketsPerAgent);
  const baselineHumanCost = baselineAgents * agentCost;

  const withAiAgents = Math.ceil(humanQueries / ticketsPerAgent);
  const withAiHumanCost = withAiAgents * agentCost;

  const netMonthlySavings = baselineHumanCost - (withAiHumanCost + totalAiMonthlyCost);
  const netAnnualSavings = netMonthlySavings * 12;

  // Update UI
  document.getElementById("calc-total-queries").innerText = totalQueries.toLocaleString();
  document.getElementById("calc-deflected-queries").innerText = `${deflectedQueries.toLocaleString()} resolved autonomously`;
  document.getElementById("calc-ai-cost").innerText = `$${totalAiMonthlyCost.toFixed(2)}`;
  document.getElementById("calc-human-cost").innerText = `$${baselineHumanCost.toLocaleString()}`;
  document.getElementById("calc-net-savings").innerText = `$${Math.round(netMonthlySavings).toLocaleString()}`;
  document.getElementById("calc-annual-savings").innerText = `~$${Math.round(netAnnualSavings).toLocaleString()} / year (₹${(Math.round(netAnnualSavings * 83.5 / 100000)).toFixed(1)} Lakhs)`;
}

// Telemetry Modal
function setupTelemetryModal() {
  const btn = document.getElementById("toggle-telemetry-btn");
  btn.addEventListener("click", () => toggleTelemetryModal(true));
}

function toggleTelemetryModal(show) {
  const modal = document.getElementById("telemetry-modal");
  if (show) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}
