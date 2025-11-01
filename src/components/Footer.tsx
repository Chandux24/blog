import { Link } from "react-router-dom";
import { PenSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <PenSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BlogHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern blog management system built for creators.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BlogHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
