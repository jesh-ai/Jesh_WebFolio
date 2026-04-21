export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const getActiveSection = (sectionIds: string[]): string => {
  // When the user can't scroll any further, the last section wins.
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 80;
  if (atBottom) return sectionIds[sectionIds.length - 1];

  // Otherwise: last section whose top edge has passed the trigger line.
  const TRIGGER = 120;
  let active = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= TRIGGER) active = id;
  }

  return active;
};
