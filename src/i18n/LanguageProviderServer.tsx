import { cookies } from "next/headers";
import { LANG_COOKIE, LanguageProvider } from "./LanguageContext";
import type { Language } from "./translations";

// Next.js 16 disallows reading cookies() from a layout — layouts are static
// by design. Reading the cookie in this child Server Component instead opts
// the route into dynamic rendering and lets us pass the resolved language
// down to the client LanguageProvider before the first paint.
export default async function LanguageProviderServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const getResult = cookieStore.get("translite-lang");
  const getConst = cookieStore.get(LANG_COOKIE);
  const allCookies = cookieStore.getAll();
  const saved = allCookies.find((c) => c.name === "translite-lang")?.value;
  const initialLang: Language = saved === "zh" ? "zh" : "en";

  return (
    <LanguageProvider initialLang={initialLang}>
      <div
        data-debug-get-literal={JSON.stringify(getResult)}
        data-debug-get-const={JSON.stringify(getConst)}
        data-debug-const-value={LANG_COOKIE}
        data-debug-saved={saved ?? "none"}
        data-debug-initial={initialLang}
        style={{ display: "none" }}
      />
      {children}
    </LanguageProvider>
  );
}
