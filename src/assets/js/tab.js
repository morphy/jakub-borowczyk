const activatePanel = (targetPanel, panels) => {
  panels.forEach((panel) => {
    panel.classList.replace("opacity-1", "opacity-0");
  });

  window.setTimeout(() => {
    panels.forEach((panel) => {
      panel.classList.replace("block", "hidden");
    });

    targetPanel.classList.replace("hidden", "block");

    window.setTimeout(() => {
      targetPanel.classList.replace("opacity-0", "opacity-1");
    }, 10);
  }, 200);
};

const activateTab = (targetTab, tabs) => {
  tabs.forEach((button) => {
    button.classList.remove("bg-white", "bg-opacity-50");
  });

  targetTab.classList.add("bg-white", "bg-opacity-50");
};

export const tab = (name) => {
  const tabs = document.querySelectorAll(`#${name}-tabs button[data-target]`);
  const tabpanels = document.querySelectorAll(`#${name}-tabpanels section[id]`);

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const targetPanel = Array.from(tabpanels).find(
        (panel) => panel.id === event.target.dataset.target
      );

      activateTab(event.target, tabs);
      activatePanel(targetPanel, tabpanels);
    });
  });
};

export default tab;
