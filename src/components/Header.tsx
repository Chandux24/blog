import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { PenSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <PenSquare className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">BlogHub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
          {user && (
            <Link
              to="/new-post"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
            >
              New Post
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <Link to="/admin">
              <Button variant="default" size="sm">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
