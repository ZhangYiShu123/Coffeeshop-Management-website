import React from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-coffee-950 text-coffee-200 border-t border-coffee-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center border border-gold/40">
                <Coffee className="w-5 h-5 text-gold" />
              </div>
              <span className="font-serif text-2xl font-bold text-cream">
                制作方式 & 咖啡豆种类
              </span>
            </div>
            <p className="text-sm text-coffee-300 leading-relaxed">
              使用源自道德种植的单品咖啡豆、手工蒸制的牛奶和手工烘焙的面包，打造令人难忘的咖啡时光。
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-coffee-900 flex items-center justify-center text-coffee-300 hover:text-gold hover:bg-coffee-800 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-coffee-900 flex items-center justify-center text-coffee-300 hover:text-gold hover:bg-coffee-800 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-coffee-900 flex items-center justify-center text-coffee-300 hover:text-gold hover:bg-coffee-800 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-cream font-serif tracking-wider uppercase">
              快速导航
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition">
                  主页 & Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold transition">
                  探索完整菜单
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-gold transition">
                  预订餐桌
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gold transition">
                  查看购物车
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-cream font-serif tracking-wider uppercase">
              开业时间
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-cream">星期一 - 星期五</p>
                  <p className="text-xs text-coffee-400">07:00 AM - 09:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-cream">星期六 - 星期日</p>
                  <p className="text-xs text-coffee-400">08:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-cream font-serif tracking-wider uppercase">
              地点 & 联系方式
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-coffee-300">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>重庆市江津区XX路与XX路交叉口向西50米</span>
              </li>
              <li className="flex items-center gap-3 text-coffee-300">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>0371-2556</span>
              </li>
              <li className="flex items-center gap-3 text-coffee-300">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>hello@brewbean.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-900 flex flex-col sm:flex-row items-center justify-between text-xs text-coffee-400 gap-4">
          <p>© 2026 Brew & Bean Coffee Roastery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            为{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> 咖啡行家而生
          </p>
        </div>
      </div>
    </footer>
  );
};
