

const Footer = () => {
  return (
    <footer className="bg-white/80 border-t border-slate-100 text-slate-500 py-8 mt-auto shadow-inner text-sm font-medium">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-slate-700 font-semibold">&copy; {new Date().getFullYear()} ProveIT IT Certification Resource. All rights reserved.</p>
        <p className="text-slate-400 text-xs">
          Disclaimer: Practice questions provided are for study purposes only and are not official exam content.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
