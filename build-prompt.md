# Build prompt — Experience Team site update

Paste this into Claude Code against the existing build.

---

## Context

This is an internal site for the Experience Team, a group within OP (part of Omnicom). Its audience is anyone across Omnicom's agencies — account leads, creative teams, producers — who may never have heard of the team. The site's job is discovery and reputation: understand the team exists, what it does, see proof it's good, and get in touch. It is not a leadership pitch.

Tone throughout is familiar and friendly. Never corporate.

---

## Do not change

- **All existing hover states and their behavior.** Keep them exactly as built.
- **The existing horizontal scroll mechanism on the Work page.** We're keeping this pattern — don't rebuild or replace it.

---

## First priority: extract all copy into editable files

Right now copy is presumably inline. Pull it out so each page's text can be edited without touching components.

Create one copy file per page, plus one for shared/global strings, plus one per project. Match the existing project's conventions for format (TS, JSON, MDX — whatever's already in use) and location.

```
/content/
  global.*          nav labels, contact banner, footer
  about.*           About Us page
  work.*            Work page headline, filter labels
  contact.*         Contact page, form labels, form states
  projects/
    state-street-fearless-girl.*
    verizon-unbreakable-controller.*
    annovera-website-companion-app.*
    lockheed-martin-robot-recruiter.*
    mastercard-tap-go-play.*
    lockheed-martin-field-trip-to-mars.*
    ny-lottery-must-love-dogs.*
    prudential-flash-forward.*
    instax-website.*
    state-street-loudest-bell.*
    mgm-shoey-bar.*
    sas-batting-lab.*
    lysol-mini-labs.*
    chick-fil-a-break-room.*
    mucinex-monsters-in-waiting.*
```

Each project file holds: client, project name, slug, one-line descriptor, project type, budget band, longer description, credits, image references.

No copy should remain hardcoded in components.

---

## Second priority: organize images for easy swapping

```
/public/images/
  about/
    scatter-01.jpg … scatter-08.jpg     scattered circles on About Us
  projects/
    <project-slug>/
      thumb.jpg                          Work page panel
      hero.jpg                           project page hero
      gallery-01.jpg … gallery-0n.jpg    project page gallery
  logos/
    <client-slug>.svg                    logo wall
```

Images are referenced from the copy files by path, never imported directly into components. Swapping an image should mean dropping a file in and, at most, editing one line of a copy file. Use consistent aspect ratios per role: portrait for `thumb`, landscape for `hero`, square-croppable for `about/scatter`.

---

# Page 1 — About Us

Landing page. One scrolling page, four sections, sub-nav anchors to the first three.

**Sub-nav:** Who we are · What we do · When to bring us in

## Section 1 — Who we are

Eyebrow: `WHO WE ARE`

Headline (large, four lines):
> We are a team of
> experiential producers,
> user-centered designers,
> & creative technologists.

Accent line (italic, accent color, sits directly under headline):
> —and we're here to help!

Body 1:
> We design and build brand experiences that live beyond the campaign — the things people can walk into, pick up, and take part in. We sit within OP and Studio, and we're available to any team at any Omnicom agency.

Body 2:
> Strategy, design, and build all sit on one team, so you're not stitching three vendors together and hoping they talk to each other. We plug into how you already work — early, late, or somewhere in the messy middle.

**Then: image scatter.** 3–4 circular project images at varying sizes and vertical offsets. Asymmetric — they should read as editorial, not as an evenly spaced gallery. Each links to its project page.

## Section 2 — What we do

Eyebrow: `WHAT WE DO`

Headline:
> We design, build, and produce brand experiences that reach audiences beyond the campaign, no matter the format.

Intro:
> Audiences don't just want to be talked to anymore. The work that stands out gives them something to do. That's what we take on — from a single interactive moment inside a bigger campaign through to a full build that lives on long after the flight ends.

Four capabilities. These four labels must exactly match the Work page's project type filters — they double as navigation.

**01 — Take a campaign further than the ad**
*Digital campaign extensions*
> Microsites, companion apps, social integrations, and digital extensions that give a campaign somewhere to go once someone's actually interested.

**02 — Put something real in the world**
*Activations and installations*
> Physical builds, branded environments, and live moments — designed, engineered, and produced end to end, including the parts nobody wants to think about until week three.

**03 — Make the audience part of it**
*Interactive experiences*
> Interactive tech, AI-driven moments, immersive environments, and hands-on experiences that turn viewers into participants.

**04 — Build something that lasts**
*Platforms and products*
> Websites, tools, and digital products with real architecture behind them, built to be maintained rather than just launched.

Link into Work: `See what this looks like in practice →`

**Then: image scatter 2.** 3–4 more circular project images.

## Section 3 — When to bring us in

Eyebrow: `WHEN TO BRING US IN`

Headline:
> We work best when we're brought in early, so we can help shape what's possible before the brief is set.

Four stages across, each with a small stage label above and a question in larger type below. A thin horizontal connector line with a dot at each stage sits above the labels.

