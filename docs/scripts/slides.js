import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/01-title.md',
    '00-school/10-speaker-mathieu.md',
    '00-school/11-speaker-antoine.md',
    '00-school/15-tour-de-table.md',
    '00-school/20-planning.md',
    '00-school/30-requirements.md',
    '00-school/31-wifi.md',
    '00-school/32-repo.md',
    '00-school/40-what-we-will-do.md',
    '00-school/41-plan.md',
    '00-school/42-application.md',
    '00-school/43-commands.md',
  ];
}

function introSlides() {
  return [
    '01-intro/01-title.md', //
  ];
}

function stabilitySlides() {
  return [
    '02-stability/01-title.md',
    '02-stability/10-intro.md',
    '02-stability/11-example-1.md',
    '02-stability/12-example-2.md',
    '02-stability/13-cls.md',
    '02-stability/14-cls-calc.md',
    '02-stability/16-causes.md',
    '02-stability/20-webfonts.md',
    '02-stability/21-problem.md',
    '02-stability/22-foit.md',
    '02-stability/23-fout.md',
    '02-stability/24-pre-loading.md',
    '02-stability/25-font-display.md',
    '02-stability/26-size-adjust.md',
    '02-stability/30-images.md',
    '02-stability/31-images-issue.md',
    '02-stability/32-example.md',
    '02-stability/33-solution.md',
    '02-stability/34-css.md',
    '02-stability/35-responsive.md',
    '02-stability/36-videos.md',
    '02-stability/37-aspect-ratio.md',
    '02-stability/40-space.md',
    '02-stability/41-problem.md',
    '02-stability/42-not-only-loading.md',
    '02-stability/43-reserve-space.md',
    '02-stability/44-example.md',
    '02-stability/45-viewport.md',
    '02-stability/46-user-action.md',
    '02-stability/47-example.md',
    '02-stability/50-lab.md',
  ];
}

function speedSlides() {
  return [
    '03-speed/01-title.md',
    '03-speed/10-intro.md',
    '03-speed/20-images.md',
    '03-speed/30-loading-javascript.md',
    '03-speed/40-critical-path.md',
    '03-speed/50-network.md',
    '03-speed/60-cache.md',
  ];
}

function interactivitySlides() {
  return [
    '04-interactivity/01-title.md', //
  ];
}

function observabilitySlides() {
  return [
    '05-observability/01-title.md', //
  ];
}

function automationSlides() {
  return [
    '06-automation/01-title.md', //
  ];
}

function conclusionSlides() {
  return [
    '07-conclusion/01-title.md', //
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...stabilitySlides(),
    ...speedSlides(),
    ...interactivitySlides(),
    ...observabilitySlides(),
    ...automationSlides(),
    ...conclusionSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
