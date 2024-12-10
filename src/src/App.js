const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      title: "Produtividade AGG-SPTC",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-6">Produtividade por Servidor</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-semibold text-lg mb-2">Leonardo</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-blue-700">224 documentos</div>
                <div className="text-blue-700">Média: 6.2/dia</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-semibold text-lg mb-2">Marly</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-green-700">83 documentos</div>
                <div className="text-green-700">Média: 5.5/dia</div>
                <div className="text-green-600 col-span-2">15 dias de férias no período</div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="font-semibold text-lg mb-2">Matheus</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-purple-700">59 documentos</div>
                <div className="text-purple-700">Média: 3.9/dia</div>
                <div className="text-purple-600 col-span-2">15 dias de férias no período</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Distribuição de Responsabilidades",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Marly</h3>
              <ul className="list-disc ml-4 space-y-2 text-blue-700">
                <li>Solicitação de laudos via E-mail e SEI</li>
                <li>Ampla divulgação de documentos</li>
                <li>Atribuições de processos no período vespertino</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Matheus</h3>
              <ul className="list-disc ml-4 space-y-2 text-green-700">
                <li>Processos que necessitam diligências</li>
                <li>Escolha de servidores para cursos e operações</li>
                <li>Processos da área operacional (viaturas, armamentos, kits táticos)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Leonardo</h3>
              <ul className="list-disc ml-4 space-y-2 text-purple-700">
                <li>Deliberações com Assessorias e Gerências</li>
                <li>Processos da Sala Lilás</li>
                <li>Solicitações urgentes da GESG</li>
                <li>Subsídios para a PGE</li>
                <li>Manifestações jurídicas</li>
                <li>Processos com múltiplas relações</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Otimização de Processos Funcionais",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Contexto</h3>
              <p className="text-blue-700">Padronização nacional dos documentos de identificação funcional, exigindo agendamento via formulário para todos os servidores</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Desafio</h3>
              <ul className="list-disc ml-4 space-y-2 text-amber-700">
                <li>Processamento de 4 opções de data/horário por servidor</li>
                <li>Priorização por ordem de preenchimento do formulário</li>
                <li>Grande volume de dados para análise manual</li>
                <li>Prazo exíguo para processamento</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solução</h3>
              <ul className="list-disc ml-4 space-y-2 text-green-700">
                <li>Desenvolvimento de aplicativo Python em 2 dias</li>
                <li>Automação completa da seleção e priorização</li>
                <li>Geração automática de documentos para o SEI</li>
                <li>Redução do tempo de processamento de 3 dias para minutos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Gestão e Capacitação SEI",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Demanda</h3>
              <p className="text-blue-700">Superintendente Adjunto solicitou criação e gestão de novas unidades SEI, estabelecendo AGG/SPTC como ponto focal</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Ações Realizadas</h3>
              <ul className="list-disc ml-4 space-y-2 text-purple-700">
                <li>Gestão direta com SEAD para ajuste de processos</li>
                <li>Diligências para cadastros de usuários</li>
                <li>Criação de cargos nas unidades administrativas</li>
                <li>Estabelecimento de fluxos de trabalho</li>
                <li>Desenvolvimento de expertise para capacitação</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Resultado</h3>
              <p className="text-green-700">AGG/SPTC consolidada como ponto focal para toda gestão de unidades SEI da SPTC, com processos padronizados e documentados</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Problemas de Conectividade",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Períodos Críticos</h3>
              <ul className="list-disc ml-4 space-y-2 text-red-700">
                <li>Semana 02-Dez: 3 dias sem acesso à internet</li>
                <li>Semana 25-Nov: 3 dias com instabilidade durante Manual de Perícias</li>
                <li>Site da agenda completamente inacessível</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Impactos</h3>
              <ul className="list-disc ml-4 space-y-2 text-amber-700">
                <li>Impossibilidade de acesso aos sistemas</li>
                <li>Redução na capacidade de registro de demandas</li>
                <li>Necessidade de retrabalho após normalização</li>
                <li>Atrasos em processos críticos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Estratégia de Distribuição",
      content: (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Situação Atual</h3>
              <p className="text-blue-700">Concentração temporária de processos específicos para desenvolvimento de soluções e padronizações</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Justificativas</h3>
              <ul className="list-disc ml-4 space-y-2 text-amber-700">
                <li>Processos em fase de automação e otimização</li>
                <li>Necessidade de conhecimento técnico específico</li>
                <li>Desenvolvimento de documentação e treinamentos</li>
                <li>Padronização de procedimentos em andamento</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Plano de Redistribuição</h3>
              <ul className="list-disc ml-4 space-y-2 text-green-700">
                <li>Automatização reduzirá complexidade das tarefas</li>
                <li>Documentação permitirá fácil replicação</li>
                <li>Treinamento em desenvolvimento para equipe</li>
                <li>Processos padronizados para distribuição</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">{slides[currentSlide].title}</h1>
      </div>
      
      <div className="relative bg-gray-50 rounded-xl shadow-lg">
        {slides[currentSlide].content}
        
        <div className="flex justify-center items-center space-x-6 p-4 bg-white rounded-b-xl border-t">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-600 transition-colors"
          >
            Anterior
          </button>
          <span className="font-medium text-gray-600">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-600 transition-colors"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;