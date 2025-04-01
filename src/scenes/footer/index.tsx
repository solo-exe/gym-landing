import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-primary-100">
      <div className="w-5/6 mx-auto md:flex gap-16 py-16">
        {/* LIST ITEM 1 */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="mt-5" src={Logo} alt="Logo" />
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ea
            excepturi dolorem reprehenderit quis magni, optio, cupiditate eius tempore
            soluta ipsam nostrum consequatur tempora officiis ipsum quod quaerat inventore
            recusandae.
          </p>
          <p className="mt-5">© Evogym All Rights Reserved.</p>
        </div>

        {/* LIST ITEM 2 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className="font-bold">Links</h3>
          <ul className="mt-5">
            <li className="my-5">Lorem, ipsum dolor.</li>
            <li className="my-5">Lorem ipsum dolor sit.</li>
            <li className="my-5">Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        {/* LIST ITEM 3 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className="font-bold mb-5">Contact Us</h3>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="mt-2">(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
