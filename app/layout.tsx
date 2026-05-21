import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "محمد العنيني | aloniniyb",
  description: "الصفحة الرسمية للمؤثر السعودي محمد العنيني صانع محتوى ومختص بعروض ينبع الحصرية.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic">{children}</body>
    </html>
  );
}

