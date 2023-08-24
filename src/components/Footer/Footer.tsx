import {FooterTop} from "./FooterTop";
import {FooterBottom} from "./FooterBottom";

export const Footer = () => {
    return (
        <footer className={"pb-4 xs:pb-8 sm:mt-[200px] mt-[70px]"}>
          <div className={"container"}>
            <FooterTop/>
            <FooterBottom/>
          </div>
        </footer>
    )
}