import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import { Button } from '@/components/ui/button'
import {
    Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2,
    List, Quote, Undo, Redo
} from 'lucide-react'
import { useState } from 'react'

const WritePage = () => {
    const [title, setTitle] = useState('')

    const editor = useEditor({
        extensions: [StarterKit, Underline, TextStyle, Color],
        content: '',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                // Using prose-stone for a warmer, paper-like feel than slate
                class: "prose prose-stone max-w-none focus:outline-none text-[17px] leading-relaxed min-h-[500px]",
            },
        },
    })

    if (!editor) return null

    return (
        /* Soft 'Paper' background color (#fdfcfb or stone-50) */
        <div className="min-h-screen w-full flex justify-center bg-[#fdfcfb] px-6 py-20 text-stone-900 selection:bg-orange-100">

            <div className="w-full max-w-2xl">

                {/* Minimalist Title - Serif fonts give a more 'writer' vibe */}
                <input
                    type="text"
                    placeholder="The beginning of something..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-4xl font-serif bg-transparent outline-none border-none placeholder:text-stone-300 mb-12"
                />

                {/* Floating Toolbar - Subtle & Clean */}
                <div className="sticky top-10 z-40 mb-10 flex flex-wrap items-center gap-1 p-1.5 rounded-full border border-stone-200 bg-white/70 backdrop-blur-md shadow-sm transition-all hover:shadow-md">
                    <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')}>
                        <Bold className="h-4 w-4" />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')}>
                        <Italic className="h-4 w-4" />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')}>
                        <UnderlineIcon className="h-4 w-4" />
                    </ToolbarButton>
                    <div className="w-[1px] h-4 bg-stone-200 mx-1" />
                    <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })}>
                        <Heading1 className="h-4 w-4" />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })}>
                        <Heading2 className="h-4 w-4" />
                    </ToolbarButton>
                    <div className="w-[1px] h-4 bg-stone-200 mx-1" />
                    <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')}>
                        <List className="h-4 w-4" />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')}>
                        <Quote className="h-4 w-4" />
                    </ToolbarButton>
                    <div className="flex-grow" />
                    <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
                        <Undo className="h-4 w-4" />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
                        <Redo className="h-4 w-4" />
                    </ToolbarButton>
                </div>

                {/* Editor Surface */}
                <div className="relative pb-32">
                    <BubbleMenu
                        editor={editor}
                        className="flex items-center gap-1 bg-stone-900 text-white rounded-lg p-1 shadow-xl"
                    >
                        <button onClick={() => editor.chain().focus().toggleBold().run()} className="p-2 hover:bg-stone-700 rounded"><Bold className="h-3.5 w-3.5" /></button>
                        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="p-2 hover:bg-stone-700 rounded"><Italic className="h-3.5 w-3.5" /></button>
                        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className="p-2 hover:bg-stone-700 rounded"><Quote className="h-3.5 w-3.5" /></button>
                    </BubbleMenu>

                    <EditorContent editor={editor} />
                </div>

                {/* Bottom Bar - Floating look */}
                <div className="fixed bottom-9 right-1 sm:right-6 z-50 flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-stone-200 shadow-sm transition-all hover:shadow-md">

                    {/* Secondary Action */}
                    <button className="text-[10px] font-bold text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-tight px-1">
                        Save
                    </button>

                    {/* Primary Action - Compact & Punchy */}
                    <button className="bg-stone-900 text-stone-50 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all active:scale-95 shadow-sm">
                        Publish
                    </button>
                </div>

            </div>
        </div>
    )
}

// Helper for clean toolbar code
const ToolbarButton = ({ children, onClick, active = false }: any) => (
    <Button
        size="icon"
        variant="ghost"
        onClick={onClick}
        className={`h-8 w-8 rounded-full transition-colors ${active ? 'bg-stone-100 text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
    >
        {children}
    </Button>
)

export default WritePage
