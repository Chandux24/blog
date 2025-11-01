import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { format } from "date-fns";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  author: string;
  publishedAt: string;
  category?: string;
  tags?: string[];
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  featuredImage,
  author,
  publishedAt,
  category,
  tags = [],
}: BlogCardProps) => {
  return (
    <Link to={`/post/${slug}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
        {featuredImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={featuredImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          {category && (
            <Badge variant="secondary" className="w-fit mb-2">
              {category}
            </Badge>
          )}
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(publishedAt), 'MMM dd, yyyy')}</span>
            </div>
          </div>
          {tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
