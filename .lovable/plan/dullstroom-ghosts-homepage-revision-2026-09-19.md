# Dullstroom Ghosts Homepage Revision

## Goal
Revise the current literary archive around the supplied Dullstroom Ghosts banner, while preserving the approved paper palette, exact Foreword and story copy, and per-story R49 access.

## Build
- Replace the hero image with the uploaded banner, using the requested lighter overlay, title positioning and typography, middle line, readable bottom strap, and a “Read the hauntings” link to Stories.
- Keep the page sequence exactly: Hero, Foreword, top advertisement, Stories, event banner, Submit Story, Footer with sidebar advertisement.
- Preserve the exact Foreword, teaser, full story, archival placeholders, and persistent per-story R49 unlock flow.
- Add immediately visible 728×90 and sticky 300×250 advertisement placeholders with clear labels.
- Add the “Dullstroom Ghost Walk — Next Date TBA” event card after Stories.
- Add a separate submission section with Name, Email, Title, Story, live 750-word limit, the three exact required permissions, disabled submission until valid, and an on-page thank-you confirmation.
- Update navigation for the new sections while keeping it usable at narrow widths.

## Technical details
- Store the uploaded banner through the project asset service and reference its generated asset pointer.
- Keep all new inputs client-side only; no submission is sent or permanently stored.
- Validate required fields, email format, permissions, and word count before accepting the form.
- Keep semantic design tokens and existing button components.

## Validation
- Confirm a clean build.
- Verify desktop and mobile layouts for hero readability, section order, sticky ad behavior, navigation, no horizontal overflow, live word count, submit gating, confirmation, and story unlock behavior.
