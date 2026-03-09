
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, Image as ImageIcon, Bot, User, ThumbsUp, Sparkles, X, Loader2, Trash2 } from 'lucide-react';
import { ForumPost } from '../../types';

// Dummy Initial Data
const INITIAL_POSTS: ForumPost[] = [
  {
    id: 1,
    author: "Budi Santoso",
    role: "Siswa",
    content: "Saya masih bingung kenapa air (H2O) itu bentuknya bengkok (V-shape), bukan lurus linear? Padahal kan ada 2 H dan 1 O?",
    likes: 5,
    timestamp: "10 menit yang lalu",
    replies: [
      {
        id: 101,
        author: "ChemBot",
        role: "AI",
        content: "Halo Budi! Itu karena pada atom pusat Oksigen terdapat 2 Pasangan Elektron Bebas (PEB). PEB ini menolak pasangan elektron ikatan (PEI) lebih kuat, sehingga sudutnya tertekan menjadi sekitar 104.5°, membentuk huruf V. Jika tidak ada PEB, barulah bentuknya linear.",
        likes: 12,
        timestamp: "8 menit yang lalu",
        replies: []
      }
    ]
  }
];

// Sub-component for individual post cards
const PostCard = ({ 
  post, 
  onDelete,
  isReply = false 
}: { 
  post: ForumPost; 
  onDelete: (id: number) => void;
  isReply?: boolean 
}) => (
  <div className={`
    p-5 rounded-2xl border transition-all group/card
    ${post.role === 'AI' 
      ? 'bg-brand-cyan/5 border-brand-cyan/20 shadow-[0_0_20px_rgba(0,255,255,0.05)]' 
      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10'}
  `}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${post.role === 'AI' ? 'bg-brand-cyan text-brand-dark' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
          {post.role === 'AI' ? <Bot size={18} /> : <User size={18} />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">{post.author}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
              post.role === 'AI' ? 'bg-brand-cyan text-brand-dark' : 'bg-slate-200 dark:bg-slate-800'
            }`}>
              {post.role}
            </span>
          </div>
          <span className="text-[10px] opacity-50">{post.timestamp}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-xs opacity-60 hover:opacity-100 hover:text-brand-magenta transition-all">
          <ThumbsUp size={14} /> {post.likes}
        </button>
        <button 
          onClick={() => onDelete(post.id)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 opacity-0 group-hover/card:opacity-100 transition-all"
          title="Hapus Postingan"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
    
    <div className="text-sm leading-relaxed opacity-90 whitespace-pre-wrap">
      {post.content}
    </div>

    {post.image && (
      <img src={post.image} alt="Attached" className="mt-4 rounded-xl max-h-60 w-auto border border-white/10" />
    )}
  </div>
);

export const ForumContent: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(INITIAL_POSTS);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
      setPosts(prevPosts => {
        // Hapus dari level atas
        const filteredTop = prevPosts.filter(p => p.id !== id);
        // Hapus dari balasan jika ada
        return filteredTop.map(p => ({
          ...p,
          replies: p.replies.filter(r => r.id !== id)
        }));
      });
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() && !selectedImage) return;

    const newPost: ForumPost = {
      id: Date.now(),
      author: "Anda",
      role: "Siswa",
      content: inputText,
      image: selectedImage || undefined,
      likes: 0,
      timestamp: "Baru saja",
      replies: []
    };

    setPosts([newPost, ...posts]);
    const userMessage = inputText;
    const userImage = selectedImage;
    
    setInputText("");
    setSelectedImage(null);
    setIsAIThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let contents: any;
      if (userImage) {
        const base64Data = userImage.split(',')[1];
        const mimeType = userImage.split(',')[0].split(':')[1].split(';')[0];
        contents = {
          parts: [
            { inlineData: { data: base64Data, mimeType } },
            { text: userMessage || "Apa yang bisa kamu jelaskan dari gambar ini terkait ikatan kimia?" }
          ]
        };
      } else {
        contents = userMessage;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: "Anda adalah ChemBot, asisten ahli kimia yang ramah untuk mahasiswa. Jawablah pertanyaan tentang ikatan kimia (ionik, kovalen, logam, bentuk molekul, dll) dengan penjelasan yang mudah dipahami, akurat, dan mendalam. Jika user mengirim gambar, analisis struktur molekul atau grafik yang ada. Gunakan bahasa Indonesia yang santai tapi profesional.",
        }
      });

      const aiReply: ForumPost = {
        id: Date.now() + 1,
        author: "ChemBot",
        role: "AI",
        content: response.text || "Maaf, saya tidak bisa memproses permintaan Anda saat ini.",
        likes: 0,
        timestamp: "Baru saja",
        replies: []
      };

      setPosts(prev => prev.map(p => p.id === newPost.id ? { ...p, replies: [...p.replies, aiReply] } : p));
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsAIThinking(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
        <div className="flex items-center gap-2 mb-4 text-brand-cyan font-orbitron font-bold">
          <Sparkles size={20} /> DISKUSI DENGAN AI & TEMAN
        </div>
        
        <div className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Tanyakan sesuatu tentang ikatan kimia..."
            className="w-full h-32 bg-slate-50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-brand-cyan outline-none transition-all resize-none pr-12"
          />
          
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-slate-400 hover:text-brand-cyan transition-colors"
              title="Unggah Gambar"
            >
              <ImageIcon size={20} />
            </button>
            <button 
              onClick={handleSendMessage}
              disabled={isAIThinking}
              className="p-2 bg-brand-cyan text-brand-dark rounded-lg hover:scale-110 transition-transform disabled:opacity-50"
            >
              {isAIThinking ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </div>

        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />

        {selectedImage && (
          <div className="mt-4 relative inline-block">
            <img src={selectedImage} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-brand-cyan" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Posts Section */}
      <div className="space-y-6">
        {posts.length === 0 && (
          <div className="text-center py-20 opacity-40 italic">
            Belum ada diskusi. Jadilah yang pertama bertanya!
          </div>
        )}
        {posts.map((post) => (
          <div key={post.id} className="space-y-4">
            <PostCard post={post} onDelete={handleDelete} />
            {post.replies.map((reply) => (
              <div key={reply.id} className="ml-8 md:ml-12">
                <PostCard post={reply} onDelete={handleDelete} isReply />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
