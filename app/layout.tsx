import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    title: "Ansiedade Decifrada | Cainan Bastos",
    description: "Aula ao vivo com Cainan Bastos para entender o pensamento por trás da ansiedade e praticar um primeiro passo com mais clareza.",
    openGraph: {
      title: "Ansiedade Decifrada | Cainan Bastos",
      description: "Sua ansiedade aparece do nada. Mas ela não vem do nada.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Ansiedade Decifrada — aula ao vivo com Cainan Bastos" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ansiedade Decifrada | Cainan Bastos",
      description: "Sua ansiedade aparece do nada. Mas ela não vem do nada.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
