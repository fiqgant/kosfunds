"use client";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";


export default function Blog() {
  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Blog KosFunds</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Baca artikel seputar tips keuangan, budgeting, dan pengelolaan uang versi KosFunds.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post, i) => (
          <article key={i} className="p-6 border rounded-2xl hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 text-sm hover:underline"
            >
              Baca Selengkapnya →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
