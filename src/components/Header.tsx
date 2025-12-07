import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <FileText className="h-6 w-6" />
          BillMe
        </Link>
        <nav>
          <Link
            to="/generate"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Create Invoice
          </Link>
        </nav>
      </div>
    </header>
  );
}
