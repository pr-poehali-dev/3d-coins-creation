import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SafetyPresentation from "@/components/SafetyPresentation";
import SafetyCheck from "@/components/SafetyCheck";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Shield className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-center">Формирование личной безопасности</h1>
      </div>
      
      <Tabs defaultValue="presentation" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="presentation">Презентация</TabsTrigger>
          <TabsTrigger value="checklist">Чек-лист безопасности</TabsTrigger>
        </TabsList>
        
        <TabsContent value="presentation" className="mt-0">
          <SafetyPresentation />
        </TabsContent>
        
        <TabsContent value="checklist" className="mt-0">
          <SafetyCheck />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
