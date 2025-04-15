const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} PharmaaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
