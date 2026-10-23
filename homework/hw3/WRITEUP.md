# Homework 3 — Write-up

**Name:** Laila Dreidame
**RCS ID:** ldreidame
**Tailwind Play link:** worked locally

Short answers. Two or three sentences each is plenty.

---

### 1. Flexbox or grid?

You used flexbox for the header and grid for the cards. In your own words, what made
each the right tool? If you had to do the card grid with flexbox instead, what would
get harder?

> Flexbox was the right tool for the header because the title and the nav links needed to sit in a single row and align to the same visual center line. Grid was the better choice for the cards because the layout needed multiple columns that changed at different breakpoints, which is exactly what `grid-template-columns` and responsive classes handle well. If I had tried to build the card grid with flexbox instead, I would have had to manage wrapping and row alignment manually, which gets messy and is harder to keep consistent across widths.

---

### 2. The breakpoint

Pick one class in your file that has a `md:` or `lg:` prefix. Write it here, then say
what the page looks like below that width and what changes above it.

> I used `md:grid-cols-2` on the card grid. Below that width, the cards stack in one column. Above the `md` breakpoint, the grid changes to two columns, which makes the layout more compact and readable on tablets and larger screens. At even wider widths, `lg:grid-cols-3` expands the cards to three columns, which keeps the page balanced instead of feeling crowded.

Class: `md:grid-cols-2`

---

### 3. Mobile-first

Tailwind's unprefixed classes apply at every width, and a prefix like `md:` only adds
behaviour from that width up. Why does writing the phone layout first, and then adding
`md:` classes, end up being less work than the other order?

> Writing the phone layout first makes the default state clear and keeps the page readable on small screens. Then the `md:` classes add only the extra behavior for larger screens, so I am not trying to undo a desktop layout for smaller screens later. This is less work because the page starts from the simplest layout and then expands upward instead of doing the larger layout first and forcing it back down.

---

### 4. The drills

Which drill did you have to stop and think about — say which file it was in.
What was going on in it?

> The trickiest drill was in `drills-grid.html`: the one where the dark box had to span two columns. I had to remember that the span class belongs on the item itself, not on the grid container, and that the grid still remained in three columns while one item extended across more than one column.

---

### 5. The thing you taught yourself (Task 4)

Which class did you pick, and where in `index.html` did you use it?

> Class: `flex-1`
> Where: on the `<p>` description inside each of the six cards in `#cards` (each card is now `flex flex-col` with a "Read more →" link at the bottom)

What does it do, and what CSS does it compile to? (The docs page has both — the second
one is in the table.)

> `flex-1` tells a flex item to grow and take up whatever space is left over in its flex container. It compiles to `flex: 1;`, which means grow 1, shrink 1, and start from a basis of 0, so the item absorbs all the leftover space.

Why there? What would go wrong if you removed it?

> The grid makes every card in a row the same height, but the cards have different amounts of text, so the shorter ones have empty space. With `flex-1` on the description, the paragraph soaks up that space and pushes the "Read more" link to the bottom, so the links line up across the row. If I remove it, each link sits right under its own text and the links end up at three different heights in the same row.

Anything you tried first that did not work?

> First I put `flex-1` on the `<nav>` in the header. The test passed, but nothing visibly changed when I removed it: the header's `justify-between` was already pushing the links to the right, so `flex-1` only made the nav's invisible box wider. I moved it to the cards, where removing it visibly breaks the alignment.

---

### 6. What broke, and the AI Use Statement

What did not work the first time, and how did you sort it out?

> The first pass did not give the header the correct `display:flex` and the card grid had no responsive column classes, so the structure still looked like stacked blocks. I fixed that by following the course README’s layout rules and checking the Playwright tests to confirm which computed styles were still failing.

**AI Use Statement — required.** Did you use an AI assistant on this assignment? If yes,
say which one, what you asked it for, and what you did with the answer. If it gave you
something that did not work, say so — that is worth as much as a success. If you did not
use one, write "No AI used."

> I used GitHub Copilot to help interpret the assignment instructions and to check which Tailwind classes matched the required flexbox and grid behavior. I verified every suggestion against the course README and the browser test failures before using it in the final file. After grading feedback, I used Claude (Claude Code) to review my submission. It pointed out that removing my `flex-1` from the nav did not visibly change the page, and it helped me move it into the cards, stack the header on phones with `flex-col sm:flex-row`, rerun the tests, and retake the screenshots.

