export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border/50 glass">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          <p>&copy; {currentYear} Oroscopo IT. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
