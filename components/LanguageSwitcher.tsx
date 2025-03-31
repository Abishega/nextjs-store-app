"use client";
import { usePathname, useRouter } from "next/navigation";

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();


  const switchLanguage = (lang: "en" | "ar") => {
    router.push(`/${lang}${pathname === "/" ? "" : pathname}`); 
  };
  

  return (
    <div className="p-4">
      <button onClick={() => switchLanguage("en")} className="mx-2 px-4 py-2 bg-gray-200 rounded">
        🇺🇸 English
      </button>
      <button onClick={() => switchLanguage("ar")} className="mx-2 px-4 py-2 bg-gray-200 rounded">
        🇸🇦 العربية
      </button>
    </div>
  );
}

export default LanguageSwitcher;