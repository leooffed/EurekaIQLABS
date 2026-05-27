export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Scribel Studio',
    url: 'https://studio.scribel.com',
    logo: 'https://studio.scribel.com/logo.png',
    description:
      'Agence de création de sites vitrines, chatbots WhatsApp et systèmes de réservation pour entreprises africaines.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Douala', // ou ta ville
      addressCountry: 'CM',
    },
    sameAs: [
      'https://www.linkedin.com/in/tonprofil',
      'https://facebook.com/scribelstudio',
      'https://tiktok.com/@scribelstudio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+237671809395',
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}