import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">POWER GYM</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('trainers')} className="hover:text-primary transition">Тренеры</button>
            <button onClick={() => scrollToSection('transformations')} className="hover:text-primary transition">Результаты</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">Услуги</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')}>Записаться</Button>
        </nav>
      </header>

      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">🏆 Чемпион Мира 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                ТРАНСФОРМАЦИЯ <span className="text-primary">НАЧИНАЕТСЯ ЗДЕСЬ</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Персональные тренировки с чемпионом мира по бодибилдингу и профессиональным тренером в премиальном зале на Арбате
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contact')}>
                  Первая тренировка бесплатно
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('transformations')}>
                  Смотреть результаты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div>
                  <p className="text-3xl font-bold text-primary">150+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Достигли целей</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">7 лет</p>
                  <p className="text-sm text-muted-foreground">Опыт работы</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8f5ecc93-4b7d-49c0-8655-0ec26568da37/files/d1cd0fff-8af7-4ce5-8e8f-0a610a402d70.jpg"
                alt="Зал на Арбате"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <Icon name="MapPin" className="text-white mb-2" size={32} />
                <p className="font-bold">Премиум зал</p>
                <p className="text-sm">Москва, Арбат</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ВАШИ ТРЕНЕРЫ</h2>
            <p className="text-xl text-muted-foreground">Профессионалы мирового уровня</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-scale">
              <div className="relative h-96">
                <img 
                  src="https://cdn.poehali.dev/projects/8f5ecc93-4b7d-49c0-8655-0ec26568da37/files/8dc4ae9a-8e95-43be-8c59-dbf744c69f53.jpg"
                  alt="Главный тренер"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                  🏆 Чемпион Мира 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Алексей Петров</h3>
                <p className="text-primary font-semibold mb-4">Чемпион мира по бодибилдингу</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Чемпион мира IFBB 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>10+ лет опыта в бодибилдинге</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Специализация: набор массы, силовые тренировки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Сертифицированный нутрициолог</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="relative h-96 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <Icon name="User" size={120} className="text-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Мария Соколова</h3>
                <p className="text-secondary font-semibold mb-4">Профессиональный тренер</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                    <span>Мастер спорта по фитнес-бикини</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                    <span>7 лет персонального тренерства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                    <span>Специализация: жиросжигание, функциональный тренинг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                    <span>Эксперт по женским тренировкам</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="transformations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ</h2>
            <p className="text-xl text-muted-foreground">Трансформации наших клиентов за 3-6 месяцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Дмитрий", result: "-18 кг за 4 месяца", metric: "18кг" },
              { name: "Анна", result: "+10 кг мышц за 6 месяцев", metric: "+10кг" },
              { name: "Сергей", result: "-25 кг за 5 месяцев", metric: "25кг" }
            ].map((client, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale">
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src="https://cdn.poehali.dev/projects/8f5ecc93-4b7d-49c0-8655-0ec26568da37/files/6ef1ba70-64e7-41ab-ad0e-b5e0a48d7d83.jpg"
                    alt={client.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-xl">{client.name}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{client.metric}</div>
                  <p className="text-muted-foreground">{client.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center gap-4">
                <Icon name="Trophy" className="text-primary" size={48} />
                <div className="text-left">
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-muted-foreground">клиентов достигают своих целей</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ПРОГРАММЫ ТРЕНИРОВОК</h2>
            <p className="text-xl text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Dumbbell",
                title: "Набор массы",
                description: "Программа для роста мышечной массы с профессиональным планом питания",
                features: ["Силовые тренировки", "План питания", "Добавки"]
              },
              {
                icon: "Flame",
                title: "Жиросжигание",
                description: "Эффективное снижение веса с сохранением мышечной массы",
                features: ["Кардио + силовые", "Диета", "Отслеживание прогресса"]
              },
              {
                icon: "Zap",
                title: "Функциональный тренинг",
                description: "Развитие силы, выносливости и координации",
                features: ["Комплексные упражнения", "Высокая интенсивность", "Гибкость"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Первая тренировка бесплатно!</h3>
                <p className="text-lg mb-6">Познакомьтесь с тренером, оцените зал и получите план тренировок</p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Записаться сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Clock" className="text-white mb-2" size={32} />
                  <p className="font-bold">60 минут</p>
                  <p className="text-sm">Длительность тренировки</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Users" className="text-white mb-2" size={32} />
                  <p className="font-bold">1 на 1</p>
                  <p className="text-sm">Персональный подход</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Calendar" className="text-white mb-2" size={32} />
                  <p className="font-bold">Гибкий график</p>
                  <p className="text-sm">Удобное время</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Target" className="text-white mb-2" size={32} />
                  <p className="font-bold">100%</p>
                  <p className="text-sm">Достижение целей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Михаил",
                text: "За 5 месяцев набрал 12 кг чистой массы! Алексей - настоящий профессионал. Тренировки тяжелые, но результат того стоит.",
                rating: 5
              },
              {
                name: "Екатерина",
                text: "Мария помогла мне сбросить 15 кг и обрести уверенность в себе. Индивидуальный подход и поддержка на каждом этапе!",
                rating: 5
              },
              {
                name: "Андрей",
                text: "Зал на Арбате - лучший в Москве. Оборудование топовое, атмосфера мотивирующая. За 3 месяца вышел на новый уровень!",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Клиент центра</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ЧАСТЫЕ ВОПРОСЫ</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько стоят тренировки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость варьируется от 3000₽ за разовое занятие до 25000₽ за абонемент на 10 тренировок. Первая тренировка - бесплатно!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Подходит ли для новичков?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Абсолютно! Мы работаем с клиентами любого уровня подготовки - от полных новичков до опытных атлетов. Программа адаптируется под ваш уровень.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько времени займет достижение результата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Первые заметные изменения появляются через 3-4 недели. Значительные трансформации происходят за 3-6 месяцев при регулярных тренировках 3-4 раза в неделю.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Нужно ли специальное питание?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, питание - 70% успеха. Мы составляем индивидуальный план питания под ваши цели и предпочтения, учитывая все особенности организма.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Где находится зал?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наш премиальный зал расположен в центре Москвы на Арбате. Точный адрес высылается после записи на первую тренировку.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">НАЧНИТЕ СВОЮ ТРАНСФОРМАЦИЮ</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Запишитесь на бесплатную первую тренировку и получите индивидуальный план достижения ваших целей
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">Москва, Арбат (точный адрес после записи)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@powergym-arbat.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 07:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                />
                <textarea 
                  placeholder="Ваши цели и пожелания" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                />
                <Button size="lg" className="w-full text-lg">
                  Записаться на бесплатную тренировку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 POWER GYM. Все права защищены.</p>
          <p className="mt-2">Москва, Арбат | Персональные тренировки премиум-класса</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
