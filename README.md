
![Logo](https://github.com/vivipazos/workshop2-manifestos/blob/main/Svelte-Manifesto/public/header.png?raw=true)
# How support for the green agenda has grown, and waivered, over the last 30 years in European poltics
  
<video src="https://user-images.githubusercontent.com/13485334/117240496-8584cb80-ae63-11eb-9742-5bf0477072b2.mp4"></video>

[The Manifesto project](https://manifesto-project.wzb.eu/) is a massive effort to quantify and normalize in time and space (over 50 countries since 1945) every party’s policy positions derived from content analysis of their electoral programs. 
We’d want to focus on Europe’s ideological space and how it has changed significantly since the 90s. Social research is increasingly focused on the causes and effects of polarization. This dataset gives us some insight into whether these shifts are broad or narrow, if they’re clustered around certain issues or they’re sweeping changes, if they are localized or across many countries.

## What did we find out from the data?

That support for **environmental policies** was strongest in the 90s around the time of the Kyoto Protocol - even among right-wing parites. Since then, however, support has waivered, peaking only slightly around key climate agreements like 2015's Paris agreement. Left-wing parties are now supporting most of the drive towards green mentions in political manifestos.

## How did we make it?

You can view the project [here on Vercel](https://workshop2-manifestos.vercel.app/)

1. Using a connected scatter plot with a scrolly to explain the overall trends.

<img src="https://github.com/vivipazos/workshop2-manifestos/blob/main/Svelte-Manifesto/public/firstScreenshot.png?raw=true" width="400">

And, then an interactive scatter plot with a filter by country and election years.

<img src="https://github.com/vivipazos/workshop2-manifestos/blob/main/Svelte-Manifesto/public/secondScreenshot.png?raw=true" width="400">

<img src="https://github.com/vivipazos/workshop2-manifestos/blob/main/Svelte-Manifesto/public/thirdScreenshot.png?raw=true" width="400">

## Who made this?

- [Ànnia Monreal](https://github.com/lamonre)
- [Laura Aragó](https://github.com/laurarago)
- [Rebecca Pazos](https://github.com/vivipazos)

  
## Why did they do this?

This project was created by students for the [Masters in Visual Tools to Empower Citizens](http://www.mastervisualtoolsudg.com/) with the University of Girona. 
They were assisted by mentors [Xaquín G.V.](http://xocas.com/) and [Matt Osborn](https://www.linkedin.com/in/mosbrn/).

## Also, we won the workshop!
We got a win for this project out of the 2020/2021 cohort. All women teams for the win.

![Alt Text](https://media.giphy.com/media/xT8qB5nRllQYU3XSjS/giphy.gif)

---

## Other details below >>

- [Slack channel](https://mvtecworkspace.slack.com/archives/C01TCRHKWPL)
- [Airtable Calendar](https://airtable.com/shrSeMUhhLbotxQns)
- Github: This one! 
- [Figma](https://www.figma.com/file/wohbpROpknI0LRQDrGHsLo/manifesto-wireframe)

### Timeline
- Project kickoff: Tuesday, April 6
- Static prototype: ~~Monday, April 12~~ Thursday, April 15
- Shared repository: Wednesday, April 14
- Hackathon: Saturday, April 17 - 80% of the project ready + 7 hours to complete
- Deadline: Friday, April 23

### Countries
Link to [CSV](https://docs.google.com/spreadsheets/d/1VDj0Pjr_2WOjpA1MzgTKyQGtFNvlhReQyHL0YWxjzYc/edit?usp=sharing)

```
euCountries = ['Austria','Belgium','Bulgaria','Croatia','Cyprus','Czech Republic', 'Denmark', 'Estonia','Finland','France','Germany', 'Greece','Hungary','Ireland','Italy','Latvia','Lithuania','Luxembourg','Malta','Netherlands','Poland','Portugal','Romania','Slovakia','Slovenia','Spain','Sweden']
```

### Original idea
[The Manifesto project](https://manifesto-project.wzb.eu/) is a massive effort to quantify and normalize in time and space (over 50 countries since 1945) every party’s policy positions derived from content analysis of their electoral programs. 
We’d want to focus on Europe’s ideological space and how it has changed significantly since the 90s. Social research is increasingly focused on the causes and effects of polarization. This dataset gives us some insight into whether these shifts are broad or narrow, if they’re clustered around certain issues or they’re sweeping changes, if they are localized or across many countries ...

### Audience
We chose to serve the **general public** by bringing context to the parties shifts around an specific issue —and so it’s a more visual, journalistic story.
The visualizations should help build a critical understanding of the shifts in the political space in your specific country, how it connects with European trends, the results of those shifts.

### Goals
We chose to create a story for the general public, it will need to provide context beyond the Manifesto project analysis.
Main question: As parties moved to include environmental issues in their platforms, has that translated into a greener economy or a drop in emissions or ... ?

### About the data
We will be using data in the Manifesto Project Dataset (Main Dataset), not the Manifesto Corpus.

