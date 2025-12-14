<script>
  export let title = "Moshe Deitsch - Developer & Guitarist";
  export let description = "Full-stack developer passionate about creating beautiful, modern web experiences with cutting-edge technologies. Coding for breakfast, coding for lunch... playing guitar for brunch.";
  export let url = "https://modeitsch.github.io";
  export let image = "https://avatars.githubusercontent.com/u/41856538?v=4";
  export let type = "website";

  // Structured data for Person (JSON-LD)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Moshe Deitsch",
    "url": url,
    "image": image,
    "jobTitle": "Full Stack Developer",
    "description": description,
    "sameAs": [
      "https://github.com/modeitsch",
      "https://linkedin.com/in/moshe-deitsch",
      "https://twitter.com/modeitsch"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Svelte",
      "Node.js",
      "Web Development",
      "Full Stack Development"
    ]
  };

  // Structured data for Website (JSON-LD)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Moshe Deitsch Portfolio",
    "url": url,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Moshe Deitsch"
    }
  };
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="author" content="Moshe Deitsch" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content="Moshe Deitsch - Developer & Guitarist" />
  <meta property="og:site_name" content="Moshe Deitsch Portfolio" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:creator" content="@modeitsch" />

  <!-- Additional SEO -->
  <meta name="keywords" content="Moshe Deitsch, Full Stack Developer, Web Developer, JavaScript, TypeScript, React, Svelte, Node.js, Portfolio" />
  <meta name="geo.region" content="IL" />

  <!-- Structured Data (JSON-LD) -->
  {@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
</svelte:head>
