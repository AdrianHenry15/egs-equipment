import Splash from "@/components/splash";
import FieldPic from "@/public/baseball-field.jpg";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact-us"
                link_title_1="Contact Us"
                link2="/estimate"
                link_title_2="Estimate"
                img={FieldPic}
                title="Eckert Equipment"
            />
        </div>
    );
}
