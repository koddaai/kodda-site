import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "LGPD - Proteção de Dados | Kodda",
  description:
    "Informações sobre como a Kodda trata seus dados de acordo com a LGPD.",
};

export default function LGPDPage() {
  return (
    <LegalPageLayout
      title="LGPD - Lei Geral de Proteção de Dados"
      lastUpdated="Janeiro de 2025"
    >
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Compromisso com a Proteção de Dados
        </h2>
        <p className="text-neutral-700 mb-4">
          A Kodda Serviços de Inteligência Artificial LTDA está comprometida com
          a conformidade à Lei Geral de Proteção de Dados (Lei nº 13.709/2018 -
          LGPD) e com a proteção dos dados pessoais de nossos clientes,
          parceiros e usuários.
        </p>
        <p className="text-neutral-700">
          Esta página apresenta informações sobre como tratamos dados pessoais e
          como você pode exercer seus direitos.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Dados Pessoais e Finalidades
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-200 p-3 text-left font-semibold">
                  Categoria de Dados
                </th>
                <th className="border border-neutral-200 p-3 text-left font-semibold">
                  Finalidade
                </th>
                <th className="border border-neutral-200 p-3 text-left font-semibold">
                  Base Legal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-200 p-3">
                  Dados de identificação (nome, e-mail, telefone)
                </td>
                <td className="border border-neutral-200 p-3">
                  Cadastro e prestação de serviços
                </td>
                <td className="border border-neutral-200 p-3">
                  Execução de contrato
                </td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="border border-neutral-200 p-3">
                  Dados de pagamento
                </td>
                <td className="border border-neutral-200 p-3">
                  Processamento de cobranças
                </td>
                <td className="border border-neutral-200 p-3">
                  Execução de contrato
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-200 p-3">
                  Dados de navegação
                </td>
                <td className="border border-neutral-200 p-3">
                  Melhoria dos serviços
                </td>
                <td className="border border-neutral-200 p-3">
                  Legítimo interesse
                </td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="border border-neutral-200 p-3">
                  Conversas com agentes
                </td>
                <td className="border border-neutral-200 p-3">
                  Prestação do serviço contratado
                </td>
                <td className="border border-neutral-200 p-3">
                  Execução de contrato
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-200 p-3">
                  Dados para marketing
                </td>
                <td className="border border-neutral-200 p-3">
                  Envio de comunicações
                </td>
                <td className="border border-neutral-200 p-3">Consentimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Seus Direitos como Titular
        </h2>
        <p className="text-neutral-700 mb-4">
          A LGPD garante a você os seguintes direitos:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Confirmação e Acesso
            </h3>
            <p className="text-sm text-neutral-600">
              Confirmar se tratamos seus dados e acessar as informações.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">Correção</h3>
            <p className="text-sm text-neutral-600">
              Corrigir dados incompletos, inexatos ou desatualizados.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Anonimização e Eliminação
            </h3>
            <p className="text-sm text-neutral-600">
              Solicitar anonimização, bloqueio ou eliminação de dados
              desnecessários.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Portabilidade
            </h3>
            <p className="text-sm text-neutral-600">
              Solicitar a portabilidade dos dados a outro fornecedor.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Informação sobre Compartilhamento
            </h3>
            <p className="text-sm text-neutral-600">
              Saber com quem compartilhamos seus dados.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Revogação de Consentimento
            </h3>
            <p className="text-sm text-neutral-600">
              Revogar consentimento a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Como Exercer seus Direitos
        </h2>
        <p className="text-neutral-700 mb-4">
          Para exercer qualquer um dos seus direitos, você pode:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
          <li>
            Enviar e-mail para: <strong>privacidade@kodda.ai</strong>
          </li>
          <li>
            Enviar mensagem via WhatsApp: <strong>(11) 99999-9999</strong>
          </li>
          <li>Enviar correspondência para nosso endereço</li>
        </ul>
        <p className="text-neutral-700">
          Responderemos sua solicitação no prazo de até 15 dias, conforme
          previsto na legislação.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Medidas de Segurança
        </h2>
        <p className="text-neutral-700 mb-4">
          Implementamos medidas técnicas e administrativas para proteger seus
          dados:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Criptografia de dados em trânsito (TLS/SSL) e em repouso</li>
          <li>Controle de acesso baseado em função (RBAC)</li>
          <li>Autenticação de dois fatores para sistemas críticos</li>
          <li>Monitoramento e detecção de ameaças 24/7</li>
          <li>Backups regulares com redundância geográfica</li>
          <li>Testes periódicos de segurança e vulnerabilidades</li>
          <li>Treinamento contínuo de colaboradores</li>
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Compartilhamento de Dados
        </h2>
        <p className="text-neutral-700 mb-4">
          Podemos compartilhar dados com terceiros nas seguintes situações:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>
            <strong>Operadores:</strong> provedores de infraestrutura,
            processamento de pagamentos
          </li>
          <li>
            <strong>Integrações:</strong> plataformas que você escolhe conectar
            (CRMs, ERPs)
          </li>
          <li>
            <strong>Obrigações legais:</strong> quando exigido por lei ou
            autoridade competente
          </li>
        </ul>
        <p className="text-neutral-700 mt-4">
          Todos os terceiros estão sujeitos a acordos de proteção de dados e
          confidencialidade.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Transferência Internacional
        </h2>
        <p className="text-neutral-700">
          Alguns de nossos provedores de serviço podem estar localizados fora do
          Brasil. Nesses casos, garantimos que a transferência de dados ocorra
          em conformidade com a LGPD, através de cláusulas contratuais padrão ou
          outras salvaguardas adequadas.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Incidentes de Segurança
        </h2>
        <p className="text-neutral-700">
          Em caso de incidente de segurança que possa causar risco ou dano
          relevante aos titulares, comunicaremos à Autoridade Nacional de
          Proteção de Dados (ANPD) e aos titulares afetados em prazo razoável,
          conforme determina a LGPD.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-32">
          Encarregado de Proteção de Dados (DPO)
        </h2>
        <p className="text-neutral-700 mb-4">
          Para questões relacionadas à proteção de dados pessoais, entre em
          contato com nosso Encarregado:
        </p>
        <div className="bg-neutral-50 p-6 rounded-xl">
          <p className="text-neutral-700 mb-2">
            <strong>Encarregado de Proteção de Dados</strong>
          </p>
          <p className="text-neutral-600 mb-1">
            Kodda Serviços de Inteligência Artificial LTDA
          </p>
          <p className="text-neutral-600 mb-1">E-mail: dpo@kodda.ai</p>
          <p className="text-neutral-600 mb-1">Telefone: (11) 99999-9999</p>
          <p className="text-neutral-600">
            Alameda Rio Negro, 503 - Alphaville, Barueri - SP
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
