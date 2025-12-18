import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Елизавета Константиновна свяжется с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-200">
              <img 
                src="https://cdn.poehali.dev/files/vb3wnQW_rEvtC6mwh0hd36PB6MxcO7PSFk7LU5Mj1eo6pzv75YLUzVfHMFfNwA5pKlU7BJTUo5yYIV3OJ0OK9RVV.jpg" 
                alt="Колбина Елизавета Константиновна" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Колбина Елизавета Константиновна
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Педагог начальных классов
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-base">
              Творчество
            </Badge>
            <Badge className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 text-base">
              Профессионализм
            </Badge>
            <Badge className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 text-base">
              Инновации
            </Badge>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="GraduationCap" size={40} className="text-purple-500" />
            Образование
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all animate-scale-in border-purple-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <Icon name="BookOpen" size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    ФГБОУ ВО "ВВГУ"
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Специальность: <span className="font-semibold text-purple-600">Преподавание в начальных классах</span>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Высшее педагогическое образование, дающее фундаментальные знания 
                    в области методики обучения младших школьников
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="Trophy" size={40} className="text-yellow-500" />
            Достижения
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 border-pink-200 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center">
                      <Icon name="Award" size={28} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Научные конференции
                    </h3>
                    <p className="text-gray-600">
                      Участник научных конференций по педагогике и методике преподавания
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 border-purple-200 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                      <Icon name="Medal" size={28} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Чемпионат по педагогике
                    </h3>
                    <p className="text-gray-600">
                      Участие в чемпионате по педагогической деятельности
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 border-blue-200 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
                      <Icon name="Languages" size={28} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Английский B2+
                    </h3>
                    <p className="text-gray-600">
                      Подтверждённый сертификатом высокий уровень владения английским языком
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 border-green-200 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                      <Icon name="Heart" size={28} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Активная позиция
                    </h3>
                    <p className="text-gray-600">
                      Активная жизненная позиция в профессиональном развитии
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="Palette" size={40} className="text-pink-500" />
            Внеурочная деятельность
          </h2>
          <Card className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 shadow-xl hover:shadow-2xl transition-all animate-scale-in border-pink-300">
            <CardContent className="p-10">
              <div className="text-center">
                <div className="mb-6 inline-block">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center shadow-lg">
                    <Icon name="Paintbrush" size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Кружок "Яркие кисточки"
                </h3>
                <Badge className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-lg mb-6">
                  🎨 Рисование
                </Badge>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Творческий кружок для развития художественных навыков учеников. 
                  Дети изучают различные техники рисования, развивают воображение 
                  и учатся выражать свои эмоции через искусство.
                </p>
                <div className="mt-8 flex justify-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-purple-500" />
                    <span>Групповые занятия</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-pink-500" />
                    <span>Творческий подход</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="Mail" size={40} className="text-blue-500" />
            Контакты
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200 animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Свяжитесь со мной</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                          <Icon name="School" size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Образовательная деятельность</h4>
                        <p className="text-gray-600">Преподавание в начальных классах</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center">
                          <Icon name="Palette" size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Кружок "Яркие кисточки"</h4>
                        <p className="text-gray-600">Развитие творческих навыков</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
                          <Icon name="MessageCircle" size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Консультации</h4>
                        <p className="text-gray-600">По вопросам обучения и развития</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Ваш email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-white border-purple-200 focus:border-purple-400 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-6"
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Колбина Елизавета Константиновна — Педагог начальных классов
          </p>
          <p className="text-sm mt-2 opacity-90">
            С любовью к детям и профессии ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;