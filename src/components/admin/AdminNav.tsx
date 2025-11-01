import { NavLink } from "react-router-dom";
import { LayoutDashboard, FilePlus, FileText, MessageSquare, Settings } from "lucide-react";

const AdminNav = () => {
  return (
    <nav className="space-y-1">
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`
        }
      >
        <LayoutDashboard className="mr-3 h-5 w-5" />
        Dashboard
      </NavLink>
      
      <NavLink
        to="/admin/posts/new"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`
        }
      >
        <FilePlus className="mr-3 h-5 w-5" />
        New Post
      </NavLink>
      
      <NavLink
        to="/admin/posts"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`
        }
      >
        <FileText className="mr-3 h-5 w-5" />
        Manage Posts
      </NavLink>
      
      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`
        }
      >
        <MessageSquare className="mr-3 h-5 w-5" />
        Manage Comments
      </NavLink>
      
      <NavLink
        to="/admin/settings"
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`
        }
      >
        <Settings className="mr-3 h-5 w-5" />
        Settings
      </NavLink>
    </nav>
  );
};

export default AdminNav;
