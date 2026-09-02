import { useParams, Link } from "react-router";
import BlogSidebar from "./BlogSidebar";
import ArticleContent from "./ArticleContent";
import CommentSection from "./CommentSection";
import { blogPosts } from "../../data/blog";

export default function SingleBlog() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.article) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-xl font-semibold text-gray-900 mb-3">
            Post not found
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            We couldn't find a blog post at "{slug}".
          </p>
          <Link to="/blog" className="text-[#00B712] font-medium text-sm">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main content */}
          <div>
            <ArticleContent post={post} article={post.article} />
            <div className="mt-10">
              <CommentSection comments={post.article.comments} />
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
