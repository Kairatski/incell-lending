"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Импортируем нашу новую кнопку
import { Button } from "@/components/ui/neon-button";
import { 
  ChevronRight, Target, ShieldCheck, Zap, Radio, 
  WifiOff, PhoneMissed, CreditCard, Ban,
  Cpu, Activity, Layers, 
  Home, Building2, Warehouse, Construction,
  ClipboardCheck, HardHat, Gauge, Smartphone,
  Plus, Minus, MessageCircle, Server
} from 'lucide-react';

// --- 1. БЛОК ПРОБЛЕМ ---
const ProblemSection = () => {
  const problems = [
    { icon: <PhoneMissed size={24} />, title: "Пропущенные звонки", desc: "Клиенты не могут до вас дозвониться, а вы получаете SMS 'Вам звонили'." },
    { icon: <CreditCard size={24} />, title: "Зависание терминалов", desc: "POS-терминалы теряют сеть, создавая очереди и недовольство клиентов." },
    { icon: <WifiOff size={24} />, title: "Медленный интернет", desc: "Страницы грузятся минутами, а видеосвязь постоянно прерывается." },
    { icon: <Ban size={24} />, title: "Эффект 'Бункера'", desc: "Стены из бетона или цокольные этажи полностью блокируют сигнал." }
  ];
  return (
    <section className="py-24 px-6 bg-[#020617] relative z-10 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 className="text-2xl md:text-5xl font-medium uppercase mb-4">
            Хватит искать сеть у окна
          </motion.h2>
          <p className="text-lg md:text-2xl font-medium text-white/70">
            Устраняем причины плохой связи там, <span className="accent-mini ml-2">где другие бессильны </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 opacity-50 hover:opacity-100 hover:border-red-500/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors text-slate-500">{item.icon}</div>
              <h3 className="text-lg font-bold mb-4 tracking-tight text-slate-200 uppercase">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 2. НАШЕ РЕШЕНИЕ ---
const SolutionSection = () => {
  const features = [
    { icon: <Activity />, title: "Анализ эфира", desc: "Выявляем точные частоты операторов на месте с помощью анализатора спектра." },
    { icon: <Cpu />, title: "Smart-оборудование", desc: "Цифровые репитеры с авторегулировкой мощности. Не шумят на вышки." },
    { icon: <Layers />, title: "Эстетичный монтаж", desc: "Скрытая прокладка кабеля. Антенны подбираются под дизайн интерьера." }
  ];
  return (
    <section className="py-32 px-6 bg-[#030712] border-y border-white/5 relative z-10 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-blue-500 text-[18px] font-black uppercase tracking-[0.4em] mb-4 block">
          Технология комфорта
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase mb-16 leading-tight">
          Как мы возвращаем <br /> 
          <span className="accent-mini">полную шкалу связи</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 mb-6">
                {f.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-tight uppercase">
                  {f.title}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. ОБЪЕКТЫ ---
const ObjectsSection = () => {
  const objects = [
    { icon: <Building2 size={32} />, title: "Офисы и БЦ", desc: "Стабильный интернет для сотрудников и IP-телефонии." },
    { icon: <Home size={32} />, title: "Дома и Дачи", desc: "Связь за городом, где операторы не дотягиваются." },
    { icon: <Warehouse size={32} />, title: "Склады и ангары", desc: "Усиление сигнала в металлических конструкциях и цоколях." },
    { icon: <Construction size={32} />, title: "Магазины", desc: "Бесперебойная работа Kaspi-оплаты и терминалов." }
  ];
  return (
    <section className="py-32 px-6 bg-[#020617] relative z-10 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-left md:text-center">
          <span className="text-blue-500 text-[18px] font-black uppercase tracking-[0.4em] mb-4 block">Решения под ключ</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-tight text-center mb-12 text-white">
            Работаем на любых локациях
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {objects.map((obj, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 flex flex-col md:flex-row gap-8 items-start group opacity-50 hover:opacity-100 hover:bg-white/[0.05] transition-all">
              <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">{obj.icon}</div>
              <div><h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{obj.title}</h3><p className="text-slate-500 leading-relaxed text-sm font-medium">{obj.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. ЭТАПЫ РАБОТЫ ---
const StepsSection = () => {
  const steps = [
  { 
    icon: <ClipboardCheck size={32} strokeWidth={1.5} />, 
    title: "Консультация", 
    desc: "Обсуждаем ваш объект по телефону и делаем предварительный расчет." 
  },
  { 
    icon: <Gauge size={32} strokeWidth={1.5} />, 
    title: "Замер и Аудит", 
    desc: "Платный выезд инженера для анализа частот и подбора оборудования." 
  },
  { 
    icon: <HardHat size={32} strokeWidth={1.5} />, 
    title: "Монтаж", 
    desc: "Устанавливаем систему, настраиваем усиление и тестируем результат." 
  },
  { 
    icon: <Smartphone size={32} strokeWidth={1.5} />, 
    title: "Результат", 
    desc: "Вы принимаете работу: полная шкала связи во всем помещении." 
  }
];
  return (
    <section className="py-32 px-6 bg-[#030712] border-t border-white/5 relative z-10 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-blue-500 text-[18px] font-black uppercase tracking-[0.4em] mb-4 block">
            Алгоритм работы
          </span>
          <h2 className="text-3xl md:text-5xl font-medium- tracking-tight uppercase leading-[0.9]">
            От звонка до полной <br /> 
            <span className="accent-mini">шкалы за 24 часа</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center text-blue-500 mb-8">
                {/* Теперь просто выводим иконку, она уже нужного размера */}
<div className="text-blue-500">
  {step.icon}
</div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-black text-white">0{i + 1}</div>
              </div>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight uppercase">{step.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. FAQ ---
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left group">
        <span className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-blue-500' : 'text-slate-300 group-hover:text-white'}`}>{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-600'}`}>{isOpen ? <Minus size={20} /> : <Plus size={20} />}</div>
      </button>
      <AnimatePresence>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pb-6"><p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl">{answer}</p></motion.div>}</AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "Сколько стоит выезд и замер?", answer: "Выезд платный, так как инженер использует профессиональный анализатор спектра для точной диагностики. Стоимость зависит от удаленности объекта." },
    { question: "Это безопасно для здоровья?", answer: "Система работает на тех же частотах, что и сотовые вышки, но с гораздо меньшей мощностью. Наличие репитера снижает облучение от вашего смартфона." },
    { question: "Что если после установки сигнал не улучшится?", answer: "Монтаж начинается только после замера частот. Если замер покажет, что усиление невозможно, мы скажем об этом сразу." }
  ];
  return (
    <section className="py-32 px-6 bg-[#020617] relative z-10 text-left">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-blue-500 text-[18px] font-black uppercase tracking-[0.4em] mb-4 block">
            Ответы на вопросы
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase">
            Детали, которые <br /> <span className="accent-mini">важно знать</span>
          </h2>
        </div>
        <div className="border-t border-white/5">
          {faqs.map((faq, i) => <AccordionItem key={i} {...faq} />)}
        </div>
      </div>
    </section>
  );
};

// --- 6. CTA ---
const FinalCTA = ({ waLink }: { waLink: string }) => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-blue-600/30 p-12 md:p-24 text-center border border-blue-500/20 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            className="text-2xl md:text-4xl font-medium tracking-tight uppercase mb-6 leading-tight text-white"
          >
            Верните контроль <br /> 
            <span className="accent-mini">над связью</span>
          </motion.h2>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            Закажите профессиональный аудит объекта и точный замер частот уже сегодня.
          </p>
          
          <a href={waLink} target="_blank" className="inline-block group">
            {/* ИСПОЛЬЗУЕМ НОВУЮ КНОПКУ */}
            <Button variant="solid" size="lg" className="font-black text-xl flex items-center gap-4 uppercase tracking-tighter shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Записаться на замер <MessageCircle size={24} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export const HeroSection = () => {
  const phoneNumber = "77016279177";
  const waLink = `https://wa.me/${phoneNumber}?text=Здравствуйте!%20Хочу%20узнать%20стоимость%20замера%20и%20усиления%20связи.`;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20" style={{ background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)` }} />

      <nav className="relative z-50 flex justify-between items-center px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="text-lg font-black tracking-[0.2em] uppercase italic">InCell<span className="text-blue-500">.</span></div>
        <a href={waLink} target="_blank" className="group">
          {/* ИСПОЛЬЗУЕМ НОВУЮ КНОПКУ (ВАРИАНТ GHOST) */}
          <Button variant="ghost" size="sm" className="flex items-center gap-3 border border-white/5">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">Заказать замер</span>
             <ChevronRight size={14} className="text-blue-500" />
          </Button>
        </a>
      </nav>

      <section className="relative z-10 pt-12 pb-20 px-6 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
          <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">
            InCell Engineering Kazakhstan
          </span>
        </div>
        <motion.h1 
          className="text-4xl md:text-7xl font-medium tracking-tighter mb-16"
          style={{ lineHeight: '1.4' }}
        >
          Усиление сотовой связи 
          <br />
          <span className="text-white">на любом объекте</span> 
          <span className="accent-mini ml-6">за 1 день</span>
        </motion.h1>
        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-24 font-medium">На основе замера частот профессиональным анализатором. Гарантируем результат.</p>
        
        <a href={waLink} target="_blank">
            {/* ИСПОЛЬЗУЕМ НОВУЮ КНОПКУ (ВАРИАНТ SOLID) */}
            <Button variant="solid" size="lg" className="font-black text-sm flex items-center gap-3 uppercase tracking-widest">
              Рассчитать стоимость <ChevronRight size={18} />
            </Button>
        </a>
      </section>

      <ProblemSection />
      <SolutionSection />
      <ObjectsSection />
      <StepsSection />
      <FAQSection />
      <FinalCTA waLink={waLink} />

      <footer className="relative z-10 py-20 px-6 text-center border-t border-white/5">
        <div className="text-lg font-black tracking-[0.2em] uppercase italic mb-4">InCell<span className="text-blue-500">.</span></div>
        <p className="text-[10px] text-slate-600 uppercase font-black tracking-[0.3em]">© 2026 InCell Engineering. Работаем по всему Казахстану.</p>
      </footer>
    </div>
  );
};