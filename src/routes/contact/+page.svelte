<script>
  import { Mail, MapPin, MessageSquare, Send } from 'lucide-svelte';
  import { contactMethods, faqs } from '$lib/data';
</script>

<svelte:head>
  <title>Contact - Moshe Deitsch</title>
  <meta name="description" content="Get in touch with me for collaborations, opportunities, or just to say hello" />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-4xl mx-auto">
      <h1 class="page-title">
        Let's <span class="text-accent">Connect</span>
      </h1>
      <p class="hero-description">
        I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
      </p>
      <div class="tag-list">
        <span class="hero-tag">
          <MessageSquare size={16} />
          <span>Quick Response</span>
        </span>
        <span class="hero-tag">
          <Mail size={16} />
          <span>Professional</span>
        </span>
        <span class="hero-tag">
          <Send size={16} />
          <span>Open to Opportunities</span>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Contact Content -->
<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">

      <!-- Contact Information -->
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Whether you have a project in mind, want to collaborate, or just want to say hello,
          I'd love to hear from you. Choose your preferred way to connect below.
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="contact-grid">
        {#each contactMethods as method}
          <a href={method.href} class="contact-card">
            <div class="contact-icon" style="background: {method.gradient}">
              <svelte:component this={method.icon} size={24} />
            </div>
            <div>
              <h3 class="contact-title">{method.title}</h3>
              <p class="contact-desc">{method.description}</p>
            </div>
          </a>
        {/each}
      </div>

      <!-- Location Card -->
      <div class="location-card">
        <div class="location-icon">
          <MapPin size={24} />
        </div>
        <div class="text-center">
          <h3 class="location-title">Location</h3>
          <p class="location-desc">Israel (UTC+3)</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section section-alt">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <div class="section-header">
        <h2 class="section-title">
          Frequently Asked <span class="text-accent">Questions</span>
        </h2>
      </div>

      <div class="faq-list">
        {#each faqs as faq}
          <article class="faq-card">
            <h3 class="faq-question">{faq.question}</h3>
            <p class="faq-answer">{faq.answer}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 6rem 0 4rem;
    background: var(--color-background);
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
  }

  .text-accent {
    color: var(--color-accent);
  }

  .hero-description {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .hero-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 9999px;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .section {
    padding: 5rem 0;
    background: var(--color-background);
  }

  .section-alt {
    background: var(--color-background-secondary);
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 36rem;
    margin: 0 auto;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    transition: all 150ms ease;
  }

  .contact-card:hover {
    border-color: var(--color-border-hover);
    box-shadow: 0 8px 30px rgba(var(--color-shadow, 0, 0, 0), 0.08);
  }

  .contact-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
    background: var(--color-accent);
  }

  .contact-title {
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: 1.125rem;
  }

  .contact-desc {
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
  }

  .location-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    max-width: 20rem;
    margin: 0 auto;
  }

  .location-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #10b981;
    color: white;
    flex-shrink: 0;
  }

  .location-title {
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: 1.125rem;
  }

  .location-desc {
    color: var(--color-text-secondary);
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .faq-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 150ms ease;
  }

  .faq-card:hover {
    border-color: var(--color-border-hover);
    box-shadow: 0 8px 30px rgba(var(--color-shadow, 0, 0, 0), 0.08);
  }

  .faq-question {
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .faq-answer {
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
</style>
