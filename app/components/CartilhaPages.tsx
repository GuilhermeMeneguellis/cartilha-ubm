"use client";

import { ReactNode } from "react";
import {
  AnaisCovers,
  AnalystScene,
  BrowserMag,
  BrowserQuestion,
  CapesLogo,
  CircuitBulb,
  HandPoint,
  JournalCovers,
  LabScene,
  MagIcon,
  PersonWithMag,
  PiapBadge,
  SeminarioBanner,
  SeminarioExtensao,
  TangledBulb,
} from "./Icons";

export type PageVariant = "cover" | "cream" | "burgundy" | "back";

export type CartilhaPage = {
  id: string;
  variant: PageVariant;
  render: () => ReactNode;
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="page-title-pill text-sm sm:text-base md:text-lg">
        <MagIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        <span>{children}</span>
        <HandPoint className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ubm-burgundy)]/80" />
      </span>
    </div>
  );
}

function Divider() {
  return <div className="section-divider" />;
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong className="text-[var(--ubm-burgundy)] font-semibold">
      {children}
    </strong>
  );
}

function InfoCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-[var(--ubm-cream-warm)]/60 border border-[var(--ubm-burgundy)]/30 shadow-sm">
      <div className="font-bold text-[var(--ubm-burgundy)] text-sm sm:text-base">
        {title}
      </div>
      {subtitle && (
        <div className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest opacity-70 mt-0.5">
          {subtitle}
        </div>
      )}
      <div className="mt-1.5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export const cartilhaPages: CartilhaPage[] = [
  // 1 — Capa
  {
    id: "cover",
    variant: "cover",
    render: () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4 sm:gap-6 px-2">
        <p className="text-[0.55rem] sm:text-[0.7rem] tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[var(--ubm-burgundy)]">
          Centro Universitário de Barra Mansa
        </p>
        <div className="w-16 sm:w-24 h-[2px] bg-[var(--ubm-burgundy-dark)] opacity-70" />
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-[var(--ubm-burgundy-dark)]">
          Cartilha de
          <br />
          Orientações
        </h1>
        <p className="font-serif italic text-sm sm:text-base md:text-lg max-w-[26ch] text-[var(--ubm-burgundy)]/85 leading-snug">
          Conheça o Núcleo de Pesquisa e saiba um pouco mais sobre a pesquisa
          científica.
        </p>
        <div className="w-16 sm:w-24 h-[2px] bg-[var(--ubm-burgundy-dark)] opacity-70" />
        <BrowserMag className="w-28 sm:w-40 md:w-48 mt-1 text-[var(--ubm-burgundy)]" />
        <p className="text-[0.6rem] sm:text-[0.7rem] tracking-[0.4em] uppercase mt-auto text-[var(--ubm-burgundy)]/80">
          Barra Mansa / RJ — 2026
        </p>
      </div>
    ),
  },

  // 2 — Créditos
  {
    id: "credits",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-4 sm:gap-5 h-full">
        <SectionTitle>Equipe</SectionTitle>
        <Divider />
        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
          <li>
            <div className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
              Reitor
            </div>
            <div className="font-serif">Dr. Bruno Morais Lemos</div>
          </li>
          <li>
            <div className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
              Coordenação do Núcleo de Ensino e Processos Avaliativos
            </div>
            <div className="font-serif">Profa. Ma. Rosali Gomes Araújo Maciel</div>
          </li>
          <li>
            <div className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
              Coordenação de Pesquisa e Pós-Graduação
            </div>
            <div className="font-serif">Prof. Me. Ricardo Alves Said</div>
          </li>
          <li>
            <div className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
              Editora da Revista Científica
            </div>
            <div className="font-serif">Profa. Dra. Carla Gorni</div>
          </li>
          <li>
            <div className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
              Editora dos Anais dos Seminários
            </div>
            <div className="font-serif">Profa. Ma. Ana Maria Dinardi</div>
          </li>
        </ul>
      </div>
    ),
  },

  // 3 — Apresentação
  {
    id: "apresentacao",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Apresentação</SectionTitle>
        <Divider />
        <p className="text-sm sm:text-base leading-relaxed">
          Este material foi desenvolvido pela <Highlight>Coordenação de
          Pesquisa e Pós-Graduação</Highlight> do UBM.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          O objetivo desta cartilha é facilitar o acesso da comunidade
          acadêmica a informações sobre o que é a pesquisa científica e demais
          assuntos ligados ao tema, além de apresentar o funcionamento da
          Coordenação de Pesquisa do UBM.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Aqui serão abordadas dúvidas comuns sobre a pesquisa científica e a
          participação nela. <em>Boa leitura!</em>
        </p>
        <div className="mt-auto pt-4 border-t border-[var(--ubm-burgundy)]/30 text-right">
          <div className="font-serif text-sm sm:text-base">
            Prof. Me. Ricardo Alves Said
          </div>
          <div className="text-[0.7rem] sm:text-xs uppercase tracking-widest text-[var(--ubm-burgundy)]/80">
            Coordenador
          </div>
        </div>
      </div>
    ),
  },

  // 4 — O que é Ciência?
  {
    id: "ciencia",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>O que é Ciência?</SectionTitle>
        <Divider />
        <div className="grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-4 items-start">
          <div className="space-y-3 text-sm sm:text-base leading-relaxed">
            <p>
              A <Highlight>Ciência</Highlight> é resultado do interesse da
              humanidade em entender como ocorrem os diversos fenômenos do
              mundo — sejam eles biológicos, físicos, sociais, psicológicos,
              entre outros.
            </p>
            <p>
              Ela permite compreender, por exemplo, por que os metais
              enferrujam, como se formam as marés, como o cérebro funciona, o
              que afeta a aprendizagem escolar e diversas outras questões.
            </p>
          </div>
          <BrowserQuestion className="w-24 sm:w-28 md:w-36 mx-auto sm:mx-0 sm:mt-1" />
        </div>
        <div className="p-3 sm:p-4 rounded-lg bg-[var(--ubm-burgundy)]/8 border-l-4 border-[var(--ubm-burgundy)] text-sm sm:text-base leading-relaxed">
          O que diferencia o conhecimento científico do religioso, filosófico
          ou do senso comum é que a Ciência busca chegar a conclusões{" "}
          <Highlight>baseadas em provas e evidências</Highlight>. O meio
          utilizado é o <Highlight>método científico</Highlight>, com regras e
          procedimentos lógicos para testar hipóteses.
        </div>
      </div>
    ),
  },

  // 5 — O que é Pesquisa Científica?
  {
    id: "pesquisa",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>O que é Pesquisa Científica?</SectionTitle>
        <Divider />
        <p className="text-sm sm:text-base leading-relaxed">
          Pesquisa científica é toda atividade que tem por objetivo a{" "}
          <Highlight>produção de conhecimento</Highlight>, justificada pela
          relevância para o avanço das teorias científicas e pelos ganhos
          gerados à sociedade.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Em outras palavras, pesquisar é buscar as informações necessárias
          (isto é, coletar dados) a fim de responder à pergunta que motivou a
          pesquisa.
        </p>

        <h3 className="font-serif text-base sm:text-lg text-[var(--ubm-burgundy)] mt-2">
          Toda pesquisa é composta por diversas etapas:
        </h3>
        <ol className="numbered-list text-sm sm:text-base">
          <li>
            <Highlight>Elaboração do projeto</Highlight> — cientistas definem
            qual contribuição pretendem oferecer e como planejam realizá-la.
          </li>
          <li>
            <Highlight>Avaliação ética</Highlight> — projetos com seres humanos
            precisam ser aprovados quanto à adequação científica e ética.
          </li>
          <li>
            <Highlight>Coleta de dados</Highlight> — pessoas participam das
            atividades propostas, fornecendo informações aos pesquisadores.
          </li>
          <li>
            <Highlight>Interpretação e conclusões</Highlight> — os dados são
            analisados conforme o método científico para chegar às conclusões
            do estudo.
          </li>
        </ol>
      </div>
    ),
  },

  // 6 — Quem orienta as Pesquisas?
  {
    id: "regulacao",
    variant: "burgundy",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Quem orienta ou regula as Pesquisas?</SectionTitle>
        <Divider />
        <p className="text-sm sm:text-base leading-relaxed">
          Há diversas instâncias relacionadas à orientação e regulação das
          pesquisas, com especial enfoque nos seus aspectos éticos.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Avaliar eticamente uma pesquisa significa garantir os direitos e
          proteger os <Highlight>participantes</Highlight>.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
          <InfoCard title="Conselho Nacional de Saúde (CNS)" subtitle="Vinculado ao SUS / Ministério da Saúde">
            Elabora as <Highlight>Resoluções de Ética em Pesquisa</Highlight>{" "}
            que regulam estudos com seres humanos. Atualmente são seguidas as
            Resoluções CNS nº 466/12 e nº 510/16.
          </InfoCard>
          <InfoCard title="Sistema CEP / CONEP" subtitle="Comitês de Ética em Pesquisa">
            Composto pela CONEP, ligada ao CNS, e por Comitês de Ética em
            Pesquisa (CEP) das instituições. Avalia eticamente os projetos com
            seres humanos. Utiliza a <Highlight>Plataforma Brasil</Highlight>{" "}
            para registro e avaliação.
          </InfoCard>
        </div>
      </div>
    ),
  },

  // 7 — Projeto (parte 1)
  {
    id: "projeto-1",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Como elaboro meu projeto?</SectionTitle>
        <Divider />
        <p className="text-sm sm:text-base leading-relaxed">
          Construir um <Highlight>Projeto de Pesquisa</Highlight> exige
          organização. Comece definindo claramente o que você quer
          investigar:
        </p>
        <ol className="numbered-list text-sm sm:text-base">
          <li>
            <Highlight>Tema</Highlight> — escolha o tema da pesquisa.
          </li>
          <li>
            <Highlight>Problema</Highlight> — o que eu quero pesquisar? Qual é
            a minha pergunta?
          </li>
          <li>
            <Highlight>Hipótese</Highlight> — uma possível resposta ao
            problema.
          </li>
          <li>
            <Highlight>Objetivos</Highlight> — geral (o que fazer para
            responder à pergunta) e específicos (resultados concretos que
            contribuem para o objetivo geral).
          </li>
          <li>
            <Highlight>Justificativa</Highlight> — por que o tema é
            importante? Que problemas a pesquisa busca resolver? Como surgiu
            a ideia?
          </li>
        </ol>
        <div className="mt-auto pt-2">
          <AnalystScene className="w-full max-w-[280px] mx-auto" />
        </div>
      </div>
    ),
  },

  // 8 — Projeto (parte 2)
  {
    id: "projeto-2",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Projeto — continuação</SectionTitle>
        <Divider />
        <ol className="numbered-list text-sm sm:text-base" start={6}>
          <li>
            <Highlight>Metodologia</Highlight> — caminhos para produzir o
            conhecimento. Como as atividades se desenvolverão?
          </li>
          <li>
            <Highlight>Técnicas</Highlight> — pesquisa bibliográfica, de
            campo, questionário, entrevista, observação, experimento. Quem
            estará envolvido?
          </li>
          <li>
            <Highlight>Referencial teórico</Highlight> — autores que
            sustentarão as ideias do trabalho.
          </li>
          <li>
            <Highlight>Cronograma</Highlight> — quadro com as atividades
            mês a mês.
          </li>
          <li>
            <Highlight>Referências</Highlight> — lista somente dos autores
            efetivamente citados.
          </li>
        </ol>
        <div className="p-3 sm:p-4 rounded-lg bg-[var(--ubm-cream-warm)]/70 border border-[var(--ubm-burgundy)]/30 text-sm sm:text-base leading-relaxed">
          O <Highlight>NUMECA</Highlight> oferece suporte didático para a
          escrita científica (artigos, pôsteres, TCCs) e para a aplicação das
          normas ABNT.
        </div>
      </div>
    ),
  },

  // 9 — Projeto pronto e agora?
  {
    id: "projeto-pronto",
    variant: "burgundy",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Projeto pronto e agora?</SectionTitle>
        <Divider />
        <div className="space-y-3 text-sm sm:text-base leading-relaxed">
          <p>
            O projeto envolve <Highlight>seres humanos</Highlight>? Se sim, é
            preciso submetê-lo ao <Highlight>Comitê de Ética em Pesquisa
            (CEP)</Highlight> do UBM, responsável por verificar se todos os
            critérios éticos estão sendo observados.
          </p>
          <p>
            Há um modelo próprio de projeto, disponibilizado pela Coordenação
            de Pesquisa, que deverá ser submetido à{" "}
            <Highlight>Plataforma Brasil</Highlight> para validação.
          </p>
          <p>
            O projeto submetido ao CEP traz o <Highlight>TCLE</Highlight>{" "}
            (Termo de Consentimento Livre e Esclarecido), no qual as pessoas
            envolvidas dão seu consentimento para participar da pesquisa.
          </p>
          <p>
            Se o projeto envolve <Highlight>animais</Highlight>, deverá ser
            submetido à <Highlight>CEUA</Highlight>, que segue os mesmos
            moldes do CEP e também tem modelo próprio disponibilizado pela
            Coordenação.
          </p>
        </div>
      </div>
    ),
  },

  // 10 — Pesquisa feita, publicizar!
  {
    id: "publicar",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Pesquisa feita — publicize!</SectionTitle>
        <Divider />
        <p className="text-sm sm:text-base leading-relaxed">
          Existem várias formas de comunicar os resultados de uma pesquisa.
          No UBM, as principais são:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base">
          <InfoCard title="Trabalhos de Curso (TCCs)">
            Produção acadêmica conclusiva da graduação.
          </InfoCard>
          <InfoCard title="Artigos Científicos">
            Publicados na Revista Científica e na Revista do Curso de Direito.
          </InfoCard>
          <InfoCard title="Pôsteres e Resumos">
            Apresentados em eventos e seminários acadêmicos.
          </InfoCard>
          <InfoCard title="Seminário de Pesquisa">
            Anualmente, em outubro, com relatos de experiência e
            apresentações.
          </InfoCard>
        </div>
        <div className="mt-auto pt-2">
          <TangledBulb className="w-full max-w-[260px] mx-auto" />
        </div>
      </div>
    ),
  },

  // 11 — Núcleos de Pesquisa
  {
    id: "nucleos",
    variant: "burgundy",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Núcleos de Pesquisa</SectionTitle>
        <Divider />
        <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
          <InfoCard title="NUPES" subtitle="Núcleo de Pesquisa em Saúde">
            Coord.: Prof. Dr. Victor Maximiliano R. Tebaldi
          </InfoCard>
          <InfoCard title="NUPECH" subtitle="Pesquisa em Ciências Humanas">
            Coord.: Profa. Ma. Florência Cruz R. Ebeling
          </InfoCard>
          <InfoCard title="NUPIDE" subtitle="Inovação e Difusão das Engenharias">
            Coord.: Prof. Me. Fábio de Souza
          </InfoCard>
          <InfoCard title="NUPED" subtitle="Núcleo de Pesquisa em Direito">
            Coord.: Profa. Ma. Sheila Lyrio Cruz Zelma
          </InfoCard>
          <InfoCard title="NUPEGI" subtitle="Estratégia, Gestão e Inovação">
            Coord.: Profa. Dra. Bárbara Drumond
          </InfoCard>
          <InfoCard title="NUMEDVET" subtitle="Pesquisa em Medicina Veterinária">
            Coord.: Prof. Me. Gustavo Siqueira
          </InfoCard>
        </div>
        <div className="mt-auto pt-2 flex justify-center">
          <CircuitBulb className="w-20 sm:w-24" />
        </div>
      </div>
    ),
  },

  // 12 — PIC e Programas
  {
    id: "programas",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Principais programas</SectionTitle>
        <Divider />
        <div className="rounded-lg overflow-hidden">
          <PiapBadge className="w-full" />
        </div>
        <div className="space-y-3 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="font-serif text-base sm:text-lg text-[var(--ubm-burgundy)]">
              PIC — Programa de Iniciação Científica
            </h3>
            <p>
              Incentiva talentos potenciais entre os discentes da graduação por
              meio do envio de projetos de pesquisa, orientados por docentes
              cadastrados nos Núcleos de Pesquisa do UBM, com a concessão de{" "}
              <Highlight>bolsas de iniciação científica</Highlight>.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg text-[var(--ubm-burgundy)]">
              Rodas de Conversa
            </h3>
            <p>
              Espaço para divulgação e exposição das ideias dos alunos em
              relação às suas pesquisas científicas acadêmicas.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // 13 — Publicações
  {
    id: "publicacoes",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Nossas publicações científicas</SectionTitle>
        <Divider />
        <JournalCovers className="w-full max-w-[420px] mx-auto" />
        <div className="text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            A <Highlight>Revista Científica do UBM</Highlight> (e-ISSN
            2764-5185) possui classificação <Highlight>Qualis CAPES A3</Highlight>{" "}
            no quadriênio 2021–2024. A publicação é interdisciplinar, semestral
            e utiliza avaliação <em>duplo-cega</em>, aceitando artigos e
            relatos de experiência.
          </p>
          <p>
            A <Highlight>Revista do Curso de Direito</Highlight> (ISSN
            2238-7390) é dedicada à área jurídica, com publicação periódica e
            avaliação por pares.
          </p>
        </div>
        <div className="mt-auto flex items-center gap-3 justify-center">
          <CapesLogo className="w-14 sm:w-16" />
          <span className="text-xs sm:text-sm font-serif italic text-[var(--ubm-burgundy)]">
            Qualis CAPES · A3
          </span>
        </div>
      </div>
    ),
  },

  // 14 — Anais e Seminários
  {
    id: "seminarios",
    variant: "burgundy",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <SectionTitle>Nossos seminários científicos</SectionTitle>
        <Divider />
        <div className="space-y-3">
          <div className="rounded-lg overflow-hidden">
            <SeminarioBanner className="w-full" />
          </div>
          <p className="text-xs sm:text-sm text-center opacity-90 -mt-1">
            <Highlight>Em outubro de cada ano</Highlight>
          </p>
          <div className="rounded-lg overflow-hidden">
            <SeminarioExtensao className="w-full" />
          </div>
          <p className="text-xs sm:text-sm text-center opacity-90 -mt-1">
            <Highlight>Em maio de cada ano</Highlight>
          </p>
        </div>
        <div className="mt-auto">
          <AnaisCovers className="w-full max-w-[280px] mx-auto" />
        </div>
      </div>
    ),
  },

  // 15 — Contato
  {
    id: "contato",
    variant: "cream",
    render: () => (
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <p className="text-[0.6rem] sm:text-xs tracking-[0.35em] uppercase text-[var(--ubm-burgundy)]/80 text-center">
          Centro Universitário de Barra Mansa
        </p>
        <SectionTitle>Onde mais posso receber informações?</SectionTitle>
        <Divider />
        <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-center">
          <div className="space-y-3 text-sm sm:text-base">
            <div>
              <div className="font-serif text-base sm:text-lg text-[var(--ubm-burgundy)]">
                Coordenação de Pesquisa
              </div>
              <div className="opacity-80">Segunda a sexta, 8h às 22h</div>
              <div className="opacity-80">Prédio II</div>
            </div>
            <div className="space-y-1">
              <div>
                <Highlight>Tel.:</Highlight> (24) 3325-0217
              </div>
              <div>
                <Highlight>Cel.:</Highlight> (24) 99316-6768
              </div>
              <div className="break-all">
                <Highlight>E-mail:</Highlight> posgrad.pesquisa@ubm.br
              </div>
            </div>
          </div>
          <PersonWithMag className="w-24 sm:w-28 md:w-36 mx-auto" />
        </div>
        <LabScene className="w-full max-w-[360px] mx-auto mt-auto" />
      </div>
    ),
  },

  // 16 — Contracapa
  {
    id: "back",
    variant: "back",
    render: () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4 sm:gap-6 px-2">
        <div className="text-base sm:text-xl tracking-[0.3em] uppercase opacity-80">
          Nova UBM
        </div>
        <div className="w-20 sm:w-24 h-1 bg-[var(--ubm-cream)] opacity-60" />
        <p className="font-serif italic text-base sm:text-lg md:text-xl leading-snug max-w-[28ch]">
          &ldquo;A pesquisa e a iniciação científica como instrumento de
          construção da autonomia intelectual e postura crítica.&rdquo;
        </p>
        <div className="w-20 sm:w-24 h-1 bg-[var(--ubm-cream)] opacity-60" />
        <div className="mt-6 sm:mt-10 text-[0.6rem] sm:text-[0.7rem] tracking-widest opacity-80 px-4">
          Coordenação de Pesquisa e Pós-Graduação · 2026
        </div>
      </div>
    ),
  },
];
