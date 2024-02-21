const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full px-20">
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;