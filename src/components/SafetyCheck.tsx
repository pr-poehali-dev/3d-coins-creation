import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Shield, CheckCircle2 } from "lucide-react";

const SafetyCheck = () => {
  const [checklist, setChecklist] = useState({
    home: [
      { id: "locks", label: "Проверить замки на дверях и окнах", checked: false },
      { id: "alarm", label: "Проверить работу сигнализации", checked: false },
      { id: "fire", label: "Проверить работу датчиков дыма", checked: false },
    ],
    digital: [
      { id: "passwords", label: "Обновить пароли от важных аккаунтов", checked: false },
      { id: "backup", label: "Сделать резервные копии важных данных", checked: false },
      { id: "privacy", label: "Проверить настройки приватности в соцсетях", checked: false },
    ],
    personal: [
      { id: "contacts", label: "Обновить список экстренных контактов", checked: false },
      { id: "firstaid", label: "Проверить аптечку первой помощи", checked: false },
      { id: "plan", label: "Обсудить план действий в экстренной ситуации", checked: false },
    ]
  });

  const calculateProgress = () => {
    const totalItems = [...checklist.home, ...checklist.digital, ...checklist.personal].length;
    const checkedItems = [...checklist.home, ...checklist.digital, ...checklist.personal].filter(item => item.checked).length;
    return (checkedItems / totalItems) * 100;
  };

  const handleCheckItem = (category: keyof typeof checklist, id: string) => {
    setChecklist(prev => ({
      ...prev,
      [category]: prev[category].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const resetChecklist = () => {
    setChecklist({
      home: checklist.home.map(item => ({ ...item, checked: false })),
      digital: checklist.digital.map(item => ({ ...item, checked: false })),
      personal: checklist.personal.map(item => ({ ...item, checked: false })),
    });
  };

  const progress = calculateProgress();
  const isComplete = progress === 100;

  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader className="bg-primary/5 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <CardTitle>Проверка безопасности</CardTitle>
          </div>
          {isComplete && <CheckCircle2 className="h-6 w-6 text-green-500" />}
        </div>
        <CardDescription>
          Используйте этот чек-лист для регулярной проверки вашей безопасности
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Прогресс выполнения</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Безопасность дома</h3>
            <div className="space-y-2">
              {checklist.home.map(item => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={item.id} 
                    checked={item.checked}
                    onCheckedChange={() => handleCheckItem('home', item.id)}
                  />
                  <label 
                    htmlFor={item.id} 
                    className={`text-sm leading-tight ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">Цифровая безопасность</h3>
            <div className="space-y-2">
              {checklist.digital.map(item => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={item.id} 
                    checked={item.checked}
                    onCheckedChange={() => handleCheckItem('digital', item.id)}
                  />
                  <label 
                    htmlFor={item.id} 
                    className={`text-sm leading-tight ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">Личная безопасность</h3>
            <div className="space-y-2">
              {checklist.personal.map(item => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={item.id} 
                    checked={item.checked}
                    onCheckedChange={() => handleCheckItem('personal', item.id)}
                  />
                  <label 
                    htmlFor={item.id} 
                    className={`text-sm leading-tight ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetChecklist}
        >
          Сбросить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SafetyCheck;
