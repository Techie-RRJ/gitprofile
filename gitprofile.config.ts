export const config = {
  // Your info
  name: "[RRJ Techie]",
  tagline: "[Short bio, e.g., Data Analyst Lab | Python & Pandas for Insights]",
  avatar: "[Optional: Image URL, e.g., https://your-headshot.jpg — skip for now]",

  // Skills (for data analytics — adjust % levels)
  skills: [
    { name: "Python", level: "50%" },
    { name: "Pandas", level: "50%" },
    { name: "Matplotlib/Seaborn", level: "60%" },
    { name: "Data Cleaning/EDA", level: "50%" },
    { name: "SQL", level: "40%" }  // Add more if you have them
  ],

  // Projects (link your repos — add Titanic, AI agent)
  projects: [
    {
      name: "Titanic Survival EDA",
      description: "[Cleaned dataset with pandas, visualized survival rates by gender/age using matplotlib.]",
      url: "https://github.com/Techie-RRJ/python-data-analytics/blob/main/day1_titanic.ipynb"  // Update if your repo name differs
    },
    {
      name: "AI Data Analyst Agent",
      description: "[Auto-generates EDA notebooks for portfolio building.]",
      url: "https://github.com/Techie-RRJ/ai-data-analyst-agent"
    },
    {
      name: "[Netflix Trends]",
      description: "[Desc, e.g. Analyzed movie data for trends — upcoming AI-generated.]",
      url: "[Link to repo or Kaggle]"
    }
  ],

  // About/Bio (add your story)
  about: "[Building data analytics skills through Python projects. Completed Kaggle Titanic EDA and launching AI agent for automated insights.]",

  // Theme (pick one: 'minimal', 'dark', 'light', 'gruvbox')
  theme: "minimal"
};
