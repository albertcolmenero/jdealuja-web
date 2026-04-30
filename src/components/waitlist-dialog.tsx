"use client";

import { useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  trigger: ReactNode;
  title?: string;
  description?: string;
};

export function WaitlistDialog({
  trigger,
  title = "Únete a la lista de espera",
  description = "Déjame tus datos y te avisaré en cuanto haya un nuevo taller o retiro presencial.",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const subject = encodeURIComponent("Lista de espera - Talleres y Retiros");
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    // Placeholder integration — opens the user's mail client until a backend is wired up.
    window.location.href = `mailto:hola@jotadealuja.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setSubmitted(false);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#faf8f3]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#3a362f]">
            {title}
          </DialogTitle>
          <DialogDescription className="text-[#3a362f]/70">
            {description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center text-[#3a362f]">
            <p className="font-serif text-xl mb-2">¡Gracias!</p>
            <p className="text-[#3a362f]/70">
              Te he añadido a la lista. Nos vemos pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" name="nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensaje">Cuéntame algo (opcional)</Label>
              <Textarea id="mensaje" name="mensaje" rows={3} />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-[#6b9cdd] hover:bg-[#5a8ac6] text-white rounded-full px-6"
              >
                Apuntarme a la lista
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
