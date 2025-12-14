<script>
  import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="footer">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <span class="logo">MD</span>
          <span class="brand-name">Moshe Deitsch</span>
        </div>
        <p class="description">
          Full-stack developer passionate about creating beautiful, modern web experiences
          with cutting-edge technologies.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h3 class="section-title">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <a href="/" class="link">Home</a>
          </li>
          <li>
            <a href="/about" class="link">About</a>
          </li>
          <li>
            <a href="/projects" class="link">Projects</a>
          </li>
          <li>
            <a href="/blog" class="link">Blog</a>
          </li>
          <li>
            <a href="/contact" class="link">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Social Links -->
      <div class="space-y-4">
        <h3 class="section-title">Connect</h3>
        <div class="flex space-x-4">
          <a
            href="https://github.com/modeitsch"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/moshe-deitsch"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:moshe.deitsch@gmail.com"
            class="social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p class="copyright">
        © {new Date().getFullYear()} Moshe Deitsch. All rights reserved.
      </p>
      <p class="built-with">
        Built with SvelteKit & Tailwind CSS
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-background-secondary);
    border-top: 1px solid var(--color-border);
  }

  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-accent);
    font-family: var(--font-heading);
  }

  .brand-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    font-family: var(--font-heading);
  }

  .description {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .section-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .link {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    text-decoration: none;
    transition: color 150ms ease;
  }

  .link:hover {
    color: var(--color-accent);
  }

  .social-link {
    padding: 0.625rem;
    border-radius: 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms ease;
  }

  .social-link:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .footer-bottom {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .copyright,
  .built-with {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
</style>
