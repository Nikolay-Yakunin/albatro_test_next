import { Logo } from "@/src/shared/ui";
import { Navigation } from "@/src/shared/ui";

export const Header = () => {
    const links = [{ label: <Logo size="sm" color="default" />, href: "/" }, { label: "Info", href: "/info" }, { label: "Contact", href: "/contact" }, { label: <span className="text-[#FAB91F] hover:underline">Log in</span>, href: "/login" }];
    return (
        <header className="w-full place-items-center pt-[20px] md:pt-[100px] px-[20px]">
            <div className="container flex items-center justify-between mb-8 max-w-[1200px]">
                <Navigation links={links} />
            </div>
        </header>
    );
};

