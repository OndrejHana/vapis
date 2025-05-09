import AppLogoIcon from "./app-logo-icon";

export default function AppLogo() {
    return (
        <>
            <div className="border-sidebar-border/70 dark:border-sidebar-border flex aspect-square size-8 items-center justify-center rounded-md border">
                <AppLogoIcon className="bg-background text-sidebar-primary-foreground dark:text-sidebar-primary-foreground size-5 fill-current" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">
                    Vapis
                </span>
            </div>
        </>
    );
}
