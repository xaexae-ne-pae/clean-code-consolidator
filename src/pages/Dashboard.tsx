
import { Award, Calendar, ChevronRight, List, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { MatchCard } from "@/components/MatchCard";
import { ActionCard } from "@/components/ActionCard";
import { Sidebar } from "@/components/Sidebar";
import { useEffect } from "react";

const Dashboard = () => {
  // Add body class for dashboard-specific styling
  useEffect(() => {
    document.body.classList.add('dashboard-active');
    
    return () => {
      document.body.classList.remove('dashboard-active');
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b bg-background/95 px-8 py-4 backdrop-blur">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Visão Geral</h1>
            <p className="text-muted-foreground">Bem-vindo ao seu centro de gerenciamento de torneios de karatê</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Trophy className="h-4 w-4" />
              <span>Torneio</span>
            </Button>
            <Button className="gap-2">
              <span>Novo Atleta</span>
              <span className="text-lg">+</span>
            </Button>
          </div>
        </header>
        
        <main className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Atletas" 
              value="124" 
              icon={Users} 
              iconColor="bg-primary/10 text-primary"
            />
            <StatCard 
              title="Eventos Ativos" 
              value="3" 
              icon={Calendar} 
              iconColor="bg-green-500/10 text-green-500"
            />
            <StatCard 
              title="Categorias" 
              value="15" 
              icon={List} 
              iconColor="bg-yellow-500/10 text-yellow-500"
            />
            <StatCard 
              title="Lutas Concluídas" 
              value="48" 
              icon={Award} 
              iconColor="bg-purple-500/10 text-purple-500"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-lg font-semibold">Lutas de hoje</h2>
                  <p className="text-xs text-muted-foreground">Próximas lutas e eventos</p>
                </div>
                <Button variant="outline" size="sm" className="gap-1 h-8 text-xs">
                  <span>Ver todas</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </div>
              
              <div>
                <MatchCard 
                  category="Male Kumite -75kg" 
                  time="10:30 AM" 
                  mat="Mat 1" 
                  player1="John D." 
                  player2="Mike S." 
                />
                <MatchCard 
                  category="Female Kata" 
                  time="11:15 AM" 
                  mat="Mat 2" 
                  player1="Anna K." 
                  player2="Sarah L." 
                />
                <MatchCard 
                  category="Junior Kumite" 
                  time="12:00 PM" 
                  mat="Mat 3" 
                  player1="David R." 
                  player2="Alex M." 
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="mb-3">
                <h2 className="text-lg font-semibold">Ações Rápidas</h2>
                <p className="text-xs text-muted-foreground">Funções mais usadas</p>
              </div>
              
              <div>
                <ActionCard 
                  icon={Award} 
                  title="Iniciar Pontuação" 
                  description="Registrar pontos das lutas" 
                  to="/pontuacao" 
                />
                <ActionCard 
                  icon={List} 
                  title="Gerenciar Categorias" 
                  description="Editar divisões de peso e idade" 
                  to="/categorias" 
                />
                <ActionCard 
                  icon={Trophy} 
                  title="Visualizar Resultados" 
                  description="Ver classificação do torneio" 
                  to="/resultados" 
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
