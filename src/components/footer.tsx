
const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 md:mt-32 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MotionVerse. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
