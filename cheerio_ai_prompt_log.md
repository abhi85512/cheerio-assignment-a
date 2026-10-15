# Part 3 - How AI Was Used (AI Usage Diary & Prompt Audit)
**Candidate:** Abhishek Harde  
**Role:** Product Intern Take-Home Assignment  
**Company:** Cheerio AI (Meta Business Solution Provider)  
**Submission Date:** October 15, 2026  

---

## 1. Which AI Tools Did You Use and For What?

| AI Tool | Specific Use Cases in This Assignment | Rationale for Selection |
| :--- | :--- | :--- |
| **Claude 3.5 Sonnet / Claude Code** | System architecture definition, DAG workflow logic modeling, drafting deterministic error-remediation guardrails, edge-case cataloging. | Superior reasoning for system-level trade-offs, structured JSON schema generation, and technical product specifications. |
| **OpenAI GPT-4o / GPT-4o-mini** | Guesstimate volume calibration, token unit economics calculation, synthetic Meta Graph API error message generation (`#131030`, `#133005`). | Fast math verification, token cost benchmarking, and synthetic customer support ticket persona roleplay. |
| **Cursor / Antigravity Agent** | Writing the full interactive prototype code (HTML5, Tailwind CSS, JavaScript), local HTTP server verification, and browser automation test runs. | Real-time code execution, zero-hallucination syntax generation, rapid UI component scaffolding. |

---

## 2. Prompt Log: 3 Prompts That Worked Well & 1 That Failed

### Prompt 1 (Worked Well - Root Cause Diagnostics & Query Taxonomy)
- **Prompt:**
  > *"Act as a Principal Product Manager at Cheerio, an official Meta Business Solution Provider with 5,000 SMB and D2C brands. Non-technical users (marketers, founders) frequently get stuck on WhatsApp Business API setup and flood support with repetitive tickets. Analyze the top 5 setup failure modes across Meta WABA, WhatsApp message templates, chatbot flow DAGs, and Shopify webhooks. For each failure mode, provide: (1) Cryptic technical error as returned by Meta/Shopify, (2) Root cause explained in language a 12-year-old can understand, (3) Why non-technical users cannot solve it on their own, and (4) The deterministic auto-fix payload."*
- **Why It Worked:**
  - Role framing (`Principal PM at Meta BSP`) enforced high domain specificity.
  - Structuring the output into 4 concrete fields forced the model to bridge technical API errors (`#131030`, HMAC SHA256) with non-technical user psychology.
  - Provided the exact foundation for our 1-click Auto-Fix engine.

---

### Prompt 2 (Worked Well - Financial Guesstimate & Token Unit Economics)
- **Prompt:**
  > *"Build a rigorous bottom-up spreadsheet model for Cheerio's support operations. Assumptions: 5,000 active businesses segmented into Starter (60%), Growth (30%), and Enterprise (10%). Assume realistic monthly ticket frequencies per tier. Target a 65% autonomous deflection rate using an LLM copilot. Calculate the exact token unit economics for a 2-turn diagnostic session on GPT-4o-mini ($0.15/1M input, $0.60/1M output). Include embedding search and serverless logging overhead. Compare total monthly AI COGS against a human support team in India where 1 agent handles 600 tickets/month at ₹45,000/month. Write out every single formula in Google Sheet format (e.g. =SUM, =B5*C5)."*
- **Why It Worked:**
  - Explicit token price constraints ($0.15 / $0.60 per 1M) prevented the model from using outdated 2023 pricing ($0.03/1k).
  - Demanded exact Google Sheet formula syntax, allowing us to paste the mathematical logic directly into our submission spreadsheet.
  - Delivered a defensible financial comparison: $36/mo AI cost vs $10,800/mo human baseline.

---

### Prompt 3 (Worked Well - Interactive Prototype UI Scaffolding)
- **Prompt:**
  > *"Generate a single-file modern, ultra-clean web prototype for 'Cheerio Pilot' using Tailwind CSS. Include a top header showing 'Cheerio Official Meta BSP' badge, an account health pre-flight check across 5 pillars, an interactive scenario selector with side-by-side template diff view (rejected syntax vs auto-repaired sequential variables {{1}}, {{2}}), a real WhatsApp mobile phone preview mockup, an interactive live chat simulator, and a toggleable live token/cost telemetry badge. Make all buttons functional with realistic state changes."*
- **Why It Worked:**
  - Specific UI element enumeration (health check, diff view, mobile frame, token pill) eliminated ambiguity.
  - Constrained design to modern SaaS aesthetic (electric indigo, slate-950, emerald success accents).
  - Produced an immediately testable clickable prototype.

---

