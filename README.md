# Cheerio AI — Product Intern Take-Home Assignment
### Assignment A: Making Customer Support Scale for Non-Technical Users
**Candidate:** Abhishek Harde  
**Target Role:** Product Intern, Cheerio AI  
**Date:** October 15, 2026  

---

## 📌 Problem Overview
Cheerio AI empowers over 5,000 businesses to engage customers across WhatsApp, AI Agents, SMS, Instagram, RCS, and AI Voice calling. However, non-technical users (founders, marketers, operations leads) frequently get stuck on technical setup across:
1. **WhatsApp Business API & Meta Business Manager** (Payment setup, phone coexistence conflicts).
2. **Template Message Syntax & Guidelines** (Variable indexing `{{1}}`, missing sample values, category mismatches).
3. **Chatbot Workflow Logic** (Broken conditional branches, missing fallback nodes, dead loops).
4. **Third-Party Integrations** (Expired Shopify webhook tokens, CRM authentication failures).
5. **Meta Legal Business Verification** (GSTIN legal trade name discrepancies).

This generates an overwhelming volume of repetitive Tier-1 support tickets (~12,000 queries/month), stalling customer time-to-value and driving up support payroll.

---

## 💡 The Solution: "Cheerio Pilot"
**Cheerio Pilot** is an embedded, context-aware diagnostic and self-healing copilot designed specifically for non-technical users. 

Instead of forcing users into another support chat or asking them to read documentation:
- **Acts at the Point of Failure:** Listens to backend telemetry and intercepts Meta Graph API errors (`#131030`, `#133005`).
- **Plain-Language Diagnostics:** Explains cryptic developer errors in language a 12-year-old can understand.
- **Deterministic 1-Click Auto-Fix:** Automatically re-indexes template parameters, injects compliant sample payloads, and resubmits to Meta Cloud API with 1 click.
- **WYSIWYG Mobile Preview:** Renders an interactive WhatsApp phone simulation so non-technical users can see exactly what their customers will see.
- **Zero-Friction Escalation:** Pre-packages a comprehensive Diagnostic Dossier (Meta WABA ID, error logs, attempted fixes) directly to human compliance specialists.

---

## 🎯 Key Metrics & 3-Month Roadmap

| Metric | Baseline | Target | Strategic Impact |
| :--- | :---: | :---: | :--- |
| **Autonomous Deflection Rate** | 0.0% | **65.0%** | Resolves 7,800 L1 queries/month without human intervention |
| **Time to First Campaign (TTFC)** | 48 Hours | **< 6 Hours** | 8x faster onboarding activation |
| **First-Contact Resolution (FCR)** | 58.0% | **> 78.0%** | Eliminates back-and-forth emails |
| **⭐ North Star Metric:** Zero-Touch Activation | 32.0% | **65.0%** | +103% relative improvement over 90 days |

---

## 📊 Support Scale Economics (Bottom-Up Financial Model)

Based on 5,000 active businesses producing 12,000 queries/month:
- **LLM Engine:** OpenAI GPT-4o-mini / Claude 3.5 Haiku ($0.15 / 1M input, $0.60 / 1M output).
- **Session Profile (2-Turn):** 3,000 input tokens, 600 output tokens.
- **Cost per Query:** **$0.00300 (~₹0.25)** fully loaded (including vector embeddings & serverless logging).
- **Total Monthly AI Infrastructure Cost:** **$36.00 / month (~₹3,000/mo)**.
- **Human Baseline Support Cost:** 20 agents @ ₹45,000/mo ($540) = **$10,800 / month**.
- **Human Support with Cheerio Pilot:** 7 agents handling 4,200 escalated tickets = **$3,780 / month**.
- **💰 Net Monthly Operational Savings:** **$6,984 / month (₹5,83,000/mo)**.
- **💰 Net Annual Operational Savings:** **$83,808 / year (~₹70 Lakhs/year, 64.7% OPEX reduction)**.

---

## 📁 Repository Structure & Deliverables

```
cheerio-assignment-a/
├── Cheerio_Product_Intern_Assignment_Abhishek_Harde.pdf   # Official 4-page submission PDF
├── CHEERIO_PRODUCT_INTERN_ASSIGNMENT_DOC.md               # Complete Markdown specification document
├── cheerio_numbers_and_billing_model.csv                  # Complete Google Sheets model with visible formulas
├── cheerio_ai_prompt_log.md                               # Mandatory AI Prompt Log & Audit Diary
├── index.html                                             # Interactive Prototype Web Application
├── styles.css                                             # Prototype custom styling & WhatsApp phone frame
├── app.js                                                 # Prototype interactive state, auto-fix & calculator logic
├── doc.html                                               # Print-ready executive HTML document
├── create_pdf.py                                          # Automated Python PDF generation script
└── screenshots/                                           # Verified prototype captures
    ├── screen1_troubleshooter.png                         # Dashboard & Template Error Interception
    ├── screen2_autofix_success.png                        # 1-Click Auto-Fix & Verified Meta Approval
    ├── screen3_cost_roi_model.png                         # Financial Calculator & Google Sheet Model
    └── screen4_product_spec_sla.png                       # Product Specification & North Star Roadmap
```

---

## 🖥️ How to Run the Interactive Prototype Locally

1. Clone this repository:
   ```bash
   git clone <REPO_URL>
   cd cheerio-assignment-a
   ```
2. Start a simple web server:
   ```bash
   python -m http.server 3344
   ```
3. Open your browser to:
   ```
   http://localhost:3344/index.html
   ```
   *(Or simply double-click `index.html` in your file explorer to open it directly in Chrome/Edge).*

---

## 👤 Author
**Abhishek Harde**  
- Email: [abhishekharde8551@gmail.com](mailto:abhishekharde8551@gmail.com)  
- Application: Product Intern, Cheerio AI  
