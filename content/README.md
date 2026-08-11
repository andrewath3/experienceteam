# Editing the site's content

Everything in this folder is what actually shows up on the site. Edit a file here, save it,
refresh the site in your browser — no code, no build step, nothing else to touch.

## Frontmatter vs. body

Every file starts with a block between two `---` lines. That's the **frontmatter** — short,
structured fields like labels, numbers, and lists. Below the second `---` is the **body** — the
actual prose, the sentences you'd revise.

```yaml
---
eyebrow: "WHO WE ARE"
headlineLines:
  - "We are a team of"
  - "experiential producers,"
---
We design and build brand experiences that live beyond the campaign.
```

- Change the text inside the quotes. Keep the quotes.
- Don't rename the fields on the left of each `:` (`eyebrow`, `headlineLines`, etc.) — those are
  what the site looks for. Renaming one means that piece of copy stops showing up.
- Lines starting with `-` are list items (multiple nav links, multiple headline lines, multiple
  stages). Add or remove a `-` line to add or remove an item.
- A line starting with `#` inside the frontmatter is a comment, not real content — like the
  `# TODO: placeholder default` notes on some projects flagging a value that still needs a real
  answer.

**Multiple paragraphs**: separate them with one fully blank line. Each becomes its own paragraph
on the page.

**No markdown formatting yet**: `**bold**`, `[links](...)`, and `#` headers in the body won't
render specially — they'll show up as literal characters. If that's ever needed, ask for it to be
added; it's a small change, just not built yet.

## Where things live

- `global/site.md` — nav labels, wordmark, the "Got something in mind?" banner on every page
- `about/` — the homepage: Who We Are, What We Do (+ its 4 capability files), When To Bring Us
  In, Who We've Worked With
- `work/page.md` — the Work page's headline and filter copy
- `contact/` — the Contact page's headline/body and the form's field labels
- `logos.md` — the client logo wall, in display order
- `projects/` — one file per case study, filename = the project's URL (e.g.
  `projects/mgm-shoey-bar.md` is `/work/mgm-shoey-bar`)

## Project fields

```yaml
---
order: 11                              # position in the Work page list — lower = earlier
client: "MGM"
title: "Shoey Bar"
type: "Activations & Installations"    # must exactly match one of the 4 categories used elsewhere
budget: "Medium"                       # Low / Medium / High, or null if not yet assigned
budgetRange: "$200–300k"               # optional, shown alongside the band — or null
image: "/case-studies/mgm-shoey-bar.jpg"
descriptor: null                       # one-line summary for the Work panel — not yet used anywhere
credits: null                          # or { partner: "...", role: "...", year: "..." }
awards: []                             # ["Webby Award, Best App"] etc.
---
A paragraph here becomes the project's description on its detail page. Leave the body empty and
it shows "Project description coming soon." instead.
```

## Adding a 16th project

1. Duplicate any file in `projects/` and rename it — the new filename becomes the URL, so use
   lowercase words separated by hyphens (e.g. `acme-holiday-pop-up.md`).
2. Fill in `client`, `title`, `type`, `budget`, `image`, and a unique `order` number.
3. Write the description as the body, or leave it empty for now.
4. Drop the photo into `public/case-studies/`, named to match the filename above
   (`acme-holiday-pop-up.jpg`).
5. Optional: add the project's slug to a `scatterSlugs` list in `about/who-we-are.md` or
   `about/what-we-do.md` to feature it in one of the homepage image clusters, or add it to
   `logos.md` to show the client's logo tile.

That's it — no code changes needed.
