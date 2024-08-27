export const Footer = () => {
  return (
    <footer className="bg-dark-navy text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white">100xBets</h2>
        </div>
        <div className="text-center mb-4">
          <p>© 2024 100xBets.com | All Rights Reserved.</p>
          <p className="mt-2">1 BTC = $61,919.50</p>
        </div>
        <div className="text-center text-sm mb-6">
          <p>
            100xBets is owned and operated by Medium Rare N.V., registration
            number: 145353, registered address: Korporaalweg 10, Willemstad,
            Curaçao. Contact us at support@100xbets.com. Payment agent company
            is Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA
            COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and
            Registration number: HE 410775
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:support@100xbets.com" className="hover:text-white">
            Support: support@100xbets.com
          </a>
          <span>|</span>
          <a href="mailto:partners@100xbets.com" className="hover:text-white">
            Partners: partners@100xbets.com
          </a>
          <span>|</span>
          <a href="mailto:press@100xbets.com" className="hover:text-white">
            Press: press@100xbets.com
          </a>
        </div>
      </div>
    </footer>
  );
};
