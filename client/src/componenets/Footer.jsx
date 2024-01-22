import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="'border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white">
                JO EL
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://blog-nextjs-brown-nine.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simplify Docs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/kiojoel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="JOEL's blog"
            year={new Date().getFullYear()}
          />

          <div className="flex gap-6 sm:mt-4 sm:justify-center">
            <Footer.Icon
              href="https://twitter.com/Akinsanya__Joel"
              icon={BsTwitterX}
            />
            <Footer.Icon href="https://github.com/kiojoel" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
