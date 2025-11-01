import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import AdminPosts from "./pages/admin/Posts";
import AdminNewPost from "./pages/admin/NewPost";
import AdminComments from "./pages/admin/Comments";
import AdminSettings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route path="posts/new" element={<AdminNewPost />} />
            <Route path="posts/edit/:id" element={<AdminNewPost />} />
            <Route path="comments" element={<AdminComments />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-post" element={<NewPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
