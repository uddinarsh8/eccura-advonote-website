import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-6 py-5 shadow">

                <button
                    onClick={() => navigate(-1)}
                    className="
                        w-16 h-16
                        bg-white
                        rounded-2xl
                        shadow-md
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ArrowLeft size={34} />

                </button>

            </div>

            <div className="max-w-4xl mx-auto px-5 py-10">

                {/* Title */}

                <div className="text-center mb-12">

                    <h1 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#1F2937]
                    ">

                        Privacy Policy

                    </h1>

                    <div className="
                        w-44
                        h-[2px]
                        bg-gray-300
                        mx-auto
                        mt-6
                    " />

                </div>

                <div className="
                    space-y-8
                    text-[#333]
                    text-lg
                    md:text-2xl
                    leading-relaxed
                ">

                    <p>
                        The terms "We" / "Us" / "Our" / "Company"
                        individually and collectively refer to
                        <strong> Eccura Technologies Pvt. Ltd.</strong>
                        and the terms "You" / "Your" / "Yourself"
                        refer to the users.
                    </p>

                    <p>
                        This Privacy Policy is an electronic record
                        in the form of an electronic contract formed
                        under the Information Technology Act, 2000.
                    </p>

                    <p>
                        This Privacy Policy is a legally binding
                        document between you and
                        <strong> Eccura Technologies Pvt. Ltd.</strong>.
                        By using this website or application, you
                        consent to the collection, processing,
                        storage and transfer of your information.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        USER INFORMATION

                    </h2>

                    <p>
                        To avail certain services on our websites,
                        users may be required to provide personal
                        information such as name, email address,
                        mobile number, address and other details
                        necessary for registration.
                    </p>

                    <p>
                        All required information is service dependent
                        and may be used to maintain, protect and
                        improve our services.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        CONTACT ACCESS AND PERMISSIONS

                    </h2>

                    <p>
                        Our mobile application may request access to
                        your device contacts to enable features such
                        as quickly adding clients within the app.
                    </p>

                    <ul className="list-disc pl-8 space-y-3">

                        <li>
                            We may access contact names and
                            phone numbers from your device.
                        </li>

                        <li>
                            Only contacts selected by you
                            may be uploaded securely.
                        </li>

                        <li>
                            We do not access or upload your
                            complete contact list without
                            your permission.
                        </li>

                        <li>
                            We never sell or rent your
                            contact information.
                        </li>

                    </ul>

                    <p>
                        Contact information, if transmitted,
                        is encrypted using secure protocols.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        COOKIES

                    </h2>

                    <p>
                        To improve responsiveness of our sites,
                        we may use cookies to assign each visitor
                        a unique identification number and understand
                        user interests.
                    </p>

                    <p>
                        Cookies cannot read data from your hard
                        drive. Our advertisers may also assign
                        their own cookies which we do not control.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        LINKS TO OTHER SITES

                    </h2>

                    <p>
                        Our policy applies only to our own website.
                        We may provide links to external websites,
                        and we are not responsible for their
                        privacy practices.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        INFORMATION SHARING

                    </h2>

                    <p>
                        Sensitive personal information may be
                        disclosed when required by law,
                        governmental authorities or for
                        prevention of fraud and cyber incidents.
                    </p>

                    <p>
                        We may share information with group
                        companies and employees for processing
                        purposes under strict confidentiality.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        INFORMATION SECURITY

                    </h2>

                    <p>
                        We take appropriate security measures
                        to protect against unauthorized access,
                        alteration, disclosure or destruction
                        of data.
                    </p>

                    <p>
                        However, internet transmission cannot be
                        guaranteed to be completely secure.
                    </p>

                    <h2 className="font-bold text-3xl md:text-4xl">

                        GRIEVANCE REDRESSAL

                    </h2>

                    <p>
                        Any complaints regarding content,
                        abuse or privacy concerns shall be
                        addressed to the Grievance Officer.
                    </p>

                    <div className="font-semibold">

                        <p>
                            Mr. Anil Gupta (Grievance Officer)
                        </p>

                        <p>
                            Eccura Technologies Pvt. Ltd.
                        </p>

                        <p>
                            593, Karamchari Nagar
                        </p>

                        <p>
                            Post- Izzatnagar
                        </p>

                        <p>
                            Teh. & Distt- Bareilly - 243122, U.P.
                        </p>

                        <p>
                            Email: admin@eccuratech.com
                        </p>

                        <p>
                            Ph: 6396675741
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PrivacyPolicy;