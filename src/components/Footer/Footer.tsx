import {FooterTop} from "@/components/Footer/FooterTop";
import {FooterBottom} from "@/components/Footer/FooterBottom";

const Footer = () => {
    return (
        <footer className={"pb-4 xs:pb-8"}>
          <div className={"container"}>
            <FooterTop/>
            <FooterBottom/>
          </div>
        </footer>
    )
}

module.exports = {
    Footer
}