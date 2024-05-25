import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-x-2 sm:gap-x-3">
      <Image
        src="/media/images/logos/swiftshift-logo-dark.png"
        alt="SwiftShift's Sail Logo"
        height={44}
        width={54}
      />
      <span className="md:hidden font-extrabold">
        SwiftShift
      </span>
    </Link>
  )
}

export default Logo
