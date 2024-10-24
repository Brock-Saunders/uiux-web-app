import logo_white from "../assets/logo-header-white.png";

export default function Footer() {
  return (
    <div className="flex w-full bg-crimson text-white py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex justify-center">
          <img className="w-48" src={logo_white} />
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <div className="flex justify-center gap-20">
          <FooterColumn title="Home">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
          <FooterColumn title="About Us">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
          <FooterColumn title="Attorneys">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
          <FooterColumn title="Resources">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
          <FooterColumn title="FAQs">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
          <FooterColumn title="Contact">
            <p>Lorem Ipsum</p>
            <p>Dolor Sit</p>
            <p>Lorem Ipsum</p>
          </FooterColumn>
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <p className="text-center">Copyright © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col">
      <div className="font-serif text-lg mb-2">{title}</div>
      <div className="space-y-1">
        {children.map((child, index) => (
          <p key={index} className="hoverable">
            {child}
          </p>
        ))}
      </div>
    </div>
  );
}
