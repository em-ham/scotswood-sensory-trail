# Scotswood Garden Digital Sensory Trail

This folder contains the complete standalone Sensory Trail web app. It is currently suitable for hosting on Netlify, but it is not tied to Netlify or Joomla and can be moved to another web host in future.

## The file staff are most likely to edit

### `trail-content.js`
This contains the wording for all eight trail stops.

You can edit:
- stop titles
- short introductions
- activity headings and text
- bullet lists / descriptive words
- journal prompts
- short note hints
- stop icons

The rest of the app should normally be left alone unless someone is comfortable with HTML, CSS or JavaScript.

## Other files

- `index.html` – loads the app and its files.
- `styles.css` – controls colours, spacing, buttons and layout.
- `app.js` – app behaviour: navigation, saving, photos, drawings, accessibility controls, editing and PDF generation.
- `scotswood-logo.png` – Scotswood Garden logo used by the app.

## Safest way to edit wording

1. Make a copy of the whole folder first.
2. Open `trail-content.js` in a plain-text/code editor such as VS Code.
3. Change only the text inside quotation marks.
4. Save the file.
5. Test the trail before publishing it.

Avoid deleting commas, quotation marks, square brackets or property names such as `title`, `intro`, `sections` or `journal`.

## Testing locally

The simplest check is to open `index.html` in a browser. For more reliable testing of camera/file functions, run a small local web server if available, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Updating the live Netlify version manually

If the site is being updated through Netlify manual deploys:

1. Test the updated folder first.
2. Zip the files so `index.html` is at the root of the ZIP.
3. Log in to the Scotswood Garden Netlify account/team.
4. Open the Sensory Trail project and upload the new ZIP under Deploys.
5. Test the live version on a phone.

## Recommended long-term setup

For easier handover, keep the master copy in a GitHub repository owned by or shared with Scotswood Garden, and connect that repository to Netlify. Then:

**GitHub = master/source copy**

**Netlify = public hosted version**

Staff should have their own logins rather than sharing passwords.

## Moving the app to another website or host later

The app is built with ordinary HTML, CSS and JavaScript. It does not require Joomla or a database. A future website developer can copy this folder to another suitable web host or integrate/link it from a replacement Scotswood Garden website.

The main requirement is that all files remain together and the file paths in `index.html` remain correct.

## Privacy design

The current app:
- does not require a name, email address or account
- stores notes, photos and drawings in the visitor's browser
- generates the journal PDF in the browser
- clears saved trail data after 7 days of inactivity
- provides a manual Clear/Start a new trail option
- does not send journal content to Scotswood Garden

The app currently loads the jsPDF PDF library from jsDelivr when the page opens. A future developer can bundle that library locally if preferred.

## Before public launch or after major changes

Test:
- iPhone and Android
- large phone photos
- PDF generation with several photos/drawings
- Back / Next / Edit stop / Return to My Trail behaviour
- Read aloud start and stop
- enlarged text and high contrast
- keyboard and screen-reader use
- privacy wording

## Support / ownership note

The organisational copy should be kept under an account or repository controlled by Scotswood Garden so the app is not dependent on one individual member of staff or volunteer.
