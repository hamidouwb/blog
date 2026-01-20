export function HomeHeader() {
  return (
    <section className="px-4 py-6">
      <div className="space-y-4 py-6">
        <h2 className="text-4xl font-bold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
          Welcome Devs, I am Hamidou
        </h2>
        <p className="text-xl font-light text-gruvbox-light-fg1 dark:text-gruvbox-dark-fg1">
          I'm a full-stack software engineer with Bachelor's in Computer
          Science currently pursuing a Master's in Data Science. I program in a Personal Development Environment (PDE) using Neovim,
          leveraging its vast library of plugins. Besides coding, I immerse myself in 3D modeling, game
          development, and data science, blending these passions into my full-stack projects. The
          interactive 3D environment above showcases this integration—
          <strong className="text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">go ahead and explore it!</strong>
        </p>
        <p className="text-xl font-light text-justify leading-relaxed text-gruvbox-light-fg1 dark:text-gruvbox-dark-fg1">
          Learning computer science concepts can be intimidating for beginners, and my goal is to share
          what I am learning and the tools I use to become a productive developer.
        </p>
      </div>
    </section>
  );
}
