import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Home, Footprints, Laptop, Lock } from "lucide-react";

const SafetyPresentation = () => {
  const slides = [
    {
      title: "Личная безопасность",
      description: "Основы формирования навыков личной безопасности",
      icon: <Shield className="h-16 w-16 text-primary" />,
      points: [
        "Осознание рисков повседневной жизни",
        "Формирование защитных механизмов",
        "Развитие критического мышления"
      ]
    },
    {
      title: "Безопасность дома",
      description: "Как создать безопасную среду в собственном доме",
      icon: <Home className="h-16 w-16 text-amber-500" />,
      points: [
        "Установка надежных замков и систем сигнализации",
        "Правила хранения ценных вещей",
        "План действий при чрезвычайных ситуациях"
      ]
    },
    {
      title: "Безопасность на улице",
      description: "Правила поведения в общественных местах",
      icon: <Footprints className="h-16 w-16 text-green-500" />,
      points: [
        "Выбор безопасных маршрутов передвижения",
        "Внимательность к окружающей обстановке",
        "Действия при столкновении с угрозой"
      ]
    },
    {
      title: "Цифровая безопасность",
      description: "Защита персональных данных в цифровом пространстве",
      icon: <Laptop className="h-16 w-16 text-blue-500" />,
      points: [
        "Создание надежных паролей",
        "Распознавание фишинговых атак",
        "Безопасное использование социальных сетей"
      ]
    },
    {
      title: "Экстренные ситуации",
      description: "Алгоритмы действий в опасных ситуациях",
      icon: <AlertTriangle className="h-16 w-16 text-red-500" />,
      points: [
        "Номера экстренных служб",
        "Базовые навыки первой помощи",
        "Психологическая устойчивость в кризисных ситуациях"
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-gradient-to-br from-white to-slate-50 border-2 shadow-lg">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4">{slide.icon}</div>
                    <CardTitle className="text-2xl text-center">{slide.title}</CardTitle>
                    <CardDescription className="text-center text-base">{slide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {slide.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <div className="text-sm text-muted-foreground">Слайд {index + 1} из {slides.length}</div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SafetyPresentation;
