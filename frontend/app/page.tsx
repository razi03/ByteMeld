{/* Update the footer section to include the newsletter form */}
<footer className="border-t py-12">
  <div className="container">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 className="text-lg font-semibold">ByteMeld</h3>
        <p className="mt-4 text-sm text-muted-foreground">
          Bridging Code & Creativity for Impactful Solutions
        </p>
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
          <NewsletterForm />
        </div>
      </div>
      {/* Rest of the footer content remains the same */}
    </div>
  </div>
</footer>