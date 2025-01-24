"use client"; 
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Definindo as senhas válidas
const casePasswords = process.env.NEXT_PUBLIC_VALID_KEYS
  ? process.env.NEXT_PUBLIC_VALID_KEYS.split(",") // Converte a string em um array
  : [];
  // console.log(casePasswords);


// Esquema de validação usando zod
const formSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
});
type FormData = z.infer<typeof formSchema>;

function PasswordForm({ caseSlug }: { caseSlug: string }) {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Função de submissão do formulário
  const onSubmit = (values: FormData) => {
    const { password } = values;

    // Verificar se a senha está no array de senhas válidas
    if (casePasswords.includes(password)) {
      // Redirecionar para a página do projeto com o slug
      router.push(`/projects/${caseSlug}`);
    } else {
      // Exibir uma mensagem de erro se a senha estiver incorreta
      form.setError("password", {
        type: "manual",
        message: "Password is incorrect, try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter the password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
        Access Project
        </Button>
      </form>
    </Form>
  );
}

export default PasswordForm;
