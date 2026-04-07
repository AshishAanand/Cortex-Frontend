export interface BlogPost {
    slug: string
    title: string
    preview: string
    author: string
    authorRole: string
    authorBio: string
    readTime: number
    category: string
    publishDate: string
    content: {
        type: 'heading' | 'paragraph' | 'blockquote' | 'list' | 'code' | 'image'
        text?: string
        level?: 1 | 2 | 3
        items?: string[]
        code?: string
        language?: string
        src?: string
        alt?: string
    }[]
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'future-of-ai-creative-writing',
        title: 'The Future of AI in Creative Writing',
        preview: 'Exploring how artificial intelligence is reshaping the landscape of modern writing and creative expression.',
        author: 'Sarah Chen',
        authorRole: 'AI Researcher & Writer',
        authorBio: 'Sarah Chen is an AI researcher with a passion for the intersection of technology and creative expression. She writes about emerging technologies and their impact on human creativity.',
        readTime: 8,
        category: 'AI & Technology',
        publishDate: 'Mar 15, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'Introduction',
            },
            {
                type: 'paragraph',
                text: 'Artificial intelligence has been a game-changer in many fields, and the creative writing industry is no exception. From generating story ideas to refining prose, AI tools are fundamentally transforming how writers work.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Current Landscape',
            },
            {
                type: 'paragraph',
                text: 'Today\'s AI writing assistants can help with everything from brainstorming to editing. They can suggest improvements in real-time and even generate entire passages based on prompts.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Human Element',
            },
            {
                type: 'paragraph',
                text: 'Despite the power of AI, the human creative spark remains irreplaceable. The most effective approach combines human creativity with AI capabilities to produce extraordinary work.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Looking Forward',
            },
            {
                type: 'paragraph',
                text: 'As AI continues to evolve, we can expect even more sophisticated tools that understand nuance, emotion, and context. The future of creative writing will be a beautiful collaboration between human and machine.',
            },
        ],
    },
    {
        slug: 'building-in-public-guide',
        title: 'Building in Public: A Builder\'s Guide',
        preview: 'The power of transparency and community engagement when launching your next big project.',
        author: 'Marcus Johnson',
        authorRole: 'Entrepreneur & Product Builder',
        authorBio: 'Marcus Johnson is a serial entrepreneur who has launched multiple successful products. He advocates for transparent, community-driven development.',
        readTime: 6,
        category: 'Entrepreneurship',
        publishDate: 'Mar 12, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'What Does Building in Public Mean?',
            },
            {
                type: 'paragraph',
                text: 'Building in public means sharing your journey with the world - the wins, the losses, and everything in between. It\'s about radical transparency and community engagement.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Why It Matters',
            },
            {
                type: 'paragraph',
                text: 'When you build in public, you get real-time feedback, build a community of supporters, and create accountability. Your audience becomes your greatest asset.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Challenges',
            },
            {
                type: 'paragraph',
                text: 'Building in public requires vulnerability and courage. You\'ll face criticism, but you\'ll also receive invaluable support and guidance.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Getting Started',
            },
            {
                type: 'paragraph',
                text: 'Start with a simple update schedule. Share your progress weekly or biweekly, be honest about challenges, and engage with your audience\'s feedback.',
            },
        ],
    },
    {
        slug: 'deep-work-distracted-world',
        title: 'Deep Work in a Distracted World',
        preview: 'Strategies for maintaining focus and creating meaningful work in an increasingly noisy digital landscape.',
        author: 'Elena Rodriguez',
        authorRole: 'Productivity Coach & Author',
        authorBio: 'Elena Rodriguez helps knowledge workers reclaim their focus and produce their best work. She\'s passionate about the practice of deep work in the modern age.',
        readTime: 10,
        category: 'Productivity',
        publishDate: 'Mar 10, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'The Crisis of Shallow Work',
            },
            {
                type: 'paragraph',
                text: 'We live in an age of unprecedented distraction. Email, notifications, and endless information compete for our attention, making it harder to engage in meaningful work.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'What is Deep Work?',
            },
            {
                type: 'paragraph',
                text: 'Deep work is professional activity performed in a state of unbroken concentration that pushes your cognitive abilities to their limit. It\'s where real value is created.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Practical Strategies',
            },
            {
                type: 'list',
                items: [
                    'Establish a deep work schedule - Block dedicated time for focused work',
                    'Eliminate distractions - Turn off notifications and silence your phone',
                    'Create rituals - Develop habits that signal your brain it\'s time for deep work',
                    'Use environmental design - Optimize your workspace for concentration',
                ],
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Compound Effect',
            },
            {
                type: 'paragraph',
                text: 'Even small amounts of daily deep work compound over time. Consistent focused effort produces extraordinary results.',
            },
        ],
    },
    {
        slug: 'philosophy-of-code',
        title: 'The Philosophy of Code',
        preview: 'Why programming is more than just syntax and logic - it\'s a form of philosophical expression.',
        author: 'James Mitchell',
        authorRole: 'Software Architect & Philosopher',
        authorBio: 'James Mitchell explores the philosophical dimensions of programming. He believes code is a mirror of human thought and values.',
        readTime: 12,
        category: 'Philosophy',
        publishDate: 'Mar 8, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'Code as Language',
            },
            {
                type: 'paragraph',
                text: 'Code is fundamentally a language - a way to express complex ideas in a format that machines can understand. Like all languages, it reveals the thought patterns of its creators.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Abstraction and Truth',
            },
            {
                type: 'paragraph',
                text: 'Programmers are modern philosophers, creating abstractions that model reality. Each abstraction represents a choice about what matters and what can be ignored.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Ethics of Code',
            },
            {
                type: 'paragraph',
                text: 'How we write code reflects our values. Clean code, good design, and ethical considerations should be central to programming practice.',
            },
        ],
    },
    {
        slug: 'minimalism-design-systems',
        title: 'Minimalism in Design Systems',
        preview: 'How constraints breed creativity: designing powerful systems with minimal complexity.',
        author: 'Alex Turner',
        authorRole: 'Design Systems Lead',
        authorBio: 'Alex Turner leads design systems at several tech companies. He\'s passionate about creating elegant, minimal interfaces.',
        readTime: 7,
        category: 'Design',
        publishDate: 'Mar 5, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'The Power of Constraints',
            },
            {
                type: 'paragraph',
                text: 'Constraints are not limitations - they are catalysts for creativity. When designing a system, less is often more.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'Core Principles',
            },
            {
                type: 'list',
                items: [
                    'Simplicity - Every element should serve a purpose',
                    'Consistency - Unified patterns across all components',
                    'Clarity - Clear communication through design',
                ],
            },
            {
                type: 'heading',
                level: 2,
                text: 'Implementation',
            },
            {
                type: 'paragraph',
                text: 'A minimal design system requires careful thinking about each component. Every addition should be justified and contribute meaningfully to the whole.',
            },
        ],
    },
    {
        slug: 'art-written-communication',
        title: 'The Art of Written Communication',
        preview: 'Mastering clarity, conciseness, and impact in your writing.',
        author: 'Dr. Emily Watson',
        authorRole: 'Writing Coach & Linguist',
        authorBio: 'Dr. Emily Watson has spent decades helping professionals improve their writing. She believes clear writing is clear thinking.',
        readTime: 9,
        category: 'Writing',
        publishDate: 'Mar 1, 2024',
        content: [
            {
                type: 'heading',
                level: 2,
                text: 'The Foundation: Clarity',
            },
            {
                type: 'paragraph',
                text: 'Clear writing is not a luxury - it\'s a necessity. Your ideas deserve to be understood, and your readers deserve clarity.',
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Three Pillars',
            },
            {
                type: 'list',
                items: [
                    'Clarity - Make your meaning unmistakable',
                    'Conciseness - Say more with fewer words',
                    'Impact - Leave your reader changed',
                ],
            },
            {
                type: 'heading',
                level: 2,
                text: 'Practical Techniques',
            },
            {
                type: 'paragraph',
                text: 'Start with strong verbs, eliminate jargon, and read your work aloud. These simple techniques dramatically improve your writing.',
            },
        ],
    },
]

export function getBlogPost(slug: string): BlogPost | null {
    return blogPosts.find(post => post.slug === slug) || null
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map(post => post.slug)
}

export function getRelatedPosts(author: string, excludeSlug?: string): Array<{ id: string; title: string; excerpt: string; author: string; readTime: number }> {
    return blogPosts
        .filter(post => post.author === author && post.slug !== excludeSlug)
        .slice(0, 2)
        .map(post => ({
            id: post.slug,
            title: post.title,
            excerpt: post.preview,
            author: post.author,
            readTime: post.readTime,
        }))
}
