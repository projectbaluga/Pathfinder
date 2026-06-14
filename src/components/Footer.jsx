

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} CertHub IT Certification Resource. All rights reserved.</p>
        <p className="text-sm">
          Disclaimer: Practice questions provided are for study purposes only and are not official exam content.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
