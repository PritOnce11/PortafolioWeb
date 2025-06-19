import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField, styled } from "@mui/material";

const StyledForm = styled("form")({
  maxWidth: "500px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "2rem",
  fontFamily: "serif",
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    fontFamily: "serif",
    paddingLeft: "10px",
  },
  "& label": {
    fontWeight: 600,
    color: "#0f172a",
    fontFamily: "serif",
  },
  "& input, & textarea": {
    color: "#0f172a",
    fontFamily: "serif",
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#0f172a",
  color: "#f9f9f9",
  fontWeight: 600,
  borderRadius: "12px",
  padding: "0.75rem",
  border: "1px solid #d4af37",
  fontFamily: "serif",
  "&:hover": {
    backgroundColor: "#14b8a6",
    color: "#000",
  },
});

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const timeInput = form.current.querySelector("input[name='time']") as HTMLInputElement;
    timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensaje enviado correctamente.");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Hubo un error al enviar el mensaje.");
      });
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <StyledTextField name="name" label="Nombre" required fullWidth />
      <StyledTextField name="email" label="Correo electrónico" type="email" required fullWidth />
      <StyledTextField name="message" label="Mensaje" required multiline rows={4} fullWidth />

      <input type="hidden" name="time" />
      <input type="hidden" name="title" value="Nuevo mensaje desde el portfolio" />

      <StyledButton type="submit" fullWidth>
        ENVIAR
      </StyledButton>
    </StyledForm>
  );
};
