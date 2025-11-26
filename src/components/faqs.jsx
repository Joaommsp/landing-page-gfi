import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question:
        "O sistema exige instalação de algum programa nos computadores da prefeitura?",
      answer:
        "Não é necessário instalar nada nos computadores. O sistema funciona 100% online, acessível pelos principais navegadores como Chrome, Firefox, Edge ou Safari, oferecendo praticidade e segurança para toda a equipe.",
    },
    {
      id: "item-2",
      question:
        "O sistema oferece suporte técnico? Qual horário de atendimento?",
      answer:
        "Sim, oferecemos suporte técnico multicanal (WhatsApp, e-mail e Ticket integrado). O atendimento ocorre em horário comercial estendido.",
    },
    {
      id: "item-3",
      question: "É possível acessar o sistema por celular ou tablet?",
      answer:
        "Sim. Além do acesso web responsivo em qualquer dispositivo, o sistema conta com aplicativo próprio para smartphones e tablets, permitindo consulta de dados, aprovações e gestão em mobilidade, mesmo fora do escritório.",
    },
    {
      id: "item-4",
      question:
        "Qual sistema operacional é necessário para utilizar o sistema de gestão financeira?",
      answer:
        "O sistema funciona em qualquer computador com sistema operacional Windows 10 ou superior, que conta com os navegadores atualizados. Também é compatível com macOS e Linux, desde que os navegadores estejam atualizados.",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Confira respostas para as principais perguntas de quem está
            conhecendo ou iniciando a implementação do sistema GFI.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-zinc-950 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-zinc-900 peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Não encontrou sua dúvida? Entre em contato com nossa{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              equipe de suporte ao cliente.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
