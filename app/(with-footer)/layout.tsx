import Footer from "../component/footer";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
} 