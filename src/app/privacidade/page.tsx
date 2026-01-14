import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Política de Privacidade | Kodda",
  description:
    "Política de Privacidade da Kodda - Como coletamos, usamos e protegemos seus dados.",
};

export default function PrivacidadePage() {
  return (
    <LegalPageLayout
      title="Política de Privacidade"
      lastUpdated="Janeiro de 2025"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          1. Introdução
        </h2>
        <p className="text-neutral-700 mb-4">
          A Kodda Serviços de Inteligência Artificial LTDA ("Kodda", "nós",
          "nosso") está comprometida com a proteção da privacidade dos usuários
          de nossos serviços. Esta Política de Privacidade descreve como
          coletamos, usamos, armazenamos e protegemos suas informações pessoais.
        </p>
        <p className="text-neutral-700">
          Ao utilizar nossos serviços, você concorda com as práticas descritas
          nesta política.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          2. Dados que Coletamos
        </h2>
        <p className="text-neutral-700 mb-4">
          Podemos coletar os seguintes tipos de informações:
        </p>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          2.1 Dados fornecidos por você
        </h3>
        <ul className="list-disc pl-6 text-neutral-700 mb-4 space-y-2">
          <li>Nome completo e dados de contato (e-mail, telefone)</li>
          <li>Informações da empresa (nome, CNPJ, endereço)</li>
          <li>Dados de pagamento e faturamento</li>
          <li>Comunicações enviadas através de nossos canais</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          2.2 Dados coletados automaticamente
        </h3>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Endereço IP e informações do dispositivo</li>
          <li>Dados de navegação e uso dos serviços</li>
          <li>Cookies e tecnologias similares</li>
          <li>Logs de acesso e interações com nossos agentes</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          3. Como Usamos seus Dados
        </h2>
        <p className="text-neutral-700 mb-4">
          Utilizamos suas informações para:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Fornecer, manter e melhorar nossos serviços</li>
          <li>Processar transações e enviar notificações relacionadas</li>
          <li>Personalizar sua experiência com nossos agentes digitais</li>
          <li>Enviar comunicações de marketing (com seu consentimento)</li>
          <li>Cumprir obrigações legais e regulatórias</li>
          <li>Prevenir fraudes e garantir a segurança dos serviços</li>
          <li>Realizar análises e melhorias nos produtos</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          4. Compartilhamento de Dados
        </h2>
        <p className="text-neutral-700 mb-4">
          Não vendemos suas informações pessoais. Podemos compartilhar dados
          com:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>
            <strong>Provedores de serviço:</strong> empresas que nos auxiliam na
            operação (hospedagem, processamento de pagamentos, análise de dados)
          </li>
          <li>
            <strong>Parceiros de integração:</strong> quando você conecta nossos
            serviços a outras plataformas (CRMs, ERPs)
          </li>
          <li>
            <strong>Autoridades legais:</strong> quando exigido por lei ou para
            proteger nossos direitos
          </li>
          <li>
            <strong>Em caso de fusão ou aquisição:</strong> seus dados podem ser
            transferidos como parte da transação
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          5. Segurança dos Dados
        </h2>
        <p className="text-neutral-700 mb-4">
          Implementamos medidas técnicas e organizacionais para proteger suas
          informações:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Criptografia de dados em trânsito e em repouso</li>
          <li>Controles de acesso baseados em função</li>
          <li>Monitoramento contínuo de segurança</li>
          <li>Backups regulares e planos de recuperação</li>
          <li>Treinamento de funcionários em segurança da informação</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          6. Retenção de Dados
        </h2>
        <p className="text-neutral-700">
          Mantemos seus dados pelo tempo necessário para cumprir as finalidades
          descritas nesta política, a menos que um período de retenção maior
          seja exigido ou permitido por lei. Após o término da relação
          contratual, podemos reter dados por até 5 anos para fins de compliance
          e defesa em eventuais litígios.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          7. Seus Direitos
        </h2>
        <p className="text-neutral-700 mb-4">
          De acordo com a LGPD, você tem direito a:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Confirmar a existência de tratamento de dados</li>
          <li>Acessar seus dados pessoais</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
          <li>Obter informações sobre compartilhamento de dados</li>
          <li>Revogar consentimento a qualquer momento</li>
          <li>Solicitar portabilidade dos dados</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Cookies</h2>
        <p className="text-neutral-700 mb-4">
          Utilizamos cookies e tecnologias similares para melhorar sua
          experiência. Os tipos de cookies que usamos incluem:
        </p>
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>
            <strong>Essenciais:</strong> necessários para o funcionamento do
            site
          </li>
          <li>
            <strong>Analíticos:</strong> nos ajudam a entender como você usa
            nossos serviços
          </li>
          <li>
            <strong>Marketing:</strong> usados para personalizar anúncios (com
            seu consentimento)
          </li>
        </ul>
        <p className="text-neutral-700 mt-4">
          Você pode gerenciar suas preferências de cookies através das
          configurações do seu navegador.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          9. Alterações nesta Política
        </h2>
        <p className="text-neutral-700">
          Podemos atualizar esta Política de Privacidade periodicamente. Quando
          fizermos alterações significativas, notificaremos você por e-mail ou
          através de um aviso em nosso site. Recomendamos que você revise esta
          política regularmente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contato</h2>
        <p className="text-neutral-700 mb-4">
          Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
          entre em contato:
        </p>
        <div className="bg-neutral-50 p-6 rounded-xl">
          <p className="text-neutral-700 mb-2">
            <strong>Kodda Serviços de Inteligência Artificial LTDA</strong>
          </p>
          <p className="text-neutral-600 mb-1">CNPJ: 63.644.444/0001-80</p>
          <p className="text-neutral-600 mb-1">
            Alameda Rio Negro, 503 - Alphaville, Barueri - SP
          </p>
          <p className="text-neutral-600 mb-1">E-mail: privacidade@kodda.ai</p>
          <p className="text-neutral-600">WhatsApp: (11) 99999-9999</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
