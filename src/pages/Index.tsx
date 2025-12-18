import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center shadow-lg">
              <Icon name="User" size={80} className="text-white" />
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