"use client";

import { MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const title = "Contact Form with Map";

export default function ContactForm() {
  return (
    <section className="w-full">
      <div className="container w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Entre em Contato Conosco</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Entre em contato conosco e descubra como podemos ajudar sua
            prefeitura a alcançar excelência na gestão financeira. Sinta-se à
            vontade para solicitar uma proposta comercial ou esclarecer dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-6 lg:p-8 dark:bg-zinc-950">
            <h3 className="mb-6 text-2xl font-semibold">Envie uma Mensagem</h3>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu nome</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Endereço de Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+55 (11) 99999-9999"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Selecione um departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Vendas</SelectItem>
                      <SelectItem value="support">Suporte</SelectItem>
                      <SelectItem value="billing">Faturamento</SelectItem>
                      <SelectItem value="general">Consulta Geral</SelectItem>
                      <SelectItem value="not_specified">
                        Não especificado
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre sua dúvida..."
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.02454029033265!2d-38.21604231610258!3d-9.40416344335614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70930bc7956fe47%3A0xb9421e86f9ad0533!2sAv.%20Get%C3%BAlio%20Vargas%2C%20421%20-%20Centro%2C%20Paulo%20Afonso%20-%20BA%2C%2048601-260!5e0!3m2!1sen!2sbr!4v1764184693413!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location map"
                />
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 dark:bg-zinc-950">
              <h3 className="mb-6 text-xl font-semibold">
                Informação de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Escritório</p>
                    <p className="text-muted-foreground text-sm">
                      Av. Getúlio Vargas, 421
                      <br />
                      Centro, Paulo Afonso - BA - 48601-260
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone (WhatsApp)</p>
                    <p className="text-muted-foreground text-sm">
                      (75) 98279-9296
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      comerciar@consultoriagfi.com.br
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-6 dark:bg-zinc-950">
              <h3 className="mb-4 text-xl font-semibold">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda - Sexta</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="font-medium">Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
