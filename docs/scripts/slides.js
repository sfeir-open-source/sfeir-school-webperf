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
    '02-stability/01-title.md', //
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
