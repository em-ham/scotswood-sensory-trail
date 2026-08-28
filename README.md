# Scotswood Garden Digital Sensory Trail

This folder contains the complete standalone Sensory Trail web app.

The app is currently hosted using GitHub Pages. It is built using standard HTML, CSS and JavaScript, so it can also be moved to another web host or incorporated into a future Scotswood Garden website.

## The file staff are most likely to edit

### `trail-content.js`

This contains the wording for all eight trail stops.

You can edit:

- stop titles
- short introductions
- activity headings and text
- bullet lists and descriptive words
- journal prompts
- short note hints
- stop icons

The rest of the app should normally be left alone unless someone is comfortable with HTML, CSS or JavaScript.

## Other files

- `index.html` – loads the app and its files.
- `styles.css` – controls colours, spacing, buttons and layout.
- `app.js` – controls how the app works, including navigation, saving, photos, drawings, accessibility controls, editing and PDF generation.
- `scotswood-logo.png` – the Scotswood Garden logo used by the app.

## Safest way to edit trail wording

1. Make a copy of the whole project first.
2. Open `trail-content.js`.
3. Change only the wording.
4. Avoid deleting quotation marks, commas, brackets or other code.
5. Save the file.
6. Test the trail before publishing the changes.

## Updating the live website

The live website is hosted using GitHub Pages.

To update the app:

1. Make the required changes to the files.
2. Upload or edit the updated file in the GitHub repository.
3. Commit the changes.
4. GitHub Pages will publish the updated version automatically.
5. Test the live website after the update.

Changes may take a few minutes to appear. If an old version appears, try refreshing the browser or testing in a different browser or private/incognito window.

## Privacy design

The current app:

- does not require a name, email address or account
- stores notes, photos and drawings in the visitor's browser
- generates the journal PDF in the browser
- clears saved trail data after 7 days of inactivity
- provides a Start a New Trail option to clear the current trail
- does not send visitors' journal content to Scotswood Garden

The website is hosted using GitHub Pages.

## Before making major changes

Test:

- the trail on a phone
- notes, photos and drawings
- PDF generation
- Back and Next buttons
- Edit / add to a stop
- Return to My Trail
- Read aloud and Stop reading
- enlarged text
- high contrast
- the privacy information

## Moving the app in future

The app is built using ordinary HTML, CSS and JavaScript.

It does not require Joomla or a database.

A future website developer can move the app to another suitable web host or integrate it into a replacement Scotswood Garden website.

The main requirement is that all the files remain together and the file paths in `index.html` remain correct.

## Ownership and handover

The GitHub repository should eventually be owned or controlled by Scotswood Garden so that the app is not dependent on one individual member of staff or volunteer.

Future staff or developers can use this README as a guide to the structure and maintenance of the app.
