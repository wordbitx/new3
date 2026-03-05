export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "instagram-growth-guide",
    name: "Instagram Growth Mastery",
    description: "Complete guide to growing your Instagram presence with proven strategies. Delivered via email with templates, hashtag lists, and posting schedules.",
    price: 29.99,
    category: "Social Media",
    features: ["Growth Strategies", "Content Templates", "Email Support"],
    image: "/images/product-instagram.jpg",
    badge: "Best Seller"
  },
  {
    id: "facebook-ads-blueprint",
    name: "Facebook Ads Blueprint",
    description: "Master Facebook advertising for maximum ROI. Email guide with ad templates, targeting strategies, and campaign examples.",
    price: 34.99,
    category: "Social Media",
    features: ["Ad Templates", "Targeting Guide", "ROI Optimization"],
    image: "/images/product-facebook.jpg",
  },
  {
    id: "tiktok-viral-secrets",
    name: "TikTok Viral Secrets",
    description: "Learn to create viral TikTok content that gets millions of views. Complete guide delivered via email with trend analysis and creation tips.",
    price: 24.99,
    category: "Social Media",
    features: ["Viral Strategies", "Trend Analysis", "Content Ideas"],
    image: "/images/product-tiktok.jpg",
    badge: "Popular"
  },
  {
    id: "youtube-channel-blueprint",
    name: "YouTube Channel Blueprint",
    description: "Build a profitable YouTube channel from scratch. Email guide with SEO optimization, thumbnails, and monetization strategies.",
    price: 39.99,
    category: "Social Media",
    features: ["SEO Optimization", "Thumbnail Design", "Monetization"],
    image: "/images/product-youtube.jpg",
  },
  {
    id: "linkedin-professional",
    name: "LinkedIn Professional Success",
    description: "Leverage LinkedIn for career growth and networking. Delivered via email with profile optimization, content strategy, and connection tips.",
    price: 19.99,
    category: "Social Media",
    features: ["Profile Optimization", "Content Strategy", "Networking Tips"],
    image: "/images/product-linkedin.jpg",
  },
  {
    id: "twitter-engagement",
    name: "Twitter Engagement Mastery",
    description: "Build your Twitter following and increase engagement. Complete email guide with threading tips, hashtag strategies, and growth hacks.",
    price: 17.99,
    category: "Social Media",
    features: ["Threading Guide", "Hashtag Strategy", "Growth Hacks"],
    image: "/images/product-twitter.jpg",
  },
  {
    id: "pinterest-traffic",
    name: "Pinterest Traffic Generator",
    description: "Drive traffic using Pinterest marketing. Email guide with pin design, board strategy, and SEO optimization for Pinterest.",
    price: 22.99,
    category: "Social Media",
    features: ["Pin Design", "Board Strategy", "SEO Tips"],
    image: "/images/product-pinterest.jpg",
  },
  {
    id: "social-media-bundle",
    name: "Social Media Complete Bundle",
    description: "All social media guides combined for complete social platform mastery. Email delivery with all 7 social platform guides.",
    price: 59.99,
    category: "Social Media",
    features: ["7 Complete Guides", "Templates Included", "Lifetime Access"],
    image: "/images/product-social-bundle.jpg",
    badge: "Premium"
  },
  {
    id: "kids-activity-book-1",
    name: "Fun Activity Book 1 (Ages 4-7)",
    description: "Engaging activity book with puzzles, coloring pages, and games. Delivered via email as PDF with printable pages.",
    price: 9.99,
    category: "Kids Learning",
    features: ["50+ Activities", "Printable PDF", "Ages 4-7"],
    image: "/images/product-kids-activity-1.jpg",
  },
  {
    id: "kids-activity-book-2",
    name: "Fun Activity Book 2 (Ages 8-12)",
    description: "Advanced activity book with brain teasers, word games, and creative projects. Instant PDF delivery to your email.",
    price: 12.99,
    category: "Kids Learning",
    features: ["75+ Activities", "Brain Teasers", "Ages 8-12"],
    image: "/images/product-kids-activity-2.jpg",
    badge: "Popular"
  },
  {
    id: "kids-learning-alphabet",
    name: "ABC Learning Workbook",
    description: "Interactive alphabet and letter recognition workbook for preschoolers. Email delivery with colorful PDF and activity sheets.",
    price: 6.99,
    category: "Kids Learning",
    features: ["Letter Recognition", "Tracing Pages", "Fun Illustrations"],
    image: "/images/product-kids-alphabet.jpg",
  },
  {
    id: "kids-math-adventure",
    name: "Math Adventure Workbook",
    description: "Fun math learning through adventure stories and interactive problems. Delivered via email with engaging illustrations.",
    price: 10.99,
    category: "Kids Learning",
    features: ["Math Concepts", "Story-Based", "Colorful Design"],
    image: "/images/product-kids-math.jpg",
  },
  {
    id: "ebook-productivity",
    name: "Ultimate Productivity Ebook",
    description: "Master productivity techniques and time management. Complete ebook delivered via email with action plans and templates.",
    price: 14.99,
    category: "Ebooks",
    features: ["Time Management", "Action Plans", "Templates"],
    image: "/images/product-ebook-productivity.jpg",
  },
  {
    id: "ebook-entrepreneurship",
    name: "Entrepreneurship Blueprint",
    description: "Start and scale your business successfully. Comprehensive ebook delivered via email with business models and strategies.",
    price: 19.99,
    category: "Ebooks",
    features: ["Business Models", "Growth Strategy", "Real Examples"],
    image: "/images/product-ebook-business.jpg",
  },
  {
    id: "ebook-personal-development",
    name: "Personal Development Masterclass",
    description: "Transform your life with personal development strategies. Email ebook with exercises, journaling prompts, and goals.",
    price: 16.99,
    category: "Ebooks",
    features: ["Self-Improvement", "Exercises", "Journaling Pages"],
    image: "/images/product-ebook-personal.jpg",
  },
  {
    id: "ebook-passive-income",
    name: "Passive Income Strategies",
    description: "Build multiple passive income streams. Complete ebook with real strategies, setup guides, and income projections.",
    price: 21.99,
    category: "Ebooks",
    features: ["Income Streams", "Setup Guides", "Spreadsheets"],
    image: "/images/product-ebook-income.jpg",
  }
];

export const categories = [
  "All",
  "Social Media",
  "Kids Learning",
  "Ebooks"
];
