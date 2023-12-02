function showContent(tabId) {
  // Hide all content and remove active class from tabs

  const allContent = document.querySelectorAll(".content");
  const allTabs = document.querySelectorAll(".tab");
  allContent.forEach((content) => content.classList.remove("active"));
  allTabs.forEach((tab) => tab.classList.remove("active"));

  // Show the selected content and set the selected tab as active
  const selectedContent = document.getElementById(tabId);
  const selectedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
  selectedContent.classList.add("active");
  selectedTab.classList.add("active");
}
