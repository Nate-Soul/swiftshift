import Image from "next/image";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="py-12 bg-secondary-500 text-light-100">
        <div className="container flex flex-wrap-reverse sm:flex-wrap lg:flex-nowrap justify-between gap-8">
            <div className="footer-col-1 flex flex-col gap-y-6 basis-full lg:basis-2/6">
                <div className="flex flex-col gap-y-0">
                    <Image src="/media/images/logos/swiftshift-logo-dark.png" alt="SwiftShift's Sailboat Logo" height={44} width={54} />
                    <span className="font-extrabold text-2xl text-white">SwiftShift</span>
                </div>
                <p>
                    SwiftShift offers premier packing and relocation services, prioritizing efficiency, safety, and personalized solutions for seamless transitions to new destinations.
                </p>
                <div className="flex items-center gap-x-2">
                    <div className="inline-flex justify-center items-center h-10 w-10 rounded-lg bg-white text-black">
                        <span className="text-2xl bi-instagram"></span>
                    </div>
                    <div className="inline-flex justify-center items-center h-10 w-10 rounded-lg bg-white text-black">
                        <span className="text-2xl bi-facebook"></span>
                    </div>
                    <div className="inline-flex justify-center items-center h-10 w-10 rounded-lg bg-white text-black">
                        <span className="text-2xl bi-youtube"></span>
                    </div>
                    <div className="inline-flex justify-center items-center h-10 w-10 rounded-lg bg-white text-black">
                        <span className="text-2xl bi-twitter"></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap-reverse sm:flex-nowrap gap-8 pt-0 lg:pt-[44px] basis-full lg:basis-4/6">
                <div className="footer-col-2 flex flex-col gap-y-6 basis-full sm:basis-1/2">
                    <h6 className="text-xl font-extrabold">Contact Us</h6>
                    <div className="flex flex-col gap-y-4">
                        <ul className="flex flex-col gap-y-4">
                            <li><span>+234 000 657 970</span></li>
                            <li><span>info@swiftshift.com</span></li>
                        </ul>
                        <address>
                            Plot 35, twni Strt. Port Harcourt, Nigeria
                        </address>
                    </div>
                </div>
                <div className="flex gap-x-8 justify-between basis-full sm:basis-1/2">
                    <div className="footer-col-3 flex flex-col gap-y-6">
                        <h6 className="text-xl font-extrabold">Company</h6>
                        <ul className="flex flex-col gap-y-4">
                            <li>
                                <Link href="/" className="hover:text-primary-500">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary-500">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary-500">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary-500">Get Quote</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col-4 flex flex-col gap-y-6">
                        <h6 className="text-xl font-extrabold">Quick Links</h6>
                        <ul className="flex flex-col gap-y-4">
                            <li>
                                <Link href="/" className="hover:text-primary-500">Company</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500">Support</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default MainFooter
