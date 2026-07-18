const Footer = () => {
  return (
    <footer className="text-center bg-card border-border relative border-t py-6">
      <p className="text-foreground text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary">Tran Tuan Anh</span>
        {" — "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
