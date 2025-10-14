export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Sreejith M S. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
