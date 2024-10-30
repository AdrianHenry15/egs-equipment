import Image from "next/image";
import React from "react";

// Logos
import HowardsonLogo from "@/public/logos/howardson-logo.png";

const PoweredBy = () => {
    return (
        <div>
            <h5>EGS Equipment is Powered By:</h5>
            <div>
                <Image src={HowardsonLogo} alt="howardson-logo" />
            </div>
        </div>
    );
};

export default PoweredBy;
