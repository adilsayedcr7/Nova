# NovaDirect — Website Build Prompt

*Built from the client's branding/marketing copy and the 7 reference sites (Attio, Resend, Linear, Jet, Saatosa, Protocol3, Flux). The section below called **"Read this part first"** is for you; everything under **"The Build Prompt"** is written as direct instruction so it can be pasted into Antigravity largely as-is.*

**Contents:** Read first → Design system → Navigation → Homepage (Hero, Problem, Who It's For, How It Works, Every Layer of Your Business, Why Choose NovaDirect, Final CTA) → Footer → Features page → Responsive notes → Assets

---

## Read this part first

**On the 5-image constraint.** Between the 7 references there are a lot of screenshots, but Antigravity caps uploads at five. If you're attaching images rather than just describing the sites, here's what I'd prioritize:

1. **Attio** — the hero + nav + first product screenshot. Sets the overall polish bar and the dark-page/light-mockup contrast trick.
2. **Resend** — the hero page alone. Dark, abstract 3D graphic, bold two-line headline — the strongest single hero reference of the seven.
3. **Jet** — the alternating icon + checklist feature sections. This is the closest existing pattern to what "Every Layer of Your Business" needs to do: headline + paragraph + 4 bullets + visual, repeated, alternating sides.
4. **Linear** — a numbered feature-chapter spread (e.g. "Make product operations self-driving" / "Define the product direction"). A second, different take on the same alternating-numbered pattern — worth including because that section is the hardest one to get right.
5. **Protocol3** — the "Who We Help" two-card spread plus its testimonial/pricing page. Maps directly onto "Who It's For," and gives a footer pattern too.

I'd leave out **Saatosa** — it reads as a generic marketplace template (the screenshots have "Use for Free" and "Made in Framer" badges baked right in), and leaning on it pulls things toward generic rather than distinctive. **Flux** is solid but light-themed, and its patterns mostly duplicate what Jet and Linear already cover — the safest one to cut if you need to get to five.

**A few calls I made, flagged so you can override them:**
- The copy doc includes both a full and a "Compressed for Website" version of the Problem section. I used the compressed one as the live site copy since it's literally labeled for that purpose — the longer version is good material for a sales deck or About page later.
- The Features page only had a headline and subheadline in the doc, no body copy. Rather than invent new claims, I expanded it using the same "Every Layer of Your Business" pillar content already established on the homepage, just given a full page's worth of room instead of homepage-summary space. Flag me if there's more Features-specific copy coming from the client.
- No color palette, logo, or type spec came through anywhere in the PDF — I checked directly (it's 5 pages of pure copy, zero embedded images). So the whole design system below is a fresh proposal grounded in the brand name and the copy's tone, not something pulled from existing brand guidelines. If NovaDirect already has a brand kit, that should win over what's proposed here.
- The doc itself is typeset in Figtree/Arial, but that's just Google Docs' own defaults for a text document — I haven't treated it as a deliberate typeface choice for the site.

---

## The Build Prompt

Everything from here down is written as direct instruction.

### Brief

NovaDirect is a B2B operations platform for direct-selling and network-commerce businesses — it runs a company's distributor network, product catalog, commission logic, and payouts in one place, white-labeled under the client's own brand. The person landing here runs or operates a direct-selling, membership, retail-rep, or referral-driven business and is deciding whether to move their whole operation — their people, their money — onto this platform. The brand voice is warm and partnership-led, not cold enterprise SaaS: "every business we work with is a partner, not a transaction." The site should feel premium and trustworthy with people's livelihoods and money, not flashy or hype-driven.

Build a fully dark-mode marketing site (home + features page) in this voice.

### Design system

**Signature element — the radiating network.** Everywhere the design needs one bold, memorable visual, use a branching node-and-line structure: a root node fanning outward into tiers of smaller connected nodes — literally a sponsor/downline tree, since that's the real shape of this business, not a decorative dot-grid. It doubles as a "Nova" burst radiating outward, tying the visual back to the name. This is the one signature idea on the page — keep everything around it quiet.

**Color** (define as custom properties and use consistently):
```css
--ink:      #0E0C11;   /* page background — near-black with a hint of warmth */
--charcoal: #18151C;   /* raised surface / card background */
--bone:     #F4F0E8;   /* primary text — off-white, not pure white */
--smoke:    #9B95A2;   /* secondary text, captions, muted copy */
--nova:     #F0A93B;   /* signature accent — the "burst" gold: CTAs, glow, emphasis */
--moss:     #7FA66B;   /* secondary accent — data/status contexts only */
```
Reserve `--nova` for moments that should pull the eye: primary buttons, the hero's node glow, the 01–05 markers, at most one emphasis word per headline. Don't let it creep into general decoration. `--moss` exists only so mockup UI (charts, status pills) isn't monochrome — it's not a general brand color.

**Type:**
- Display — **Fraunces**, for headlines and section statements only. Large, tight leading, lighter weight at big sizes so it reads warm rather than heavy — this is what keeps the site from feeling like generic SaaS-grotesk.
- Body — **General Sans**, for paragraphs, nav, buttons, card copy.
- Utility/mono — **IBM Plex Mono**, uppercase and letter-spaced, for eyebrow labels and any numeric data inside mockup UI (commission percentages, payout amounts, stats). This is where the type system itself carries "precision" — which matters for a platform handling people's money.

**Layout rhythm:** Stay dark throughout — don't switch to white page sections. Get contrast from `--ink` vs. `--charcoal` plus light-chrome product mockups floating on the dark page (the way Linear and Resend do it), not from alternating to a white page. Alternate text/visual sides section-to-section so nothing repeats the same centered block twice in a row. Generous vertical spacing — let it breathe.

**Motion — restrained:** One orchestrated hero load (network lines draw in, nodes settle with a soft pulse). Scroll reveals are a simple fade + ~10px rise. Card hover is a slight lift plus a faint `--nova` border glow. No floating blobs, no stacked parallax, never more than one moving thing on screen at once. Target "senior in-house design team," not "AI template."

**Voice notes for any new microcopy:** the doc leans on "your network," "built around you," "partner, not a transaction," "we clear the roadblocks," "grow." Match that register for anything you have to write that isn't in the copy below — plain, direct, second-person, no hype adjectives.

### Global navigation

No nav copy was specified, so use: logo left → **Features · Who It's For · How It Works · Contact** → primary button **Schedule a Demo** (`--nova` fill) on the right. Skip a Pricing link — every CTA in the copy is demo/discovery-call-led, not self-serve, so a public pricing page doesn't fit the sales motion as written. On scroll, give the nav a `--charcoal` backdrop blur so it stays legible over the hero visual.

### Homepage

#### 1. Hero

> **Built for Businesses That Grow Through People.**
>
> Running a direct selling business means managing people, products, commissions, and growth, all at once. NovaDirect brings every part of that operation together into one modern platform, built specifically around the way your network works, all under your brand.
>
> **[Button] Schedule a Demo**

Full-bleed `--ink`. The radiating network visual is the hero's centerpiece — root node near the headline, branches fanning outward behind and around the text. Headline in Fraunces, large (~64–80px desktop), `--bone`, broken across two lines at the natural clause break. Body paragraph in General Sans, `--smoke`, capped around 60 characters wide. Single `--nova` CTA button. On load, the network draws itself in — the one big motion moment on the page. There's no real product to screenshot yet, so let the network visual carry the fold rather than bolting on a generic dashboard mock (see Assets note at the end).

#### 2. Problem

> **The Hardest Part of Direct Selling Shouldn't Be Your Software.**
>
> Your growth depends on people. And those people depend on you getting everything right. Most platforms were built to be sold, not to help your business succeed.
>
> **NovaDirect was built differently.**

Still `--ink`, but a quiet beat after the hero — no card, no image, no competing visual. Large statement typography in Fraunces, each line given room to sit on its own. Set "NovaDirect was built differently." apart — slightly larger, or in `--nova` — since it's the pivot line of the section.

#### 3. Who It's For

> **Built for Any Business That Grows Through Its People.**
>
> If your business grows through a network of distributors, members, consultants, affiliates, ambassadors, or partners — and you need to manage, reward, and scale that growth properly — NovaDirect was built for you.

**Direct Selling Companies**
Building and managing a network of distributors or consultants with commission-based rewards.

**Membership and Subscription Businesses**
Running a member program where referrals, renewals, and rewards need to work together seamlessly.

**Product and Retail Brands**
Selling through a network of representatives or brand partners with tiered commissions, member pricing, and structured rewards.

**Ambassador and Referral Programs**
Rewarding customers, partners, or advocates who bring in new business through structured commission models.

**SaaS and Digital Product Companies**
Growing through partner programs, affiliate networks, or commission-based sales teams.

Shift up to `--charcoal` to mark the new section. Headline + intro centered, constrained width. Five cards below: 3 across, then 2 centered on the wrap. Give each card a small single-weight line icon that echoes the hero's node motif at small scale (a tiny 3-node cluster, arranged slightly differently per card) rather than five unrelated stock icons — every one of these five business types is a variation on the same network idea.

#### 4. How It Works

Displayed headline: **From First Conversation to Full Platform.**

> Whether you are launching your network for the first time or moving away from a platform that is holding you back, this is how we work with you.

1. **We Start With Your Plan** — Every business we work with comes with a vision for how their network should operate and how their people should be rewarded. That plan is where we start. We listen, we ask the right questions, and we make sure we understand your model completely before anything is built.
2. **We Build Around You** — Your commission structure, your member journey, your brand. NovaDirect is configured specifically around your business model, not the other way around.
3. **We Launch and Stay With You** — Going live is not the end of our involvement. We stay close, clear roadblocks, and make sure your platform grows as your business grows.

Simple horizontal 3-up on desktop (stacks on mobile), numbered 1–3 in `--nova` — the numbering is earned here since the copy itself frames this as a real sequence, not decoration. A thin connecting line runs behind the three numbers, a lighter callback to the hero's branching lines without repeating the full effect. Keep this section restrained — type and one thin line, no cards, no shadows. It's a breather between the two busier sections on either side of it.

#### 5. Every Layer of Your Business

*The core product section — give this the most detailed treatment on the page.*

Section headline: **Every Layer of Your Business. One Platform.**

**01 — Your People**
*Build, Manage and Grow Your Network*
> Your network is the engine of your business. NovaDirect gives you complete visibility and control over everyone in it, from the moment they join to the moment they become your top performer.
- Member and Distributor Management
- Referral Link and Sponsor Tracking
- Team Structures and Network Visibility
- Rank and Performance Management

**02 — Your Products**
*Sell What You Offer. However You Offer It.*
> Whether you sell physical products, digital services, memberships, or subscriptions, NovaDirect connects your offering directly to your network. Your members can browse, buy, and refer, all within your branded platform.
- Physical and Digital Product Management
- Membership and Subscription Management
- Bundles and Advanced Bundle Configuration
- Member Pricing and Retail Pricing

**03 — Your Compensation**
*Your Commission Logic. Built Exactly the Way You Designed It.*
> No two direct selling businesses reward their people the same way. NovaDirect is built to handle the full complexity of your compensation plan, whatever that looks like, accurately and automatically.
- Custom Commission Plan Configuration
- Multi-level and Referral Commission Support
- Bonus and Incentive Management
- Rank Advancement and Qualification Rules

**04 — Your Payments**
*From the First Transaction to the Final Payout. Handled.*
> Getting paid and paying out your network should never be a source of stress. NovaDirect manages the full payment cycle, from customer transactions and gateway integrations to wallet management, payouts, and tax compliance.
- Payment Gateway Integrations
- eWallet and Earnings Management
- Payout Request and Approval Workflows
- Tax Documentation and Compliance

**05 — Your Control**
*One Admin Layer. Complete Visibility Across Everything.*
> Every part of your operation, your members, your products, your commissions, your payouts, lives inside one unified admin experience. Role-based access means the right people see exactly what they need to.
- Unified Admin Panel
- Role Based Access and Permissions
- Real Time Reporting and Analytics
- Commission Management and Adjustments

**Layout direction:**
- Five stacked full-width chapters, alternating sides (01 text-left/visual-right, 02 flips, 03 flips back, and so on).
- A slim rail down one side (desktop only) lists 01–05 and highlights whichever chapter is in view while scrolling — the same job Attio's left-hand tab list and Linear's numbered sub-nav (1.0/2.0/3.0) do. It makes "layers stacking into one platform" a structural fact, not just a line of copy.
- Each chapter: the "01 —" marker in `--nova` Plex Mono, sub-headline in Fraunces, paragraph in `--smoke`, the 4 bullets as a plain checklist with a thin `--nova` tick.
- Pair each chapter with an illustrative mockup on the opposite side (no real product exists yet, so build simple, consistent light-chrome UI rather than stock dashboard art):
  - **01** → a member list with avatar rows, a rank badge, a small glimpse of a sponsor tree
  - **02** → a product/bundle card grid with a member-price vs. retail-price toggle
  - **03** → a compact commission-plan builder shown as a small tier/level diagram (a good spot for `--moss` as a second data color)
  - **04** → a payout/wallet summary card — balance, pending payout, a "Request payout" action
  - **05** → a compact admin panel — role list plus permission toggles

  Keep all five in the same light-UI chrome so they read as one product across five views, not five unrelated screens.
- The network motif reappears here at reduced intensity: a thin branching line runs down the persistent rail, visually "growing" from 01 to 05 as the page scrolls.

#### 6. Why Choose NovaDirect

> **Why Businesses Choose NovaDirect**
>
> There is no shortage of software in this space. Here is what makes NovaDirect different.

**We Are Invested in Your Success**
We do not hand over a platform and disappear. Every business we work with is a partner. We stay involved, we clear the roadblocks, and we measure our success by yours.

**Built for Your Model, Not the Other Way Around**
NovaDirect is not a rigid system you have to fit your business into. Your commission structure, your member journey, your product setup, everything is configured around how your business actually works.

**A Modern Platform That Keeps Moving**
Direct selling is evolving. The way people buy, refer, and get rewarded is changing. NovaDirect is built to move with that change, not against it.

**More Than a Platform When You Need It**
Behind NovaDirect sits a multidisciplinary team with capabilities across branding, design, development, marketing, and AI transformation. When your business needs more than software, we are already built for it.

Pull back to a calm 2×2 grid on `--charcoal`, after the density of the section before it. Don't number these — unlike the pillars or the process steps, these four are parallel reasons, not a sequence, so forcing 01–04 markers on them would be decoration, not information. Headline in General Sans (not Fraunces — keep the display face for section-level statements, out of card-level headings, so the hierarchy stays clear), paragraph in `--smoke`. No icons needed; this section is about substance, let the words do the work.

#### 7. Final CTA

> **Let's Talk About Your Business.**
>
> Every business that runs on NovaDirect starts with a conversation. Not a sales pitch. A real discussion about your network, your model, and what you are trying to build. If you are ready to explore what NovaDirect can do for your business, book a discovery call and let's figure it out together.
>
> **[Button] Schedule a Discovery Call**
> **[Link] Send Us a Message →**

Full-bleed `--ink`, the quietest, darkest moment of the page carrying the boldest line. Headline centered, large, Fraunces. Paragraph centered, constrained width, `--smoke`. Primary button (`--nova` fill) plus a secondary text link, side by side. A very faint, mostly-faded echo of the hero's network sits in the background — closes the visual loop the hero opened, without competing with the text.

### Footer

No footer copy was given, so use a standard structure: NovaDirect wordmark plus a short tagline (a shortened version of the hero line) on the left; **Product** (Features, Who It's For, How It Works) and **Company** (About, Careers, Contact) as link columns; a bottom row with © year, Privacy/Terms, and social icons if applicable. `--charcoal` background, `--smoke` links, `--bone` on hover.

### Features page

> **Everything Your Network Needs. All in One Platform.**
>
> NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts, all configured around your business and all under your brand.

Only this headline and subheadline exist for the page — no separate body copy was provided, so build the rest as a fuller-scale version of the "Every Layer of Your Business" section already specified above, rather than inventing new claims:
- Hero block with the headline/subhead above, on `--ink`
- A short jump nav (Your People · Your Products · Your Compensation · Your Payments · Your Control)
- Each of the five pillars gets the full-page real estate it deserves — same copy and bullets as the homepage, but a bigger mockup and more surrounding space, since this page's whole job is depth
- Close with the same Final CTA block used on the homepage

### Responsive & build notes

- Mobile: chapters in the "Every Layer" section stack (visual above text), the persistent side-rail nav collapses into a simple dot/number indicator, and the hero network graphic simplifies to fewer nodes so it doesn't turn into noise at small sizes.
- Respect `prefers-reduced-motion` — fall back to instant states, no exceptions.
- Visible keyboard focus states throughout, particularly on the nav, cards, and both CTA buttons.

---

## Assets to sort out

1. No real product screenshots exist yet — every mockup described above is illustrative. Fine as a placeholder for launch, but worth flagging to the client which pillar's real UI to swap in first once it exists.
2. No logo file turned up in what I checked — confirm whether a wordmark/mark already exists, or whether the hero needs to carry the name in type only for now.
3. If NovaDirect has brand guidelines anywhere outside this PDF, they should override the color/type system proposed here.
