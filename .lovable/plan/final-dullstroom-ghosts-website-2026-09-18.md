# Final Dullstroom Ghosts Website

## Goal
Replace the current dark promotional page with a calm, eerie literary archive on warm paper tones, using the exact supplied foreword, teaser, and story copy.

## Build
- Create the fixed homepage sequence: Hero, Foreword, Stories, Footer.
- Add a restrained sticky navigation with Home, Stories, and Foreword links.
- Use Cormorant Garamond for headings and long-form reading, with responsive typography and no horizontal overflow.
- Build the layered misty-highland and aged-paper foreword treatment, including the bordered 840px reading panel.
- Replace the current cards and membership section with one “Children At Play” story card.
- Add an in-page story reading view with a back link, full teaser, paywall, unlocked story, and two archival photograph placeholders with captions.
- Centralize `PRICE` and `CURRENCY`, and derive every unlock label from those values.
- Persist access with `dg_story1_unlocked`; simulate payment with confirmation and leave the requested Paystack/Yoco integration note in code.
- Add distinct page metadata describing the literary historical archive.

## Interaction
- Opening the story hides the homepage and reveals the story page.
- Back returns to the Stories section.
- Locked story text is absent from view until payment is confirmed or prior access is found locally.
- Navigation remains usable on mobile without a separate overflowing menu.

## Validation
- Check the production build signal.
- Test homepage order, anchors, opening/back flow, unlock persistence, and text visibility.
- Visually inspect desktop and mobile widths for readable spacing and overflow.
