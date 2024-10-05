import Splash from "@/components/splash";
<<<<<<< HEAD
import FieldPic from "@/public/machine-2.jpg";
import ProductRow from "../components/products/product-row";
=======
import FieldPic from "@/public/green-machine.jpg";
>>>>>>> f4a3504594482eb9ec2fdb985de0622071669f08

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
            <ProductRow category="Synthetic" />
        </div>
    );
}
