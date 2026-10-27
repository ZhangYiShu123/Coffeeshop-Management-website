import React from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  Calendar,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { initialMenuItems } from "../services/mockData";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const popularItems = initialMenuItems
    .filter((item) => item.isPopular)
    .slice(0, 4);

  const testimonials = [
    {
      name: "Dr. Evelyn Carter",
      role: "Coffee Aficionado",
      comment:
        "Brew & Bean serves by far the best Caramel Macchiato in the city. The smooth espresso and ambient seating make it my daily sanctuary.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "James Thornton",
      role: "Tech Lead & Regular",
      comment:
        "The online reservation and takeaway ordering system is seamless! I book table #3 every Friday afternoon for quiet coding sessions.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Sophia Martinez",
      role: "Food Blogger",
      comment:
        "Their Belgian Chocolate Croissants combined with the 24-hour steep cold brew are a match made in heaven. 10/10 aesthetic!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-coffee-950 overflow-hidden border-b border-coffee-800">
        {/* Background Image with Warm Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80"
            alt="Coffee Roastery background"
            className="w-full h-full object-cover opacity-30 scale-105 transform animate-pulse-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-900/90 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg animate-float">
            <Sparkles className="w-4 h-4 text-gold fill-gold" />
            <span>手工精品烘焙坊</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-tight tracking-tight">
            您最好的咖啡, <br />
            <span className="bg-gradient-to-r from-gold via-coffee-300 to-amber-200 bg-clip-text text-transparent italic">
              专门为您磨制.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-coffee-200 font-normal leading-relaxed">
            在温馨奢华的氛围中，品尝由大师级咖啡师精心烘焙和制作的、源自道德采购的单品咖啡豆所散发的浓郁香气.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/signup"
              className="flex items-center gap-2 bg-gradient-to-r from-gold to-coffee-400 text-coffee-950 px-8 py-4 rounded-2xl font-bold text-base shadow-gold-glow hover:scale-105 transition-all duration-300 group"
            >
              <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              创建账户
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-2 bg-coffee-900/90 hover:bg-coffee-800 text-cream px-8 py-4 rounded-2xl font-bold text-base border border-coffee-700 hover:border-gold/50 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-gold" />
              登录
            </Link>
          </div>

          {/* Key Metric Badges */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left border-t border-coffee-800/60">
            <div>
              <p className="font-serif text-3xl font-extrabold text-gold">
                100%
              </p>
              <p className="text-xs text-coffee-300">有机阿拉比卡咖啡豆</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-gold">
                15+
              </p>
              <p className="text-xs text-coffee-300">豆子研磨风格</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-gold">
                4.9 ★
              </p>
              <p className="text-xs text-coffee-300">超 12,000+ 好评</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-gold">
                20 Mins
              </p>
              <p className="text-xs text-coffee-300">快速餐桌服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-coffee-200 pb-4">
          <div>
            <span className="text-xs font-bold text-coffee-600 uppercase tracking-widest">
              客户最爱
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-950 mt-1">
              最畅销的咖啡与甜点
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-coffee-800 hover:text-coffee-600 transition"
          >
            完整菜单 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* About The Coffee Shop */}
      <section
        id="about"
        className="bg-coffee-900 text-coffee-100 py-20 border-y border-coffee-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-coffee-700">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                alt="Barista brewing coffee"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coffee-950 p-6 rounded-3xl border border-gold/40 shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <p className="font-serif text-lg font-bold text-cream">
                    获奖
                  </p>
                  <p className="text-xs text-coffee-300">
                    获得2025年最佳专业烘焙师奖
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">
              我们的传承与工艺
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-cream leading-tight">
              满怀激情，精心酿造，尽善尽美.
            </h2>
            <p className="text-coffee-200 text-sm sm:text-base leading-relaxed">
              在巴黎 & 纽约，咖啡不仅仅是早晨的饮料——它是一种神圣的仪式。我们成立于2018年，与埃塞俄比亚、哥伦比亚和危地马拉的可持续微型农场直接合作，采购最好的100%阿拉比卡咖啡豆。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-coffee-950/60 p-4 rounded-2xl border border-coffee-800">
                <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-cream text-sm">
                    购买最佳的豆子
                  </h4>
                  <p className="text-xs text-coffee-300">
                    直接从高海拔农场合乎道德地采购.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-coffee-950/60 p-4 rounded-2xl border border-coffee-800">
                <Heart className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-cream text-sm">
                    优秀的咖啡师
                  </h4>
                  <p className="text-xs text-coffee-300">
                    精确的温度，压力和丝绸拉花艺术.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-coffee-600 uppercase tracking-widest">
            奖状
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-950">
            咖啡爱好者的最爱
          </h2>
          <p className="text-sm text-coffee-600">
            以下是我们的社区对他们在Brew & Bean的日常咖啡仪式的看法.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-cream p-6 rounded-3xl border border-coffee-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-coffee-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-coffee-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-coffee-950">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-coffee-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Opening Hours Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-coffee-950 via-coffee-900 to-coffee-950 rounded-3xl p-8 sm:p-12 text-coffee-100 border border-coffee-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-3 lg:col-span-2">
            <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              今日到访
            </span>
            <h3 className="font-serif text-3xl font-extrabold text-cream">
              准备好享受难忘的咖啡体验了吗?
            </h3>
            <p className="text-coffee-300 text-sm max-w-xl">
              到我们位于482 Artisan Way的旗舰烘焙工坊，或提前预订家庭、商务或休闲桌位.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              to="/reservations"
              className="bg-gold text-coffee-950 font-bold px-6 py-3.5 rounded-xl text-center shadow-lg hover:brightness-110 transition"
            >
              现在订桌
            </Link>
            <Link
              to="/menu"
              className="bg-coffee-800 text-cream font-bold px-6 py-3.5 rounded-xl text-center border border-coffee-700 hover:bg-coffee-700 transition"
            >
            咖啡订单
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
