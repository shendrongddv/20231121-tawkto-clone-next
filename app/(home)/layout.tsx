import Footer from "@/components/footer/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
