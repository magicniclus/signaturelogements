const Button = ({
  value,
  className,
  href,
}: {
  value: string;
  className: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={`p-5 rounded-full border border-white flex justify-center items-center ${className}`}
    >
      {value || "En savoir plus"}
    </a>
  );
};

export default Button;
