# Scotswood Garden Digital Sensory Trail

This repository contains the complete standalone Sensory Trail web app for Scotswood Garden.

## Live trail

The current live trail is:

https://em-ham.github.io/scotswood-sensory-trail/

Printed QR codes currently point to this address.

**Important:** Do not change the GitHub Pages address, repository name or Pages settings without checking the QR codes and testing the live trail first.

The app is hosted using GitHub Pages. It is built using standard HTML, CSS and JavaScript, so it can also be moved to another web host or incorporated into a future Scotswood Garden website.

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

## Audio guide

The recorded audio guide is stored in:

`audio/sensory-trail-full.mp3`

The audio is built into the trail.

Stop 6 – Accessible Garden – has written sensory prompts but is not included in the recorded audio.

Do not rename, move or replace the audio file without testing the whole trail afterwards.

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

The website is hosted using GitHub Pages, which may process ordinary technical information needed to provide the website.

Visitors should avoid entering personal or sensitive information into their trail journal.

## Before making major changes

Test:

- the trail on a phone
- the QR code
- notes, photos and drawings
- PDF generation
- Back and Next buttons
- Edit / add to a stop
- Return to My Trail
- Read aloud and Stop reading
- enlarged text
- high contrast
- the privacy information
- the audio guide at several stops

## Moving the app in future

The app is built using ordinary HTML, CSS and JavaScript.

It does not require Joomla or a database.

A future website developer can move the app to another suitable web host or integrate it into a replacement Scotswood Garden website.

The main requirement is that all the files remain together and the file paths in `index.html` remain correct.

## Ownership and handover

The project was originally developed in a personal GitHub repository and is being handed over to the **Scotswood Garden GitHub organisation**:

https://github.com/Scotswood-Garden

The aim is for the garden to manage the repository and the trail independently of the original developer.

Future staff or developers can use this README as a guide to the structure and maintenance of the app.

### Important QR-code note

The printed QR codes currently point to the original GitHub Pages address shown above.

GitHub Pages addresses do not automatically redirect when a repository is transferred to another owner.

Therefore, **the QR-code address must be tested and protected as part of any repository ownership transfer. Do not delete or recreate repositories, change the repository name, or change GitHub Pages settings without first checking the effect on the printed QR codes.**