**All four stages are treated identically — no fading, dimming, or de-emphasis of later stages.** The point is that there's a stage for everyone, not that early is better. The earlier-is-better message lives in the headline and closing copy only.

| Stage label | Question |
|---|---|
| A LOOSE IDEA | Could we actually do this? |
| WRITING THE BRIEF | What should the brief ask for? |
| CONCEPTING | Can it be built — and for how much? |
| READY TO BUILD | Who's going to make this? |

Give the question blocks a consistent height so they align on a common baseline regardless of wrap.

Closing:
> If you're asking any of these, ask us. The earlier we're in, the more we can shape what's possible — but there's no wrong time to get in touch.

> Not sure whether your budget matches the idea? Ask early — that's a quick conversation, and much better to have now than after a client has seen a concept.

## Section 4 — Who we've worked with

Eyebrow: `WHO WE'VE WORKED WITH`

**No headline.** Eyebrow and logo wall only.

Logo wall, 15 clients: State Street, Verizon, Mastercard, Lockheed Martin, Prudential, SAS, Lysol, Chick-fil-A, Mucinex, MGM, Instax, NY Lottery, Annovera, US Bank, Fujifilm.

No button here — Work is already in the main nav, and the contact banner sits directly below.

---

# Page 2 — Work

Headline:
> A look at some of the experiences we've designed, built, and produced.

## Filters

Two filter rows above the scroller.

**Project type** — All / Digital campaign extensions / Activations & installations / Interactive experiences / Platforms & products. Labels must match the About Us capability names exactly.

**Project budget** — Any / Low / Medium / High.

Show the active result count on the "All" chip.

## Layout

Full-bleed horizontal scrolling strip of portrait panels, matching the existing deck layout and using the existing scroll mechanism.

- Each panel: full-bleed image, then a label bar beneath with client name (accent color), project name, and client logo.
- Left/right arrow buttons, tappable. Disable and dim the arrow at each end of the range.
- Position counter, e.g. `01 — 05 OF 15`. **This must update when filters are applied** (e.g. `01 — 02 OF 02`).
- Keep a partial panel visible at the right edge as an affordance that there's more to scroll. Don't land on a clean edge.
- Panels link through to project pages.
- Panels must be keyboard-reachable and focusable — arrow-click-only navigation strands keyboard users.

## Filtering behavior — needs handling

Filtering can return fewer results than fill the strip, which would leave dead space and non-functional arrows.

**Preferred solution:** panels widen to fill the available width when the result set is small. A two-result filter shows two large panels, not two small ones with an empty shelf beside them.

If that's too costly, fall back to reflowing into a grid below a threshold of ~5 results. Least preferred: fixed width, left-aligned, arrows disabled.

Handle the zero-results state too — a short line plus a link to clear filters.

---

# Page 3 — Project detail

One page per project, generated from the project copy files.

Structure:
- Back link to Work
- Client name (accent, small) above project name (large)
- Tags: project type, and budget band
- Hero image
- Description paragraph
- Image gallery, 3–6 images
- Credits row: what we did / year

**Two decisions still open — flag rather than assume:**
1. Whether the budget band should appear on the detail page at all. On the grid it's abstract; next to a named client it reads more like a disclosure. Default to showing it, but make it a single toggle to remove.
2. Whether credits should include the lead agency. Default to omitting it.

---

# Page 4 — Contact

Eyebrow: `CONTACT`

Headline:
> Let's chat!

Body:
> Fully briefed or still a half-formed idea in a deck someone sent you this morning — either way, send it over. We'd rather hear about it early.

**Teams block sits above the form** (most people want a quick question, not a form):
> Just want to ask something quick? → **Chat on MS Teams**

**Form fields:**
- Your name
- Your email
- Agency / team
- Client or brand *(optional)*
- What are you working on? — textarea, placeholder: `A rough description is fine. Nothing here needs to be final.`
- Roughly when? *(optional)* — placeholder: `Even "sometime this fall" helps.`

Submit button: `Send it over`

Confirmation: `Got it — thanks. Someone from the team will be in touch shortly.`

Error: `Something went wrong on our end. Try again, or just message us on Teams.`

Form submits to a single email address. No routing logic.

---

# Global — contact banner

Slim strip at the foot of every page. Not an embedded form.

> Got something in mind? Let's chat!

Buttons: `Chat on MS Teams` · `Send us a note`

---

# Placeholders to leave in

Don't invent values for these. Leave clearly marked placeholders in the copy files:

- **Project descriptors** (the one-line summary on each Work panel) — not yet written.
- **Project descriptions** (the longer paragraph on detail pages) — not yet written.
- **Budget bands** for all 15 projects — not yet assigned.
- **Project type** assignment for all 15 projects — not yet assigned.
- **Year and credits** per project.
- **Intake form destination email.**
- **MS Teams deep link** — must be verified as accessible to staff at Omnicom agencies outside OP's tenant, not just OP.
