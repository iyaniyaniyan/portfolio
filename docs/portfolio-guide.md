# Gabay sa pag-update ng portfolio

Kung may video ka nang nakahanda, puwede kang dumiretso sa [Unlisted YouTube](#unlisted-youtube). Para sa unang local edit, magsimula sa [Local preview sa Windows](#local-preview-sa-windows).

| Gusto mong gawin | Saan mag-e-edit |
| --- | --- |
| Pangalan, portrait, intro, bio, email, résumé | [src/data/profile.ts](../src/data/profile.ts) |
| Social profile links | [src/data/socials.ts](../src/data/socials.ts) |
| Degree, year level, graduation | [src/data/education.ts](../src/data/education.ts) |
| Skills at tools | [src/data/skills.ts](../src/data/skills.ts) |
| Verified certificates | [src/data/certifications.ts](../src/data/certifications.ts) |
| Project order, case study, screenshots, links, video | [src/data/projects.ts](../src/data/projects.ts) |
| Images, MP4, captions, PDF | [src/assets](../src/assets) |
| Kulay, type, spacing, mobile layout | [src/styles/index.css](../src/styles/index.css) |
| Browser title, search description, favicon | [index.html](../index.html) at [public/favicon.png](../public/favicon.png) |
| Mga pinapayagang field at spelling | [src/types/portfolio.ts](../src/types/portfolio.ts) |

## Local preview sa Windows

1. Install ang Git at Node.js 22 kung wala pa. Sa PowerShell o terminal ng VS Code, i-check ang `git --version`, `node --version` at `npm --version`.
2. Sa folder kung saan mo itatago ang project, patakbuhin ito **isang beses**.

~~~sh
git clone https://github.com/iyaniyaniyan/portfolio.git
cd portfolio
npm ci
npm run dev
~~~

3. Buksan ang URL na may `/portfolio/` na ipi-print ng Vite, karaniwang `http://localhost:5173/portfolio/`. Habang bukas ang terminal, awtomatikong makikita ang mga sine-save mong edit.
4. Para huminto, pindutin ang **Ctrl+C**. Sa susunod, buksan ang terminal sa parehong folder. Kung malinis ang working tree, kunin muna ang updates gamit ang `git pull --ff-only`. Ulitin ang `npm ci` kapag nagbago ang lockfile. Pagkatapos, `npm run dev`.
5. Kung hinarang ng PowerShell ang `npm.ps1`, gamitin ang `npm.cmd ci` at `npm.cmd run dev`, o buksan ang Command Prompt.

[Node.js downloads](https://nodejs.org/en/download) · [Git for Windows](https://git-scm.com/downloads/win)

## Mabilis na text edit sa GitHub

Sa repository, buksan ang file mula sa table sa itaas. Pindutin ang pencil, mag-edit, at tingnan ang **Preview changes** o ang diff bago piliin ang **Commit changes**. Para sa maraming file, pindutin ang `.` sa repository para buksan ang web editor. Sa Source Control, i-review at i-commit ang mga pagbabago nang sabay. Kapag nasa `main` na ang commit, magsisimula ang Pages workflow. Para sa bagong video file, malaking layout change, o maraming larawan, mas madaling i-preview muna sa local setup. [GitHub web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)

## Magdagdag ng project

Buksan ang `src/data/projects.ts`. Nakaayos ang entries sa pagkakasunod nila sa homepage. Ang unang entry ngayon ay `kabscholar`. Ang `portfolio-site` ang maikling halimbawa ng project na may public source link.

1. Kopyahin ang isang entry **sa loob ng** `projects` array, kasama ang braces at comma. Palitan agad ang `id` ng unique na lowercase slug. Nagiging direct link ang ID, gaya ng [KABScholar](https://iyaniyaniyan.github.io/portfolio/#kabscholar).
2. Ilagay ang `title`, `category`, `summary` at `stack`. Sa summary, sabihin kung sino ang gumagamit, anong ginagawa nila, at anong output ang nakukuha nila. Sa `stack`, ilista lang ang aktuwal na ginamit.
3. Optional ang `notes`, `images`, `video` at `links`. Alisin ang field kapag wala pang content. Kapag private ang repository, maaari mong ilagay ang project gamit lang ang write-up at screenshots.
4. Sa `notes`, bawat entry ay may `heading` at `text`. Magandang laman ang **sarili mong role**, isang technical decision, at ang makikitang resulta. Halimbawa sa KABScholar, ano ang nangyayari kapag napagkamalang grantee ang aplikante? Iyon ang dahilan ng separate applicant export. Sa group project, linawin kung alin ang ambag mo at alin ang gawa ng team.
5. Para sa links, gamitin ang `links: [{ label: 'View source', href: '…' }]` at palitan ang ellipsis ng totoong public URL. Puwede ring magdagdag ng pangalawang object na may label na `Open live demo`. Buksan muna ang destination sa signed-out browser.
6. I-save at buksan ang project sa phone width. I-click ang notes, screenshots, at links. Bago alisin o baguhin ang isang lumang ID, tandaan na maaaring naka-bookmark ito o nakalagay sa résumé.

## Magdagdag ng screenshots

1. Gumamit ng demo records. Sa KABScholar, i-frame ang workflow na ipinapakita at alisin sa capture ang names, student numbers, personal email, at account IDs. Ang maikling caption ay dapat magsabi kung ano ang nakikita sa screen.
2. Mag-save ng malinaw na WebP o PNG sa `src/assets/`. Kapaki-pakinabang ang mga pangalang tulad ng `kabscholar-review.webp`. Tingnan ang screenshot sa phone at pagkatapos ay sa full size para siguradong nababasa ang UI.
3. Sa itaas ng `projects.ts`, mag-import ng file. Halimbawa, ganito ang ginagamit na screenshot sa site.

~~~ts
import dashboard from '../assets/kabscholar-dashboard.webp';
~~~

4. Sa project object, ilagay ang image sa `images`. Ito ang hugis ng entry para sa kasalukuyang dashboard.

~~~ts
images: [
  {
    src: dashboard,
    alt: 'Application counts and disbursed funds in the KABScholar dashboard.',
    caption: 'Scholarship office dashboard',
  },
],
~~~

5. Ang unang image ang cover. Para magdagdag ng pangalawa, i-import ito gamit ang ibang pangalan at magdagdag ng isa pang object sa array. Lalabas ang ibang screenshots sa **Read project notes**. Naki-click ang bawat screenshot para makita sa original size.
6. I-import ang local files mula sa `src/assets`. Si Vite ang magbibigay ng tamang URL sa ilalim ng `/portfolio/`. Kapag mali ang filename o capitalization, makikita ang problema sa build. [Vite asset handling](https://vite.dev/guide/assets.html)

## Unlisted YouTube

**Record.** Para sa unang KABScholar demo, sapat ang 60–90 segundo. Isang posibleng daloy ang pag-open ng sample application, pag-review ng document, at pagtingin sa bagong status sa student side. Ipakita ang pagbabago sa screen. Gumamit ng sample account at lagyan ng captions kapag may narration.

**Upload.** Sa YouTube Studio, piliin ang **Create → Upload videos** at piliin ang recording. Sa video details, buksan ang **Show more** at tingnan kung naka-on ang **Allow embedding**. Sa **Visibility**, piliin ang **Unlisted** at i-save. Kopyahin ang viewer link mula sa **Share**. Kahit sino na may link ay puwedeng manood at mag-share nito, kasama ang mga bumisita sa public portfolio. [YouTube upload steps](https://support.google.com/youtube/answer/57407) · [Visibility settings](https://support.google.com/youtube/answer/157177) · [Embedding settings](https://support.google.com/youtube/answer/171780)

**Ikabit.** Sa `src/data/projects.ts`, hanapin ang `id: 'kabscholar'`. Ipasok ang property na ito sa parehong object, halimbawa sa ilalim ng `stack`. I-paste ang buong Share link sa pagitan ng quotes ng `url`.

~~~ts
video: {
  kind: 'youtube',
  url: '',
  title: 'KABScholar scholarship application walkthrough',
},
~~~

**Subukan.** Sa local preview, pindutin ang **Watch walkthrough**, saka ang **Play**. Gamitin din ang **Watch on YouTube** at subukan sa private/incognito window. Sinusuportahan ang `youtu.be` share link, regular `youtube.com/watch?v=` link, at YouTube `shorts`, `live`, at `embed` URLs. Puwedeng kasama sa share link ang `?si=…`. Walang kailangang API key, iframe HTML, o upload sa GitHub. Lilitaw ang control kapag may valid na video URL. Pag binuksan ang control, doon pa lang naglo-load ang privacy-enhanced player. Pag isinara ito, hihinto ang playback. [YouTube privacy-enhanced embedding](https://support.google.com/youtube/answer/171780)

**Palitan o alisin.** I-edit ang `url` at `title` para palitan ang video. Alisin ang buong `video` property kung gusto mong alisin ang walkthrough sa project. Sa YouTube Studio mo pinamamahalaan ang visibility ng original upload.

## Local MP4 at captions

Para sa maikling recording na gusto mong i-serve kasama ng site, mag-export ng browser-compatible MP4, gaya ng H.264 video na may AAC audio. Kapag mahaba ang recording, mas magaan para sa repo ang YouTube. [GitHub file sizes](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)

Maglagay ng sarili mong `kabscholar-demo.mp4` at, kung may narration, `kabscholar-en.vtt` sa `src/assets/`. Sa itaas ng `projects.ts`, i-import ang files.

~~~ts
import demo from '../assets/kabscholar-demo.mp4';
import captions from '../assets/kabscholar-en.vtt?url';
~~~

Sa project object, ito ang ipalit sa YouTube `video` property. Ang `dashboard` ay ang existing image import sa file. Optional ang `poster` at `captions`. Kung walang caption track, alisin din ang captions import.

~~~ts
video: {
  kind: 'file',
  src: demo,
  title: 'KABScholar application review',
  poster: dashboard,
  captions: { src: captions, language: 'en', label: 'English' },
},
~~~

Ito ang format ng `.vtt`. Palitan ang oras at teksto ayon sa recording mo. Kung Filipino ang captions, gamitin ang `language: 'fil'` at `label: 'Filipino'`.

~~~text
WEBVTT

00:00:00.000 --> 00:00:03.500
The reviewer opens a sample scholarship application.

00:00:03.500 --> 00:00:07.000
The student can now see the review decision.
~~~

Sa preview, pindutin ang Play, i-seek ang video at buksan ang captions sa player. Isang video ang may sariling control bawat project.

## Resume, profile at certificates

**Résumé.** Ilagay ang totoong PDF sa `src/assets/christian-iligan-resume.pdf`. Sa itaas ng `profile.ts`, idagdag ang import sa ibaba. Pagkatapos, idagdag ang `resumeUrl: resume,` **sa loob ng** `profile` object. Lalabas ang **Résumé** katabi ng **Email me**. I-click at buksan ang na-download na PDF. Para alisin ito, tanggalin ang property at import bago alisin ang file.

~~~ts
import resume from '../assets/christian-iligan-resume.pdf?url';
~~~

**Profile at portrait.** I-edit ang role, intro, bio, location, caption at email sa `profile.ts`. Para palitan ang portrait, mag-import ng square photo mula sa `src/assets/` at gamitin ito sa `photo`. Ang email dito rin ang ginagamit sa hero at footer. Nasa `socials.ts` ang listahan ng social profiles.

**Education at skills.** I-update ang standing at expected graduation sa `education.ts`. Sa `skills.ts`, magdagdag o magtanggal sa `items` ng tamang group. Kung binabanggit mo ang isang tool sa case study, ilarawan din kung ano ang ginawa mo rito.

**Certificate.** Kapag may verified credential ka na, magdagdag ng object sa `certifications` array. Ang fields ay `title`, `issuer`, at `date`. Optional ang `credentialUrl` kung may public verification page ang issuer. Lalabas ang section kapag may entry. Buksan ang credential link sa signed-out window bago i-publish.

## Baguhin ang design

Nasa unang `:root` block ng `src/styles/index.css` ang palette. `--paper` ang page background, `--ink` at `--muted` ang text, `--blue` ang accent, at `--rule` ang mga divider. Nasa parehong file ang tablet at mobile layouts. Para magpalit ng font, i-update ang Fontsource imports, `--serif` o `--sans`, at ang font license na kasama sa `public/licenses/`.

Kung magbabago ang pangalan o professional focus, i-update din ang `<title>` at description sa `index.html`. Ang browser tab icon ay `public/favicon.png`. Kapag nananatiling `portfolio` ang repo name, ang tamang GitHub Pages base sa `vite.config.ts` ay `/portfolio/`.

## Panatilihing personal ang susunod na update

- Sa case study, pumili ng isang screen at isang desisyong kaya mong ikuwento sa interview. Sa halip na maglista ng limang abstract na benepisyo, ipakita kung ano ang ini-input ng user at anong rekord o report ang lumalabas.
- Gamitin ang kasalukuyang heading, spacing, at buttons. Para sa bagong project, idaan ito sa `projects.ts` para automatic nitong makuha ang parehong mobile at desktop layout. Ang paulit-ulit na generic gradients at default typography ay mga pattern na naobserbahan din sa AI-generated frontends. [Anthropic on frontend design](https://claude.com/resources/articles/improving-frontend-design-through-skills)
- Sa source, pangalanan ang data ayon sa ginagawa nito. Kapag kailangan ng paliwanag sa code, mas mahalaga ang dahilan ng isang decision kaysa comment na binabasa lang ulit ang susunod na linya. Ilagay ang mahabang tutorial dito sa guide para madaling maintindihan ang components. [Google code review guide](https://google.github.io/eng-practices/review/reviewer/looking-for.html)

## Test, publish at rollback

1. Sa repo root, patakbuhin ang sumusunod.

~~~sh
npm run lint
npm run build
npm run preview
~~~

2. Buksan ang **preview URL** na ibinigay ng Vite. I-refresh sa `/portfolio/#kabscholar`, i-open ang notes at screenshot, i-check ang email address, at subukan ang bagong video o PDF. Sa 360–390 px width, tingnan kung may naputol na text o side-scroll. Gamitin ang **Tab** at **Enter** para subukan ang mga link at expand controls.
3. Sa pangalawang terminal, patakbuhin ang `git status --short` at `git diff`. I-stage lang ang files na may kinalaman sa edit. Halimbawa, para sa YouTube URL lang ang binago, ito ang buong publish step.

~~~sh
git add src/data/projects.ts
git diff --cached
git commit -m "Add KABScholar walkthrough"
git push origin main
~~~

4. Kung may bagong local media, i-stage rin ang aktuwal na asset kasama ng content file bago mag-commit. Sa **GitHub → Actions → Deploy to GitHub Pages**, hintayin ang green na **build** at **deploy**. Buksan ang [live portfolio](https://iyaniyaniyan.github.io/portfolio/) sa bagong tab. Ang settings para sa repo ay **Settings → Pages → Build and deployment → Source → GitHub Actions**. [Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
5. Kung kailangang ibalik ang isang published edit, tingnan muna ang `git status` at `git log --oneline -5`. Sa malinis na checkout ng updated `main`, gamitin ang `git revert` kasunod ng hash ng mismong maling commit. I-preview ang resulta, patakbuhin ulit ang checks, saka `git push origin main`. Gumagawa ito ng bagong commit at pinapanatili ang kasaysayan.

## Troubleshooting

| Nakikita mo | Unang tingnan |
| --- | --- |
| Walang **Watch walkthrough** | Nasa tamang project object ba ang `video`? `kind: 'youtube'` ba? Pumili ng Share link mula sa mismong video. Ang Studio edit link, channel link, at playlist-only link ay walang playable video ID para sa component. |
| May control pero “Video unavailable” | Buksan ang direct link nang signed out. Suriin ang Visibility at Allow embedding, hintaying matapos ang processing, at tingnan kung age-restricted ang upload. Sa error 153, subukan ang Pages URL sa browser na nagpapadala ng referrer. [YouTube embed troubleshooting](https://support.google.com/youtube/answer/171780) |
| Gumagana ang MP4 pero walang captions | I-check ang import na `.vtt?url`, `WEBVTT` header, timestamps, language, at CC menu ng player. |
| Missing screenshot, PDF, o build error | I-match ang spelling at capital letters ng filename sa import. Sa GitHub Actions, Linux ang build machine. I-check rin kung kasama ang asset sa commit. |
| Lumang version pa rin | Tingnan kung nasa `main` ang commit at kung successful ang **deploy** para sa parehong commit. Buksan ang Pages URL sa private window o mag-hard refresh gamit ang Ctrl+F5. |
| Nagbubukas ang email app pero walang message na naipadala | Ang email link ay gumagawa ng draft sa default mail app. Puwede ring kopyahin ang address sa footer at gamitin ang preferred mail service. |
| Blank page sa local build | Buksan ang URL mula sa `npm run preview` kasama ang `/portfolio/`. Ang pag-double click sa `dist/index.html` ay gumagamit ng ibang URL scheme. |