### Prompt 4 (Failed Initially - Chatbot Deflection Strategy)
- **Original Prompt (Failed):**
  > *"Design an AI chatbot for Cheerio customer support that answers any question users have about setting up their WhatsApp and chatbot campaigns so we don't need any human support agents."*
- **Why It Failed:**
  - **Unrealistic scope & dangerous hallucinations:** The model proposed an unconstrained conversational chatbot that promised "100% full support automation," claimed it could "automatically approve Meta Green Ticks," and suggested answering user queries using an open-ended RAG over Meta documentation.
  - **Fatal Flaw for Non-Technical Users:** Non-technical users do not want to read paragraphs of conversational text explaining how to fix variable syntax in Meta Business Manager. They want the system to *fix it for them*. Furthermore, an LLM cannot unilaterally approve a Meta legal entity or resolve a GSTIN mismatch.
- **How I Corrected It (Revised Prompt):**
  > *"Pivot from an open-ended support chatbot to an 'In-Situ Diagnostic & Deterministic Auto-Fix Copilot'. Non-technical users should not have to converse or copy-paste code. The system must intercept API errors directly from Cheerio's backend telemetry, diagnose the error against Meta Graph API schemas, present a side-by-side visual diff, and execute a 1-click Auto-Fix. Explicitly define what the system will NOT do (e.g. cannot bypass Meta Commerce policies) and establish hard escalation triggers to human specialists with pre-packaged diagnostic packets."*
- **Outcome of Revision:** This transformed the entire product philosophy into a high-deflection, safety-grounded copilot that solves the root problem rather than adding another noisy chat interface.

---

## 3. Where Did AI Give a Wrong or Weak Answer, and How Did You Catch It?

1. **Hallucinated Meta Approval Timelines:**
   - *AI's Weak Answer:* In early iterations, the AI suggested telling users: *"Your template has been auto-fixed and is guaranteed to be approved by Meta in 5 minutes."*
   - *How I Caught It:* As an official Meta Business Solution Provider, Cheerio knows that Meta's review queue combines automated heuristics with asynchronous human moderation, taking anywhere from 60 seconds to 24 hours. Guaranteeing approval would cause immediate customer churn and support escalations. I added a strict guardrail: the copilot reports status as *"Submitted to Meta for Expedited Review"*, rather than falsely promising instant approval.

2. **Omission of WhatsApp Coexistence Constraints:**
   - *AI's Weak Answer:* When asked how to resolve phone registration errors, the AI suggested simply running a re-verification SMS OTP.
   - *How I Caught It:* Meta Cloud API documentation states that a phone number cannot be registered on both the consumer/business mobile app and the Cloud API simultaneously. Simply re-requesting OTP fails with error `#133005`. The user *must* delete the mobile account first. I caught this by cross-referencing Meta's developer docs and redesigned Scenario #2 into the "3-Step Guided Unlinking Wizard".

3. **Impractical Monetization Suggestion:**
   - *AI's Weak Answer:* The AI suggested charging users $0.50 per support conversation or selling a "Support Credit Pack".
   - *How I Caught It:* Monetizing basic setup assistance for non-technical users creates immediate onboarding friction and penalizes users for getting stuck on our own platform. High-performing SaaS platforms (Shopify, Stripe, Twilio) treat onboarding support as a core product activation lever. I overruled the AI and structured the billing model so Core Copilot is **100% Free** across all paid plans to maximize Net Dollar Retention (NDR), while creating a premium $19/mo "Priority Guardian" add-on for enterprise-grade continuous health monitoring.

---

## 4. Which Parts Did You Do Yourself, Without AI?

1. **Strategic Product Positioning & Problem Framing:**
   - Defined the core insight that non-technical users do not fail because they lack documentation; they fail because Meta's developer-centric API errors create cognitive overload. Shifted the entire product from "Better Support Chat" to "Self-Healing Platform".

2. **RICE Prioritization Matrix & Scoring:**
   - Conducted the trade-off evaluation between Static Docs, Generic Chatbot, In-Situ Diagnostic Copilot, and Co-browsing. Assigned realistic Reach, Impact, Confidence, and Effort scores based on Cheerio's non-technical target audience.

3. **Escalation Policy & Compliance Boundaries:**
   - Drew the hard boundary line between what AI can fix (deterministic syntax, token refresh, conditional DAG loops) and what requires human review (Meta policy suspensions, GSTIN mismatches, disputed wallet deductions).

4. **Unit Economics & Margin Sanity Checks:**
   - Verified realistic human support agent salaries in Tier-2/Tier-3 tech hubs in India (₹35,000–₹45,000 CTC inclusive of workstation and tools) and verified real-world agent throughput (25 tickets/day) to produce credible baseline savings.
