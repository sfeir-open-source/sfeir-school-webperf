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
    '01-intro/01-title.md',
    '01-intro/10-definition.md',
    '01-intro/20-criterias.md',
    '01-intro/30-goals.md',
    '01-intro/40-metrics.md',
    '01-intro/50-how-to-measure.md',
    '01-intro/60-letsgo.md',
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
    '02-stability/20-images.md',
    '02-stability/21-images-issue.md',
    '02-stability/22-example.md',
    '02-stability/23-solution.md',
    '02-stability/24-css.md',
    '02-stability/25-responsive.md',
    '02-stability/26-videos.md',
    '02-stability/27-aspect-ratio.md',
    '02-stability/30-space.md',
    '02-stability/31-problem.md',
    '02-stability/32-not-only-loading.md',
    '02-stability/33-reserve-space.md',
    '02-stability/34-reserve-space-2.md',
    '02-stability/35-user-action.md',
    '02-stability/40-lab.md',
    '02-stability/50-webfonts.md',
    '02-stability/51-problem.md',
    '02-stability/52-foit.md',
    '02-stability/53-fout.md',
    '02-stability/54-pre-loading.md',
    '02-stability/55-font-display.md',
    '02-stability/56-size-adjust.md',
    '02-stability/60-lab.md',
  ];
}

function speedSlides() {
  return [
    '03-speed/01-title.md',
    '03-speed/02-float-line.md',
    '03-speed/10-intro.md',
    '03-speed/11-example.md',
    '03-speed/12-lcp.md',
    '03-speed/13-lcp-calc.md',
    '03-speed/14-speed-index.md',
    '03-speed/15-speed-index-calc.md',
    '03-speed/16-speed-index-example.md',
    '03-speed/17-causes.md',
    '03-speed/20-images.md',
    '03-speed/21-format.md',
    '03-speed/22-example.md',
    '03-speed/23-responsive-image.md',
    '03-speed/24-dpr.md',
    '03-speed/25-lazyload.md',
    '03-speed/26-example.md',
    '03-speed/30-loading-javascript.md',
    '03-speed/31-preload.md',
    '03-speed/32-preload-prefetch.md',
    '03-speed/33-fetchpriority.md',
    '03-speed/34-defer-async.md',
    '03-speed/35-load-js.md',
    '03-speed/36-import-dynamic.md',
    '03-speed/40-critical-path.md',
    '03-speed/41-network.md',
    '03-speed/50-http.md',
    '03-speed/51-http-intro.md',
    '03-speed/52-http1.md',
    '03-speed/53-http1.1.md',
    '03-speed/54-http2.md',
    '03-speed/55-http3.md',
    '03-speed/56-http-devtools.md',
    '03-speed/60-compression.md',
    '03-speed/61-compression-intro.md',
    '03-speed/62-minification.md',
    '03-speed/63-compression.md',
    '03-speed/64-comparision.md',
    '03-speed/65-who.md',
    '03-speed/66-devtools.md',
    '03-speed/70-cache.md',
    '03-speed/71-cache-intro.md',
    '03-speed/72-cache-headers.md',
    '03-speed/73-cache-public.md',
    '03-speed/74-bfcache.md',
    '03-speed/75-serviceworker.md',
    '03-speed/76-cache-recap.md',
  ];
}

function interactivitySlides() {
  return [
    '04-interactivity/01-title.md',
    '04-interactivity/02-intro.md',
    '04-interactivity/10-main-thread.md',
    '04-interactivity/11-js-mono-threaded.md',
    '04-interactivity/12-blocking.md',
    '04-interactivity/13-event-loop.md',
    '04-interactivity/14-event-loop-quizz.md',
    '04-interactivity/15-thread-visualisation.md',
    '04-interactivity/16-long-task.md',
    '04-interactivity/17-long-task-input.md',
    '04-interactivity/20-inp.md',
    '04-interactivity/21-inp-intro.md',
    '04-interactivity/21-inp-schema.md',
    '04-interactivity/22-inp-submetrics.md',
    '04-interactivity/30-tti.md',
    '04-interactivity/31-tbt.md',
    '04-interactivity/32-devtools.md',
    '04-interactivity/40-solutions.md',
    '04-interactivity/41-solution-onload.md',
    '04-interactivity/42-solution-onload-example.md',
    '04-interactivity/43-style-recalc.md',
    '04-interactivity/44-style-recalc-causes.md',
    '04-interactivity/45-split.md',
    '04-interactivity/46-settimeout.md',
    '04-interactivity/47-settimeout-third.md',
    '04-interactivity/48-settimeout-delayed-render.md',
    '04-interactivity/49-priority.md',
    '04-interactivity/50-workers.md',
    '04-interactivity/51-workers-limitations.md',
    '04-interactivity/60-conclusion.md',
    '04-interactivity/70-lab.md',
  ];
}

function customMetricsSlides() {
  return [
    '05-custom-metrics/01-title.md',
    '05-custom-metrics/02-intro.md',
    '05-custom-metrics/10-user-timing.md',
    '05-custom-metrics/20-performance-observer.md',
    '05-custom-metrics/30-element-timing.md',
    '05-custom-metrics/40-loaf.md',
    '05-custom-metrics/50-event.md',
    '05-custom-metrics/60-resource-timing.md',
  ];
}

function automationSlides() {
  return [
    '06-automation/01-title.md', //
  ];
}

function observabilitySlides() {
  return [
    '07-monitoring/01-title.md',
    '07-monitoring/10-intro.md',
    '07-monitoring/20-tools.md',
    '07-monitoring/30-metrics.md',
    '07-monitoring/40-sampling.md',
    '07-monitoring/50-reporting.md',
    '07-monitoring/60-alerting.md',
  ];
}

function conclusionSlides() {
  return [
    '08-conclusion/01-title.md', //
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...stabilitySlides(),
    ...speedSlides(),
    ...interactivitySlides(),
    ...customMetricsSlides(),
    ...automationSlides(),
    ...observabilitySlides(),
    ...conclusionSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
