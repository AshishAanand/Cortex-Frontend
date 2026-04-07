import { blogPosts } from '@/lib/blog-data'
import {Link} from 'react-router-dom'

const HomePage = () => {
    const posts = blogPosts.slice(1)

    return (
        /* Soft paper background to match the editor */
        <div className="min-h-screen bg-[#fdfcfb] text-stone-900 selection:bg-orange-100 px-6 py-16 md:py-24">

            <div className="max-w-4xl mx-auto space-y-20">

                {/* 🌿 Minimalist Greeting */}
                <header className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h1 className="text-4xl md:text-5xl font-serif italic text-stone-800 tracking-tight">
                        Welcome back, Ashish.
                    </h1>
                    <p className="text-stone-500 font-medium tracking-wide text-sm uppercase">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </header>

                {/* 🕯️ Latest Posts Section */}
                <section className="space-y-10">
                    <div className="flex items-end justify-between border-b border-stone-200 pb-4">
                        <h3 className="text-lg font-serif font-medium text-stone-700">
                            Recent Entries
                        </h3>
                        <button className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-800 transition-colors">
                            Archive →
                        </button>
                    </div>

                    {/* Simple List Layout - Feels more 'literary' than a dense grid */}
                    <div className="grid gap-12">
                        {posts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="group cursor-pointer animate-in fade-in slide-in-from-bottom-6 duration-700"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                                    {/* Date/Metadata sidebar */}
                                    <div className="w-32 hidden md:block pt-1">
                                        <span className="text-xs font-medium text-stone-400 uppercase tracking-tighter">
                                            {post.category} • {post.readTime}m
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3">
                                        <h2 className="text-2xl font-serif text-stone-800 group-hover:text-stone-500 transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                        <p className="text-stone-500 leading-relaxed line-clamp-2 font-light text-[16px]">
                                            {post.preview}
                                        </p>

                                        {/* Mobile Metadata */}
                                        <div className="md:hidden flex items-center gap-3 text-[10px] uppercase tracking-widest text-stone-400">
                                            <span>{post.category}</span>
                                            <span>•</span>
                                            <span>{post.readTime} min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ✍️ Floating Quick Action */}
                <div className="fixed bottom-30 right-10">
                    <Link to="/dashboard/write">
                        <button className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-stone-800 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                            <span className="text-sm font-medium">New Story</span>
                            <span className="text-lg">+</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
