import { Button } from '@/components/ui/button'
import { Settings, Share2, Feather } from 'lucide-react'

const userPosts = [
    {
        title: 'Building a Better Tomorrow',
        preview: 'Reflections on how we can all contribute to a more thoughtful world.',
        readTime: 5,
        category: 'Personal',
        date: 'Oct 12'
    },
    {
        title: "The Minimalist's Desk Setup",
        preview: 'Why less is more when it comes to your creative workspace.',
        readTime: 4,
        category: 'Lifestyle',
        date: 'Sep 28'
    },
    {
        title: 'Learning in Public',
        preview: 'The benefits of sharing your learning journey with the community.',
        readTime: 6,
        category: 'Growth',
        date: 'Aug 15'
    },
]

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-[#fdfcfb] text-stone-900 selection:bg-orange-100 px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* 🕯️ Profile Header - Minimalist & Airy */}
                <header className="relative flex flex-col items-center text-center space-y-8 animate-in fade-in duration-1000">

                    {/* Abstract Avatar - Soft stone texture */}
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shadow-inner overflow-hidden">
                            <span className="text-3xl font-serif italic text-stone-400">A</span>
                        </div>
                        <div className="absolute inset-0 rounded-full border border-stone-900/5 scale-110 group-hover:scale-125 transition-transform duration-700" />
                    </div>

                    <div className="max-w-xl space-y-4">
                        <h1 className="text-4xl font-serif text-stone-800 tracking-tight">Ashish Anand</h1>
                        <p className="text-stone-500 font-light leading-relaxed text-lg">
                            Tech thinker and builder. Exploring the intersection of <span className="italic">AI, creativity</span>, and human systems.
                        </p>
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-stone-400 font-medium">
                            <div className="flex flex-col gap-1">
                                <span className="text-stone-800 text-sm">15</span>
                                <span>Articles</span>
                            </div>
                            <div className="w-[1px] h-8 bg-stone-200" />
                            <div className="flex flex-col gap-1">
                                <span className="text-stone-800 text-sm">2.3k</span>
                                <span>Mindshare</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="ghost" size="sm" className="rounded-full px-6 border border-stone-200 text-stone-600 hover:bg-stone-50">
                                <Share2 className="h-3.5 w-3.5 mr-2" /> Share
                            </Button>
                            <Button size="sm" className="rounded-full px-6 bg-stone-900 text-white hover:bg-stone-800 shadow-xl transition-all hover:-translate-y-0.5">
                                <Settings className="h-3.5 w-3.5 mr-2" /> Settings
                            </Button>
                        </div>
                    </div>
                </header>

                {/* 📜 Works Section */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-stone-200" />
                        <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 font-semibold">Published Works</h2>
                        <div className="h-[1px] flex-1 bg-stone-200" />
                    </div>

                    <div className="grid gap-16">
                        {userPosts.map((post, index) => (
                            <article
                                key={index}
                                className="group relative grid md:grid-cols-4 gap-8 items-start animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Date/Category Column */}
                                <div className="md:col-span-1 space-y-1 pt-1">
                                    <p className="text-[11px] uppercase tracking-widest text-stone-400">{post.date}</p>
                                    <p className="text-[10px] font-serif italic text-stone-500">{post.category}</p>
                                </div>

                                {/* Title & Preview Column */}
                                <div className="md:col-span-3 space-y-4">
                                    <h3 className="text-2xl font-serif text-stone-800 group-hover:text-stone-500 transition-colors cursor-pointer leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-stone-500 font-light leading-relaxed">
                                        {post.preview}
                                    </p>
                                    <div className="pt-2">
                                        <button className="text-[11px] font-medium uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors flex items-center gap-2">
                                            Read Entry <span className="h-[1px] w-4 bg-stone-200 group-hover:w-8 transition-all bg-stone-400" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Footer Quote */}
                <footer className="pt-20 pb-10 text-center">
                    <Feather className="h-5 w-5 text-stone-200 mx-auto mb-4" />
                    <p className="text-stone-300 font-serif italic text-sm">Write to think, think to grow.</p>
                </footer>
            </div>
        </div>
    )
}

export default ProfilePage
