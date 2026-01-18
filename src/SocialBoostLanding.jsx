import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Star,
  ArrowRight,
  Search,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Zap,
  ShieldCheck,
  Smartphone,
  Globe,
  ShoppingBag,
  MessageCircle,
  Briefcase,
  Headphones,
  Info,
  Clock,
  AlertTriangle,
  Palette,
  Video
} from 'lucide-react';

// --- KOMPONEN IKON BRAND CUSTOM (SVG) ---
const BrandIcon = ({ name, className = "w-6 h-6" }) => {
  const n = name.toLowerCase();
  
  // Instagram
  if (n.includes('instagram')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-pink-500`}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  // TikTok
  if (n.includes('tiktok')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.98 6.38-1.48 1.28-3.32 1.95-5.32 1.92-2.61-.02-4.96-1.33-6.42-3.32-1.12-1.57-1.72-3.46-1.73-5.38 0-4.66 4.02-9.01 9.49-8.73v4.04c-2.23-.27-4.46 1.13-5.18 3.26-.78 2.22.42 4.8 2.66 5.6 2.05.74 4.41-.35 5.25-2.42.31-.76.38-1.55.37-2.36V.02z"/>
    </svg>
  );

  // Threads
  if (n.includes('threads')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
      <path d="M12.75 2C13.25 2 13.75 2.04 14.25 2.12C17.89 2.68 20.37 5.75 20.37 9.5H20.35C20.35 12.37 18.9 14.63 16.53 15.68C15.22 16.27 13.74 16.48 12.27 16.31C9.69 16 7.69 13.9 7.69 11.26C7.69 8.28 9.87 5.92 12.58 5.92C14.07 5.92 15.42 6.57 16.29 7.65L17.79 6.13C16.56 4.58 14.67 3.76 12.6 3.76C8.5 3.76 5.17 7.24 5.17 11.41C5.17 15.54 8.5 18.92 12.63 18.92C14.93 18.92 17.03 18.06 18.6 16.59C20.44 14.86 21.38 12.29 21.38 9.5C21.38 5.09 18.25 1.35 13.68 0.36C8.6 -0.73 3.6 2.27 1.8 6.84C0.63 9.8 0.63 13.06 1.8 16.02C3.16 19.49 6.2 21.98 9.85 22.56C10.74 22.7 11.64 22.77 12.54 22.77C16.7 22.77 20.43 20.37 22.25 16.63L20.44 15.63C19.04 18.25 16.14 20.07 12.92 20.07C12.18 20.07 11.45 19.98 10.74 19.82C7.94 19.16 5.7 17.18 4.75 14.47C3.89 12.02 3.89 9.38 4.75 6.93C6.31 2.96 10.57 0.62 14.63 1.83C17.65 2.73 19.66 5.48 19.66 8.5C19.66 10.89 18.84 13.15 17.3 14.59C16.16 15.65 14.56 16.32 12.75 16.32H12.63C9.42 16.32 6.81 13.71 6.81 10.5C6.81 7.29 9.42 4.68 12.63 4.68C14.53 4.68 16.2 5.62 17.16 7.07L15.64 8.59C15.06 7.79 14.07 7.07 12.72 7.07C10.55 7.07 8.8 8.82 8.8 11C8.8 13.18 10.55 14.93 12.72 14.93C13.84 14.93 14.86 14.46 15.54 13.67C16.18 12.91 16.53 11.91 16.53 10.88V9.5H12.75Z"/>
    </svg>
  );

  // Facebook
  if (n.includes('facebook')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-blue-600`}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  // Twitter / X
  if (n.includes('twitter') || n.includes('x ')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  // YouTube
  if (n.includes('youtube')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-red-600`}>
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
    </svg>
  );

  // Shopee
  if (n.includes('shopee')) return (
    <div className={`${className} flex items-center justify-center`}>
       <ShoppingBag className="text-orange-500 w-full h-full" />
    </div>
  );

  // Lazada
  if (n.includes('lazada')) return (
    <div className={`${className} flex items-center justify-center`}>
      <ShoppingBag className="text-blue-500 w-full h-full" />
    </div>
  );

  // WhatsApp
  if (n.includes('whatsapp') || n.includes('wa ')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-green-500`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  // Default / Other Brands logic from before
  if (n.includes('canva')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-cyan-500`}>
      <circle cx="12" cy="12" r="10" fill="currentColor" className="opacity-20" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5c-2.5 0-4-1.8-4-4.3 0-2.8 1.8-4.7 4.5-4.7 1.5 0 2.8.7 3.4 1.8l-1.6 1c-.4-.7-1-1-1.8-1-1.4 0-2.3 1.1-2.3 2.9 0 1.6.8 2.6 2.1 2.6.9 0 1.6-.4 2-.9l1.6 1c-.8 1-2 1.6-3.9 1.6z" fill="currentColor" />
    </svg>
  );

  if (n.includes('capcut')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
       <path d="M7 6H4v8h3V6zM14 6h-3v8h3V6z" className="opacity-80"/>
       <path d="M22 6h-6v12h6V6zm-8 0H8v12h6V6z" />
    </svg>
  );

  if (n.includes('gpt') || n.includes('chatgpt')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-emerald-500`}>
       <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" className="opacity-20" />
       <path d="M12 16.5a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
    </svg>
  );

  if (n.includes('spotify')) return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-green-500`}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
  
  if (n.includes('zoom')) return <Video className={`${className} text-blue-500`} />;
  if (n.includes('drive')) return <Briefcase className={`${className} text-yellow-500`} />;
  if (n.includes('picsart')) return <Palette className={`${className} text-purple-400`} />;
  if (n.includes('prime')) return <Video className={`${className} text-blue-400`} />;
  if (n.includes('website') || n.includes('traffic')) return <Globe className={`${className} text-indigo-400`} />;

  // Default
  return <Smartphone className={`${className} text-slate-400`} />;
};

const SocialBoostLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('booster');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State untuk Modal Pop-up
  const [selectedBooster, setSelectedBooster] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null); // '500' atau '1000'

  const closePopup = () => {
    setSelectedBooster(null);
    setSelectedQuantity(null);
  };

  // DATA SOSIAL MEDIA BOOSTER (FULL DATA BARU - UPDATE)
  const rawBoosterServices = [
    // Instagram
    { title: "Instagram Followers Indonesia Old Akun", price1k: 92500, price500: null },
    { title: "Instagram Followers Indonesia Real Aktif", price1k: 140000, price500: null },
    { title: "Instagram Followers (Mix Indo x Luar)", price1k: 50000, price500: null },
    { title: "Instagram Likes", price1k: 17500, price500: null },
    { title: "Instagram Views", price1k: 3000, price500: null },
    { title: "Instagram Live Video Views (15 Menit)", price1k: 32500, price500: null },
    { title: "Instagram Comment Random", price1k: 32500, price500: null },
    { title: "Instagram Comment Custom", price1k: 32500, price500: null },
    { title: "Instagram Comment Custom (Buzzer)", price1k: 350000, price500: null },
    { title: "Instagram Share", price1k: 13500, price500: null },
    { title: "Instagram Save", price1k: 3000, price500: null },
    { title: "Instagram Profile Visit / Highlights", price1k: 7000, price500: null },
    { title: "Instagram Repost", price1k: 22500, price500: null },
    
    // Facebook
    { title: "Facebook Profil Followers", price1k: 17500, price500: null },
    { title: "Facebook Page Followers", price1k: 22500, price500: null },
    { title: "Facebook Page Like", price1k: 27500, price500: null },
    { title: "Facebook Profil Like", price1k: 21500, price500: null },
    { title: "Facebook Group Members", price1k: 22500, price500: null },
    { title: "Facebook Comment Random", price1k: 37500, price500: null },
    { title: "Facebook Comment Custom", price1k: 37500, price500: null },
    { title: "Facebook Share", price1k: 27500, price500: null },
    { title: "Facebook Video Views", price1k: 7000, price500: null },
    { title: "Facebook Reels Views", price1k: 7000, price500: null },
    { title: "Facebook Story Views", price1k: 16500, price500: null },
    { title: "Facebook Live Stream Views (30 Menit)", price1k: 70000, price500: null },
    { title: "Facebook Live Stream Likes", price1k: 27500, price500: null },
    { title: "Facebook Watch Time", price1k: 100000, price500: null },
    
    // Twitter
    { title: "Twitter Follower", price1k: 190000, price500: null },
    { title: "Twitter Likes", price1k: 75000, price500: null },
    { title: "Twitter Views", price1k: 5000, price500: null },
    { title: "Twitter Retweets", price1k: 40000, price500: null },
    
    // TikTok
    { title: "TikTok Followers Mix (Indo x Luar)", price1k: 45000, price500: null },
    { title: "TikTok Follower Indonesia", price1k: 125000, price500: null },
    { title: "TikTok Likes", price1k: 12500, price500: null },
    { title: "TikTok Views", price1k: 7000, price500: null },
    { title: "TikTok Likes Story", price1k: 13500, price500: null },
    { title: "TikTok Comments (Custom/Random)", price1k: 55000, price500: null },
    { title: "TikTok Share", price1k: 13500, price500: null },
    { title: "TikTok Saves", price1k: 5000, price500: null },
    { title: "TikTok PK Battle Point", price1k: 10000, price500: null },
    { title: "TikTok Live Stream Views (15 Menit)", price1k: 50000, price500: null },
    { title: "TikTok Live Stream Likes", price1k: 4000, price500: null },
    { title: "TikTok Live Stream Comments", price1k: 42500, price500: null },
    
    // Telegram
    { title: "Telegram Members", price1k: 21500, price500: null },
    { title: "Telegram Post Views", price1k: 4000, price500: null },
    { title: "Telegram Reactions", price1k: 4000, price500: null },
    
    // YouTube
    { title: "Youtube Subscribers", price1k: 400000, price500: null },
    { title: "Youtube Views", price1k: 32500, price500: null },
    { title: "Youtube Likes", price1k: 17500, price500: null },
    { title: "Youtube Share", price1k: 42500, price500: null },
    { title: "Youtube Comment Custom", price1k: 75000, price500: null },
    { title: "Youtube Live Streaming Comment", price1k: 150000, price500: null },
    { title: "Youtube Live Streaming Views", price1k: 55000, price500: null },
    { title: "Youtube Short Views", price1k: 37500, price500: null },
    { title: "Youtube Short Likes", price1k: 32500, price500: null },
    { title: "Youtube Monetisasi (4000 Jam)", price1k: 1200000, price500: null },
    
    // Shopee
    { title: "Shopee Followers Indonesia", price1k: 32500, price500: null },
    { title: "Shopee Live Streaming Comments", price1k: 550000, price500: null },
    { title: "Shopee Likes Produk", price1k: 21500, price500: null },
    { title: "Shopee Likes Video", price1k: 32500, price500: null },
    { title: "Shopee Live Streaming Views (15 Menit)", price1k: 55000, price500: null },
    
    // Lazada
    { title: "Lazada Followers Indonesia", price1k: 1300000, price500: null },
    
    // WhatsApp
    { title: "Whatsapp Global Channel Member", price1k: 75000, price500: null },
    
    // LinkedIn
    { title: "Linkedin Post Likes", price1k: 250000, price500: null },
    { title: "Linkedin Profile/Company Followers", price1k: 400000, price500: null },
    { title: "LinkedIn Connections", price1k: 400000, price500: null },
    
    // Spotify
    { title: "Spotify Followers", price1k: 17500, price500: null },
    { title: "Spotify Plays", price1k: 13500, price500: null },
    { title: "Spotify Saves", price1k: 17500, price500: null },
    
    // Website
    { title: "Website Mobile Traffic", price1k: 42500, price500: null },
    { title: "Website Traffic by Referrer", price1k: 17500, price500: null },
    { title: "Website Traffic from Indonesia", price1k: 22500, price500: null },
  ];

  // Helper formatting currency
  const fmt = (price) => price ? `Rp ${price.toLocaleString('id-ID')}` : '-';

  const boosterServices = rawBoosterServices.map(item => ({
    ...item,
    price1kFmt: fmt(item.price1k),
    price500Fmt: fmt(item.price500)
  })).filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Data Premium Satuan (List Lengkap dari sebelumnya - UPDATE)
  const rawPremiumData = [
    { title: "CANVA LIFETIME", variant: "Edu Member", price: 17500 },
    { title: "CANVA LIFETIME", variant: "Famhead 1 pcs", price: 40000 },
    { title: "CANVA LIFETIME", variant: "Famhead 5 pcs", price: 140000 },
    { title: "CANVA PRO", variant: "Head 1 pcs", price: 12500 },
    { title: "CANVA PRO", variant: "Head 5 pcs", price: 22500 },
    { title: "CAPCUT BASIC", variant: "35 pcs (Akun Polos)", price: 17500 },
    { title: "CAPCUT FAMHEAD", variant: "12 Bulan Full Seat", price: 1200000 },
    { title: "CAPCUT FAMHEAD", variant: "6 Bulan Full Seat", price: 700000 },
    { title: "CAPCUT FAMHEAD", variant: "35 Hari Full Seat", price: 110000 },
    { title: "CAPCUT PRO", variant: "7 Hari 1 pcs", price: 7000 },
    { title: "CAPCUT PRO", variant: "7 Hari 5 pcs", price: 15000 },
    { title: "CAPCUT PRO", variant: "14 Hari 1 pcs", price: 11000 },
    { title: "CAPCUT PRO", variant: "14 Hari 5 pcs", price: 20000 },
    { title: "CAPCUT PRO", variant: "28 Hari 1 pcs", price: 13500 },
    { title: "CAPCUT PRO", variant: "28 Hari 5 pcs", price: 35000 },
    { title: "CAPCUT PRO", variant: "35 Hari 1 pcs", price: 16500 },
    { title: "CAPCUT PRO", variant: "35 Hari 5 pcs", price: 50000 },
    { title: "CAPCUT PRO", variant: "6 Bulan 1 pcs", price: 77500 },
    { title: "CAPCUT PRO", variant: "6 Bulan 5 pcs", price: 200000 },
    { title: "CAPCUT PRO PO", variant: "28 Hari 10 pcs", price: 42500 },
    { title: "CAPCUT PRO PO", variant: "35 Hari 10 pcs", price: 65000 },
    { title: "CHATGPT JASPAY", variant: "Team 30 Hari", price: 17500 },
    { title: "CHATGPT JASPAY", variant: "Plus 30 Hari", price: 17500 },
    { title: "CHATGPT PRIVATE", variant: "1 Bulan", price: 17500 },
    { title: "CHATGPT PRIVATE", variant: "2 Tahun", price: 100000 },
    { title: "CHATGPT SHARING", variant: "Plus 7 Hari", price: 19000 },
    { title: "CHATGPT SHARING", variant: "Plus 30 Hari", price: 40000 },
    { title: "GEMINI AI", variant: "1 Tahun", price: 30000 },
    { title: "GOOGLE DRIVE", variant: "Lifetime 1TB", price: 82500 },
    { title: "PERPLEXITY AI", variant: "Garansi", price: 27500 },
    { title: "PERPLEXITY AI", variant: "Tidak Garansi", price: 17500 },
    { title: "PERPLEXITY AI", variant: "Code 1 Month", price: 12500 },
    { title: "PICSART", variant: "30 Hari 1 pcs", price: 13500 },
    { title: "PICSART", variant: "30 Hari 5 pcs", price: 25000 },
    { title: "PRIME VIDEO", variant: "30 Hari 1 pcs", price: 17500 },
    { title: "PRIME VIDEO", variant: "30 Hari 5 pcs", price: 50000 },
    { title: "SCRIBD", variant: "Premium 30 Hari", price: 16500 },
    { title: "SCRIBD", variant: "Basic", price: 8000 },
    { title: "SPOTIFY PREMIUM", variant: "Link Student", price: 8000 },
    { title: "SPOTIFY PREMIUM", variant: "30 Hari 1 pcs", price: 13500 },
    { title: "SPOTIFY PREMIUM", variant: "30 Hari 5 pcs", price: 30000 },
    { title: "SPOTIFY PREMIUM", variant: "90 Hari 1 pcs", price: 17500 },
    { title: "SPOTIFY PREMIUM PO", variant: "10 pcs", price: 55000 },
    { title: "YOUTUBE PREMIUM", variant: "30 Hari 1 pcs", price: 18000 },
    { title: "YOUTUBE PREMIUM", variant: "30 Hari 5 pcs", price: 60000 },
    { title: "YOUTUBE PREMIUM", variant: "90 Hari 1 pcs", price: 30000 },
    { title: "ZOOM", variant: "14 Hari 1 pcs", price: 11000 },
    { title: "ZOOM", variant: "14 Hari 5 pcs", price: 20000 },
    { title: "ZOOM", variant: "30 Hari 1 pcs", price: 16500 },
    { title: "ZOOM", variant: "30 Hari 5 pcs", price: 40000 },
  ];

  const premiumServices = rawPremiumData.map(item => ({
    ...item,
    priceFormatted: `Rp ${item.price.toLocaleString('id-ID')}`
  })).filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.variant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const testimonials = [
    {
      name: "Dinda Kirana",
      role: "Content Creator",
      rating: 5,
      comment: "Awalnya ragu, tapi ternyata prosesnya cepet banget! Followers IG naik drastis dan kelihatan natural. Recommended buat yang mau bangun personal branding."
    },
    {
      name: "Rizky Pratama",
      role: "Owner UMKM",
      rating: 5,
      comment: "Beli akun Canva Pro dan Netflix disini harganya miring banget tapi kualitasnya stabil. Adminnya juga fast respon kalau ada kendala login."
    },
    {
      name: "Sarah Amalia",
      role: "Digital Marketer",
      rating: 4,
      comment: "Layanan TikTok views-nya ngebantu banget buat mancing FYP. Worth the price untuk strategi marketing awal."
    }
  ];

  const faqs = [
    {
      question: "Apakah layanan ini aman untuk akun saya?",
      answer: "Sangat aman. Untuk layanan booster, kami hanya membutuhkan username/link tanpa password. Untuk akun premium, kami menggunakan metode legal (family plan/gift card)."
    },
    {
      question: "Berapa lama proses pengerjaannya?",
      answer: "Proses instan! Rata-rata pesanan selesai dalam 10-60 menit setelah pembayaran terkonfirmasi. Maksimal 72 jam jika server sedang padat."
    },
    {
      question: "Apakah ada garansi jika followers turun atau akun bermasalah?",
      answer: "Ya, kami memberikan garansi refill (isi ulang) selama 30 hari untuk layanan booster dan garansi full masa aktif untuk akun premium sesuai dengan pesanan."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const baseWhatsappLink = "https://wa.me/6289510535168";
  const whatsappLink = `${baseWhatsappLink}?text=Halo%20kak,%20saya%20tertarik%20dengan%20layanan%20LevelUp...`;

  // Function to create specific WhatsApp link
  const getOrderLink = () => {
    if (!selectedBooster || !selectedQuantity) return "#";
    
    const quantityText = selectedQuantity === '500' ? "500 Pcs" : "1.000 Pcs";
    const price = selectedQuantity === '500' ? selectedBooster.price500Fmt : selectedBooster.price1kFmt;
    const text = `Halo kak, saya mau order booster *${selectedBooster.title}* jumlah *${quantityText}* dengan harga *${price}*. Mohon infonya ya!`;
    
    return `${baseWhatsappLink}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            LevelUp<span className="text-white">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Layanan</a>
            <a href="#why-us" className="hover:text-white transition-colors">Keunggulan</a>
            <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Hubungi Kami
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4 text-center">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Layanan</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Keunggulan</a>
              <a href={whatsappLink} className="text-blue-400 font-bold">Order Sekarang</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Background Glows */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-slate-300">Terpercaya oleh 10.000+ Kreator Indonesia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Pusat Social Media Booster & <br className="hidden md:block"/>
            Akun Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Termurah</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Solusi #1 untuk kebutuhan followers, likes, views, dan akun premium legal. Jaminan harga termurah, proses otomatis, dan bergaransi.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services"
              className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Lihat Layanan <ArrowRight size={20} />
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pilih Kebutuhan Digitalmu</h2>
            <p className="text-slate-400">Daftar harga lengkap dan transparan</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-900/50 p-1 rounded-full border border-white/10 inline-flex">
              <button 
                onClick={() => { setActiveServiceTab('booster'); setSearchTerm(''); }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeServiceTab === 'booster' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Social Media Booster
              </button>
              <button 
                onClick={() => { setActiveServiceTab('premium'); setSearchTerm(''); }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeServiceTab === 'premium' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Akun Premium
              </button>
            </div>
          </div>

          {/* GLOBAL SEARCH BAR */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <input 
              type="text"
              placeholder={activeServiceTab === 'booster' ? "Cari booster (contoh: Instagram, Shopee)..." : "Cari produk (contoh: Canva, Spotify)..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-slate-900 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-slate-500"
            />
            <Search className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          </div>

          {/* CONTENT AREA */}
          <div className="max-w-5xl mx-auto">
            
            {/* BOOSTER VIEW (List Mode now) */}
            {activeServiceTab === 'booster' && (
              <div className="flex flex-col gap-3">
                {boosterServices.length > 0 ? (
                  boosterServices.map((service, idx) => (
                   <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-blue-500/30 transition-colors group relative">
                     <div className="flex items-center gap-4 w-full md:w-auto">
                       <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                         <BrandIcon name={service.title} className="w-6 h-6" />
                       </div>
                       <div>
                         <h3 className="font-bold text-white text-sm md:text-base group-hover:text-blue-400 transition-colors">{service.title}</h3>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                              INSTANT
                            </span>
                         </div>
                       </div>
                     </div>
                     
                     {/* Harga Preview (Desktop) */}
                     <div className="hidden md:flex items-center justify-between gap-8">
                       <div className="text-right">
                         <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Mulai Dari</span>
                         <span className="font-bold text-lg text-emerald-400">{service.price500 ? service.price500Fmt : service.price1kFmt}</span>
                       </div>
                       
                       <button 
                         onClick={() => setSelectedBooster(service)}
                         className="px-6 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors shrink-0 flex items-center gap-2"
                       >
                         Beli <ArrowRight size={14}/>
                       </button>
                     </div>

                     {/* Mobile Button & Price */}
                     <div className="md:hidden w-full flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                        <div className="text-left">
                           <span className="block text-[10px] text-slate-500 uppercase">Mulai Dari</span>
                           <span className="font-bold text-emerald-400">{service.price500 ? service.price500Fmt : service.price1kFmt}</span>
                        </div>
                        <button 
                          onClick={() => setSelectedBooster(service)}
                          className="px-6 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors"
                        >
                          Beli
                        </button>
                     </div>
                   </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-500 bg-slate-900/20 rounded-xl border border-dashed border-white/10">
                    <Search className="w-8 h-8 mx-auto mb-2 opacity-50"/>
                    <p>Layanan tidak ditemukan. Coba kata kunci "Instagram" atau "Shopee".</p>
                  </div>
                )}
              </div>
            )}

            {/* PREMIUM VIEW (Compact List) */}
            {activeServiceTab === 'premium' && (
              <div className="flex flex-col gap-3">
                {premiumServices.length > 0 ? (
                  premiumServices.map((item, idx) => {
                    // Cek apakah item mengandung kata "FAMHEAD"
                    const isFamhead = item.title.toUpperCase().includes('FAMHEAD') || item.variant.toUpperCase().includes('FAMHEAD');

                    return (
                      <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-pink-500/30 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                            <BrandIcon name={item.title} className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white group-hover:text-pink-400 transition-colors">{item.title}</h4>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-xs font-medium px-2 py-0.5 bg-white/5 rounded text-slate-300 border border-white/5">
                                {item.variant}
                              </span>
                              {/* Menampilkan keterangan khusus Famhead */}
                              {isFamhead && (
                                <span className="text-[10px] font-medium px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded border border-yellow-500/20">
                                  Maksimal Invite 25 orang/user
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
                          <div className="text-right">
                            <span className="block text-xs text-slate-500">Harga</span>
                            <span className="font-bold text-lg text-emerald-400">{item.priceFormatted}</span>
                          </div>
                          <a 
                            href={`${baseWhatsappLink}?text=${encodeURIComponent(`Halo kak, saya mau order *${item.title}* varian *${item.variant}* harga *${item.priceFormatted}*.`)}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors shrink-0"
                          >
                            Beli
                          </a>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 text-slate-500 bg-slate-900/20 rounded-xl border border-dashed border-white/10">
                    <Search className="w-8 h-8 mx-auto mb-2 opacity-50"/>
                    <p>Produk tidak ditemukan. Coba kata kunci "Netflix" atau "Canva".</p>
                  </div>
                )}
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* MODAL POPUP FOR BOOSTER */}
      {selectedBooster && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closePopup}></div>
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-start bg-slate-900/50 shrink-0">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <BrandIcon name={selectedBooster.title} className="w-7 h-7" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg leading-tight pr-4">{selectedBooster.title}</h3>
                   <span className="text-xs text-blue-400 font-medium">Layanan Instant • High Quality</span>
                 </div>
               </div>
               <button onClick={closePopup} className="text-slate-400 hover:text-white transition-colors">
                 <X size={24} />
               </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              
              {/* Speed Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
                <Clock size={14} />
                Estimasi Proses: 0-72 Jam
              </div>

              {/* Pilihan Paket */}
              <p className="text-sm font-semibold text-white mb-3">Pilih Paket:</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {/* Option 500 Pcs */}
                {selectedBooster.price500 && (
                  <button 
                    onClick={() => setSelectedQuantity('500')}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all group text-left
                      ${selectedQuantity === '500' 
                        ? 'bg-blue-600/10 border-blue-500' 
                        : 'bg-slate-800/50 border-white/5 hover:border-slate-500'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${selectedQuantity === '500' ? 'border-blue-500' : 'border-slate-500'}`}>
                        {selectedQuantity === '500' && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
                      </div>
                      <span className={`font-semibold ${selectedQuantity === '500' ? 'text-white' : 'text-slate-300'}`}>
                        500 Pcs
                      </span>
                    </div>
                    <span className="font-bold text-emerald-400">{selectedBooster.price500Fmt}</span>
                  </button>
                )}

                {/* Option 1000 Pcs */}
                <button 
                  onClick={() => setSelectedQuantity('1000')}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all group text-left
                    ${selectedQuantity === '1000' 
                      ? 'bg-blue-600/10 border-blue-500' 
                      : 'bg-slate-800/50 border-white/5 hover:border-slate-500'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${selectedQuantity === '1000' ? 'border-blue-500' : 'border-slate-500'}`}>
                      {selectedQuantity === '1000' && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
                    </div>
                    <span className={`font-semibold ${selectedQuantity === '1000' ? 'text-white' : 'text-slate-300'}`}>
                      1.000 Pcs
                    </span>
                  </div>
                  <span className="font-bold text-emerald-400">{selectedBooster.price1kFmt}</span>
                </button>
              </div>

              {/* Catatan Penting */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3 text-yellow-500">
                  <AlertTriangle size={18} />
                  <span className="font-bold text-sm">Catatan Penting:</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                  <li>Akun <span className="text-white font-semibold">tidak boleh diprivate</span> selama proses pengerjaan.</li>
                  <li>Mohon jangan memesan untuk link yang sama pada waktu yang sama. Karena bisa saja yang masuk hanya 1 pesanan.</li>
                  <li>Jika Anda mengubah akun Anda ke mode pribadi atau akun telah dihapus, pesanan Anda akan secara otomatis ditandai sebagai selesai dan kami tidak akan menjamin pengembalian uang.</li>
                  <li>Pesanan otomatis diproses sistem segera setelah pembayaran. Estimasi 0-72 jam hanya untuk antisipasi antrean server (biasanya jauh lebih cepat). Jika belum ada perubahan lewat dari estimasi, silakan hubungi Admin.</li>
                </ul>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-white/10 bg-slate-900 shrink-0">
              <a 
                href={getOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2
                  ${selectedQuantity 
                    ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                onClick={(e) => !selectedQuantity && e.preventDefault()}
              >
                <MessageCircle size={20} />
                {selectedQuantity ? 'Pesan Layanan Ini' : 'Pilih Paket Terlebih Dahulu'}
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Why Choose Us (Added Back) */}
      <section id="why-us" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Memilih Kami?</h2>
             <p className="text-slate-400">Keunggulan layanan LevelUp dibandingkan yang lain</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proses Kilat</h3>
              <p className="text-slate-400 text-sm">Sistem otomatis memproses pesanan Anda dalam hitungan menit.</p>
            </div>
            <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Aman</h3>
              <p className="text-slate-400 text-sm">Tanpa meminta password akun sosial media Anda. Privasi terjaga.</p>
            </div>
            <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Harga Terbaik</h3>
              <p className="text-slate-400 text-sm">Harga termurah untuk kualitas layanan premium dan bergaransi.</p>
            </div>
            <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
              <p className="text-slate-400 text-sm">Tim CS siap membantu jika ada kendala pada pesanan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Added Back) */}
      <section id="testimoni" className="py-20 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-serif text-white shadow-lg">"</div>
                </div>
                <div className="flex text-yellow-400 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testi.rating ? "currentColor" : "none"} className={i < testi.rating ? "" : "text-slate-600"} />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">"{testi.comment}"</p>
                <div className="flex items-center pt-4 border-t border-white/5">
                  <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white mr-3 shadow-lg text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{testi.name}</h4>
                    <p className="text-xs text-slate-500">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum (FAQ)</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-xl bg-slate-900/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900 transition-colors"
                >
                  <span className="font-semibold text-lg text-slate-200">{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-white/10">
            {/* Decor elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Siap Menjadi Viral?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Jangan tunda lagi. Ribuan orang telah membuktikannya. Sekarang giliran Anda untuk bersinar di sosial media.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg relative z-10"
            >
              Order Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4 inline-block">
                LevelUp.
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Platform terpercaya untuk kebutuhan social media boosting dan akun premium legal dengan harga termurah di Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                  <BrandIcon name="instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-500 transition-colors text-white">
                  <Smartphone size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Menu</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Beranda</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Layanan</a></li>
                <li><a href="#testimoni" className="hover:text-blue-400 transition-colors">Testimoni</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Kontak</h4>
              <ul className="space-y-3 text-slate-400">
                <li>WhatsApp: +62 895-1053-5168</li>
                <li>Email: faizwildanzwildanz@gmail.com</li>
                <li>Jam Kerja: 09:00 - 22:00 WIB</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} LevelUp Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialBoostLanding;