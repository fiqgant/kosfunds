import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import { blogs } from "../../../../data/blogs";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Cover Image */}
        <div className="relative mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1000}
            height={500}
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
        </div>

        {/* Title and Meta */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm">
            Ditulis oleh{" "}
            <span className="font-semibold text-gray-800">{blog.author}</span> •{" "}
            {new Date(blog.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Article */}
        <article
          className="
            prose md:prose-lg lg:prose-xl max-w-none 
            prose-headings:font-semibold prose-headings:text-gray-800 
            prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-gray-700 prose-p:leading-relaxed 
            prose-p:my-4 prose-li:my-2 prose-ul:my-4 prose-ol:my-4
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-li:marker:text-blue-500 prose-li:pl-2
            prose-a:text-blue-600 hover:prose-a:text-blue-700 transition-colors
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
            prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-xl prose-blockquote:px-4 prose-blockquote:py-3
            leading-loose tracking-wide
          "
          dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
        />

        {/* Back Button */}
        <div className="flex justify-between items-center border-t pt-8 mt-10">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium"
          >
            <span className="text-lg">←</span>
            <span>Kembali ke Daftar Blog</span>
          </Link>

          <p className="text-sm text-gray-400 italic">
            Terakhir diperbarui: {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
}
