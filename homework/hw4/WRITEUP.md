# Homework 4 — Write-up

**Name:** Laila Dreidame
**RCS ID:** <!-- TODO: your RCS ID -->

A short paragraph for each. Keep the numbered headings; they are how your answers are found.

### 1. Your addOne

```jsx
function addOne(id) {
  setProducts(prev => prev.map(p =>
    p.id === id ? { ...p, quantity: p.quantity + 1 } : p
  ));
}
```

`.map` builds a brand-new array, and for the one product whose id matches, `{ ...p, quantity: p.quantity + 1 }`
builds a brand-new object: the spread copies every field of the old product (`id`, `name`, `quantity`) and then
the `quantity` after it overwrites just that one field. Every other product is returned as-is. If I left the
spread out and wrote `{ quantity: p.quantity + 1 }`, the new object would only have a `quantity` — the card would
lose its `name` (blank title) and its `id`, so the key would be `undefined` and the next Add one or Remove for
that card would never match `p.id === id` again.

### 2. Why key by id

React uses the key to decide which rendered card belongs to which item between renders. The id stays attached
to the product no matter where it sits in the array, but an index just means "whatever is in slot 1 right now."
If I keyed by index and removed Apples, Rice would move into slot 0 and React would think the Apples card had
simply changed its props. Anything the card keeps in its own state or the DOM (a focused button, a half-typed
input, an animation) would stay with slot 0 and show up on the wrong product — the symptom is a card that
looks like it "inherited" something from the one you just deleted.

### 3. Where total lives

`const total = products.reduce((sum, p) => sum + p.quantity, 0);` sits in the body of `MyPantry`, right before
the `return`, so it is recalculated from `products` on every render. The quantities already live in `products`;
a separate `useState` for the total would be a second copy of the same fact that I'd have to remember to update
in `addOne`, `removeProduct`, and `addProduct`. Forgetting one (for example, removing a card with quantity 3
without subtracting 3) leaves the total wrong. Computing it means it can't disagree with the cards.

### 4. Something that did not work the first time

<!-- TODO: write this one from your own experience — what you saw, what you thought, what it actually was. -->

### AI Use Statement

<!-- TODO: review and edit so it's accurate. -->
I used Claude (Claude Code) to help fill in drills 1–11, build `MyPantry.jsx`, and draft answers 1–3 of this
write-up. I ran `npm test` (18/18 passing) and read through the code to make sure each card is keyed by
`product.id` and that the total is computed from `products` rather than stored in `useState`.
